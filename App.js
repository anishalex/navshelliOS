
import 'react-native-gesture-handler';

import React, {useState, useEffect, createContext} from 'react';

import {
  AsyncStorage, 
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from './navigators/AboutStack';
import DashStack from './navigators/DashStack';
import {HiluxTabBarRouter, MasterHiluxTab} from './navigators/HiluxTabBar';
import MyApplicationsListScreen from './screens/MyApplicationsListScreen';
import {NavigationStateProvider} from './context/NavigationStateContext';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import HiluxFormFactory from './components/HiluxFormFactory';
import HiluxFormFactoryHooks from './components/HiluxFormFactoryHooks';
import HiluxFormFactoryTest from './components/HiluxFormFactoryTest';
import DynamicFormBlock from './components/DynamicFormBlock';
import DeleteScreen from './screens/DeleteScreen';

const App = props => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor='transparent' />                
        <MasterHiluxTab.Navigator  tabBar={props => <HiluxTabBarRouter {...props} />}>
          <MasterHiluxTab.Screen key="dash" name="MY DASHBOARD" component={DashStack} />
          <MasterHiluxTab.Screen key="connect" name="CONNECT" component={AboutStack} />
          <MasterHiluxTab.Screen key="menu" name="MENU" component={AboutStack} />
          <MasterHiluxTab.Screen key="uae" name="UAE PASS" component={LoginScreen} />
          <MasterHiluxTab.Screen key="notification" name="NOTIFICATIONS" component={MyApplicationsListScreen} />
        </MasterHiluxTab.Navigator>        
      </NavigationContainer>                           
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',    
  },
  scrollContent: {
    justifyContent:'center',
    alignContent:'center',
  },
  
});

export default () => {
  return(    
    <NavigationStateProvider>
      <HiluxFormFactoryTest/>
    </NavigationStateProvider>
    
  )
  
}

