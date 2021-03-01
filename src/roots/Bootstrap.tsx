import React, { createContext, useContext, useState } from 'react'
export const BootstrapContext = createContext({})

export const BootstrapProvider = (props: any) => {
    const [theme, setTheme] = useState('light')
    const [lang, setLang] = useState('en')

    const contextValues = { theme, setTheme, lang, setLang }

    return <BootstrapContext.Provider value={contextValues}>
        {props.children}
    </BootstrapContext.Provider>
}

export const UseBootstrap = (): any => useContext(BootstrapContext)

