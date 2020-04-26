import React , {useState, useContext} from 'react';
import {TouchableNativeFeedback,ScrollView,View,Text, FlatList, TextInput, StyleSheet} from 'react-native';
import Header, { withTheme } from 'react-native-elements';
import HScrollBlock from '../components/HScrollBlock';
import HScrollBlockWithSettings from '../components/HScrollBlockWithSettings';
import NewsFeedScroller from '../components/NewsFeedScroller';
import NewsFeedCarousel from '../components/NewsFeedCarousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserStatsPanel from '../components/UserStatsPanel';
import UserCard from '../components/UserCard';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import Modal from 'react-native-modal';
import NavigationStateContext from '../context/NavigationStateContext';
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


function modalMenuDisplay (showModal){
    console.log("menu fired");
    const {data, toggleMainMenu} = useContext(NavigationStateContext);
    return (
        <View>
          <Modal onBackdropPress={()=> {toggleMainMenu();} } isVisible={showModal}>
            <View style={{ flex: 1, backgroundColor:'white', borderRadius:20, marginBottom:60, marginTop:30}}>
              <View style={{flex:0.9}}>

              </View>
              <View style={{justifyContent:'center', alignItems:'center', flex:0.1, }}>
                  <View style={{  marginBottom:-15, height:100, width:100, borderRadius:50, backgroundColor:'white'}}>

                  </View>
              </View>
            </View>
          </Modal>
        </View>
      )
  }
function formikElementGenerator(inputJSON, handleChange, handleBlur, values){
  var itemstorender = [];    
  // extract all the JSON elements for the form 
    for(var i = 0; i<inputJSON.fields.length; i++) {
      if(inputJSON.fields[i].fieldType == "text"){
              itemstorender = itemstorender.concat([
                  <TextInput                                               
                      placeholder = {inputJSON.fields[i].fieldName.en}
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
      <Formik  onSubmit={values => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            {formikElementGenerator(inputJSON, handleChange, handleBlur, values) }
            <Button onPress={handleSubmit} title="Submit" />
          </View>
          
        )}
      </Formik>
    );
}


const TestScreen = props => {

    return(  
      <View>
        {renderHiluxForm(jsonData)}
      </View>
      
  );
};

const styles = StyleSheet.create({


  dashMasterViewStyle: {
    flex:1, 
    backgroundColor:'#F0F0F0',
    
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginTop:-15,
    elevation:1
  },  
  masterScrollViewStyle : {    
    flex:1,
    backgroundColor:'#ff000066',    
    elevation:1,
    position:'absolute',
    width:'100%',
    height:'120%',    

  },
  inputStyle:{
    fontSize:16,
    
  },
  inputContainerStyle :{
    borderWidth:1, 
    borderColor:"#E0E0E0",    
    borderRadius:7,    
    marginBottom:5,
    backgroundColor:'white'
  },  
  focusedInputContainerStyle :{
    borderWidth:1, 
    borderColor:"#E0E0E0",    
    borderRadius:7,    
    marginBottom:5,
    backgroundColor:'blue'
  }


});

export default TestScreen;