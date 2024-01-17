import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './CreateAndRecover';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import AppHeader from '../appHeader/AppHeader';

const ForgetPassword = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.View}>
            <AppHeader />
            <TouchableOpacity style={{ padding: 20 }} onPress={() => navigation.goBack()} >
                <ChevronLeftIcon />
            </TouchableOpacity>
            <View>
                <Text style={{
                    color: 'Black', fontSize: 30, fontWeight: 400, alignSelf: 'center',
                }}>Recover your account</Text>
            </View >
            <TextInput
                style={[styles.TextInput, { marginTop: 50, background: 'linear-gradient(90deg, rgba(169, 94, 255, 1) 0%, rgba(58, 133, 255, 1) 100%)' }]}
                placeholder='Full Name' ></TextInput>
            {/* <TextInput
                style={[styles.TextInput, { background: 'linear-gradient(90deg, rgba(169, 94, 255, 1) 0%, rgba(58, 133, 255, 1) 100%)' }]}
                placeholder='Email Address'  ></TextInput> */}
            <TextInput
                style={[styles.TextInput, { background: 'linear-gradient(90deg, rgba(169, 94, 255, 1) 0%, rgba(58, 133, 255, 1) 100%)' }]}
                placeholder='Phone Number' ></TextInput>
            <TextInput
                style={[styles.TextInput, { background: 'linear-gradient(90deg, rgba(169, 94, 255, 1) 0%, rgba(58, 133, 255, 1) 100%)' }]}
                placeholder='OTP' ></TextInput>
            <TextInput
                style={[styles.TextInput, { textDecorationStyle: 'dashed', background: 'linear-gradient(90deg, rgba(169, 94, 255, 1) 0%, rgba(58, 133, 255, 1) 100%)' }]}
                placeholder='Password' ></TextInput>
            <TextInput
                style={[styles.TextInput, { background: 'linear-gradient(90deg, rgba(169, 94, 255, 1) 0%, rgba(58, 133, 255, 1) 100%)' }]}
                placeholder='Confirm Password' secureTextEntry='false' ></TextInput>
            <TouchableOpacity>
                <Text style={styles.ForgetPassword}>Resend OTP.</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignSelf: 'center', paddingTop: 50 }}>
                <Text
                    style={[styles.LogInBtn, { background: 'linear-gradient(90deg, rgba(169, 94, 255, 1) 0%, rgba(58, 133, 255, 1) 100%)' }]}>
                    Create New Account</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('LogIn')}  >
                <Text
                    style={{
                        color: 'black', fontSize: 20, fontWeight: '400', letterSpacing: 1, alignSelf: 'center',
                        paddingTop: 30, textDecorationLine: 'underline'
                    }} >I already have an Account.</Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default ForgetPassword;