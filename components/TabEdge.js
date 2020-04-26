import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, {Path,} from 'react-native-svg';
  


const TabEdge = props => {


    function cornerCurve(tabActive){
        if (tabActive){
            return(
                <Svg height="150%" width="255%" viewBox="0 0 100 100">
                <Path
                    d="M 0.09023006,0.22774509 C 16.529809,4.1448683 27.795856,11.547968 31.041162,26.522231 L 30.875056,0.34465279 Z"
                    fill="white"
                    stroke="none"
                />
                </Svg>
            ) 
        } else {
            return(null);
        }
    }

    return (
        <TouchableOpacity>
            <View style={props.tabActive ? activeStyles.tabEdgeMasterContainer : inactiveStyles.tabEdgeMasterContainer}>        
                <View style={ props.tabActive ? activeStyles.vertTabEdge : inactiveStyles.vertTabEdge }>
                    <Icon name={props.iconName} size={20} color={props.tabActive ? 'dodgerblue':"#777777"} />
                    <Text style={{fontSize:10}}>{props.label}</Text>
                    <View style={{position:'absolute',top:78 ,left:1, width:50, height:50}}>
                        {cornerCurve(props.tabActive)}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const activeStyles = StyleSheet.create({

    tabEdgeMasterContainer: {
      width:50,
      height:80,      
      marginVertical:4,
      marginLeft:5,
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10,
      backgroundColor:'#000',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center',
    },
    vertTabEdge:{
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        backgroundColor:'#fff',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
  
        flex:1,        
    },
});

const inactiveStyles = StyleSheet.create({

    tabEdgeMasterContainer: {
      width:50,
      height:80,      
      marginVertical:4,
      marginLeft:5,
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10,
      backgroundColor:'#000000',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center',
    },
    vertTabEdge:{
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        backgroundColor:'#F0F0F0',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
  
        flex:1,        
    },
   
});


export default TabEdge;