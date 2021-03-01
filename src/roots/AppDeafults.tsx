import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import i18n from '../localizations';

export default function AppDeafults() {
    const [loaded, setloaded] = useState(false)

    const loadConfigs = async () => {
        const value = await AsyncStorage.getItem('language')

        if (value) {
            i18n.locale = value
        }
        setloaded(true)
    }

    return {
        loadConfigs,
        loaded
    } as const
}
