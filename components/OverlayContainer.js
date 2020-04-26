import React from 'react'
import { View, StyleSheet } from 'react-native'



// Show something on top of other
const OverlayContainer = props => {  
    return (
      <View style={styles.container}>
        <View style={styles.rightCorner}>
          <View style={styles.behind}>
            {props.behind}
          </View>
          {props.front}
        </View>
        {props.under}
      </View>
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
  },
  center: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rightCorner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  behind: {
    
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  }
})

export default OverlayContainer;