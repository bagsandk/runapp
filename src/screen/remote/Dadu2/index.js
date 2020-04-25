import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';



const Dadu2 = () => {
    const tcpss = useSelector(state => state.tcpsreducer)
    const { nilai, pesan } = tcpss
    const dispatch = useDispatch();

    const Tombol = ({ nilai, flow }) => {
        const _set = () => {
            if (flow == 1) {
                dispatch({ type: 'SET_NILAI1', value: nilai })
            } else if (flow == 2) {
                dispatch({ type: 'SET_NILAI2', value: nilai })
            } else {
                dispatch({ type: 'SET_NILAI3', value: nilai })
            }
        }
        return (
            <TouchableOpacity style={{ width: '100%', height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#FFD700' }} onPress={() => _set()}>
                <Text style={{ color: "white", fontSize: 20 }}>{nilai}</Text>
            </TouchableOpacity>
        )
    }
    const Tombols = ({ flow }) => {
        return (
            <View style={{ justifyContent: 'space-around', marginTop: 15, flex: 1, marginHorizontal: 10 }}>
                <Tombol nilai='1' flow={flow} />
                <Tombol nilai='2' flow={flow} />
                <Tombol nilai='3' flow={flow} />
                <Tombol nilai='4' flow={flow} />
                <Tombol nilai='5' flow={flow} />
                <Tombol nilai='6' flow={flow} />
            </View>
        )
    }
    const _reset = () => {
        dispatch({ type: 'RESET_NILAI', })
    }
    // console.log(Nilai1, Nilai2, Nilai3)
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ backgroundColor: 'black' }}>
                <Text style={{ textAlign: 'center', color: 'white', padding: 10 }}>
                    {tcpss.pesan}
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'black', padding: 20, justifyContent: 'center', alignContent: 'center' }}>
                <Tombols flow="1" />
                <Tombols flow="2" />
                {/* <Tombols flow="3" /> */}
            </View >
            <View style={{ height: 90, backgroundColor: 'black', marginTop: 15, justifyContent: "center", alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ borderWidth: 1, borderRadius: 2, marginHorizontal: 3, width: '20%', height: 30, textAlign: "center", color: "white", borderColor: '#e62129', textAlignVertical: 'center' }}>{nilai.nilai1}</Text>
                    <Text style={{ borderWidth: 1, borderRadius: 2, marginHorizontal: 3, width: '20%', height: 30, textAlign: "center", color: "white", borderColor: '#e62129', textAlignVertical: 'center' }}>{nilai.nilai2}</Text>
                </View>
                <TouchableOpacity style={{ borderWidth: 2, width: '20%', height: 30, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginBottom: 20, borderRadius: 5, borderColor: '#FFD700' }} onPress={() => { _reset() }}>
                    <Text style={{ color: 'white' }}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Dadu2;
