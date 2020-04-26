import React , {useState, useEffect, useContext} from 'react';
import {ActivityIndicator, ScrollView,View,Text, FlatList,  StyleSheet} from 'react-native';
import NavigationStateContext from '../context/NavigationStateContext';
import { Input, Button } from 'react-native-elements'
import HiluxFormInput from '../components/HiluxFormInput';
import { Formik } from 'formik';
import { Pagination } from 'react-native-snap-carousel';
import { onChange } from 'react-native-reanimated';
import RNPickerSelect from 'react-native-picker-select';
import DynamicInput from '../screens/DynamicInput';
import HiluxFormRadio from '../components/HiluxFormRadio';
import {firstDynamicBlock, midDynamicBlock, staticBlock} from '../components/DynamicFormWrapper';

const KEYS_TO_FILTERS = ['datablock.product_name', 'datablock.supplier'];


function addCall(bName, jsonData, setJsonData ){    
  alert(`Adding ${bName}.`);
  console.log("add ", bName ," to  - ",jsonData)
}
function removeCall(bName,jsonData, setJsonData){  
  alert(`Removing ${bName}.`);
  console.log("remove", bName ," from  - ",jsonData)
}


function initialFormView(){
  return (
    <View>
      <Text>initial Pass</Text>
    </View>
  );
}

function dynamicMultiGroupView ( componentBlock, componentName, setCompStacks, inputJSON, setInputJSON) {
  
  return(
    firstDynamicBlock(componentBlock, componentName, addCall, removeCall,inputJSON, setInputJSON)
  );
}

function staticSingleGroupView (componentBlock, componentName, ) {
  return(
    staticBlock(componentBlock, componentName )

  );
}


function addDynamicBlock(compStacks, setCompStacks, stackID){
  /*
    When the Add button is pressed, send the stack ID back here,
    find the "row" which it refers to
    duplicate the row as "rowx"_1.. to n with all child fields named accordingly.

  */



}


function mergeFormData( formikChangeHandler, 
                        inputJSON, setInputJSON,
                        cachedData,                        
                        compStacks,setCompStacks,
                        ){

  /*
    - for each element in the fieldOrder set, split the data into multipleGroups (dynamic) and singleGroups(static)
    --  for each multipleGroup wrap in a View with a central dynamic '+'  header strip, all except the 
        first should also get a dynamic '-' button to remove field blocks 
    -- for each singleGroup wrap in a normalView
    -- whole thing wrapped in a view should be injected into the main Fomik Body.
  */

    console.log("input Json - ", inputJSON)
      
    let formCore = [];    
    allFields = inputJSON.fields;
    allGroups = inputJSON.fieldOrder;

    
    //(1) Parse the fieldOrder (basically the "rows")
    for (let groupName = 0; groupName<allGroups.length ; groupName++){
      let componentStack = [];
      let multipleBlock = false;
          
      let fieldNamesSet = allGroups[groupName].rowFields;
      for (let fieldCounter=0; fieldCounter<fieldNamesSet.length; fieldCounter++){            
        
          //(2) Check if these are going into a multicomponent block or not            
          if ('allowMultiple' in allGroups[groupName]){              
              multipleBlock = true;
              var fieldJSON = allFields.filter(obj => { return obj.fieldID == fieldNamesSet[fieldCounter].fieldID })              
              //console.log( "Adding to multi: ", allGroups[groupName].row, " - id: ", fieldNamesSet[fieldCounter].fieldID , " label: ", fieldJSON[0].fieldName.en, " type: ", fieldJSON[0].fieldType )
              // (3a) call the formik element generator above to return a an appropriate component and add it to the component stack (track that this is a dynamic multiple field)
              let currComponent = formikElementGenerator(fieldJSON, cachedData, null );
              if (currComponent != null) {                
                componentStack = componentStack.concat([currComponent]);
              } else {
                //console.log( "skipping from multi: ", allGroups[groupName].row, " - id: ", fieldNamesSet[fieldCounter].fieldID , " type: ", fieldJSON[0].fieldType )  
              }
              
          } else {
              multipleBlock = false;
              // (3a) call the formik element generator above to return a an appropriate component and add it to the component stack (track that this is a single field)
              var fieldJSON = allFields.filter(obj => { return obj.fieldID == fieldNamesSet[fieldCounter].fieldID })                            
              //console.log( "Adding to single: ", allGroups[groupName].row, " - id: ", fieldNamesSet[fieldCounter].fieldID , " label: ", fieldJSON[0].fieldName.en , " type: ", fieldJSON[0].fieldType )
              let currComponent = formikElementGenerator(fieldJSON, cachedData, null );
              if (currComponent != null) {                
                componentStack = componentStack.concat([currComponent]);                
              } else {
                //console.log( "skipping from single: ", allGroups[groupName].row, " - id: ", fieldNamesSet[fieldCounter].fieldID , " type: ", fieldJSON[0].fieldType )  
              }
          }
          
      }

      if (multipleBlock){                
        let updatedStack = compStacks;
        updatedStack = updatedStack.push({dyn:true, stack:formCore});
        setCompStacks(updatedStack);
        console.log("DynamicComponent stack - core length: ", formCore.length);
        
        formCore = formCore.concat([dynamicMultiGroupView(componentStack, allGroups[groupName].row, inputJSON, setInputJSON)]);
      } else {        
        
        console.log("StaticComponent stack - core length: ", formCore.length);
        let updatedStack = compStacks;
        updatedStack = updatedStack.push({dyn:false, stack:formCore});
        setCompStacks(updatedStack);
        formCore = formCore.concat([staticSingleGroupView(componentStack, allGroups[groupName].row)]);
      }
  
  }  
  //console.log("returning final formCore: ", formCore.length);
  console.log("mainComponentStack finally looks like : ", compStacks);

  return formCore;
}


