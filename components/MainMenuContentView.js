import React , {useState} from 'react';
import {View,Text, FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import MenuTabEdge from './MenuTabEdge';
import MainMenuTabEdge from './MainMenuTabEdge';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, {Path,} from 'react-native-svg';
import {ActiveStartTab, InactiveStartTab, ActiveMidTab, InactiveMidTab, ActiveEndTab, InactiveEndTab} from './AllMenuTabs';




const fakeMenuScreen = [
  {
    key: 'sales',
    iconName: 'exclamation',
    label: 'Sales',
  },
  {
    key: 'registration',
    iconName: 'undo',
    label: 'Registration',
  },
    {
    key: 'mortgages',
    iconName: 'bullhorn',
    label: 'Mortgages',
  },

];




const MenuItem = props => {
    return(
        <View style={{flex:1, backgroundColor:"white"}}>
        

        </View>
    );
}

const MainMenuContentView = props => {      
  const numCols = 3;  
  return (      
        <View style={{ flexDirection:"row", flex:1,  backgroundColor:'white',  }}>      
          <FlatList
            data={fakeMenuScreen}
            renderItem={({ item }) => <Text>{item.label}</Text>}
            numColumns={numCols}
            columnWrapperStyle={{}}
            keyExtractor={item => item.key}
          />                  
        </View>              
    );
}

const styles = StyleSheet.create({});

export default MainMenuContentView;