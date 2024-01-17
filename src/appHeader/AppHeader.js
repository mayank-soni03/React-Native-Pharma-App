import { View, Text } from 'react-native'
import React from 'react'
import styles from '../accountScreen/CreateAndRecover'

const AppHeader = () => {
    return (
        <View style={styles.Touchable}>
            <Text style={styles.Text}><Text style={{ color: 'red' }}>Pharma</Text> App</Text>
            
        </View>
    )
}

export default AppHeader