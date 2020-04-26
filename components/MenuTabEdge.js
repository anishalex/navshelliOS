import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, {Path,} from 'react-native-svg';
  

const menuInterTabSpace = 10;

const MenuTabEdge = props => {


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

    function tabByPosition(givenProps){
        console.log(givenProps.tabPos);
        let tabView = [];
        if (givenProps.tabPos=='start') {
            tabView = tabView.concat([
            <View style={givenProps.tabActive ? activeStyles.tabEdgeMasterContainerOuter : inactiveStyles.tabEdgeMasterContainerOuter}>        
                <View style={ givenProps.tabActive ? activeStyles.vertTabEdgeOuter : inactiveStyles.vertTabEdgeOuter }>
                    <Icon name={givenProps.iconName} size={20} color={givenProps.tabActive ? 'dodgerblue':"#777777"} />
                    <Text style={{fontSize:10}}>{givenProps.label}</Text>
                </View>
            </View>            

            ])
        } else if (givenProps.tabPos=='mid') {
            tabView = tabView.concat([
            <View style={givenProps.tabActive ? activeStyles.tabEdgeMasterContainerInner : inactiveStyles.tabEdgeMasterContainerInner}>        
                <View style={ givenProps.tabActive ? activeStyles.vertTabEdgeInner : inactiveStyles.vertTabEdgeInner }>                    
                    <Icon name={givenProps.iconName} size={20} color={givenProps.tabActive ? 'dodgerblue':"#777777"} />
                    <Text style={{fontSize:10}}>{givenProps.label}</Text>
                    <View style={{position:'absolute',top:47 ,left:-45, width:50, height:50}}>
                        {leftCurve(true)}
                    </View>     
                    <View style={{position:'absolute',top:47 ,left:97, width:50, height:50}}>
                        {rightCurve(true)}
                    </View>                                           
                </View>
            </View>
            ])
        } else if (givenProps.tabPos=='end') {
            tabView = tabView.concat([
            <View style={givenProps.tabActive ? activeStyles.tabEdgeMasterContainerOuter : inactiveStyles.tabEdgeMasterContainerOuter}>        
                <View style={ givenProps.tabActive ? activeStyles.vertTabEdgeOuter : inactiveStyles.vertTabEdgeOuter }>
                    <Icon name={givenProps.iconName} size={20} color={givenProps.tabActive ? 'dodgerblue':"#777777"} />
                    <Text style={{fontSize:10}}>{givenProps.label}</Text>
                    <View style={{position:'absolute',top:47 ,left:-45, width:50, height:50}}>
                        {leftCurve(true)}
                    </View>     
                    <View style={{position:'absolute',top:47 ,left:97, width:50, height:50}}>
                        {rightCurve(true)}
                    </View>                           
                </View>
            </View>
            ])
        }

        return tabView;

    }



    return (
        <TouchableOpacity>
            {tabByPosition(props)}
        </TouchableOpacity>
    )
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


export default MenuTabEdge;