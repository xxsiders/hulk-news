
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';
import React, { useState } from 'react';
import { strings } from '../../localizations';
import { UseBootstrap } from '../../roots/Bootstrap';

const SettingsHOC = (Com: React.ComponentType<any>) => {

    const wrapper = (props: any) => {
        const { theme, setTheme } = UseBootstrap()
        const [switchValue, setSwitchValue] = useState(false)
        const [ref, setRef] = useState<any>();
        const openModal = () => ref.show();
        const actions: any = ['en', 'esp', strings('cancel')];
        const onActionPressed = (value: number) => {
            if (value == 2) null
            else {
                AsyncStorage.setItem('language', actions[value]);
                Updates.reloadAsync()
            }
        }

        return <Com
            {...props}
            theme={theme}
            setTheme={setTheme}
            switchValue={switchValue}
            setSwitchValue={setSwitchValue}
            setRef={setRef}
            openModal={openModal}
            actions={actions}
            onActionPressed={onActionPressed}
        />
    }
    return wrapper
}

export default SettingsHOC
