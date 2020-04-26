import React , {useState, useEffect} from 'react';
import {TouchableOpacity,ScrollView,View,Text, FlatList, TextInput, StyleSheet, Button, SafeAreaView} from 'react-native';
import TabStrip from '../components/TabStrip';
import HiluxFormRadio from '../components/HiluxFormRadio';
//Authorization
import Icon from 'react-native-vector-icons/FontAwesome';
import { authorize } from 'react-native-app-auth';
import HiluxFormInput from '../components/HiluxFormInput';
import TestScreen from './TestScreen';
import {firstBlock, midBlock} from '../components/DynamicFormWrapper';
import { block } from 'react-native-reanimated';
import GradHeaderView from '../screens/GradHeaderView';


const uaepassconfig = {
  serviceConfiguration: {
    authorizationEndpoint: 'https://qa-id.uaepass.ae/trustedx-authserver/oauth/main-as ',
    tokenEndpoint: 'https://qa-id.uaepass.ae/trustedx-authserver/oauth/main-as/token',    
  },
  clientId: 'QIsakdeIZpcPRenn',
  redirectUrl: 'ae.uaepass:/callback',
  scopes: [ 'profile'],
}


const tabEdgeContentList = [
  {
    id: 'news1',
    iconName: 'exclamation',
    label: 'Important',
    tabActive:true,
  },
  {
      id: 'news2',
      iconName: 'undo',
      label: 'Updates',
      tabActive:false,
    },
    {
      id: 'news3',
      iconName: 'bullhorn',
      label: 'General',
      tabActive:false,
  },


];

/*
    <View style={styles.tabViewMasterContainer}>        
      <View style={styles.vertTabStrip}>
          <TabStrip content={tabEdgeContentList}/>
      </View>
      <View style={styles.viewContents}>
          <View style={{ flex:1}}>

          </View>
      </View>
    </View>


*/



 const DeleteScreen = props => {

  const [apiResult, setApiResult] = useState([])
  


  return(

    <View style={{ flex:1,  }}>
      <View style={{ flex:1.4,  }}>
        <GradHeaderView/>
      </View> 
      <View style={{ flex:8, borderTopStartRadius:30, flexDiretion:'column', alignItems:'center', borderTopEndRadius:30, marginTop:-40, backgroundColor:'green'}}>
        <View style={{width:70, height:70, marginTop:-35 , backgroundColor:'red'}}>

        </View>
      </View>
    </View>

  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  },
  
  tabViewMasterContainer: {
    flex:1,
    flexDirection:'row',
    
  },
  vertTabStrip:{        
    
    flex:0.14,
    marginRight:-10,        
  },
  viewContents:{
    elevation:0,
    margin:3,
    borderColor: 'green',
    backgroundColor:'white',      
    flex:0.8
  }


});
export default DeleteScreen;