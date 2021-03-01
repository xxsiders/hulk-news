import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Article } from '../../../constants/Article'
import { strings } from '../../../localizations'
import styles from './style'
export default function index() {
    const { params }: any = useRoute()
    const article: Article = params.data
    const style = styles()
    return (
        <SafeAreaView style={style.container}>
            <Image defaultSource={require('../../../assets/default.jpg')} source={{ uri: article.urlToImage }} style={style.image} />
            <View style={style.content}>
                <Text style={style.title}>{article.title}</Text>
                <Text style={style.author}>{strings('by')} {article.author}</Text>
                <Text style={style.date}>{new Date(article.publishedAt).toDateString()}</Text>
                <Text style={style.description}>{article.description}</Text>
                <Text style={style.contentText}>{article.content}</Text>
            </View>
        </SafeAreaView>
    )
}
