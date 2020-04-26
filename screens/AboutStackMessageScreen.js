import * as React from 'react';
import { View, Button, Text } from 'react-native';


export default function AboutStackMessageScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>AboutStackMessageScreen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  