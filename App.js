import { View } from 'react-native'
import React from 'react'
import BottomTab from './src/BottomTabNav'
import { Provider } from 'react-redux'
import store from './redux/Store'

export default function App() {
  return (
    <Provider store={store} >
      <View style={{ flex: 1 }}>
      <BottomTab />
    </View>
    </Provider>
  )
}
