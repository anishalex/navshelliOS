import React , {useState} from 'react';
import {SafeAreaView,View,Text, FlatList,StyleSheet} from 'react-native';

import NewsCardElement from './NewsCardElement';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const newslist = [
    {
      id: 'news1',
      headline: 'What you need to know about coronavirus on Monday, March 30',
      imageuri: 'https://harrierlabs.com/anish/images/1.jpg',
    },
    {
        id: 'news2',
        headline: 'Social distancing is a privilege of the middle class. For Indias slum dwellers, it will be impossible',
        imageuri: 'https://harrierlabs.com/anish/images/2.jpg',
  
      },
      {
        id: 'news3',
        headline: 'Cruise ships are still scrambling for safe harbor',
        imageuri: 'https://harrierlabs.com/anish/images/3.jpg',
  
    },


  ];
  

const NewsFeedScroller = () => {
    const [coune,setCounterr] = useState(0);

    return (
      <View style={{backgroundColor:'transparent', justifyContent:'center', marginBottom:100}}>
        <Carousel          
          data={newslist}
          renderItem={({ item }) => <NewsCardElement headline={item.headline} imageuri={item.imageuri} />}
          sliderWidth= {400}
          itemWidth={400}
        />

      </View>
 
                
        
    )
}

const styles = StyleSheet.create({});

export default NewsFeedScroller;