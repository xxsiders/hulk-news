import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Article } from '../../constants/Article'
import { strings } from '../../localizations'
import styles from "./style"
type CardProps = {
    item: Article,
    index: number
}

export default function ({ item, index }: CardProps) {
    const { navigate } = useNavigation()

    const style = styles()
    return (
        <TouchableOpacity onPress={() => navigate('Article', { data: item })} activeOpacity={0.9} key={index.toString()} style={style.topCard}>
            <View style={style.cardContainer} >
                <Image defaultSource={require('../../assets/default.jpg')} style={style.topCardImage} source={{ uri: item.urlToImage }} />
                <View style={style.content}>
                    <Text style={style.title} numberOfLines={3}>{item.title}</Text>
                    <Text style={style.description} numberOfLines={1}>{strings('according')}<Text style={style.sourceTitle}>{item.source.name}</Text></Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
