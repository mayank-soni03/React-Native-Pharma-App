import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import AppHeader from '../appHeader/AppHeader';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

const CardPayment = ({cartItems}) => {
    const totalAmount = cartItems.reduce((total, item) => total + item.amount * item.quantity, 0);
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <AppHeader />
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <ChevronLeftIcon size={25} style={{ marginTop: 10 }} />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Card No.</Text>
                    <TextInput style={styles.input} placeholder='Your Card Number' />

                    <Text style={styles.label}>Account Holder Name</Text>
                    <TextInput style={styles.input} placeholder='Type Your Name' />

                    <Text style={styles.label}>Linked Mobile No.</Text>
                    <TextInput style={styles.input} placeholder='Type Your No. Here' />

                    <Text style={styles.label}>Expiry Date</Text>
                    <TextInput style={styles.input} placeholder='00 / 0000' />

                    <Button title='Send OTP' />

                    <TouchableOpacity style={styles.resendButton}>
                        <Text style={styles.resendButtonText}>Resend OTP</Text>
                    </TouchableOpacity>

                    <Text style={styles.label}>OTP</Text>
                    <TextInput style={styles.input} placeholder='_ _ _ _ _ _' />

                    <Text style={styles.label}>Amount:</Text>
                    <Text style={styles.amount}>₹ {totalAmount}</Text>

                </View>

            </View>
            <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('PaymentComplete')} >
                <Text style={styles.payButtonText}>Pay  ₹ {totalAmount}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        justifyContent: 'center',
        padding: 20,
    },
    inputContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 3,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    payButton: {
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 15,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '7%',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'rgba(29, 25, 43, 1)'
    },
    payButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    resendButton: {
        backgroundColor: '#e74c3c',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    resendButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});


const mapStateToProps = (state) => {
    return {
      cartItems: state.cart,
    };
  };

export default connect(mapStateToProps)(CardPayment);
