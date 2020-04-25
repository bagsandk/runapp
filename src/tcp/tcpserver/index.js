// /**
//  * Sample React Native Servertcp
//  * https://github.com/facebook/react-native
//  *
//  */

// import React from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';
// import TcpSocket from 'react-native-tcp-socket';
// class Servertcp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.updateChatter = this.updateChatter.bind(this);
//         this.state = { chatter: [] };
//     }
//     updateChatter(msg) {
//         this.setState({
//             chatter: ([msg])
//         });
//     }
//     componentDidMount() {
//         const serverPort = 9940;
//         const serverHost = "192.168.43.1";
//         let server;
//         let client;
//         server = TcpSocket.createServer((socket) => {
//             this.updateChatter('server connected on ' + JSON.stringify(socket.address()));
//             socket.on('data', (data) => {
//                 this.updateChatter('Server Received: ' + data);
//                 socket.write(this.props.pesan);
//             });
//             this.socket = socket;
//             socket.on('error', (error) => {
//                 this.updateChatter('server client error ' + error);
//             });
//             socket.on('close', (error) => {
//                 this.updateChatter('server client closed ' + (error ? error : ''));
//             });
//         }).listen({ port: serverPort, host: serverHost, reuseAddress: true }, (address) => {
//             this.updateChatter('opened server on ' + JSON.stringify(address));
//         });
//         server.on('error', (error) => {
//             this.updateChatter('Server error ' + error);
//         });
//         // server.on('close', () => {
//         //   this.updateChatter('server close');
//         // });
//         this.server = server;
//         this.client = client;
//     }


//     async componentWillUnmount() {
//         await this.server.close()
//         this.updateChatter(null)
//     }

//     // componentWillUpdate() {
//     //     this.server.close()
//     // }
//     tess() {
//         try {
//             this.socket.write(this.props.pesan)
//         } catch{
//             this.server.close()
//             this.updateChatter('server close');
//             this.server.on()
//         }
//     }

//     render() {
//         // var datadadu = this.props.pesan
//         return (
//             <TouchableOpacity style={{ height: '10%' }} onPress={() => { this.tess() }}>
//                 <View style={{ alignItems: "center", }}>
//                     <Text>Status</Text>
//                     {this.state.chatter.map((msg, index) => {
//                         return (
//                             <Text key={index} style={{ textAlign: 'center' }}>
//                                 {msg}
//                             </Text>
//                         );
//                     })}
//                 </View>
//             </TouchableOpacity>
//         );
//     }
// };

// export default Servertcp;