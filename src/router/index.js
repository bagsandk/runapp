import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Dadu1, Dadu2, Dadu3, Home } from '../screen/daduapp'
const Stack = createStackNavigator();
const Router = () => {
    return (
        <NavigationContainer>
            < Stack.Navigator initialRouteName="Home" headerMode='none' >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Dadu1" component={Dadu1} />
                <Stack.Screen name="Dadu2" component={Dadu2} />
                <Stack.Screen name="Dadu3" component={Dadu3} />
            </Stack.Navigator>
        </NavigationContainer >
    );

}
export default Router