import TcpSocket from 'react-native-tcp-socket';

let client;
const serverPort = 9940;
const serverHost = "192.168.43.1";
client = TcpSocket.createConnection({
    port: serverPort,
    host: serverHost,
    localAddress: "192.168.43.72",
    reuseAddress: true,
    // localPort: 20000,
    interface: "wifi"
}, (address) => {
    console.log('opened client on ' + JSON.stringify(address));
    client.write('Hello, server! Love, Client.');
});

export default client