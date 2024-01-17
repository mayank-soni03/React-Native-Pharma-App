import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppHeader from '../appHeader/AppHeader'
import { CheckCircleIcon, DocumentTextIcon,  } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'


const PaymentComplete = ({ cartItems }) => {
    const totalAmount = cartItems.reduce((total, item) => total + item.amount * item.quantity, 0);
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.iconContainer}>
          <CheckCircleIcon size={100} color={'blue'} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>
            <Text style={styles.congratsText}>Congratulations,</Text>
            {'\n'} your transaction was successful
          </Text>
          <Text style={styles.successText}>
            Payment successfully verified, {'\n'}
            <Text style={styles.thankYouText}>thank you for shopping</Text>
          </Text>
          <Text style={styles.paymentDetailsText}>Payment Method</Text>
          <Text style={styles.paymentMethodText}>Card Payment</Text>
          <Text style={styles.totalAmountText}>Total Amount: ₹ {totalAmount}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeTab')}
            style={styles.continueShoppingButton}
          >
            <Text style={styles.continueShoppingText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.transactionDetailsButton}>
          <DocumentTextIcon color={'white'} />
          <Text style={styles.transactionDetailsText}>See Your Transaction Details</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      cartItems: state.cart,
    };
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    iconContainer: {
      alignSelf: 'center',
      marginTop: '10%',
    },
    contentContainer: {
      alignItems: 'center',
      height: '50%',
      marginTop: '6%',
    },
    headerText: {
      fontSize: 20,
      fontWeight: '500',
    },
    congratsText: {
      marginLeft: '25%',
    },
    successText: {
      marginTop: '6%',
      fontWeight: '400',
    },
    thankYouText: {
      marginLeft: '6%',
    },
    paymentDetailsText: {
      marginTop: '10%',
      fontSize: 20,
      color: 'grey',
    },
    paymentMethodText: {
      marginTop: '2%',
      fontSize: 20,
      fontWeight: '500',
      letterSpacing: 1,
    },
    totalAmountText: {
      marginTop: '1%',
      fontSize: 20,
      fontWeight: '500',
      letterSpacing: 1,
    },
    continueShoppingButton: {
      position: 'absolute',
      bottom: 0,
      borderWidth: 1,
      width: '80%',
      alignItems: 'center',
      height: '12%',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: 'lightgrey',
    },
    continueShoppingText: {
      fontSize: 20,
      fontWeight: '400',
      letterSpacing: 1,
    },
    transactionDetailsButton: {
      height: 60,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      alignSelf: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(29, 25, 43, 1)',
    },
    transactionDetailsText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
      letterSpacing: 1,
    },
  });
  
  export default connect(mapStateToProps)(PaymentComplete);
  