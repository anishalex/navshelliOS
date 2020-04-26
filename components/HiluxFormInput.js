import React , {useState, useContext, useRef, useEffect, } from 'react';
import { StyleSheet  } from 'react-native'
import { Input  } from 'react-native-elements'


 const HiluxFormInput = props => {
    

    return (        
        <Input  
          name                = {props.name}       
          onChangeText        = {props.onChangeText}   
          inputContainerStyle ={styles.inputContainerStyle}
          inputStyle          ={styles.inputStyle}        
          label               = {props.name}          
          errorStyle={{ color: 'red' }}
          id = {props.fieldID}
          key = {props.fieldKey}
      />  

    );
}

const styles = StyleSheet.create({

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
      borderWidth:10, 
      borderColor:"#F0F0F0",    
      borderRadius:7,    
      marginBottom:5,
      backgroundColor:'blue'
    }
    
  });

  export default HiluxFormInput;