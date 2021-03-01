import { useState } from 'react'
import { Alert } from 'react-native'
import DefaultStrings from '../constants/DefaultStrings'

function NewsProvider() {
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState([])
    const fetchNews = async () => {
        try {
            setloading(true)
            const response = await fetch(`${DefaultStrings.api}top-headlines?country=us&apiKey=${DefaultStrings.apiKey}`)
            const body = await response.json()
            setdata(body.articles)
            setloading(false)
            return body
        } catch (error) {
            setloading(false)
            Alert.alert('Error', error.message)
        }
    }

    return {
        loading,
        data,
        fetchNews
    } as const


}

export default NewsProvider
