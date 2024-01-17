import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { medicineData } from '../MedicineData';
import styles from './AllFlatListCSS';

const FlatlistDemo2 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.View}>
            <FlatList
                data={medicineData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={(element) => {
                    return (<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductInfo', { item: element.item })}>
                        <Image
                            resizeMode={'contain'}
                            source={element.item.Image}
                            style={{ height: 100, width: 100, alignSelf: 'center' }} />
                        <Text style={styles.Text1}>{element.item.name}</Text>
                    </TouchableOpacity>);
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default FlatlistDemo2