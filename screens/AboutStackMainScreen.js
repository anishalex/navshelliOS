import * as React from 'react';
import { View, Button, Text, StyleSheet, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';


export default function AboutStackMainScreen({ navigation }) {
    return (
      <ScrollView style={styles.masterScrollViewStyle}>
        <View style={{ flex: 1, height:300, justifyContent: 'center', alignItems: 'center',  }}>        
          <Text>AboutStackMainScreen</Text>
          <Button title="Go to message" onPress={() => navigation.navigate("Message") } />          
            <LottieView source={require('../assets/animations/progresscirc.json')} autoPlay loop />                    
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    masterScrollViewStyle : {
    
      flex:1,
      backgroundColor:'white',
      borderWidth:3,
      elevation:1,
      position:'absolute',
      width:'100%',
      height:'120%',
      top:-25,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
    }
});