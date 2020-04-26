import React , {useState} from 'react';
import {TouchableOpacity, View,Text, Image, StyleSheet} from 'react-native';
import HiluxText from './HiluxText';
import { Card, Button,Avatar } from 'react-native-elements';



const UserCard = props => {
    
    var titleColor = '#af79ec';
    var titleFontSize = 20;

    var profileNameColor = '#a4a4a4';
    var profileNameFontSize = 14;

    return (        
        <View style={styles.userMasterWrapper}>
            <View style={styles.avatarBlockStyle}>
                <Avatar
                rounded
                size='large'
                editButton={{color:'#FFF', containerStyle:{backgroundColor:'dodgerblue', borderRadius:15, padding:2} }}
                overlayContainerStyle={{borderWidth:3, borderColor:'#af79ec', }}
                
                source={{
                    uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
                showEditButton
                />
             </View>
            <View style={styles.titleBlockStyle}>                
                <HiluxText style={{fontFamily:'Roboto-Bold' ,fontSize :titleFontSize, color:titleColor }} >My Dashboard</HiluxText>
            </View>
            <View style={styles.profileNameBlockStyle}>
                <HiluxText style={{fontFamily:'Roboto-Bold' ,fontSize :profileNameFontSize, color:profileNameColor }} >Individual: Qasim Al Nauri Mohamad Ahmad</HiluxText>
            </View>   
            <View style={styles.buttonBlockStyle}>
                



                    <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'dodgerblue',  paddingHorizontal:20, paddingVertical:5, marginHorizontal:10, borderRadius:7}} onPress={()=> {alert("viewProf")}}>
                            <View style={{backgroundColor:'transparent'}}>
                                <HiluxText style={{ fontFamily:'Roboto-Bold', fontSize:14 , color:'white'}}>View Profile</HiluxText>
                            </View>                            
                    </TouchableOpacity>



                    <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'dodgerblue',  paddingHorizontal:20,  paddingVertical:5, marginHorizontal:10, borderRadius:7}} onPress={()=> {alert("switchAcct")}}>
                            <View>
                                <HiluxText style={{ fontFamily:'Roboto-Bold', fontSize:14 , color:'white'}}>Switch Account</HiluxText>
                            </View>                            
                    </TouchableOpacity>
                
                
            </View>     
        </View>

        
    )
}

const styles = StyleSheet.create({

    userMasterWrapper: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
        borderRadius:10,
        backgroundColor:'white',
        marginBottom:30,        
        marginTop:0,      
        zIndex:5,
        height:150,
        
    },
    avatarBlockStyle:{        
        justifyContent:'center',  
        marginTop:-30,      
        
    },  
    titleBlockStyle:{
        justifyContent:'center',
        flex:1
    }, 
    profileNameBlockStyle:{                        
        justifyContent:'center',
        flex:1
    },
    buttonBlockStyle:{
        flexDirection:'row',        
        justifyContent:'space-between',
        marginVertical:10,
        flex:1
    }, 


  });

export default UserCard;