import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AppHeader from '../src/appHeader/AppHeader';

const LogOut = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }} >
            <AppHeader />
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }} >
                <Text>Click on the Log Out button below</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LogIn')} style={{ width: '95%', height: '6%', alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: 'black' }} >
                    <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', letterSpacing: 1 }} >LogOut</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LogOut

const styles = StyleSheet.create({})