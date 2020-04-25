import React from 'react';
import { Animated, Dimensions, Easing, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import ImageDadu from '../../../component/daduimg';
import TabH from '../../../component/histori';
import client from '../../../tcp/tcpclient/tcp';
var { width, height } = Dimensions.get('window')

const Dadu1 = () => {
    const [Dadu, setDadu] = React.useState([])//DADU HISTOR TO FLATLIST
    const [rerender, setrerender] = React.useState(null) //RENDER FLATLIS
    const [Acak, setAcak] = React.useState({ nilai: null })//ACAK DADU
    const [load, setload] = React.useState(false)//DISBLE PRESS
    const [move, setmove] = React.useState(new Animated.Value(0))//ANIMATION
    const [rotare, setrotare] = React.useState(new Animated.Value(0))//ANIMATION
    const [msg, setmsg] = React.useState(null)
    const [tcp, settcp] = React.useState(0)


    //acak dadu
    async function isiDadu() {
        const acak = Math.floor(Math.random() * 6) + 1;
        console.log('isi', this.mm)
        if (tcp == 1 && this.mm !== null) {
            try {
                const n = JSON.parse(this.mm)
                if (n.nilai1 == null || n.nilai1 == 0) {
                    n.nilai1 = acak
                }
                setAcak({ nilai: n.nilai1 })
            } catch{
                setAcak({ nilai: acak })
            }
        } else {
            setAcak({ nilai: acak })
        }

    }
    //history dadu
    const _history = (acak) => {
        const ray = Dadu
        ray.reverse();
        ray.push(acak)
        ray.reverse();
        setDadu(ray)
        setrerender(acak.nilai + Math.random())
    }
    //animation move
    const _move = () => {
        Animated.timing(move, {
            toValue: height - 70,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => {
            Animated.timing(move, {
                toValue: 0,
                duration: 1400,
                easing: Easing.back(),
                useNativeDriver: false,
            }).start(() => {
                // _move()
                setload(false)//disable press false
            })
        })
    }
    //animation rotare
    const _rotare = () => {
        Animated.sequence([
            Animated.timing(rotare, {
                toValue: 590,
                duration: 1799,
                easing: Easing.linear,
                useNativeDriver: false,
            }), Animated.timing(rotare, {
                toValue: 0,
                duration: 0,
                useNativeDriver: false,
            })
        ]).start(() => { })
    }
    //interporate rotate
    const interpolaterotate = rotare.interpolate({
        inputRange: [0, 100],
        outputRange: ['0deg', '360deg'],
    })
    //press panggil fungsi
    const onPres = async () => {
        // await setmsg(msg)
        try {
            client.write('gggggg')
            settcp(1)
        } catch{
            console.log('not connect')
            settcp(0)
        }
        setload(true)
        _history(Acak)
        await (_move(), _rotare(), setTimeout(() => { isiDadu() }, 1200))

    }

    React.useEffect(() => {
        client
        client.on('data', (data) => {
            // console.log('Client Received: ' + data);
            // this.client.destroy(); // kill client after server's response
            _mm('' + data);
        });
        client.on('error', (error) => {
            console.log('client error ' + error);
        });
        client.on('close', () => {
            console.log('client close');
        });
    }, [client])
    const _mm = (dat) => {
        this.hh = dat
        console.log(dat)
        return setmsg(dat)
    }
    this.mm = msg
    React.useEffect(() => {
        return () => {

        };
    }, []);
    return (
        <View style={{ flex: 1, flexDirection: "row", }}>
            <View style={{ width: '22%', backgroundColor: 'white' }}>
                <Text style={{ backgroundColor: '#333333', height: 36, textAlign: 'center', color: '#F3A119', textAlignVertical: 'center', }}>History</Text>
                <TabH Dadu={Dadu} render={rerender} />
            </View>
            <View style={{ flex: 1, backgroundColor: '#EBEBEB' }}>
                <TouchableWithoutFeedback onPress={() => { onPres() }}
                    disabled={load}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: "row", backgroundColor: '#EBEBEB' }}>
                        <ImageDadu mata={Acak.nilai} inter={interpolaterotate} move={move} />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => { onPres() }}
                    disabled={load}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: '14%', backgroundColor: '#EBEBEB' }}>
                        <Text style={{}}>Tap To Roll</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default Dadu1;
