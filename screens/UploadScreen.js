import React , {useState, useContext} from 'react';
import {TouchableNativeFeedback,ScrollView,View,Text, FlatList, TextInput, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements'
import DocumentPicker from 'react-native-document-picker';
import HiluxCameraCapture from '../components/HiluxCameraCapture';
import HiluxCameraCaptureCrop from '../components/HiluxCameraCaptureCrop';


export default function UploadScreen () {


    async function activateCamera() {
        <HiluxCameraCapture/>
    }

    async function activatePicker() {
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.images],
            });
            console.log(
              res.uri,
              res.type, // mime type
              res.name,
              res.size
            );
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              throw err;
            }
          }
    }

    return(  

        <View style={{flex:1, margin:5}}>
            <HiluxCameraCaptureCrop/>
        </View>




    );
      
  
};