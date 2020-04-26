import React , {useState, useEffect} from 'react';
import {TouchableOpacity,ScrollView,View,Text, FlatList, TextInput, StyleSheet, Button} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';




function HiluxFormRadio(props) {

    const [value, setValue] = useState(0);

    function optionArrayGenerator(){
        let optionArray= [];
        for(let i=0; i< props.optVals.length ; i++){
            newOptionEntry=  {};
            newOptionEntry['label'] = props.optVals[i];
            newOptionEntry['value'] = i;
            optionArray.push(newOptionEntry);
        }
        return optionArray;
    }
     
    useEffect(() => {
        // Update the document title using the browser API
        console.log('********************');
        props.onValueChange(value.toString());
        console.log("selectionval",value) 
        console.log('--------------------');
      },[value]);
      

    return (

        <View >   
            <RadioForm
                radio_props={optionArrayGenerator()}
                initial={value}
                onPress={(value) => { setValue(value); }}
            />    

        </View>
    )
}

const styles = StyleSheet.create({

    masterWrapperStyle:{
        flexDirection:'row',
        marginHorizontal:40,
        marginBottom:20,
        borderWidth:1,
        borderColor:'black',
        borderRadius:5,
        
    },
    iconWrapperStyle:{
        justifyContent:'center',
        alignContent:'center'
    },
    textWrapperStyle: {
        justifyContent:'center',
        alignContent:'center'
    },

});

export default HiluxFormRadio;