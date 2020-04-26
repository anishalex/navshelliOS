import React , {useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HiluxText from './HiluxText';

const CircleArrowDivider = props => {
    

    return (
        <View style={styles.dividerWrapper}>
            <View style={styles.lineWrapper}>
            <Divider style={{ backgroundColor: '#c0c0c040', height:2}} />
            </View>        
            <View style={styles.iconWrapper}>
                <Icon name='arrow-left' size={25} color="#D0d0d0" style={{marginRight:5}} />
                <Icon name='circle-outline' size={20} color="#D0d0d0" style={{paddingTop:2}}/>
                <Icon name='arrow-right' size={25} color="#D0d0d0" style={{marginLeft:5}} />
            </View>
        </View>

        
    );
}

const styles = StyleSheet.create({
    dividerWrapper: {        
        flexDirection:'row',         
                    
      },  
    lineWrapper: {        
        width:'100%',

        position:'absolute',
        top:'45%',
        left:0,
      },  
    iconWrapper: {        
        flexDirection:'row', 
        flex:1,
        justifyContent:'center',
      },  


});

export default CircleArrowDivider;