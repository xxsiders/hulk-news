import React from 'react'
import { ActivityIndicator } from 'react-native'
import Colors from '../../assets/Colors'

export default function index() {
    return (
        <ActivityIndicator size='large' color={Colors.DefaultColors.primary} style={{ marginTop: '80%' }} />)
}
