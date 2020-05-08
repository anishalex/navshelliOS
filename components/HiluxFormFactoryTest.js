import React , {useState, useContext, useEffect} from 'react';
import {SafeAreaView, ActivityIndicator, ScrollView,View,Text, FlatList,  StyleSheet} from 'react-native';

import { Input, Button } from 'react-native-elements'
import HiluxFormInput from '../components/HiluxFormInput';
import { Formik } from 'formik';

import RNPickerSelect from 'react-native-picker-select';
import DynamicInput from '../screens/DynamicInput';
import HiluxFormRadio from '../components/HiluxFormRadio';
import {firstDynamicBlock, midDynamicBlock, staticBlock} from '../components/DynamicFormWrapper';

const KEYS_TO_FILTERS = ['datablock.product_name', 'datablock.supplier'];





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





export default function HiluxFormFactoryTest (inputJSON, formName) {

  
  //////////////////* STATES AND SETTERS */////////////////////
  // state tracker to ensure we have the form AND all the dropdown fields (or any otherAJRE server side data )

  let jsonData = [{}];
  let formContentValues = [{}];


  const [isLoading, setIsLoading] = useState(true); // only used for progress spinner display
  const [formPrepInProcess, setFormPrepInProcess] = useState(false); // avoid any unnecessary calls while the prepping the form  
  const [formData, setFormData] = useState(initialFormView()); //pending, success, fail (based on api returns)
  const [consolidatedComponentStacks, setConsolidatedComponentStacks] = useState([{}]);
  // state tracker to display a Suitable message so the user knows what we're waiting for 
  let initialLoadString = "Please hold, loading "+ formName;
  //console.log(initialLoadString)
  const [loadingStr, setLoadingStr] = useState( initialLoadString );

  //////////////////* FORM FACTORY INTERNAL METHODS */////////////////////


  
  function maxInstanceInJSON(groupName) {
    
    console.log("calling max instance" )
    
    nameSplitArray = groupName.split('_');   
    parentGroupName = nameSplitArray[0];
    indexList = [];

    currIndex = 0
    
    console.log("curr index is ", currIndex , " looking for ", parentGroupName )

    for(let i=0; i<jsonData.fieldOrder.length; i++ ) {
      console.log("Checking if - ", jsonData.fieldOrder[i].row , " contains ", parentGroupName)
      if (jsonData.fieldOrder[i].row.includes(parentGroupName)) {
        let fullGroupName = jsonData.fieldOrder[i].row
        let nameSplit = fullGroupName.split('_')
        if (nameSplit.length == 2) {
          indexList.push(parseInt(nameSplit[1]));
        }        
      }        
    }

    max = Math.max( ...indexList );
    
    console.log("\nIndexList is ", indexList)
    console.log("\nMax  is ", max)
    return max;
  }

  function addInstanceToJSON(groupName) {

    /*
      1) Find the group which the user requested        
       extract the current instance index of the group
       create a copy of the group and name such that the it is incrementally one ahed of the existing group       
    */      
    currMaxIndex = maxInstanceInJSON(groupName);
    console.log("Target Group name is :", groupName)
    nameSplitArray = groupName.split('_');    
    if (nameSplitArray.length == 2)
    {
      parentGroupName = nameSplitArray[0];
      instanceIndex = parseInt(nameSplitArray[1]);
      instanceIndex = currMaxIndex+1 
      let newRow = `${parentGroupName}_${instanceIndex}`
      let newSuffix = `_${newRow}`;
      //console.log("\n\nTarget JSON field order \n",jsonData.fieldOrder)

      let targetGroupIndex = jsonData.fieldOrder.findIndex(obj => { return obj.row == groupName });        
      let targetGroup = jsonData.fieldOrder.filter(obj => { return obj.row == groupName })[0];  
      newGroupToInject = JSON.parse(JSON.stringify(targetGroup));
      //console.log("\nTarget Group index is  ", targetGroupIndex ," and length is - ", targetGroup.rowFields.length);  
      
      
      newGroupToInject.row = newRow
      for (let subFieldCounter=0; subFieldCounter<newGroupToInject.rowFields.length; subFieldCounter++) {
        //console.log("\nTarget subfield ID is ",newGroupToInject.rowFields[subFieldCounter].fieldID)
        let newFieldName = `${newGroupToInject.rowFields[subFieldCounter].fieldID.split('_')[0]}${newSuffix}` 
        //console.log("\nNew subfield ID is ",newFieldName)
        //overwrite the newGroupToInject ID 
        newGroupToInject.rowFields[subFieldCounter].fieldID = newFieldName
      }
      
      // now jam the target Group right after the original group index (so, at targetGroupIndex+1)
      jsonData.fieldOrder.splice(targetGroupIndex+1,0, newGroupToInject)
      
      //console.log("full JSON is : ", JSON.stringify(jsonData) );
      
    } else {

    }

 
  }

  function addCall(bName){    
    //alert(`Adding ${bName}.`);
    addInstanceToJSON(bName);
    let finalFormCore = localFormGen();
    //console.log("final form - ", finalFormCore);
    setFormData(finalFormCore)
  }
  function removeCall(bName){  
    alert(`Removing ${bName}.`);
  }



  function formikElementGenerator( fieldJSON, customizedFieldID, cachedFields, handleChange){
    // parse an individual field from the servers JSON and return a Formik ready Hilux component
    
    
    let hiluxComponent;   
  
    inputType = 'default';
    if (fieldJSON[0].fieldType == "number") {
      inputType = 'numeric';
    } else if (fieldJSON[0].fieldType == "email") {
      inputType = 'email-address';
    } 
  
    if ( (fieldJSON[0].fieldType == "text") || (fieldJSON[0].fieldType == "number") || (fieldJSON[0].fieldType == "textarea")  ) {    
      //console.log("adding change handler for - ", customizedFieldID);  
      hiluxComponent = (
        <HiluxFormInput
          name= {fieldJSON[0].fieldName.en}
          keyboardType = {inputType}
          onChangeText={handleChange(customizedFieldID)}
          id = {customizedFieldID}
          key = {customizedFieldID}
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
        onValueChange={handleChange}
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
  
  



  async function getFormJSON(){
    /*
    call API to get the form
    */
    try {

      let formResult = await callFormAPI();    

      //console.log(formResult);
      
      if (formResult.status =='success') {
        
        try {        
          jsonData = formResult.val;        
          return true;

        } catch (error) {
          console.error("parsing error extracting value form server form JSON : ",error);
          return false;
        }

      } else {
        console.log('Error retrieving form JSON from API - ', formResult.value);
        return false;
      }

    } catch (error) {
      console.error("Exception calling remote Form API: ",error);
      return false;
    }


  }


  async function getFormStaticValues(){
    /*
    call API to get dropdown values (or anything else that has remote data)
    */

    let remoteSources = jsonData.fields.filter(obj => { return obj.fieldType == "dropdown" })              
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
          return false;
        }


      } catch(error) {
        console.error("Error updating remote field : " , keyID, " - " , error);
        return false;
      }          
      remoteDataCache[keyID] = currFieldValues;
      //remoteDataCache.push({'key':keyID, "remoteUpdated":remoteUpdated, "val":currFieldValues});          
    }

    formContentValues = remoteDataCache;
    return true;
  }


  function localFormGen(){

    const finalCompleteForm = (

      <Formik  initialValues={{}} onSubmit={values => console.log("console", values)} onChange={values => console.log(values)} >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
          {loadServerForm(handleChange, values)}
          <Button onPress={handleSubmit} title="Submit" />
      </View>
  
  
      )}
      </Formik>
    )
    //console.log("********************* about to return fGen : ", finalCompleteForm)
    return finalCompleteForm;
    
  }

  async function fGen() {

    const finalCompleteForm = (

      <Formik  initialValues={{}} onSubmit={values => console.log("console", values)} onChange={values => console.log(values)} >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
          {loadServerForm(handleChange, values)}
          <Button onPress={handleSubmit} title="Submit" />
      </View>
  
  
      )}
      </Formik>
    )
    //console.log("********************* about to return fGen : ", finalCompleteForm)


    return finalCompleteForm;
    
  }




  asyncLoadRemoteForm = async() => {
    const formReceived = await getFormJSON();
    if (formReceived){
        const dataReceived = await getFormStaticValues();

        if (dataReceived){
            console.log("Form and data received");
            finalForm = await fGen();
            setFormData(finalForm);
            setFormPrepInProcess(false);
            setIsLoading(false);
        }
    }

  }





  

  function loadServerForm(handleChange, values){
    
    setFormPrepInProcess(true);
    //console.log("loadServerForm called ")
    //generate a core for this form that we can later wrap with Formik
    //adjust ARJRE json (tag the first idex of all  Dynamic blocks - so we can increment other blocks if the user adds em)
    reformatJSON();      
    let finalFormCore = generateCoreFromJson(handleChange, values);
    //console.log("final form - ", finalFormCore);            
    return finalFormCore
    }
   



  function reformatJSON(){
    
    /*
      Take the JSON data from the fieldOrder and:
      1) suffix an index to the row  and,
      2) suffix fieldIDs with a row name and instance index. For example:

      "fieldOrder": [
        {
          "row": "row1",
          "allowMultiple": "true",
          "rowFields": [
            {
              "fieldID": "secondPartyNameArabic",
              "fieldWidth": "six"
            },
          }
        ]
      
        1)  row1 would become row1_0 (0th instance of row1), and,

        2)  fieldID would be converted to secondPartyNameArabic_row1_0 (indicating it is a component of row1 and belongs to 0th instance of row1)
            if a user "adds" and instance of row1 that would become row_1_1 and its child components would follow the same naming scheme

    */
    
    allGroups = jsonData.fieldOrder;
      //(1) Parse the fieldOrder (basically the "rows")
    for (let groupIndex = 0; groupIndex<allGroups.length ; groupIndex++){                            
        
      let fieldNamesSet = allGroups[groupIndex].rowFields;
      let dynamicBlockCounter = 0;
      let groupSuffix = '';

      if ('allowMultiple' in allGroups[groupIndex]){              
        originalGroupName = allGroups[groupIndex].row
        //console.log("Dynamic Group Name is : ", originalGroupName);
        
        if (!originalGroupName.includes('_')){
          jsonData.fieldOrder[groupIndex].row = `${originalGroupName}_${dynamicBlockCounter}`
          groupSuffix = `_${originalGroupName}_${dynamicBlockCounter}`
          //console.log("group name updated to -> ", jsonData.fieldOrder[groupIndex].row )
        }
        
        
        for (let fieldCounter=0; fieldCounter<fieldNamesSet.length; fieldCounter++){                      
          //(2) Check if these are part of  a multicomponent block or not            
          //console.log("\tfield Name is : ", fieldNamesSet[fieldCounter].fieldID);           
          //console.log("updating - ", jsonData.fieldOrder[groupIndex].rowFields[fieldCounter].fieldID ,  " to ", `${jsonData.fieldOrder[groupIndex].rowFields[fieldCounter].fieldID}${groupSuffix}`  )                  
          jsonData.fieldOrder[groupIndex].rowFields[fieldCounter].fieldID = `${jsonData.fieldOrder[groupIndex].rowFields[fieldCounter].fieldID}${groupSuffix}`
        }

      } else {
        //console.log("Static Group Name is : ", allGroups[groupIndex].row);                
      }
  
    }  

    //console.log("Reformatted JSON is : ", JSON.stringify(jsonData))


  }


  function generateCoreFromJson(handleChange, values){
    let formCore = [];
    let compStacks = [{}]
    allFields = jsonData.fields;
    allGroups = jsonData.fieldOrder;

    
      //(1) Parse the fieldOrder (basically the "rows")
      for (let groupName = 0; groupName<allGroups.length ; groupName++){
        let componentStack = [];
        let multipleBlock = false;
            
        let fieldNamesSet = allGroups[groupName].rowFields;
       
        for (let fieldCounter=0; fieldCounter<fieldNamesSet.length; fieldCounter++){            
            
            //(2) Check if these are going into a multicomponent block or not            
            if ('allowMultiple' in allGroups[groupName]){              
                multipleBlock = true;
                modifiedFieldID = fieldNamesSet[fieldCounter].fieldID;
                baseFieldID = modifiedFieldID.split('_')[0];
                var fieldJSON = allFields.filter(obj => { return obj.fieldID == baseFieldID })              
                //console.log("Modified Field ID - ", modifiedFieldID)                
                //console.log( "Adding to multi: ", allGroups[groupName].row, " - id: ", fieldNamesSet[fieldCounter].fieldID , " label: ", fieldJSON[0].fieldName.en, " type: ", fieldJSON[0].fieldType )
                // (3a) call the formik element generator above to return a an appropriate component and add it to the component stack (track that this is a dynamic multiple field)
                let currComponent = formikElementGenerator(fieldJSON, modifiedFieldID, formContentValues, handleChange );
                if (currComponent != null) {                
                  componentStack = componentStack.concat([currComponent]);
                } else {
                  //console.log( "skipping from multi: ", allGroups[groupName].row, " - id: ", fieldNamesSet[fieldCounter].fieldID , " type: ", fieldJSON[0].fieldType )  
                }
                
            } else {
                multipleBlock = false;
                // (3a) call the formik element generator above to return a an appropriate component and add it to the component stack (track that this is a single field)
                unchangedFieldID = fieldNamesSet[fieldCounter].fieldID;
                var fieldJSON = allFields.filter(obj => { return obj.fieldID == fieldNamesSet[fieldCounter].fieldID })
                //console.log( "Adding to single: ", allGroups[groupName].row, " - id: ", fieldNamesSet[fieldCounter].fieldID , " label: ", fieldJSON[0].fieldName.en , " type: ", fieldJSON[0].fieldType )
                let currComponent = formikElementGenerator(fieldJSON, unchangedFieldID, formContentValues, handleChange );
                if (currComponent != null) {                
                  componentStack = componentStack.concat([currComponent]);
                } else {
                  //console.log( "skipping from single: ", allGroups[groupName].row, " - id: ", fieldNamesSet[fieldCounter].fieldID , " type: ", fieldJSON[0].fieldType )  
                }
            }
            
        }
  
        if (multipleBlock){                
          
          //compStacks.push({dyn:true, stack:formCore});          
          //console.log("DynamicComponent stack - core length: ", formCore.length);
          //console.log("Added row : ", allGroups[groupName].row);
          let currGroupName =  allGroups[groupName].row.split('_')
          //console.log("Groupname is >>>>>>>>>> ", currGroupName) 
          if (currGroupName.length == 2) {
            
            indexValue = parseInt(currGroupName[1])        
            //console.log("Index Value is  >>>>>>>>>>>>> ", indexValue) 
            if (indexValue > 0){
              //console.log("adding first dynamic block")
              formCore = formCore.concat([dynamicMultiGroupView(componentStack, allGroups[groupName].row, false)  ] );  
            } else {
              //console.log("adding any other dynamic block")
              formCore = formCore.concat([dynamicMultiGroupView(componentStack, allGroups[groupName].row, true) ]);  
            }
              
          }

        } else {                  
          //compStacks.push({dyn:false, stack:formCore});          
          //console.log("StaticComponent stack - core length: ", formCore.length);          
          //console.log("Added row : ", allGroups[groupName].row);
          formCore = formCore.concat([staticSingleGroupView(componentStack, allGroups[groupName].row)]);
        }
    
    }  
    //console.log("returning final formCore: ", formCore.length);
    
  finalPackage = <View>{formCore}</View>

  //console.log("*************Cancelling loading state and prep state***************")


  return finalPackage;


  }

  function dynamicMultiGroupView (componentBlock, componentName, firstPos) {
  
    let wrappedComponent;  
    if (firstPos) {
      wrappedComponent = firstDynamicBlock(componentBlock, componentName, addCall, removeCall );
    } else {
      wrappedComponent = midDynamicBlock(componentBlock, componentName, addCall, removeCall )
    }      
    return wrappedComponent;  
  }
  
  function staticSingleGroupView (componentBlock, componentName) {
    return(
      staticBlock(componentBlock, componentName, addCall, removeCall )
    );
  }


  function initialFormView(){
    return (
      <View>
        <Text>initial Pass</Text>
      </View>
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

  
  useEffect(() => {
    
    if (isLoading) {    
        if (!formPrepInProcess) {
          console.log("about to asynch call API");    
          asyncLoadRemoteForm();
    
        }     
      }      
}, [isLoading] )

  



  //console.log("first pass formdata is - ", formData);
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={{margin:20}}>
        <ScrollView>
          {(isLoading? loadingView(): formData )     }
        </ScrollView>
      </View>
    </SafeAreaView>
     
  );
  
};