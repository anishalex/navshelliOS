import React , {useState, useEffect} from 'react';
import {Animated,View,Text, FlatList,StyleSheet} from 'react-native';
import CircleArrowDivider from './CircleArrowDivider';
import ServiceTile from './ServiceTile'
import DashServiceTile from './DashServiceTile'
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';  


const HScrollBlock = props  => {

  const [count, setCount] = useState(0);


  const onViewableItemsChanged = ({ viewableItems, changed }) => {
    console.log("Visible items are", viewableItems);
    console.log("Changed in this iteration", changed);
  }
  function itemScaler(event) {
    console.log(`Scaler Event : ${event}`)
    console.log(event)
  }

  useEffect(() => {
    // Update the document title using the browser API
    console.log(`You clicked ${count} times`)
  });

  const onViewRef = React.useRef((viewableItems)=> {
    startIndex = 0;
    endIndex = viewableItems.viewableItems.length -1;
    minComponent = viewableItems.viewableItems[startIndex].key
    maxComponent = viewableItems.viewableItems[endIndex].key
    console.log("From ", minComponent , " to ", maxComponent)
  })

  return (

    <View style={styles.hScrollContainer}>
      <MaskedView
        style={styles.maskViewSizingStyle}        
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: 'transparent',              
            }}
          >

            <LinearGradient start={{x: 0.0, y: 0}} end={{x:1.0, y: 0}}  locations={[0.01,0.5,0.99 ]} colors={[  '#00000000', '#FFFFFFF0','#00000000' ]} style={styles.linearGradient}>                                    
                    <View style={{height:'100%', }}></View>                           
            </LinearGradient>
            

          </View>
        }
      >
        {/* Put in whatever you want to see under the transparency - in this case the list of services */}
        
        <View>
          <FlatList            
                horizontal={true}  
                style={styles.flatListStyle}            
                contentContainerStyle={styles.flatListConainerStyle}
                showsHorizontalScrollIndicator={false}
                data={props.blockNames}
                renderItem={({ item }) => <DashServiceTile title={item.serviceName} iconName={item.iconName} isFocused={item.isFocused}/>}
                keyExtractor={item => item.id}
                onLayout={(event) => {
                    null
                } }
                onScroll={(event) => {
                    null
                } }
                onViewableItemsChanged={onViewRef.current}                    
                snapToInterval={1}
                snapToAlignment="center"
                decelerationRate="fast"
                pagingEnabled={true} />   

          <View style={styles.dividerContainerStyle}>
            <CircleArrowDivider/>
          </View>
          
        </View>

        
      </MaskedView>
        

    </View>
 



  )      

}

const styles = StyleSheet.create({
  maskViewSizingStyle :{
    flexDirection: 'row', 
  },
  hScrollContainer: {    
    backgroundColor: 'transparent',
    marginHorizontal:3,
    
  },
  flatListStyle: {        
    backgroundColor:'white',    
  },
  flatListContainerStyle: {        
    backgroundColor:'red',
    alignItems:'center',        
  },
  dividerContainerStyle: {        
    backgroundColor:'transparent',    
    marginVertical:5,    
  },
  linearGradient: {   
    top:0,
    left:0,
    elevation:10,
  },


});

export default HScrollBlock;