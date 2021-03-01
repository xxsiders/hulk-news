import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import Colors from '../assets/Colors';
import { UseBootstrap } from '../roots/Bootstrap';
import Article from '../screens/Article';
import Search from '../screens/Search';
import Tabs from './TabStack';

const Stack = createStackNavigator();

const DefaultTheme = {
    colors: Colors.DefaultColors,
    dark: false
}
const DarkTheme = {
    colors: Colors.DarkColors,
    dark: true
}

const AppStack = () => {
    const { theme } = UseBootstrap()

    return (
        <>
            <StatusBar barStyle={theme == 'dark' ? 'light-content' : 'dark-content'} />
            <NavigationContainer theme={theme == 'dark' ? DarkTheme : DefaultTheme}>
                <Stack.Navigator initialRouteName='Tabs' headerMode='none' screenOptions={{
                    animationEnabled: true,
                    cardOverlayEnabled: true,
                    cardShadowEnabled: true
                }}>
                    <Stack.Screen name='Tabs' component={Tabs} />
                    <Stack.Screen name='Article' component={Article} />
                    <Stack.Screen name='Search' component={Search} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppStack
