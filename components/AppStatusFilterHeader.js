import React , {useState} from 'react';
import { StyleSheet,View,Text, FlatList,ActivityIndicator, Image,} from 'react-native';
import {Button} from 'react-native-elements';

const statusValues = [
    {
        id:0,
        name:'Pending',
        statval:'pending',
        statBackColour: 'yellow',
        statTextColour: 'black',
    },
    {
        id:1,
        name:'In Process',
        statval:'process',
        statBackColour: 'orange',
        statTextColour: 'black',
    },
    {
        id:2,
        name:'Payment',
        statval:'payment',
        statBackColour: 'rebeccapurple',
        statTextColour: 'white',
    },
    {
        id:3,
        name:'Canceled',
        statval:'cancel',
        statBackColour: 'grey',
        statTextColour: 'white',
    },
    {
        id:4,
        name:'Rejected',
        statval:'reject',
        statBackColour: 'orangered',
        statTextColour: 'white',
    },
    {
        id:5,
        name:'Success',
        statval:'success',
        statBackColour: 'mediumseagreen',
        statTextColour: 'white',
    },


]

const itemsPerRow = 3;



export default function AppStatusFilterHeader(props) {
    return (
      
      <View >
        <FlatList
          data={statusValues}
          renderItem={({ item }) => 
            <View style={{ flex: 1, flexDirection: 'row', margin: 1 }}>            
              <Button buttonStyle={{backgroundColor:item.statBackColour}} titleStyle={{color:item.statTextColour}} title={item.name}/>
            </View>
          }
          //Setting the number of column
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </View>

    );
  }

  const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'flex-start',
      flex: 1,
      paddingTop: 100,
    },

  });
  