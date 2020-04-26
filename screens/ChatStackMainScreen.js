import * as React from 'react';
import { View, Button, Text } from 'react-native';


export default function ChatStackMainScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ChatStackMainScreen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  