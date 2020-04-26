import React, {useState, Component } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import I18n from '../locales/I18n'



const FormFactory = props => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text style={styles.textOneStyle}> { I18n.t('assmonkeys') } {count}   </Text>
            <Button title="press me" onPress={() => setCount(count + 1)} > </Button>
        </View>

    );
};




const styles = StyleSheet.create({


    applicationCardStyle:{        
        borderWidth:10,        
        borderColor: 'red',           
        borderRadius: 10, 
    },

    textOneStyle:{
        borderWidth:3,
        borderColor: 'red',                
        
    },
    

  });

export default FormFactory;