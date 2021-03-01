import React from 'react'
import { Switch, Text, TouchableOpacity, View } from 'react-native'
import ActionSheet from 'react-native-actionsheet'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../../assets/Colors'
import i18n, { strings } from '../../../localizations'
import styles from './style'

export default function index(props: any) {
    const style = styles()
    return (
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                <View style={style.switch}>
                    <Text style={style.title}>{strings('dark')}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: Colors.DefaultColors.primary }}
                        thumbColor={'#f4f3f4'}
                        onValueChange={(value) => {
                            props.setSwitchValue(value)
                            props.setTheme(!value ? 'light' : 'dark')
                        }}
                        value={props.switchValue}
                    />
                </View>
                <View style={style.switch}>
                    <Text style={style.title}>{strings('language')}</Text>
                    <TouchableOpacity style={style.langButton} onPress={props.openModal}>
                        <Text style={style.locale}>{i18n.currentLocale()}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ActionSheet
                ref={ref => props.setRef(ref)}
                options={props.actions}
                cancelButtonIndex={2}
                onPress={props.onActionPressed}
            />

        </SafeAreaView>
    )
}
