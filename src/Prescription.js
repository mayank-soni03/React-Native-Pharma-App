import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CameraIcon, ChevronLeftIcon, PhotoIcon } from 'react-native-heroicons/solid';

const Prescription = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'lightgreen' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }} >
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <ChevronLeftIcon />
        </TouchableOpacity>
        <Text>Upload Your Prescription</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: '8%', marginTop:'20%' }}>
        <TouchableOpacity style={{ borderWidth: 1, flexDirection: 'row', height: '100%', width: '30%', justifyContent: 'space-around', alignItems: 'center', borderRadius: 8, backgroundColor: 'white' }}>
          <CameraIcon />
          <Text>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ borderWidth: 1, flexDirection: 'row', height: '100%', width: '30%', justifyContent: 'space-around', alignItems: 'center', borderRadius: 8, backgroundColor: 'white' }}>
          <PhotoIcon />
          <Text>Gallery</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ marginTop: 40, height: '8%', width: '80%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor: 'white', borderRadius: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: '500' }}>Old Uploaded Priscription</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Prescription

const styles = StyleSheet.create({})

