import React , {useState} from 'react';
import {View,Text, FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import MenuTabEdge from './MenuTabEdge';
import MainMenuTabEdge from './MainMenuTabEdge';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, {Path,} from 'react-native-svg';
import {ActiveStartTab, InactiveStartTab, ActiveMidTab, InactiveMidTab, ActiveEndTab, InactiveEndTab} from './AllMenuTabs';


function tester(){
  console.log("test clicked");
}

const menuInterTabSpace = 10;
function TopTabGenerator(tabPos, tabActive, label, tabID, updateHook) {
  let tabComponent;  

  
  switch (tabPos){
    

    case 'start':
      if (tabActive) {
        tabComponent = <ActiveStartTab label={label} tabID={tabID} tabSelUpdater={updateHook}/>
      } else {
        tabComponent = <InactiveStartTab label={label}  tabID={tabID} tabSelUpdater={updateHook}/>
      }
      break;

    case 'mid':
      if (tabActive) {
        tabComponent = <ActiveMidTab label={label}  tabID={tabID} tabSelUpdater={updateHook}/>
      } else {
        tabComponent = <InactiveMidTab label={label}  tabID={tabID} tabSelUpdater={updateHook}/>
      }
      break;

    case 'end':
      if (tabActive) {
        tabComponent = <ActiveEndTab label={label}  tabID={tabID} tabSelUpdater={updateHook}/>
      } else {
        tabComponent = <InactiveEndTab label={label}  tabID={tabID} tabSelUpdater={updateHook}/>
      }
      break;
  
  }

    
    return (tabComponent);

}

function generateStrip(contentList, updateHook){

  let stripComponent = [];
  for(let i=0;i<contentList.length;i++) {
    stripComponent = stripComponent.concat( [TopTabGenerator(contentList[i].tabPos,contentList[i].tabActive,  contentList[i].label,contentList[i].id, updateHook )] );
  }
  return stripComponent
}

const MenuTabStrip = props => {      
  return (      
      <View style={{ flexDirection:"row", flex:1,  backgroundColor:'transparent',  justifyContent:'space-between', alignItems:'center', marginBottom: -5}}>
        {generateStrip(props.content, props.tabClickHook)}

      </View>              
  );
}

const styles = StyleSheet.create({});

export default MenuTabStrip;