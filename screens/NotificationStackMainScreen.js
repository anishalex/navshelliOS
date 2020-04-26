import * as React from 'react';
import { View, Button, Text } from 'react-native';


export default function NotificationStackMainScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>NotificationStackMainScreen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  