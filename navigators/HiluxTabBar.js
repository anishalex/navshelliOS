import React , {useState, useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HiluxText from '../helpers/HiluxText';
import GradBottomTabShadowView from '../screens/GradBottomTabShadowView';
import  NavigationStateContext, {NavigationStateProvider} from '../context/NavigationStateContext';


const MasterHiluxTab = createBottomTabNavigator();


  


function HiluxTabBarRouter({ state, descriptors, navigation }) {
    const {data, toggleMainMenu} = useContext(NavigationStateContext);
    return (
        
        <View style={styles.tabBarMasterStyle} >
            <View style={styles.tabBarShadowRowStyle}>
                <GradBottomTabShadowView/>
            </View>
            <View style={styles.tabBarTabRowStyle}>
                
                {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
    
                const isFocused = state.index === index;
    
                const onPress = () => {
                
                if (route.name != "MENU") {
                    const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                    });
        
                    if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                    }
        
                } else {
                    //alert("Menu");
                    toggleMainMenu();
                    
                }
                };
    
                const onLongPress = () => {
                navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
                };
    
    
                if (route.name != "MENU") {
                let tabMenuIconName;
                if (route.name == "MY DASHBOARD") {
                    tabMenuIconName = "account-circle";
                } else if (route.name == "CONNECT") {
                    tabMenuIconName = "forum";
                } else if (route.name == "UAE PASS") {
                    tabMenuIconName = "fingerprint";
                }
                else if (route.name == "NOTIFICATIONS") {
                    tabMenuIconName = "bell";
                }
                return (
    
                    <TouchableOpacity
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{ flex: 1 }}
                    >
                    <View style={{alignItems:'center', justifyContent:'space-around', marginHorizontal:10, padding:3 }} >
                        <Icon name={tabMenuIconName} size={30} color="lightgray" />
                        <HiluxText style={{ color: 'lightgray' }} style={{ fontSize:7 , color:'lightgray'}}>
                        {route.name}
                        </HiluxText>
                    </View>
                    </TouchableOpacity>
                );
                
                } else {
                return (
                    <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityStates={isFocused ? ['selected'] : []}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{ flex: 1 }}
                    >
                    <View style={{alignItems:'center', justifyContent:'space-around',  }} >
                    <View style={{backgroundColor:'#af79ec' , alignItems:'center', justifyContent:'center', width:80, height:80, borderRadius:40, position:'absolute', top:-30, borderColor:'white', borderWidth:7}}>
                    <Icon name="flash-circle" size={40} color="white" />                  
                    </View>
    
                    </View>
                    </TouchableOpacity>
                );
                
                }
    
            })}
            </View>

          
        </View>
  
      
    );
  }
  
  const styles = StyleSheet.create({
    tabBarMasterStyle : {
      flexDirection:'column',
      backgroundColor:'white',
      paddingBottom:30,      
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0,
      shadowRadius: 16.00,
      
      elevation: 24,
    },

    tabBarShadowRowStyle:{
        position:'absolute',
        top:-80,
        left:0,
        backgroundColor:'transparent',
        height:80,
        width:'100%'
    },

    tabBarTabRowStyle:{
        
        flexDirection:'row',
        backgroundColor:'transparent',        
        width:'100%',
    }
});

export {HiluxTabBarRouter, MasterHiluxTab} ;