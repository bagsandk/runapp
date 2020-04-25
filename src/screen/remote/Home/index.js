import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import serverr from '../../../tcp/tcpserver/server';

const Home = ({ navigation }) => {
    const tcps = useSelector(state => state.tcpsreducer)
    const dispatch = useDispatch();
    serverr()
    return (
        <View style={{ backgroundColor: 'black', alignItems: 'center', justifyContent: 'flex-end', flex: 1, paddingBottom: 40 }}>
            <TouchableOpacity style={{ width: 100, height: 40, borderRadius: 20, justifyContent: 'center', borderColor: '#FFD700', borderWidth: 2, marginVertical: 14 }} onPress={() => { navigation.navigate('Dadu1') }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>1 Dice</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 100, height: 40, borderRadius: 20, justifyContent: 'center', borderColor: '#FFD700', borderWidth: 2, marginVertical: 14 }} onPress={() => { navigation.navigate('Dadu2') }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>2 Dice</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 100, height: 40, borderRadius: 20, justifyContent: 'center', borderColor: '#FFD700', borderWidth: 2, marginVertical: 14 }} onPress={() => { navigation.navigate('Dadu3') }}>
                <Text style={{ textAlign: 'center', color: 'white' }} >3 Dice</Text>
            </TouchableOpacity>
            <Image source={require('../../../assets/img/daduremote.png')} style={{ width: 230, height: 147, }} />
        </View>
    )
}
export default Home
