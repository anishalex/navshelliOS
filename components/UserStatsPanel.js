import React , {useState} from 'react';
import {View,Text, Image, StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-elements';


const UserStatsPanel = props => {
    
    var statValColor = '#af79ec';
    var statNameColor = '#A4A4A4';

    var statValSize = 20;
    var statNameSize = 12;


    return (        
        <View style={styles.statContainerStyle}>
            <View style={styles.statStartBlockStyle}>
                <View style={styles.statContentWrapperStyle}>
                    <Text style={{fontFamily:'Roboto-Medium' ,fontSize :statValSize, color:statValColor }} >07</Text>
                    <Text style={{fontFamily:'Roboto-Medium' ,fontSize :statNameSize, color:statNameColor }} >Lands</Text>
                </View>
            </View>
            <View style={styles.statCenterBlockStyle}>
                <View style={styles.statContentWrapperStyle}>
                    <Text style={{fontFamily:'Roboto-Medium' ,fontSize :statValSize, color:statValColor }} >04</Text>
                    <Text style={{fontFamily:'Roboto-Medium' ,fontSize :statNameSize, color:statNameColor }} >Pendings</Text>
                </View>
            </View>
            <View style={styles.statCenterBlockStyle}>
                <View style={styles.statContentWrapperStyle}>
                    <Text style={{fontFamily:'Roboto-Medium' ,fontSize :statValSize, color:statValColor }} >15.5 M</Text>
                    <Text style={{fontFamily:'Roboto-Medium' ,fontSize :statNameSize, color:statNameColor }} >Land Value</Text>
                </View>
            </View>
            <View style={styles.statEndBlockStyle}>
                <View style={styles.statContentWrapperStyle}>
                   <Text style={{fontFamily:'Roboto-Medium' ,fontSize :statValSize, color:statValColor }} > 42.2 M</Text>
                    <Text style={{fontFamily:'Roboto-Medium' ,fontSize :statNameSize, color:statNameColor }} >Mortgage</Text>
                </View>
            </View>
        

        </View>

        
    )
}

const styles = StyleSheet.create({

    statContainerStyle: {
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:5,                
        backgroundColor:'transparent',
        marginHorizontal:20

    }, 
    statStartBlockStyle:{
        backgroundColor:'white',
        marginHorizontal:1,
        flex:1
    }, 
    statCenterBlockStyle:{                        
        justifyContent:'center',
        backgroundColor:'white',
        marginHorizontal:1,
        flex:1
    },
    statEndBlockStyle:{
        justifyContent:'center',
        backgroundColor:'white',
        marginHorizontal:1,
        flex:1
    }, 
    statContentWrapperStyle:{
        margin:5,
        paddingVertical:15,
        justifyContent:'center',        
        alignItems:'center',
        justifyContent:'center',
    },

  });

export default UserStatsPanel;