import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FAFAFA', justifyContent: 'center' }}>
            <View style={{ backgroundColor: '#FAFAFA', alignItems: 'center', justifyContent: 'flex-end', flex: 1, marginTop: 49 }}>
                <Image source={require('../../../assets/img/dicetitle.png')} style={{ width: 220, height: 127, }} />
            </View>
            <View style={{ justifyContent: 'center', backgroundColor: '#FAFAFA', flexDirection: 'row', flex: 1, marginTop: 9 }}>
                <TouchableOpacity style={{ backgroundColor: '#FF6600', width: 92, height: 50, borderRadius: 14, justifyContent: 'center', marginHorizontal: 14 }} onPress={() => { navigation.navigate('Dadu1') }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'normal' }}>1 DIE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FF6600', width: 92, height: 50, borderRadius: 14, justifyContent: 'center', marginHorizontal: 14 }} onPress={() => { navigation.navigate('Dadu2') }}>
                    <Text style={{ textAlign: 'center', color: 'black', }}>2 DICE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#FF6600', width: 92, height: 50, borderRadius: 14, justifyContent: 'center', marginHorizontal: 14 }} onPress={() => { navigation.navigate('Dadu3') }}>
                    <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'normal', }} >3 DICE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Home
