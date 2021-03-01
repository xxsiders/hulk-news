import React, { useEffect } from 'react';
import Loader from './src/components/Loader';
import AppStack from './src/navigations/AppStack';
import AppDeafults from './src/roots/AppDeafults';
import { BootstrapProvider } from './src/roots/Bootstrap';

export default function App() {
  const { loadConfigs, loaded } = AppDeafults()

  useEffect(() => {
    loadConfigs()
  }, [])

  if (!loaded) return <Loader />
  else {
    return <BootstrapProvider>
      <AppStack />
    </BootstrapProvider>
  }
}
