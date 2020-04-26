import React , {useState} from 'react';
import {TouchableNativeFeedback,SafeAreaView,View,Text, FlatList,StyleSheet} from 'react-native';
import HScrollBlock from '../components/HScrollBlock';
import HScrollBlockWithSettings from '../components/HScrollBlockWithSettings';
import NewsFeedScroller from '../components/NewsFeedScroller';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

const mostUsedServices = [
  {
    id: 'serviceid1',
    serviceName: 'Sales',

  },
  {
      id: 'serviceid2',
      serviceName: 'New Registration',
    },
    {
      id: 'serviceid3',
      serviceName: 'Mortgage',
    },
    {
      id: 'serviceid4',
      serviceName: 'Commercial',
    },
    {
      id: 'serviceid5',
      serviceName: 'Transfer',
    },

];


const myFavouriteServices = [
  {
    id: 'serviceid2',
    serviceName: 'New Registration',
  },
  {
    id: 'serviceid1',
    serviceName: 'News',
  },
    {
      id: 'serviceid4',
      serviceName: 'Commercial',
    },
    {
      id: 'serviceid3',
      serviceName: 'Auctions',
    },
    {
      id: 'serviceid5',
      serviceName: 'Transfer',
    },

  ];




const SignUpScreen = () => {

  const gearButton = ( ) => {
    return (
        <TouchableNativeFeedback style={styles.settingsButtonContainer} onPress={()=>alert("settings")}>
          <Icon name="gear" size={30} color="#900" />
        </TouchableNativeFeedback>
    )
  }
  
    function checkProps(servArray) {
      console.log(servArray);
    }

    return (

        <View style={styles.signupMasterContainer}>        
            <View style={styles.logoBlock}>
                <Text>Logo</Text>
            </View>
            <View style={styles.contentBlock}>
                <View style={styles.greetingBlock}>
                    <Text>Greeting</Text>
                </View>
                <View style={styles.profileButtonBlock}>
                    <Text>Profile Buttons</Text>
                </View>
                <View style={styles.loginSignupBlock}>
                    <Text>Login/Signup</Text>
                </View>
            </View>
        </View>



    )
}

const styles = StyleSheet.create({

    signupMasterContainer:{
        borderColor: 'magenta',
        borderWidth:3,
        alignItems:'stretch',        
        flexDirection:'column',
        flex:1,
        
    },
    logoBlock: {
        borderColor: 'red',
        borderWidth:1,
        flex:0.4,
    },
    contentBlock: {
        borderColor: 'green',
        borderWidth:1,        
        flex:0.6,
        
    },
    greetingBlock: {
        borderColor: 'blue',
        borderWidth:1,
        flex:0.2,
    },
    profileButtonBlock: {
        borderColor: 'black',
        borderWidth:1,
        flex:0.50,        
    },
    loginSignupBlock: {
        borderColor: 'purple',
        borderWidth:1,
        flex:0.3,
    },

});

export default SignUpScreen;