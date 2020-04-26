import React , {useState} from 'react';
import {SafeAreaView,View,Text, FlatList,StyleSheet} from 'react-native';

import ApplicationElement from '../components/ApplicationElement'
import SingleAppElement from '../components/SingleAppElement'
import AppStatusFilterHeader from '../components/AppStatusFilterHeader'
import TestScreen from './TestScreen';


const myApplications = [
    {
      id: 'serviceid1',
      serviceName: 'Service Name1',
      serviceDateTime: '18 March 2020, 9:45AM',
      serviceStatus: 'success',
      landNumber : 101023456,
      contractValue: 'AED 500,000.00'
    },
    {
        id: 'serviceid2',
        serviceName: 'Service Name2',
        serviceDateTime: '18 March 2020, 9:45AM',
        serviceStatus: 'progress',
        landNumber : 101023456,
        contractValue: 'AED 500,000.00'
      },
      {
        id: 'serviceid3',
        serviceName: 'Service Name3',
        serviceDateTime: '18 March 2020, 9:45AM',
        serviceStatus: 'payment',
        landNumber : 101023456,
        contractValue: 'AED 500,000.00'
      },


  ];
  

const MyApplicationsListScreen = () => {
    const [coune,setCounterr] = useState(0);

    return (
      <View>
        <AppStatusFilterHeader />
        <FlatList            
          data={myApplications}
          renderItem={({ item }) => <SingleAppElement serviceName={item.serviceName} servicDateTime={item.serviceDateTime} serviceStatus={item.serviceStatus} landNumber={item.landNumber} contractStatus={item.contractStatus} />}
          keyExtractor={item => item.id} />
      </View>
 
                
        
    )
}

const styles = StyleSheet.create({});

export default MyApplicationsListScreen;