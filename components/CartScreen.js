import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon, ShoppingCartIcon, ChevronDownIcon, MinusCircleIcon, TrashIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import AppHeader from '../src/appHeader/AppHeader';
import { remove, updateQuantity } from '../redux/CartSlice';
import styles from './CartScreenCss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({ cartItems, dispatchRemove, dispatchUpdateQuantity }) => {
  const navigation = useNavigation();
  const [localCartItems, setLocalCartItems] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem('cartItems');
        if (storedCartItems) {
          setLocalCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error('Error fetching cart items from AsyncStorage:', error);
      }
    };

    fetchCartItems();
    console.log('@#@#@# this is stored data', setLocalCartItems)
  }, []);

  const handleQuantityChange = (id, newQuantity) => {
    newQuantity = Math.max(1, newQuantity);

    dispatchUpdateQuantity({ id, quantity: newQuantity });

    const updatedLocalCartItems = localCartItems.map((cartItem) =>
      cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem
    );

    try {
      AsyncStorage.setItem('cartItems', JSON.stringify(updatedLocalCartItems));
    } catch (error) {
      console.error('Error saving cart items to AsyncStorage:', error);
    }

    setLocalCartItems(updatedLocalCartItems);
  };

  const handleRemoveFromCart = async (id) => {
    dispatchRemove({ id });

    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 800)

    const updatedLocalCartItems = localCartItems.filter((cartItem) => cartItem.id !== id);

    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(updatedLocalCartItems));
    } catch (error) {
      console.error('Error saving cart items to AsyncStorage:', error);
    }

    setLocalCartItems(updatedLocalCartItems);
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cartItems.reduce((total, item) => total + (item.amount * item.quantity), 0);

  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <ChevronLeftIcon size={25} />
        </TouchableOpacity>
        <View style={styles.cartTitle}>
          <Text style={styles.cartTitleText}>Your Cart</Text>
          <ShoppingCartIcon style={styles.cartIcon} />
        </View>
      </View>

      {/* Trash/Delete icon click Modal */}

      <Modal visible={visible}
        transparent={true}
        animationType="fade"
        presentationStyle="overFullScreen" >
        <View style={styles.modalContainer} >
          <View style={styles.modalContent} >
            <TrashIcon color={'white'} />
            <Text style={styles.modalText} >
              Item Removed
            </Text>
          </View>
        </View>
      </Modal>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.cartItem}>
            <TouchableOpacity style={styles.trashIcon} onPress={() => handleRemoveFromCart(item.id)} >
              <TrashIcon />
            </TouchableOpacity>

            <View style={styles.itemDetails}>
              <Image resizeMode="contain" source={item.Image} style={styles.itemImage} />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemAmount}>₹ {item.amount}</Text>
            </View>
            <View style={styles.quantitySection}>
              <View style={styles.quantityTextContainer}>
                <Text style={styles.quantityText}>{item.milliGram}</Text>
                <TouchableOpacity>
                  <ChevronDownIcon size={20} style={styles.chevronIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.quantityControl}>
                <TouchableOpacity onPress={() => handleQuantityChange(item.id, item.quantity - 1)}>
                  <MinusCircleIcon />
                </TouchableOpacity>
                <Text style={styles.quantityValue}> {item.quantity} </Text>
                <TouchableOpacity onPress={() => handleQuantityChange(item.id, item.quantity + 1)}>
                  <PlusCircleIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
      <View style={{ flexDirection: 'row', marginBottom: 5, justifyContent: 'space-between' }} >
        <Text style={{ fontSize: 20 }} >Total Amount:</Text>
        <Text style={{ fontSize: 20 }} >₹ {totalAmount}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 80, justifyContent: 'space-between' }} >
        <Text style={{ fontSize: 20 }} >Total Item:</Text>
        <Text style={{ fontSize: 20 }} >{totalQuantity}</Text>
      </View>

      <TouchableOpacity style={styles.proceedButton} onPress={() => navigation.navigate('MainPaymentScreen')} >
        <Text style={styles.proceedButtonText}>Proceed to Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRemove: (item) => dispatch(remove(item)),
    dispatchUpdateQuantity: (data) => dispatch(updateQuantity(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);