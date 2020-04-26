import React , {useState, useEffect} from 'react';
import {TouchableOpacity,ScrollView,View,Text, FlatList, TextInput, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export function firstDynamicBlock(coreComponent, componentGroupName, adderCallback){

    return(
        <View style={{flex:1,}}>
            <View style={{flex:1, flexDirection:'column', borderWidth:2, borderColor:'purple', borderRadius:10, marginHorizontal:10 , marginBottom:30, padding:10 }}>      
                <View style={{flex:8, flexDirection:'column', borderStyle:'dashed' , alignItems:'center', alignContent:'center',  borderWidth:1, borderColor:'purple', borderRadius:10, margin:10 }} >
                    <Text>{componentGroupName}</Text>
                    {coreComponent}                
                
                    <View style={{flex:0.5, flexDirection:'column',  alignItems:'center',   margin:2,  top:25, }} >
                        <TouchableOpacity style={{flex:1,   }} onPress={() =>  { adderCallback(componentGroupName) } }>                
                            <View style={{backgroundColor:'white', borderRadius:20}}>
                                <Icon name="plus-circle" size={40} color= '#00FF0055' />                
                            </View>                        
                        </TouchableOpacity>    
                    </View>                      
                </View>      


            </View>
        </View>
    );
}

export function midDynamicBlock(coreComponent, componentGroupName, adderCallback, removeCallback){
    return(
        <View style={{flex:1,}}>
            <View style={{flex:1, flexDirection:'column', borderWidth:2, borderColor:'purple', borderRadius:10, marginHorizontal:10 , marginBottom:20 }}>      
                <View style={{flex:8, flexDirection:'column', borderStyle:'dashed', alignItems:'center', alignContent:'center',  borderWidth:1, borderColor:'purple', borderRadius:10, marginHorizontal:10, marginTop:30, marginBottom:20}} >
                    <View style={{flex:0.5, flexDirection:'column',  alignItems:'center',   margin:2,  top:-20, }} >
                        <TouchableOpacity style={{flex:1,   }} onPress={() => removeCallback(componentGroupName) }>                
                            <View style={{backgroundColor:'white', borderRadius:20}}>
                                <Icon name="times-circle" size={40} color= '#FF000055' />                
                            </View>                        
                        </TouchableOpacity>    
                    </View>                          
                    
                    <Text>{componentGroupName}</Text>
                    {coreComponent}                
                
                    <View style={{flex:0.5, flexDirection:'column',  alignItems:'center',   margin:2,  top:40, marginBottom:20 }} >
                        <TouchableOpacity style={{flex:1,   }} onPress={() =>  { adderCallback(componentGroupName) } }>                
                            <View style={{backgroundColor:'white', borderRadius:20}}>
                                <Icon name="plus-circle" size={40} color= '#00FF0055' />                
                            </View>                        
                        </TouchableOpacity>    
                    </View>
                
                
                </View>          
            </View>
        </View>
    );

}


export function staticBlock(coreComponent, componentGroupName, adderCallback, removeCallback){
    return(
        <View style={{flex:1,}}>
            <View style={{flex:1, flexDirection:'column', borderWidth:2, borderColor:'purple', borderRadius:10, marginHorizontal:10 , marginBottom:60 }}>      

                <View style={{flex:8, flexDirection:'column',  alignItems:'center', alignContent:'center',  marginHorizontal:10 }} >
                    <Text>{componentGroupName}</Text>
                    {coreComponent}                
                </View>      
                
            </View>
        </View>
    );

}