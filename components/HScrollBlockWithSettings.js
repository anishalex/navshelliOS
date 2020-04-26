import React , {useState} from 'react';
import {TouchableNativeFeedback, View,Text, FlatList,StyleSheet} from 'react-native';
import ServiceTile from './ServiceTile'

import OverlayContainer from './OverlayContainer';


const displayList = listContents => {
  return (
    <FlatList            
    horizontal={true}
    data={listContents}
    renderItem={({ item }) => <ServiceTile title={item.serviceName} />}
    keyExtractor={item => item.id} />

  )
}
//<OverlayContainer front={gearButton()} behind={displayList(props.blockNames)} />                
const HScrollBlockWithSettings = props  => {
     return (
      <View style={styles.hScrollContainer} >
        <View>
          {displayList(props.blockNames)}
        </View>
      </View>
 
    )
}

const styles = StyleSheet.create({
  hScrollContainer: {
    backgroundColor: 'gainsboro',    
    marginBottom : 10,
    marginHorizontal : 10,    
  },



});

export default HScrollBlockWithSettings;