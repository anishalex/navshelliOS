import React , {useState} from 'react';
import {View,Text, TextInput,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HiluxText from '../components/HiluxText'


const InputWithIcon = props => {

    return (

        <View style={styles.masterWrapperStyle}>       
            <View style={styles.iconWrapperStyle}>
                <Icon name= {props.iconName} size={30} color="lightgray" /> 
            </View>
            <View style={styles.textWrapperStyle}>
                <TextInput  
                    style={{ fontSize: 15}}  
                    placeholder={props.placeholder}  
                    secureTextEntry={props.secureSet}
                    onChangeText={(text) => null}  
                />  
            </View>            
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

export default InputWithIcon;