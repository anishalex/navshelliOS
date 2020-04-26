import React , {useState} from 'react';
import {SafeAreaView,View,Text, FlatList,StyleSheet} from 'react-native';
import { Card, Button } from 'react-native-elements';



function getStatusButton(currStatus){

    console.log({currStatus});

    if ( currStatus ==='success') {
        return <Button  titleStyle={styles.buttonTitleStyle} title='Success' />
    } else {
        
        if ( currStatus ==='progress') {
            return <Button  titleStyle={styles.buttonTitleStyle} title='In Progress' />
        } else {
            return <Button  titleStyle={styles.buttonTitleStyle} title='Payment' />
        }    
    } 
     
}


const SingleAppElement = props => {
    

    return (        
            <Card>                 
                <View style={styles.headerRowStyle}> 
                    <Text>{props.serviceName}</Text>
                    <Text>{props.serviceDateTime}</Text>

                    {getStatusButton(props.serviceStatus)}
                    
                </View>                
                <View style={styles.bodyRowStyle}> 
                    <Text> Land Number : 1010123456 </Text>
                    <Text> Contract Value: AED 500,000.00 </Text>
                </View>
                <View style={styles.footerRowStyle}> 
                    <Button title='DOCS' />
                </View>
                
            </Card>            
    )
}

const styles = StyleSheet.create({


    applicationCardStyle:{        
        borderWidth:10,        
        borderColor: 'red',           
        borderRadius: 10, 
    },

    headerRowStyle:{
        flexDirection: 'row' ,
        alignItems: 'center',
        justifyContent: 'space-between',
        

    },

    bodyRowStyle:{

        justifyContent: 'center',

    },

    footerRowStyle:{
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },


 

    textOneStyle:{
        borderWidth:3,
        borderColor: 'red',                
        
    },
    textTwoStyle:{
        borderWidth:3,
        borderColor: 'red',   
        flex : 1, 
        position :  'absolute',
        ...StyleSheet.absoluteFill
        
    },

    textThreeStyle:{
        borderWidth:3,
        borderColor: 'red',        
        
    },


    successButtonStyle:{
        borderColor: 'darkseagreen',         
    },
    progressButtonStyle:{
        borderColor: 'orange', 
    },
    payButtonStyle:{
        borderColor: 'mediumpurple', 
    },    
    failedButtonStyle:{
        borderColor: 'crimson', 
    },    

    docsActionButtonStyle:{
        borderColor: 'darkseagreen', 
    },
    payActionButtonStyle:{
        borderColor: 'mediumpurple', 
    },    

    buttonTitleStyle:{
        fontSize :12,
    },

  });

export default SingleAppElement;