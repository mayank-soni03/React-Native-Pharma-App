import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './CreateAndRecover';
import AppHeader from '../appHeader/AppHeader';

const LogIn = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.View}>
            <AppHeader />
            <View>
                <Text style={{
                    color: 'Black', fontSize: 30, fontWeight: 400, marginTop:'10%', alignSelf:'center'
                }}>Log in to your account</Text>
                <Text style={{ alignSelf:'center', marginTop:'3%' }}>
                    Welcome to Pharmaceutical Store
                </Text>
            </View >

            <TextInput
                style={[styles.TextInput, { background: 'linear-gradient(90deg, rgba(169, 94, 255, 1) 0%, rgba(58, 133, 255, 1) 100%)' }]}
                placeholder='User Id' ></TextInput>
            <TextInput
                style={[styles.TextInput, { background: 'linear-gradient(90deg, rgba(169, 94, 255, 1) 0%, rgba(58, 133, 255, 1) 100%)' }]}
                placeholder='Password' secureTextEntry='false' ></TextInput>

            <TouchableOpacity onPress={()=> navigation.navigate('HomeTab')}
                style={{ alignSelf: 'center', marginTop: '25%' }}>
                <Text
                    style={[styles.LogInBtn, { background: 'linear-gradient(90deg, rgba(169, 94, 255, 1) 0%, rgba(58, 133, 255, 1) 100%)' }]}>
                    Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('ForgetPassword')} >
                <Text style={styles.ForgetPassword}>Forget Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('NewId')}  >
                <Text
                    style={{
                        color: 'black', fontSize: 20, fontWeight: '400', letterSpacing: 1, alignSelf: 'center',
                        paddingTop: 40, textDecorationLine: 'underline'
                    }} >Create New Account</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default LogIn;
