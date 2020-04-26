import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AboutStackMainScreen from '../screens/AboutStackMainScreen';
import AboutStackMessageScreen from '../screens/AboutStackMessageScreen';
import AboutStackPlanScreen from '../screens/AboutStackPlanScreen';

import forFade from '../helpers/Helpers';

import GradHeaderView from '../screens/GradHeaderView';

const Stack = createStackNavigator();
const headerHeight = 100;

export default function AboutStack() {
    return (
      <Stack.Navigator headerMode='screen'  >
        <Stack.Screen
          name="About Us"        
          component={AboutStackMainScreen}     
          
          options={{          
            headerTintColor: 'white',
            headerTitleAlign:'center',
            headerBackground: () => (
                <GradHeaderView />
              ),            
              headerStyle: { height:headerHeight },            
          }}
        />
        <Stack.Screen
          name="Message"
          component={AboutStackMessageScreen}
          
          options={{          
            headerTintColor: 'white',
            headerTitleAlign:'center',
            headerBackground: () => (
                <GradHeaderView />
              ),            
              headerStyle: { height:headerHeight },            
          }}
        />

        <Stack.Screen
          name="Plan"
          component={AboutStackPlanScreen}
          
          options={{          
            headerTintColor: 'white',
            headerTitleAlign:'center',
            headerBackground: () => (
                <GradHeaderView />
              ),            
              headerStyle: { height:headerHeight },            
          }}
        />

        <Stack.Screen
          name="Videos"
          component={AboutStackMessageScreen}
          headerMode="float"           
          options={{          
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

  