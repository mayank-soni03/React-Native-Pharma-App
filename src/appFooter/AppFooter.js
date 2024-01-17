import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AppFooter = () => {
    return (
        <View style={[styles.Touchable, {
            background: 'linear-gradient(179.5deg, rgb(255, 230, 69) 3.3%, rgb(255, 157, 73) 96%)'
        }]}>
            <Text style={[styles.Text, { alignSelf: 'center' }]}>App Footer</Text>
            <Text style={{ marginLeft: 50, paddingRight: 50 }}>This is App's footer here we can provide more info about our app or customer care services.</Text>
        </View>
    )
}

export default AppFooter
const styles = StyleSheet.create({
    Touchable: {
        marginTop: 30,
        borderColor: 'white',
        width: '100%', height: 100,
    },
    Text: {
        fontSize: 30,
        fontWeight: '600',
        letterSpacing: 1,
    },
})