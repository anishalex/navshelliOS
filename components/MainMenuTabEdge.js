import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, {Path,} from 'react-native-svg';
  
const menuInterTabSpace = 10;

const MainMenuTabEdge = props => {

    function tabByPos(position, status) {
        
        let tabView = [];

        if (position=='start'){
            tabView = tabView.concat([
            <TouchableOpacity style={{elevation:3, flexDirection:"column",flex:1, borderWidth:1, marginEnd:menuInterTabSpace,  borderTopStartRadius:20, borderTopEndRadius:20, borderColor:'white', backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                <Icon style={{flex:1, borderWidth:1}} name="user" size={20} color={ 'dodgerblue'} />
                <Text style={{flex:1, borderWidth:1}}>test1</Text>
            </TouchableOpacity>            
            ])
        } else if (position=='mid'){
            tabView = tabView.concat([
            <TouchableOpacity style={{flexDirection:"column",flex:1, borderWidth:1,   borderTopStartRadius:20, borderTopEndRadius:20, backgroundColor:'#E0E0E0', borderColor:'green', justifyContent:'center', alignItems:'center'}}>
                <Icon style={{flex:1, borderWidth:1}} name="user" size={20} color={ 'dodgerblue'} />
                <Text style={{flex:1, borderWidth:1}}>test1</Text>
                <View style={{elevation:5, position:'absolute',top:43 ,left:65, width:60, height:50}}>
                    {rightCurve(true)}
                </View>                      
                <View style={{elevation:5, position:'absolute',top:43 ,left:-55, width:60, height:50}}>
                    {leftCurve(true)}
                </View>                      
          </TouchableOpacity>
            ])
            
        } else if (position=='end'){
            tabView = tabView.concat([
            <TouchableOpacity style={{flexDirection:"column",flex:1, borderWidth:1, marginStart:menuInterTabSpace,  borderTopStartRadius:20, borderTopEndRadius:20, backgroundColor:'#E0E0E0', borderColor:'green', justifyContent:'center', alignItems:'center'}}>
                <Icon style={{flex:1, borderWidth:1}} name="user" size={20} color={ 'dodgerblue'} />
                <Text style={{flex:1, borderWidth:1}}>test1</Text>
            </TouchableOpacity>
            ])

        }

        return tabView;
    }

    return (    
      tabByPos('start')

    );
}

const activeStyles = StyleSheet.create({

    tabEdgeMasterContainerOuter: {
      width:(Dimensions.get('window').width/3)-menuInterTabSpace,
      borderWidth:3,
      borderColor:"transparent",
      height:200,  
      marginVertical:4,
      marginLeft:2.5,
      marginRight:2.5,
      flex:1,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      backgroundColor:'#000',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center',
    },
    vertTabEdgeOuter:{
        width:(Dimensions.get('window').width/3)-menuInterTabSpace,        
        borderColor:"transparent",  
        height:200,  
        flex:1,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginBottom:-1,
        backgroundColor:'#fff',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',    
    },

    
    tabEdgeMasterContainerInner: {
        width:(Dimensions.get('window').width/3)-menuInterTabSpace,
        height:200,  
        marginVertical:4,
        marginLeft:2.5,
        marginRight:2.5,
        flex:1,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:'#000',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
      },
      vertTabEdgeInner:{
          width:(Dimensions.get('window').width/3)-menuInterTabSpace,
          height:200,  
          flex:1,
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          backgroundColor:'#fff',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',    
      },
    

});

const inactiveStyles = StyleSheet.create({

    tabEdgeMasterContainerOuter: {
        width:(Dimensions.get('window').width/3)-menuInterTabSpace,

        height:200,
        marginVertical:4,
        marginLeft:2.5,
        marginRight:2.5,
        flex:1,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:'#000000',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
      },
      vertTabEdgeOuter:{
          width:(Dimensions.get('window').width/3)-menuInterTabSpace,

          height:200,  
          flex:1,
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          backgroundColor:'#E0E0E0',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
    
          flex:1,        
      },

    tabEdgeMasterContainerInner: {
      width:(Dimensions.get('window').width/3)-(menuInterTabSpace+2),
  
      height:200,
      marginVertical:4,
      marginLeft:2.5,
      marginRight:2.5,
      flex:1,
      borderTopLeftRadius:10,
      borderTopRightRadius:10,
      backgroundColor:'#000000',
      flexDirection:'column',
      justifyContent:'center',
      alignContent:'center',
    },
    vertTabEdgeInner:{
        width:(Dimensions.get('window').width/3)-(menuInterTabSpace+2),
   
        height:200,  
        flex:1,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:'#E0E0E0',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
  
        flex:1,        
    },
   
});


export default MainMenuTabEdge;