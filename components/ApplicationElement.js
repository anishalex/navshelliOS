/*
import React from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';

const ApplicationElement = props => {
    
    return  (
        <View>
            <Image source={require('../assets/beach.jpg')}/>
            <Text> Applications List </Text> 
        </View>
    
    );
    
};

const styles = StyleSheet.create({});

export default ApplicationElement;
*/
import React from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const ApplicationElement = props => {
    
    return  (

        <Card
        title={props.serviceName}
        image={null}>
        <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
        
    
    );
    
};

const styles = StyleSheet.create({
    cardStyle: {
      paddingBottom:10,  
    },
});

export default ApplicationElement;

