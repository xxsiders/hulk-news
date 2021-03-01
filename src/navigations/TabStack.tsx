import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { strings } from '../localizations';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    const { colors } = useTheme()
    return <Tab.Navigator tabBarOptions={{ tabStyle: { backgroundColor: colors.background } }}>
        <Tab.Screen options={{
            tabBarIcon: ({ color }) => <Feather name='home' size={16} color={color} />,
            title: strings('home')
        }} name='Home' component={Home} />
        <Tab.Screen options={{
            tabBarIcon: ({ color }) => <Feather name='settings' size={16} color={color} />,
            title: strings('settings')
        }} name='Settings' component={Settings} />
    </Tab.Navigator>
}


export default Tabs