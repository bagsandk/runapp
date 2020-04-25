import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Item({ nilai, nilai2, nilai3, index }) {
    var clr
    if (index === 0) {
        clr = styles.fetchitemm
    } else {
        clr = styles.fetchitem
    }
    if (nilai == null) {
        return <Text></Text>
    } else if (nilai2 == null && nilai3 == null) {
        return (
            <View style={{ width: '100%', }}>
                <View style={styles.viewfetch}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={clr}>{nilai}</Text>
                    </View>
                </View>
            </View>
        );
    } else if (nilai3 == null) {
        return (
            <View style={{ width: '100%', }}>
                <View style={styles.viewfetch}>
                    <Text style={clr}>{nilai}</Text>
                    <Text style={clr}>{nilai2}</Text>
                </View>
            </View>
        );
    } else if (nilai2 !== null && nilai3 !== null) {
        return (
            <View style={{ width: '100%', }}>
                <View style={styles.viewfetch}>
                    <Text style={clr}>{nilai}</Text>
                    <Text style={clr}>{nilai2}</Text>
                    <Text style={clr}>{nilai3}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    fetchitem: {
        flex: 1, height: 29, marginVertical: 4, textAlign: 'center', borderRadius: 20, textAlignVertical: 'center', marginHorizontal: 4, color: 'white', backgroundColor: '#FF6600',
    },
    fetchitemm: {
        flex: 1, height: 37, marginVertical: 4, textAlign: 'center', borderRadius: 20, textAlignVertical: 'center', marginHorizontal: 4, color: 'white', backgroundColor: '#75cc57', fontSize: 18
    },
    viewfetch: {
        alignItems: 'center', flexDirection: 'row', borderTopWidth: 0.99, borderTopColor: '#EBEBEB'
    },
    viewfetchh: {
        alignItems: 'center', flexDirection: 'row', backgroundColor: '#75cc57',
    }
})
export default Item