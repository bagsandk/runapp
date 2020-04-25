import TcpSocket from 'react-native-tcp-socket';
import { useSelector, useDispatch } from 'react-redux';
import React, { Component } from 'react';


const serverr = () => {
    const dispatch = useDispatch();
    const stateserver = useSelector(state => state.tcpsreducer)
    // const [nilai, setnilai] = React.useState(stateserver.nilai.nilai1)
    const { nilai, pesan } = stateserver;
    this.nilai = nilai;
    React.useEffect(() => {
        console.log('na', nilai)
        const serverPort = 9940;
        const serverHost = "192.168.43.1";
        let server;
        server = TcpSocket.createServer((socket) => {
            console.log('server connected on ' + JSON.stringify(socket.address()));
            dispatch({ type: 'UPDATE', value: 'server connected on ' + JSON.stringify(socket.address()) })
            this.socket = socket
            socket.on('data', (data) => {
                console.log('Server Received: ' + data);
                // messerver('Server Received: ' + data);
                dispatch({ type: 'UPDATE', value: 'Server Received: ' + data })
                socket.write('{"nilai1":' + this.nilai.nilai1 + ',"nilai2":' + this.nilai.nilai2 + ',"nilai3":' + this.nilai.nilai3 + '}');
                console.log('nnb', this.nilai.nilai1);
                // console.log('uuuuuuuuu', this.nilai);

            });
            socket.on('error', (error) => {
                console.log('server client error ' + error);
                dispatch({ type: 'UPDATE', value: 'Server Client Error ' + error })
            });
            socket.on('close', (error) => {
                console.log('server client closed ' + (error ? error : ''));
                dispatch({ type: 'UPDATE', value: 'Server Client CLose ' + error })
            });
            // sok = this.socket
        }).listen({ port: serverPort, host: serverHost, reuseAddress: true }, (address) => {
            console.log('opened server on ' + JSON.stringify(address));
            dispatch({ type: 'UPDATE', value: 'opened server on ' + JSON.stringify(address) });
        });
        server.on('error', (error) => {
            console.log('Server error ' + error);
            dispatch({ type: 'UPDATE', value: 'Server Error ' + error })
        });
    }, [])
    // console.log('ggggggg' + stateserver.nilai.nilai1);

}

export default serverr