
import React, { useCallback, useEffect, useState } from 'react'
import NewsProvider from '../../providers/NewsProvider'

const HomeHOC = (Com: React.ComponentType<any>) => {

    const wrapper = (props: any) => {

        const { fetchNews, data, loading } = NewsProvider()

        useEffect(() => {
            fetchNews()
        }, [])

        const [refreshing, setRefreshing] = useState(false);

        const onRefresh = useCallback(() => {
            setRefreshing(true);
            fetchNews().then((data) =>{console.log('asvasv',data); setRefreshing(false)});
        }, []);


        return <Com
            {...props}
            data={data}
            loading={loading}
            refreshing={refreshing}
            onRefresh={onRefresh}
        />
    }
    return wrapper
}

export default HomeHOC
