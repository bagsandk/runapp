import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Item from './fetch';
const TabH = ({ Dadu, render }) => {
    return (
        <FlatList
            data={Dadu}
            renderItem={({ item, index }) => <Item nilai={item.nilai} nilai2={item.nilai2} nilai3={item.nilai3} index={index} />}
            keyExtractor={(item, index) => index.toString()}
            extraData={render}
            showsVerticalScrollIndicator={false}
        />
    )
}
export default TabH