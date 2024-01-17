import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import AppHeader from './appHeader/AppHeader';

const LabTest = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <AppHeader />
      <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}} >
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <ChevronLeftIcon />
        </TouchableOpacity>
        <Text>Lab test</Text>
      </View>
      <View style={{width:'100%',height:'50%'}}>
          <Image source={require('../assets/images/ComingSoon.jpg')} style={{width:'100%',height:'100%'}} />
        </View>
    </View>
  )
}

export default LabTest

const styles = StyleSheet.create({})