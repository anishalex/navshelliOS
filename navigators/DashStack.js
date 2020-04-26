import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashMainScreen from '../screens/DashMainScreen';
import HomeScreen from '../screens/HomeScreen';
import GradHeaderView from '../screens/GradHeaderView';
import DeleteScreen from '../screens/DeleteScreen';


const Stack = createStackNavigator();
const headerHeight = 100;

 const DashStack = props =>  {
    return (
      <Stack.Navigator headerMode='float'  >
        <Stack.Screen
          name="Dashboard"   
          
          component={DashMainScreen}     
          
          options={{          
            title:"",     
            headerTintColor: 'white',
            headerTitleAlign:'center',
            headerBackground: () => (
                <GradHeaderView />
              ),            
              headerStyle: { height:headerHeight },            
          }}
        />

      </Stack.Navigator>
    );
  }

  export default DashStack;