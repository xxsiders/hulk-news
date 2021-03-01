import { useTheme } from '@react-navigation/native'
import React from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomCard from '../../../components/BottomCard'
import Loader from '../../../components/Loader'
import { strings } from '../../../localizations'
import styles from './style'
export default function index(props: any) {
    const style = styles()
    const { colors } = useTheme()

    return (
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                <View style={style.flexedContainer} />
                <View style={style.inputContainer}>
                    <TextInput returnKeyType="go" onSubmitEditing={() => props.fetchNews(props.query)} style={style.input} value={props.query} onChangeText={text => props.setquery(text)} placeholderTextColor={colors.text + '50'} placeholder={strings('search')} />
                </View>
                <View style={style.flexedContainer} >
                    <TouchableOpacity disabled={props.loading} onPress={() => props.fetchNews(props.query)} style={style.searchButton}>
                        <Text style={style.search}>Go</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {props.loading ? <Loader /> :
                <FlatList
                    data={props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }: any) => <BottomCard item={item} index={index} />}
                />
            }
        </SafeAreaView>
    )
}
