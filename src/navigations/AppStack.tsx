import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Linking from 'expo-linking';
import React from 'react';
import { StatusBar } from 'react-native';
import Colors from '../assets/Colors';
import { UseBootstrap } from '../roots/Bootstrap';
import Article from '../screens/Article';
import Search from '../screens/Search';
import Tabs from './TabStack';

const prefix = Linking.makeUrl('/hulknews');

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
    // example linking exp://127.0.0.1:19000/--/hulknews/Search/google
    const linking: any = {
        prefixes: [prefix],
        config: {
            Search: {
                path: 'Search/:query',
                params: {
                    query: null,
                }
            },
            Article: {
                path: 'Article/:itemId',
                params: {
                    itemId: null,
                }
            }
        }
    }

    return (
        <>
            <StatusBar barStyle={theme == 'dark' ? 'light-content' : 'dark-content'} />
            <NavigationContainer linking={linking} theme={theme == 'dark' ? DarkTheme : DefaultTheme}>
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
