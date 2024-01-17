import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import AppHeader from "../appHeader/AppHeader";
import { ChevronDownIcon, ChevronLeftIcon } from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const MainPaymentScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <AppHeader />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <QuestionMarkCircleIcon size={25} style={{ marginRight: 8 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 20 }}>
                <PaymentOption title="UPI Payment" screenName="UpiPayment" />
                <PaymentOption title="Card Payment" screenName="CardPayment" />
                <PaymentOption title="On Delivery Payment" screenName="OnDeliveryPay" />
            </View>
        </View>
    );
};

const PaymentOption = ({ title, screenName }) => {
    const navigation = useNavigation();

    return (
        <View style={{ marginTop: 20, backgroundColor: 'white', borderRadius: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate(screenName)} style={styles.optionContainer}>
                <Text style={styles.optionText}>{title}</Text>
                <ChevronDownIcon />
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
    },
    optionText: {
        fontSize: 22,
        fontWeight: '400',
    },
};

export default MainPaymentScreen;
