import theme from '../styles/theme.style';
import * as React from 'react';

import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

 const GradBottomTabShadowView = () => {
    return (
        <View   >
            <Svg height="100%" width="100%">
            <Defs>
                <LinearGradient id="hiluxShadowgrad" x1="50%" y1="100%" x2="50%" y2="50%">
                <Stop offset="0" stopColor="#000000" stopOpacity="0.15" />                
                <Stop offset="1" stopColor="#000000" stopOpacity="0" />                
                </LinearGradient>
            </Defs>
            <Rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#hiluxShadowgrad)"                
            />
            
            </Svg>

        </View>

     );
};

const styles = StyleSheet.create({
    shadowViewStyle : {
        position:'absolute',
        top:0,
        left:0,
    }
});

export default GradBottomTabShadowView;