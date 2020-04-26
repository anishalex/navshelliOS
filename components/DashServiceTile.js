import React , {useState} from 'react';
import {SafeAreaView,View,Text,StyleSheet, Vibration, ShadowPropTypesIOS} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HiluxText from './HiluxText';
import ShadowView from 'react-native-simple-shadow-view'
import CardView from 'react-native-cardview'

const DashServiceTile = props => {
    

    return (
            <View style={styles.cardContainerStyle}>
                <ShadowView style={styles.shadowViewStyle}>                
                        <View  style={styles.cardViewStyle}>
                            <Icon name={props.iconName} size={42} color={props.isFocused ? "dodgerblue":"lightgray"} />
                            <View style={styles.cardLabelStyle}>
                                <HiluxText style={{textAlign:'center',}}>{props.title}</HiluxText>                        
                            </View>                    
                        </View>                
                </ShadowView>
            </View>            
    );
}

const styles = StyleSheet.create({
    
    shadowViewStyle:{
        width: 80,
        height: 80,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 20,
        shadowOffset: { width: 1, height: 1 },
        backgroundColor: 'rgba(0,0,0,0.05)', 
        borderRadius:10,    
    },
    cardContainerStyle: {        
        backgroundColor:'#00000008',
        padding:10,
        
      },  
      cardViewStyle: {        
        justifyContent:'center',
        alignItems:'center',        
        elevation:0,
        backgroundColor:'white',
        borderRadius:10,
        padding:10
        
      },  
      cardLabelStyle: {        
          
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'center'        
      },  
});

export default DashServiceTile;