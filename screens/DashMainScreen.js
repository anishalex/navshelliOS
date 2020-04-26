import React , {useState, useContext} from 'react';
import {SafeAreaView,TouchableNativeFeedback,ScrollView,View,Text, FlatList,StyleSheet} from 'react-native';
import Header, { withTheme } from 'react-native-elements';
import HScrollBlock from '../components/HScrollBlock';
import HScrollBlockWithSettings from '../components/HScrollBlockWithSettings';
import NewsFeedScroller from '../components/NewsFeedScroller';
import NewsFeedCarousel from '../components/NewsFeedCarousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserStatsPanel from '../components/UserStatsPanel';
import UserCard from '../components/UserCard';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import Modal from 'react-native-modal';
import NavigationStateContext from '../context/NavigationStateContext';
import DashMainListItem from '../components/DashMainListItem';
import MenuFrame from '../components/MenuFrame';


function modalMenuDisplay (showModal){
    console.log("menu fired");
    const {data, toggleMainMenu} = useContext(NavigationStateContext);
    return (
        <View>
          <Modal onBackdropPress={()=> {toggleMainMenu();} } onBackButtonPress={()=> {toggleMainMenu();} } isVisible={showModal}>
            
              <View style={{flex:1.0}}>
                <MenuFrame/>

              </View>
            
          </Modal>
        </View>
      )
  }

    const dashMainListItems = [
      {
        id: '1',
        serviceName: 'mostused',
        title: 'Most Used Services',        
        
      },
      {
        id: '2',
        serviceName: 'favourites',
        title: 'My Favourite Services',
      },
        {
          id: '3',
          serviceName: 'userstats',
          title: 'My Satistics',
        },
        {
          id: '4',
          serviceName: 'news',
          title: 'AJRE News Feed',
        },

      ];
    

const DashMainScreen = () => {
    
    const {data, toggleMainMenu} = useContext(NavigationStateContext);
    return (
    
    <SafeAreaView style={styles.dashMasterViewStyle}>  
        {modalMenuDisplay(data)}      
        <UserCard style={{flex:0.2}}/>          
            <View style={{flex:1, zIndex:5}}>
              <FlatList                                                
                  data={dashMainListItems}
                  renderItem={ ({ item }) => <DashMainListItem itemType={item.serviceName} itemTitle={item.title}  />}
                  keyExtractor={item => item.id}
                  onLayout={(event) => {
                      null
                  } }
                  onScroll={(event) => {
                      null
                  } }
                  
                  snapToInterval={1}                  
                  decelerationRate="fast"
                  pagingEnabled={true} />                                           
            </View>        
    </SafeAreaView>

    )
}

const styles = StyleSheet.create({


  dashMasterViewStyle: {
    flex:1, 
    backgroundColor:'#F0F0F0',
    
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginTop:-15,
    elevation:1
  },  
  masterScrollViewStyle : {
    
    flex:1,
    backgroundColor:'#ff000066',    
    elevation:1,
    position:'absolute',
    width:'100%',
    height:'120%',    

  },


});

export default DashMainScreen;