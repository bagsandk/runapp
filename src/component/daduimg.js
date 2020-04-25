import React from 'react';
import { Animated, Text } from 'react-native';

const ImageDadu = ({ mata, inter, move }) => {
    if (mata == 1) {
        return (
            <Animated.Image
                source={require('../assets/img/dadu1.png')}
                style={{ width: 104, height: 104, transform: [{ rotate: inter }], bottom: move, }} >
            </Animated.Image>
        )
    } else if (mata == 2) {
        return (<Animated.Image
            source={require('../assets/img/dadu2.png')}
            style={{ width: 104, height: 104, transform: [{ rotate: inter }], bottom: move }} >
        </Animated.Image>)
    } else if (mata == 3) {
        return (<Animated.Image
            source={require('../assets/img/dadu3.png')}
            style={{ width: 104, height: 104, transform: [{ rotate: inter }], bottom: move }} >
        </Animated.Image>)
    } else if (mata == 4) {
        return (<Animated.Image
            source={require('../assets/img/dadu4.png')}
            style={{ width: 104, height: 104, transform: [{ rotate: inter }], bottom: move }} >
        </Animated.Image>)
    } else if (mata == 5) {

        return (<Animated.Image
            source={require('../assets/img/dadu5.png')}
            style={{ width: 104, height: 104, transform: [{ rotate: inter }], bottom: move }} >
        </Animated.Image>)
    } else if (mata == 6) {
        return (<Animated.Image
            source={require('../assets/img/dadu6.png')}
            style={{ width: 104, height: 104, transform: [{ rotate: inter }], bottom: move }} >
        </Animated.Image>)
    } else {
        return <Text></Text>
    }
}
export default ImageDadu