async function consolidateForm(compStacks, setCompStacks,jsonData, setJsonData, remoteParameters, setRemoteParameters ) {
  /*
  call API to get the form
  In theory, extract all "source = api"  elements (sample JSON is probably just random-gen)
    - for now I'm using fieldType=dropdown as my filter but modify as required  
  For each of the above, get all the value fields and store them as separate KV pairs (key = fieldID)
  *we'll use these when generating the equivalent HiluxFormik component
    - include an remoteUpdated field in the object above
    - initialize remoteUpdated to false 
    - ensure all remoteUpdated are true, if not return false, trigger an invalid form display
    
    >> Call the mergeFormData block above
        Feed each component to the FormikFormGenerator, which in turn calls FormikElementGenerator to sub in 
        Hilux components for each - set the isLoaded flag only when everything is complete
  */
  try {

    let formResult = await callFormAPI();    

    //console.log(formResult);
    
    if (formResult.status =='success') {
      
      try {        
        resultJSON = formResult.val;
        setJsonData(resultJSON);

        console.log("in consolidated - updating JSON - ", resultJSON)

        //console.log("parsing form details ", resultJSON);                
        let remoteSources = resultJSON.fields.filter(obj => { return obj.fieldType == "dropdown" })              
        //console.log("\n\nsourcing keys - ", remoteSources);  
        //Use each key in remoteSources data to get appropriate dropdown values
        let remoteDataCache = {};
        for(let remoteDataCtr= 0; remoteDataCtr<remoteSources.length; remoteDataCtr++) {                             
          let keyID = remoteSources[remoteDataCtr].fieldID;
          let remoteUpdated = false;

          try {
            let currRemoteFieldDataResult = await callDropDownAPI(keyID);                                 
            if (currRemoteFieldDataResult.status =='success') {
              currFieldValues = currRemoteFieldDataResult.val;
              remoteUpdated=true;
              //console.log(keyID, " has vals:", currFieldValues)
            
            } else {
              console.log('Error updating remote field values - ', currRemoteFieldDataResult.value);
            }


          } catch(error) {
            console.error("Error updating remote field : " , keyID, " - " , error);
          }          
          remoteDataCache[keyID] = currFieldValues;
          //remoteDataCache.push({'key':keyID, "remoteUpdated":remoteUpdated, "val":currFieldValues});          
        }

        //console.log("Remote Cache - ", remoteDataCache);
        //console.log("returning consolidated ");
        setRemoteParameters(remoteDataCache)




        let consolidated = mergeFormData(null, jsonData, setJsonData,  remoteParameters, compStacks,setCompStacks);
        
        return ( 
           {consolidated}
          );

      } catch (error) {
        console.error("Form JSON parsing error : ",error);
      }

    } else {
      console.log('Error retrieving form JSON from API - ', formResult.value);
    }

  } catch (error) {
    console.error("Form consolidation error: ",error);
  }
} 




