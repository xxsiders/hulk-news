
import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import SearchProvider from '../../providers/SearchProvider'

const SearchHOC = (Com: React.ComponentType<any>) => {

    const wrapper = (props: any) => {
        const [query, setquery] = useState('')
        const { fetchNews, data, loading } = SearchProvider()
        const { params }: any = useRoute()
        useEffect(() => {
            if (params != undefined) {
                setquery(params.query)
                fetchNews(params.query)
            }
        }, [params])
        return <Com
            {...props}
            data={data}
            loading={loading}
            fetchNews={fetchNews}
            setquery={setquery}
            query={query}
        />
    }
    return wrapper
}

export default SearchHOC
