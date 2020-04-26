import React , {useState} from 'react';
import {SafeAreaView,View,Text, FlatList,StyleSheet, ShadowPropTypesIOS} from 'react-native';
import {Card} from 'react-native-elements';


  

const ServiceTile = props => {
    

    return (
        <Card style={styles.cardView} >
            <Text> {props.title} </Text>
        </Card>                 
        
    );
}

const styles = StyleSheet.create({
    cardView: {
        paddingBottom: 1,
      },  

});

export default ServiceTile;