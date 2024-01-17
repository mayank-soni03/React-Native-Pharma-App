import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, View, } from 'react-native';
import { CheckIcon, ChevronDownIcon, ChevronLeftIcon, HeartIcon, ShoppingCartIcon, ChevronUpIcon } from 'react-native-heroicons/solid';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppHeader from '../appHeader/AppHeader';
import { connect } from 'react-redux';
import { add, updateQuantity } from '../../redux/CartSlice';
import { medicineData } from '../MedicineData';
import styles from './ProductInfoCss';

const ProductInfo = ({ dispatchAdd, dispatchUpdateQuantity, cartItems }) => {
    const [quantity, setQuantity] = useState(1);
    const [heartChange, setHeartChange] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();
    const itemID = route.params?.item?.id;
    const [visible, setVisible] = useState(false)
    const [showSearch, toggleSearch] = useState(false);
    const [locations, setLocations] = useState([
        {label: '50 mg', value:'50 mg' },
        {label: '100 mg', value:'100 mg' },
        {label: '200 mg', value:'200 mg' },
        {label: '250 mg', value:'250 mg' },
        {label: '500 mg', value:'500 mg' },
    ]);
    const [selectedMilligram, setSelectedMilligram] = useState(locations[0]?.value);
    const [arrowToggle, setArrowToggle] = useState(true)

    const selectedItem = medicineData.find((item) => item.id === itemID) || {};
    // console.log('@#@## this is existingCartItem Data', cartItems)
    
    const handleAddToCart = async () => {
        // Check if the selected item already exists in the cart
        const existingCartItem = cartItems.find((item) => item.id === selectedItem.id && item.milliGram === selectedMilligram);
        if (existingCartItem) {
            // If the product already exists in the cart, update the quantity
            console.log('@#@#@# this is quantity count', quantity)
            const updatedCart = cartItems.map((item) =>
                item.id === existingCartItem.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
    
            dispatchUpdateQuantity({
                id: existingCartItem.id,
                quantity: existingCartItem.quantity + quantity,
            });
    
            // Update the cart in AsyncStorage
            await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCart));
        } else {
            // If the product doesn't exist in the cart, add it with the specified quantity
            dispatchAdd({
                id: selectedItem.id,
                name: selectedItem.name,
                amount: selectedItem.amount,
                Image: selectedItem.Image,
                milliGram: selectedMilligram,
                quantity,
            });
    
            // Update the cart in AsyncStorage
            await AsyncStorage.setItem('cartItems', JSON.stringify([...cartItems, selectedItem]));
        }
        setVisible(true);

        setTimeout(() => {
            setVisible(false);
        }, 800)
    };
    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
    }
    const handleArrowClick = () => {
        setArrowToggle(!arrowToggle);
    }

    return (
        <View style={styles.container}>
            <AppHeader />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={25} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Product Detail</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                    <ShoppingCartIcon size={25} />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <Image source={selectedItem.Image} style={styles.image} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{selectedItem.name}</Text>
                    <TouchableOpacity onPress={() => setHeartChange(!heartChange)} >
                        <HeartIcon size={25} color={heartChange ? 'red' : 'black'} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.details}>
                    Medicines Details: like for children or not / when we should use this medicine
                </Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>₹ {selectedItem.amount} </Text>
                    <View style={styles.setContainer}>
                        <Text style={styles.NoOfText} >No. of Set</Text>
                    </View>
                </View>

                <View style={styles.quantityContainer}>
                    <View style={styles.quantitySection}>
                        <Text style={styles.quantityText}>{selectedMilligram}</Text>
                        <TouchableOpacity onPress={() => {toggleSearch(!showSearch); handleArrowClick();}} >
                            { arrowToggle ? <ChevronDownIcon size={25} /> : <ChevronUpIcon size={25} /> }
                        </TouchableOpacity>
                        {
                            locations.length > 0 && showSearch ? (
                                <View style={styles.milligramSelect} >
                                    
                                    {locations.slice(0, 5).map((loc, index) => (
                                            <TouchableOpacity
                                            onPress={() => {
                                                setSelectedMilligram(loc.value);
                                                toggleSearch(false);
                                            }}
                                            key={index}
                                            style={styles.milligramTouch}
                                        >
                                            <Text style={styles.milligramText}>{loc.value}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            ) : null}
                    </View>

                    <View style={styles.quantitySection}>
                        <TouchableOpacity onPress={decreaseQuantity}>
                            <MinusCircleIcon />
                        </TouchableOpacity>
                        <Text style={styles.quantityValue}> {quantity} </Text>
                        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                            <PlusCircleIcon />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                    <ShoppingCartIcon size={25} style={styles.cartIcon} />
                    <Text style={styles.addToCartText}>Add To Cart</Text>
                </TouchableOpacity>
                <Modal
                    visible={visible}
                    transparent={true}
                    animationType="fade"
                    presentationStyle="overFullScreen"
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <CheckIcon size={25} color={'white'} />
                            <Text style={styles.modalText}>Added to cart</Text>
                        </View>
                    </View>
                </Modal>
            </View>

        </View>
    );
};


const mapStateToProps = (state) => {
    return {
        cartItems: state.cart ? state.cart : [],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAdd: (item) => dispatch(add(item)),
        dispatchUpdateQuantity: (id) => dispatch(updateQuantity(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
