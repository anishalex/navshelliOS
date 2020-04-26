import React, {useEffect} from "react";
import {View, Text, Button, TextInput, StyleSheet} from "react-native";
import { useForm } from 'react-hook-form';
import {Picker} from '@react-native-community/picker';
import { RHFInput } from './hookform';

const RNPick = () => {
    const { register, setValue, handleSubmit } = useForm();
    const onSubmit = data => {
      Alert.alert('Form Data', data);
      console.log(data);
    };
  
    const onChange = args => {
      return {
        value: args[0].nativeEvent.text,
      };
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>First name</Text>
        <RHFInput
          register={register}
          setValue={setValue}
          as={<TextInput style={styles.input} />}
          onChangeEvent={onChange}
          name="firstName"
        />
        <Text style={styles.label}>Last name</Text>
        <RHFInput
          register={register}
          setValue={setValue}
          as={<TextInput style={styles.input} />}
          name="lastName"
          onChangeEvent={onChange}
        />
  
        <View style={styles.button}>
          <Button
            style={styles.buttonInner}
            color
            title="Button"
            onPress={() => handleSubmit(onSubmit)()}
          />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    label: {
      color: 'white',
      margin: 20,
      marginLeft: 0,
    },
    button: {
      marginTop: 40,
      color: 'white',
      height: 40,
      backgroundColor: '#ec5990',
      borderRadius: 4,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: 30,
      padding: 8,
      backgroundColor: '#0e101c',
    },
    input: {
      backgroundColor: 'white',      
      height: 40,
      padding: 10,
      borderRadius: 4,
    },
  });

  export default RNPick;