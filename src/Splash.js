import { StyleSheet, Text, View } from 'react-native'      
import {React, useEffect } from 'react'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeTab') 
        }, 2000)
    }, []);
    return (
        <View style={styles.View}>
            <Text style={styles.Text}>Pharm At Home</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    View:{
        flex:1,
        backgroundColor:'#F8CE58',
        justifyContent:'center',
    },
    Text:{
        fontWeight:'bold',
        textAlign:'center',
        letterSpacing:1,
        fontSize:20,
    },
})

export default Splash;
