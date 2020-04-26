import React , {Component, useState} from 'react';
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
  
  

export default class NewsFeedCarousel extends Component {

    _renderItem ({item, index}) {
        return <MySlideComponent data={item} />
    }

    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }

    render () {
        return (
            <View>
                <Carousel
                  data={newslist}
                  renderItem={({ item }) => <NewsCardElement headline={item.headline} imageuri={item.imageuri} />}
                  onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                />
                { this.pagination }
            </View>
        );
    }
}