import React , {useState} from 'react';
import {View,Text, FlatList,StyleSheet} from 'react-native';
import TabEdge from './TabEdge';




const TabStrip = props => {      
    return (
      
        <View style={{backgroundColor:'#D0D0D0', marginRight:-10, justifyContent:'center'}}>
          <FlatList
            data={props.content}
            renderItem={({ item }) => 
              <TabEdge iconName={item.iconName}  label={item.label} tabActive={item.tabActive} />
            }          
            keyExtractor={item => item.id}
          />
        </View>        
      
    );
}

const styles = StyleSheet.create({});

export default TabStrip;