async function callFormAPI( ) {
  // indicate that we're about to start loading the data so the app can show the loading spinner
  

  //friggin' react - you need to have FormData objects for your  parameters apparently (if using Fetch)
  let formdata = new FormData();
  formdata.append('formname','form1');
  try {
    let response = await fetch('https://harrierlabs.com/anish/dummyformjson.php?', {
      method: 'POST',
      headers: {          
        'Content-Type': 'multipart/form-data',
      },
      body: formdata,
    });
    
    let jsonResult = await response.json();
    return (jsonResult);
    //console.log('FormApiResponse: ',  JSON.stringify(jsonResult)  );
    
  
  } catch (error) {
    console.error(error);
   
  }
}

async function callDropDownAPI( fieldID ) {    
  //friggin' react - you need to have FormData objects for your  parameters apparently (if using Fetch)
  let formdata = new FormData();
  formdata.append('ddown',fieldID);

  try {
    let response = await fetch('https://harrierlabs.com/anish/dummydropdown.php?', {
      method: 'POST',
      headers: {          
        'Content-Type': 'multipart/form-data',
      },
      body: formdata,
    });
    
    let jsonResult = await response.json();
    return(jsonResult);
  } catch (error) {
    console.error(error);    
  }
}


filter_data ={ 'datablock' : [{
  "_id": {
    "$oid": "5968dd23fc13ae04d9000001"
  },
  "product_name": "sildenafil citrate",
  "supplier": "Wisozk Inc",
  "quantity": 261,
  "unit_cost": "$10.47"
}, {
  "_id": {
    "$oid": "5968dd23fc13ae04d9000002"
  },
  "product_name": "Mountain Juniperus ashei",
  "supplier": "Keebler-Hilpert",
  "quantity": 292,
  "unit_cost": "$8.74"
}, {
  "_id": {
    "$oid": "5968dd23fc13ae04d9000003"
  },
  "product_name": "Dextromathorphan HBr",
  "supplier": "Schmitt-Weissnat",
  "quantity": 211,
  "unit_cost": "$20.53"
}]


}

const radioVals = ["opt1", "opt2", "opt3"];

var jsonData = {
  "type": "linearlayout",

  "fields": [
    {
      "fieldID": "secondPartyNameArabic",
      "fieldType": "text",
      "required": "true",
      "fieldName": {
        "ar": "الاسم العربي للطرف الثاني",
        "en": "Arabic Name for Second Party (ar)"
      },
      "placeholder": {
        "ar": "",
        "en": ""
      },
      "errorMsg": {
        "ar": "",
        "en": ""
      },
      "auxInfo": {
        "acceptedFileTypes": "",
        "minLength": "",
        "maxLength": "",
        "type": "Date",
        "source": "api",
        "sourceDetails": "it/getAllEmployees"
      }
    },
    {
      "fieldID": "secondPartyNameEnglish",
      "fieldType": "text",
      "required": "true",
      "fieldName": {
        "ar": "الاسم الانجليزي للطرف الثاني",
        "en": "Name in English for Second Party"
      },
      "placeholder": {
        "ar": "",
        "en": ""
      },
      "errorMsg": {
        "ar": "",
        "en": ""
      },
      "auxInfo": {
        "acceptedFileTypes": "",
        "minLength": "",
        "maxLength": "",
        "type": "Date",
        "source": "api",
        "sourceDetails": "it/getAllEmployees"
      }
    },

]
}


function formikElementGenerator( fieldJSON, cachedFields, handleChange){
  // parse an individual field from the servers JSON and return a Formik ready Hilux component
  
  //console.log("adding - ", fieldJSON[0]);  
  let hiluxComponent;   

  inputType = 'default';
  if (fieldJSON[0].fieldType == "number") {
    inputType = 'numeric';
  } else if (fieldJSON[0].fieldType == "email") {
    inputType = 'email-address';
  } 

  if ( (fieldJSON[0].fieldType == "text") || (fieldJSON[0].fieldType == "number") || (fieldJSON[0].fieldType == "textarea")  ) {    
    hiluxComponent = (
      <HiluxFormInput
        name= {fieldJSON[0].fieldName.en}
        keyboardType = {inputType}
        onChangeText={null}
        id = {fieldJSON[0].fieldID}
        key = {fieldJSON[0].fieldID}
      />  
    )
    
  } else if (fieldJSON[0].fieldType == "dropdown")  {
    //console.log("Dropdown - ", fieldJSON[0].fieldID, "cache is : ", cachedFields[fieldJSON[0].fieldID] );
    //<HiluxFormRadio name={fieldJSON[0].fieldID} id={fieldJSON[0].fieldID} optVals={cachedFields[fieldJSON[0].fieldID]}  onValueChange={handleChange(fieldJSON[0].fieldID)} />
    hiluxComponent = (    
      <RNPickerSelect
      name={fieldJSON[0].fieldID}
      id={fieldJSON[0].fieldID}      
      items={cachedFields[fieldJSON[0].fieldID]}
      onValueChange={() => {console.log("dropdown change")}}
    />

    )
  } else if (fieldJSON[0].fieldType == "radio")  {
    hiluxComponent = null;
  } else if (fieldJSON[0].fieldType == "datetime")  {
    hiluxComponent = null;
  } else if (fieldJSON[0].fieldType == "fileupload")  {
    hiluxComponent = null;
  }  else if (fieldJSON[0].fieldType == "cameracap")  {
    hiluxComponent = null;
  } 

  return hiluxComponent;
}





