import React , {useState} from 'react';
import {TouchableOpacity, Image, SafeAreaView,View,Text, KeyboardAvoidingView, FlatList,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import HiluxText from '../components/HiluxText'
import InputWithIcon from '../components/InputWithIcon';

const LoginScreen = () => {

    return (

        <KeyboardAvoidingView  style={styles.signupMasterContainer}>        
            <KeyboardAvoidingView behavior="position"style={styles.logoBlock}>
                <Text>Logo</Text>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView style={styles.contentBlock}>
                <KeyboardAvoidingView behavior="position" style={styles.greetingBlock}>
                    <HiluxText style={styles.greetingTextStyle}>Hello and Welcome!</HiluxText>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView behavior="position" style={styles.inputFieldsBlock}>                    
                    <InputWithIcon iconName='envelope' placeholder='Username here' secureSet={false} />
                    <InputWithIcon iconName='key' placeholder='Password here' secureSet={false} />
                </KeyboardAvoidingView>
                <KeyboardAvoidingView  style={styles.loginSignupBlock}>
                    <View style={{flex:1, }}>
                        <Button containerStyle={styles.loginButtonStyle} buttonStyle={{backgroundColor:'black',}} title="Login"/>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <HiluxText style={styles.orTextStyle}>OR</HiluxText>
                        </View>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>null}>
                                <Image resizeMode='contain' resizeMethod='auto' style={styles.imageStyle} source={require('../assets/images/uaepass.png') } />
                            </TouchableOpacity>
                        </View>                        
                    </View>
                    
                </KeyboardAvoidingView>
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>



    )
}

const styles = StyleSheet.create({

    imageStyle: {
        width: 200,
        height: 72,
        padding: 5,
        
      },

    signupMasterContainer:{
        borderColor: 'magenta',
        borderWidth:1,
        alignItems:'stretch',        
        flexDirection:'column',
        flex:1,
        
    },
    greetingTextStyle:{
        fontFamily:'Roboto-Bold' ,
        fontSize:16,
        color:'#766E47'
    },
    orTextStyle:{
        fontFamily:'Roboto-Bold' ,
        fontSize:20,
        color:'#766E47'
    },    
    logoBlock: {
        borderColor: 'red',
        justifyContent:'center', 
        alignItems:'center',       
        borderWidth:1,
        flex:0.35,
    },
    contentBlock: {        
        flex:0.6,        
    },
    greetingBlock: {
        justifyContent:'center', 
        alignItems:'center', 
        flex:0.2,
    },
    inputFieldsBlock: {
        flex:0.50,        
    },
    loginSignupBlock: {        
        justifyContent:'center',
        alignItems:'stretch',
        flex:0.35,
    },
    loginButtonStyle :{        
        paddingHorizontal:120,
    },
    uaeButtonStyle :{
        paddingHorizontal:70,
    }

});

export default LoginScreen;