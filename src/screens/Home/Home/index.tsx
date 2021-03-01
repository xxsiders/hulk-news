import React from 'react'
import { FlatList, RefreshControl, SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import BottomCard from '../../../components/BottomCard'
import TopCard from '../../../components/TopCard'
import { strings } from '../../../localizations'
import styles from './style'
import Loader from '../../../components/Loader'
export default function index(props: any) {
    const style = styles()
    return (
        <SafeAreaView style={style.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={props.refreshing}
                        onRefresh={props.onRefresh}
                    />
                }
                contentContainerStyle={style.scrollContainer}
            >
                <View style={style.content}>
                    <View style={style.flexedContainer} />
                    <TouchableOpacity onPress={() => props.navigation.navigate('Search')} style={style.inputContainer}>
                        <Text style={style.placeholder}>{strings('search')}</Text>
                    </TouchableOpacity>
                    <View style={style.flexedContainer} />
                </View>
                {props.loading||props.refreshing ? <Loader /> :
                    <>
                        <FlatList showsHorizontalScrollIndicator={false} horizontal data={props.data.slice(0, 6)} keyExtractor={(item, index) => index.toString()} renderItem={({ item, index }) => <TopCard item={item} index={index} />} />
                        <FlatList data={props.data.slice(6, props.data.length)} keyExtractor={(item, index) => index.toString()} renderItem={({ item, index }) => <BottomCard item={item} index={index} />} />
                    </>}
            </ScrollView>
        </SafeAreaView>
    )
}
