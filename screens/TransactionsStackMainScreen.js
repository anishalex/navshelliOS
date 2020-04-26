import * as React from 'react';
import { View, Button, Text } from 'react-native';


export default function TransactionsStackMainScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>TransactionsStackMainScreen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  