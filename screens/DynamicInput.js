import React , {useState, useContext, useEffect} from 'react';
import {TouchableNativeFeedback,ScrollView,View,Text, FlatList, TextInput, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements'
import HiluxFormInput from '../components/HiluxFormInput';
import { Formik } from 'formik';


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




function formikElementGenerator( inputJSON, handleChange){
    var itemstorender = [];        
    
    for(var i = 0; i<inputJSON.fields.length; i++) {      
        if(inputJSON.fields[i].fieldType == "text"){
            itemstorender = itemstorender.concat([
                <HiluxFormInput
                    name= {inputJSON.fields[i].fieldName.en}
                    onChangeText={handleChange(inputJSON.fields[i].fieldID)}                    
                    id = {inputJSON.fields[i].fieldID}
                    key = {inputJSON.fields[i].fieldID}
                />  
            ])
        }
    }


    
    return itemstorender;
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


 const DynamicInput = props => {
    
    function elementEntry(fname,index) {           
        let newElement;
        newElement = [{[fname+index]:''}];        
        return newElement;
    };
    
    const [fieldValueArray, setFieldValueArray ] = useState(elementEntry(props.fieldName,0));

    function addField () {                
        let newIndex = fieldValueArray.length;
        let newFieldList = ([...fieldValueArray, ...elementEntry(props.fieldName, newIndex)])
        console.log(newFieldList);
        setFieldValueArray(newFieldList);        
    }


    function generateInputList(){
        let masterComponentBlock;
        masterComponentBlock = [];
        for(let i=0; i<(fieldValueArray.length); i++ ) {
            
            masterComponentBlock =  masterComponentBlock.concat([
                <Input                    
                    name                = {fieldValueArray[i].name}       
                    onChangeText        = {props.onChangeText}   
                    inputContainerStyle = {styles.inputContainerStyle}
                    inputStyle          = {styles.inputStyle}   
                    onChangeText        = {props.onChangeText(`${props.fieldName}${i}`)}
                    keyboardType        = {props.keyboardType}
                    label               = {`${props.fieldName}${i+1}`}          
                    errorStyle          = {{ color: 'red' }}
                    id                  = {`${props.fieldName}${i}`}
                    key                 = {`${props.fieldName}${i}`}
                />  
            ])
        }

        //console.log('master block', masterComponentBlock);
        return masterComponentBlock;
    }

    useEffect( () => {
        console.log("num elems ", fieldValueArray.length)
    })

        return (      
            <View style={styles.masterDynInputWrapper}>
                <View style={styles.inputWrapper}>
                    {generateInputList()}                           
                </View>
                <View style={styles.plusButtonWrapper} >
                    <Button title='+' onPress={addField}></Button>
                </View>                
            </View>

    
        );    
  
};


const styles = StyleSheet.create({

    masterDynInputWrapper:{
        marginTop:30,
        marginHorizontal:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    inputWrapper:{
        flex:0.9,
    },
    plusButtonWrapper:{
        flex:0.1,
        marginLeft:-5

    },

    inputStyle:{
      fontSize:16,      
    },
    inputContainerStyle :{
      borderWidth:1, 
      borderColor:"#E0E0E0",    
      borderRadius:7,    
      marginBottom:0,
      backgroundColor:'white'
    },  
    focusedInputContainerStyle :{
      borderWidth:10, 
      borderColor:"#F0F0F0",    
      borderRadius:7,    
      marginBottom:5,
      backgroundColor:'blue'
    }
    
  });

export default DynamicInput;