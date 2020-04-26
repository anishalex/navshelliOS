import * as React from 'react';
import { View, Button, Text } from 'react-native';


export default function AboutStackPlanScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>AboutStackPlanScreen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  