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
import { View, Dimensions } from 'react-native';

 function CustomNavHeader() {
    return (
        <View style={{flex:1}} >
            <Svg height="100" width={Dimensions.width}>
            <Defs>
                <LinearGradient id="hiluxPurplegrad" x1="0" y1="0" x2="70%" y2="75%">
                <Stop offset="0" stopColor="#62339d" stopOpacity="0.75" />                
                <Stop offset="1" stopColor="#62339d" stopOpacity="1" />                
                </LinearGradient>
            </Defs>
            <Rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#hiluxPurplegrad)"
                

            />
            
            </Svg>

        </View>

     );
};

export default CustomNavHeader;