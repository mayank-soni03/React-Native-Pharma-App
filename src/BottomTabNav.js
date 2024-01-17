import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './Splash';
import UserId from '../components/UserId';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LogIn from './accountScreen/LogIn';
import NewId from './accountScreen/CreateNewId';
import ForgetPassword from './accountScreen/ForgetPassword';
import CartScreen from '../components/CartScreen';
import ProductInfo from './productScreen/ProductInfo';
import MainPaymentScreen from "./paymentMethod/MainPaymentScreen";
import UpiPayment from './paymentMethod/UpiPayment';
import CardPayment from './paymentMethod/CardPayment';
import OnDeliveryPay from './paymentMethod/OnDeliveryPay';
import HomeScreen from './HomeScreen';
import LabTest from './LabTest';
import Prescription from './Prescription';
import PaymentComplete from './paymentMethod/PaymentComplete';
import LogOut from '../components/LogOut';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
  let initialRoute = 'LogOut';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='LogIn' component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name='NewId' component={NewId} options={{ headerShown: false }} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
        <Stack.Screen name='ProductInfo' component={ProductInfo} options={{ headerShown: false }} />
        <Stack.Screen name="UserId" component={UserId} options={{ headerShown: false }} />
        <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
        <Stack.Screen name='MainPaymentScreen' component={MainPaymentScreen} options={{ headerShown: false }} />
        <Stack.Screen name='UpiPayment' component={UpiPayment} />
        <Stack.Screen name='CardPayment' component={CardPayment} options={{ headerShown: false }} />
        <Stack.Screen name='OnDeliveryPay' component={OnDeliveryPay} />
        <Stack.Screen name='PaymentComplete' component={PaymentComplete} options={{ headerShown: false }} />
        <Stack.Screen name='LogOut' component={LogOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen() {
  return <Stack.Navigator></Stack.Navigator>;
}

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route, }) => ({
        tabBarShowLabel: false,
        tabBarStyle: { height: 60, backgroundColor: 'rgba(29, 25, 43, 1)', borderRadius: 50, },

        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Lab Test') {
            iconName = focused ? 'flask' : 'flask-outline';
          } else if (route.name === 'Prescription') {
            iconName = focused ? 'camera' : 'camera-outline';
          }

          return <Ionicons name={iconName} size={30} color={'white'} />;
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, }} />
      <Tab.Screen name="Prescription" component={Prescription} options={{ headerShown: false, }} />
      <Tab.Screen name="Lab Test" component={LabTest} options={{ headerShown: false, }} />
    </Tab.Navigator>
  );
}

export default BottomTab;
