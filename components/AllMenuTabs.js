import React, {useContext} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, {Path,} from 'react-native-svg';
import MenuStateContext, { MenuStateProvider } from '../context/MenuStateContext';  

const menuInterTabSpace = 10;
const inactiveTabColour = "#F8F8F8"


function leftCurve(tabActive){
    if (tabActive){
        return(
            <Svg height="150%" width="255%" viewBox="0 0 100 100">
            <Path
                d="M 26.272105,0.77555299 C 24.030743,10.18221 20.648044,17.895012 15.358685,23.380558 11.404077,27.481846 6.3836718,30.338129 -0.02238122,31.726484 L 26.155197,31.560379 Z"
                fill="white"
                stroke="white"
            />
            </Svg>
        ) 
    } else {
        return(null);
    }
}

function rightCurve(tabActive){
    if (tabActive){
        return(
            <Svg height="150%" width="255%" viewBox="0 0 100 100">
            <Path
                d="M 0.79362655,-0.30331089 C 3.0349936,9.1033467 6.4176926,16.816149 11.707052,22.301695 c 3.954608,4.101287 8.975013,6.95757 15.381066,8.345926 L 0.91053655,30.481516 Z"
                fill="white"
                stroke="white"
            />
            </Svg>
        ) 
    } else {
        return(null);
    }
}

const ActiveStartTab = props => {
    return(
        <TouchableOpacity onPress={ () => props.tabSelUpdater(props.tabID)} style={{flex:1, elevation:10, flexDirection:"column",flex:1, borderWidth:1, marginEnd:menuInterTabSpace,  borderTopStartRadius:20, borderTopEndRadius:20, borderWidth:2, borderColor:'red',backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>        
            <Icon style={{flex:1, borderWidth:1}} name="user" size={20} color={ 'dodgerblue'} />
    <Text style={{flex:1, borderWidth:1}}>{props.label}</Text>
            <View style={{elevation:5, position:'absolute',top:43 ,left:65, width:60, height:50}}>
                {rightCurve(true)}
            </View>               
        </TouchableOpacity>            
    );

}

const InactiveStartTab = props => {
    return(
        <TouchableOpacity onPress={ () => props.tabSelUpdater(props.tabID)} style={{flex:1,elevation:3, flexDirection:"column",flex:1, borderWidth:1, marginEnd:menuInterTabSpace,  borderTopStartRadius:20, borderTopEndRadius:20, borderColor:inactiveTabColour, backgroundColor:inactiveTabColour, justifyContent:'center', alignItems:'center'}}>        
            <Icon style={{flex:1, borderWidth:1}} name="user" size={20} color={ 'dodgerblue'} />
            <Text style={{flex:1, borderWidth:1}}>{props.label}</Text>
        </TouchableOpacity>            
    );

}

const ActiveMidTab = props => {
    return (
        <TouchableOpacity onPress={ () => props.tabSelUpdater(props.tabID)} style={{flex:1,elevation:10, flexDirection:"column",flex:1,   borderTopStartRadius:20, borderTopEndRadius:20,  backgroundColor:'white',  justifyContent:'center', alignItems:'center'}}>
            <Icon style={{flex:1, borderWidth:1}} name="user" size={20} color={ 'dodgerblue'} />
            <Text style={{flex:1, borderWidth:1}}>{props.label}</Text>
            <View style={{elevation:10, position:'absolute',top:43 ,left:65, width:60, height:50}}>
                {rightCurve(true)}
            </View>                      
            <View style={{elevation:10, position:'absolute',top:43 ,left:-55, width:60, height:50}}>
                {leftCurve(true)}
            </View>                      
        </TouchableOpacity>        
    );
}

const InactiveMidTab = props =>{
    return (
        <TouchableOpacity onPress={ () => props.tabSelUpdater(props.tabID)} style={{flex:1,elevation:3,flexDirection:"column",flex:1,  borderTopStartRadius:20, borderTopEndRadius:20, backgroundColor:inactiveTabColour, borderColor:'green', justifyContent:'center', alignItems:'center'}}>
            <Icon style={{flex:1, borderWidth:1}} name="user" size={20} color={ 'dodgerblue'} />
            <Text style={{flex:1, borderWidth:1}}>{props.label}</Text>
        </TouchableOpacity>        
    );
}

const ActiveEndTab = props => {
    return (
        <TouchableOpacity onPress={ () => props.tabSelUpdater(props.tabID)} style={{flex:1,elevation:10, flexDirection:"column",flex:1,  marginStart:menuInterTabSpace,  borderTopStartRadius:20, borderTopEndRadius:20, backgroundColor:'white', borderColor:'green', justifyContent:'center', alignItems:'center'}}>
            <Icon style={{flex:1, borderWidth:1}} name="user" size={20} color={ 'dodgerblue'} />
            <Text style={{flex:1, borderWidth:1}}>{props.label}</Text>
            <View style={{elevation:5, position:'absolute',top:43 ,left:-55, width:60, height:50}}>
                {leftCurve(true)}
            </View>                
        </TouchableOpacity>        
    );
}

const InactiveEndTab = props => {
    return (
        <TouchableOpacity onPress={ () => props.tabSelUpdater(props.tabID)} style={{flex:1,elevation:3,flexDirection:"column",flex:1,  marginStart:menuInterTabSpace,  borderTopStartRadius:20, borderTopEndRadius:20, backgroundColor:inactiveTabColour, borderColor:'green', justifyContent:'center', alignItems:'center'}}>
            <Icon style={{flex:1, borderWidth:1}} name="user" size={20} color={ 'dodgerblue'} />
            <Text style={{flex:1, borderWidth:1}}>{props.label}</Text>
        </TouchableOpacity>        
    );
}



export {ActiveStartTab, InactiveStartTab, ActiveMidTab, InactiveMidTab, ActiveEndTab, InactiveEndTab};