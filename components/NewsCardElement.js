import React , {useState} from 'react';
import {View,Text, Image, StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-elements';


const NewsCardElement = props => {
    

    return (        
            <Card containerStyle={styles.cardStyle}>
                <View style={styles.cardContentWrapper}>
                    <View style={styles.imageContainerStyle}>
                        <Image resizeMode='contain' resizeMethod='auto' style={styles.imageStyle} source={{uri: props.imageuri}}/>
                    </View>
                    <View style={styles.textContainerStyle}>
                        <Text style={{fontFamily:'Roboto-Bold' ,fontSize :14 }} >Headline goes here</Text>
                        <Text style={{fontFamily:'Roboto-Light', fontSize :12 }} >{props.headline}</Text>
                    </View>
                    

                </View>                
            </Card>            
    )
}

const styles = StyleSheet.create({

    imageStyle: {
        width: 250,
        height: 70,
        padding: 5,
        borderRadius:5,
      },
    cardStyle:{
        backgroundColor: '#ffffff', 
        borderRadius:10,
    },
    cardContentWrapper:{                
        borderRadius: 10,         
        flexDirection : 'row'
        
    },
    imageContainerStyle:{
        justifyContent:'center',                        
        borderRadius: 10, 
        flex:2,
        flexDirection:'row',

    },

    textContainerStyle:{
        marginHorizontal : 5,        
        borderColor: 'green',           
        borderRadius: 10, 
        flex:4,
    },
  

  });

export default NewsCardElement;