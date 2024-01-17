import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { medicineData } from '../MedicineData';
import styles from './AllFlatListCSS';

const MainMedicines = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ProductInfo', { item })}
    >
      <Image
        resizeMode="contain"
        source={item.Image}
        style={styles.image}
      />
      <View style={styles.itemDetails}>
        <Text style={styles.Text1}>{item.name}</Text>
        <Text style={styles.text2}>₹ {item.amount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.View}>
      <FlatList
        data={medicineData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MainMedicines;
