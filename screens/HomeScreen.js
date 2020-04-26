import React , {useState} from 'react';
import {TouchableNativeFeedback,ScrollView,View,Text, FlatList,StyleSheet} from 'react-native';
import Header from 'react-native-elements';
import HScrollBlock from '../components/HScrollBlock';
import HScrollBlockWithSettings from '../components/HScrollBlockWithSettings';
import NewsFeedScroller from '../components/NewsFeedScroller';
import NewsFeedCarousel from '../components/NewsFeedCarousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserStatsPanel from '../components/UserStatsPanel';
import UserCard from '../components/UserCard';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

const mostUsedServices = [
  {
    id: 's1',
    serviceName: 'S1',
    title: 'Service 1',
    iconName : 'gavel',
    isFocused: false,
  },
  {
      id: 's2',
      serviceName: 's2',
      title: 'Service 2',
      iconName : 'newspaper',
      isFocused: false,
    },
    {
      id: 's3',
      serviceName: 's3',
      title: 'Service 3',
      iconName : 'hand-okay',
      isFocused: false,
    },
    {
      id: 's4',
      serviceName: 's4',
      title: 'Service 4',
      iconName : 'bank',
      isFocused: true,
    },
    {
      id: 's5',
      serviceName: 's5',
      title: 'Service 5',
      iconName : 'clipboard-account-outline',
      isFocused: false,
    },    
    {
      id: 's6',
      serviceName: 's6',
      title: 'Service 6',
      iconName : 'cash-multiple',
      isFocused: false,
    },
    {
      id: 's7',
      serviceName: 's7',
      title: 'Service 7',
      iconName : 'checkbox-marked',
      isFocused: false,
    },
    {
      id: 's8',
      serviceName: 's8',
      title: 'Service 8',
      iconName : 'account-card-details',
      isFocused: false,
    },
    {
      id: 's9',
      serviceName: 's9',
      title: 'Service 9',
      iconName : 'comment-account',
      isFocused: false,
    },

];


const myFavouriteServices = [
  {
    id: 'serviceid2',
    serviceName: 'Steps',
    title: 'New Registration',
    iconName : 'clipboard-account-outline',
    isFocused: false,
  },
  {
    id: 'serviceid1',
    serviceName: 'Sale',
    title: 'News',
    iconName : 'hand-okay',
    isFocused: false,
  },
    {
      id: 'serviceid4',
      serviceName: 'News',
      title: 'Commercial',
      iconName : 'newspaper',
      isFocused: true,
    },
    {
      id: 'serviceid3',
      serviceName: 'Auctions',
      title: 'Auctions',
      iconName : 'gavel',
      isFocused: false,
    },
    {
      id: 'serviceid5',
      serviceName: 'Transfer',
      title: 'Transfer',
      iconName : 'checkbox-marked',
      isFocused: false,
    },
    {
      id: 'serviceid6',
      serviceName: 'Channel',
      title: 'Transfer',
      iconName : 'account-card-details',
      isFocused: false,
    },
    {
      id: 'serviceid7',
      serviceName: 'Fee',
      title: 'Transfer',
      iconName : 'clipboard-account-outline',
      isFocused: false,
    },

  ];




const HomeScreen = () => {


    return (
      <ScrollView style={styles.masterScrollViewStyle}>        
          <UserCard/>          
            <Text style={{fontFamily:'Roboto-Bold' ,fontSize :16 , marginHorizontal:20, color:'dimgray' }} >My Favourite Services</Text>
            <HScrollBlock  blockNames={mostUsedServices}/>
            <Text style={{fontFamily:'Roboto-Bold' ,fontSize :16 , marginHorizontal:20, color:'dimgray' }} >Other Services</Text>
            <HScrollBlock  blockNames={myFavouriteServices}/>
            <Text style={{fontFamily:'Roboto-Bold' ,fontSize :16, marginHorizontal:20, color:'dimgray' }} >My Statistics</Text>
            <UserStatsPanel/>
            <Text style={{fontFamily:'Roboto-Bold' ,fontSize :16, marginHorizontal:20, color:'dimgray' }} >AJRE News Feed</Text>
            <NewsFeedScroller/>
        
      </ScrollView>

    )
}

const styles = StyleSheet.create({

  masterScrollViewStyle : {
    
    flex:1,
    backgroundColor:'white',
    
    elevation:3,
    position:'absolute',
    width:'100%',
    height:'120%',
    top:-25,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },


});

export default HomeScreen;