function renderHiluxForm (inputJSON) {

// prepare a formik wrapper around them and we can inject omar's json components into that 
    return (
    <Formik  initialValues={{}} onSubmit={values => console.log("console", values)} onChange={values => console.log(values)} >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
            {formikElementGenerator(jsonData, handleChange)}
            <Button onPress={handleSubmit} title="Submit" />
        </View>
        
        )}
    </Formik>
    );
}    

/*

*/




export default function HiluxFormFactory (inputJSON, formName) {

  
  // state tracker to ensure we have the form AND all the dropdown fields (or any otherAJRE server side data )
  const [isLoading, setIsLoading] = useState(true); // only used for progress spinner display
  const [formPrepInProcess, setFormPrepInProcess] = useState(false); // avoid any unnecessary calls while the prepping the form
  
  const [jsonData, setJsonData] = useState(null); //jsonData holds AJRE form data - BUT - we can modify/inject data into the fieldOrder (for Dynamic-Multiple Fields)
  const [remoteParameters, setRemoteParameters] = useState(null); //remoteParameters holds the field values (dropdown values etc) - likely only updated on the first componentLoad
  const [formData, setFormData] = useState(initialFormView()); //formData will be the final formik version of the form - generated from jsonData
  const [consolidatedComponentStacks, setConsolidatedComponentStacks] = useState([{}]);  

  // state tracker to display a Suitable message so the user knows what we're waiting for 
  
  let initialLoadString = "Please hold, loading "+ formName;
  //console.log(initialLoadString)
  const [loadingStr, setLoadingStr] = useState( initialLoadString );



   async function loadServerForm(){
    setFormPrepInProcess(true);
    let consolidated = await consolidateForm(consolidatedComponentStacks, setConsolidatedComponentStacks, jsonData, setJsonData, remoteParameters, setRemoteParameters);
    consolidated = consolidated["consolidated"]
    //console.log("final - ", consolidated);
    setFormData(consolidated);    
    setIsLoading(false);        
    setFormPrepInProcess(false);
   }

  function formView() {

    return (
      <Formik  initialValues={{}} onSubmit={values => console.log("console", values)} onChange={values => console.log(values)} >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
          <HiluxFormInput
            name="Name!"            
            onChangeText={handleChange('name')}                    
            id = 'name'            
          />  
  
          <DynamicInput fieldName="nationality" onChangeText={handleChange}/>
          
          
  
          <RNPickerSelect
            name='sport'
            id='sport'
            onValueChange={handleChange('sport')}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
          />
  
          <View>
            <HiluxFormRadio name='radioopt' id='radioopt' optVals={radioVals}  onValueChange={handleChange('radioopt')} />
          </View>  
          
  
          <Button onPress={handleSubmit} title="Submit" />
      </View>
  
  
      )}
      </Formik>
  
    );

  }

  function loadingView() {
    
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center', alignContent:'center'}}>
        <ActivityIndicator size="large" color="purple" />
          <Text>{loadingStr}</Text>
      </View>
    );
  }

  
  if (isLoading) {
    
    if (!formPrepInProcess) {
      console.log("loading server form");    
      loadServerForm();
    }
     
  }
  

  //console.log("first pass formdata is - ", formData);
  return(
    <View style={{margin:20}}>
      <ScrollView>
        {(isLoading? loadingView(): formData )     }
      </ScrollView>
    </View>
     
  );
  
};