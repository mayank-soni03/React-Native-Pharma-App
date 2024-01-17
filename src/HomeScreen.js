import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MagnifyingGlassIcon, MapPinIcon, ShoppingCartIcon, UserIcon } from 'react-native-heroicons/solid'
import AppHeader from './appHeader/AppHeader';
import FlatlistDemo from './mainScreenFlatList/FlatListDemo1';
import MainMedicines from './mainScreenFlatList/MainMedicines';
import FlatlistDemo2 from './mainScreenFlatList/FlatListDemo2';

function HomeScreen() {
  const navigation = useNavigation();
  const [locations, setLocations] = useState([1, 2, 3, 4]);
  const [showSearch, toggleSearch] = useState(false);

  return (
    <View style={{ flex: 1 }}  >
      {/* Header */}
      <AppHeader />
      <ScrollView showsVerticalScrollIndicator={false} >
        {/* User, cart & search section */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Text>
              <Text style={{ fontWeight: 'bold' }} ><MapPinIcon />Current Location,</Text>{"\n"} Indore
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity>
              <UserIcon style={{ padding: '10px', fontSize: 20 }} onClick={() => navigation.navigate('UserId')} />
            </TouchableOpacity>

            <TouchableOpacity>
              <ShoppingCartIcon style={{ padding: '10px', fontSize: 20 }} onClick={() => navigation.navigate('CartScreen')} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.SearchBox} onPress={() => toggleSearch(!showSearch)} >
          <MagnifyingGlassIcon style={styles.Icon} size={30} />
          <TextInput placeholder='Search Medicines' style={styles.TextInput} />
        </TouchableOpacity>
        {
          locations.length > 0 && showSearch ? (
            <View style={styles.searchResults}>
              { locations.map((loc, index) => {
                  return (
                    <TouchableOpacity
                      // onPress={() => handleLocation(loc)}
                      style={styles.searchResultItem}
                      key={index}
                    >
                      <Text style={styles.searchResultText}>Crocin
                      </Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          ) : null
        }

        {/* Scrolling section */}
        <View style={{ marginTop: 40 }}>
          <View>
          <Text style={styles.FlatListInfoText} >Medical products</Text>
          </View>
          <FlatlistDemo />
          <View>
          <Text style={styles.FlatListInfoText} >Most searched Medicines</Text>
          </View>
          <MainMedicines />
          <View>
          <Text style={styles.FlatListInfoText} >Skin Care Products</Text>
          </View>
          <FlatlistDemo2 />

        </View>
        
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  SearchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '50px',
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: 'rgba(217, 217, 217, 1)'
  },
  location: {
    flex:1,
    position: 'absolute',
    width: '90%',
    backgroundColor: 'rgb(249,250,251)',
    top: '16px',
    borderRadius: '24px',
    marginTop: '110px',
    marginRight: '0px',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  location2: {
    flexDirection: 'row',
    paddingLeft: '8px',
    paddingRight: '4px',
    borderBottomWidth: '2px',
    borderBottomColor: 'rgb(156,163,176)',
    borderRadius: '50px',
    margin: '2px',
    marginBottom: '3px'
  },
  text: {
    color: 'black',
    fontSize: '18px',
    lineHeight: '28px'
  },
  TextInput: {
    paddingLeft: "30px",
    height: "100%",
    width: '100%',
    fontSize: "20px",
    color: 'black',
    borderRadius: '50px',
    padding: 10,
  },
  Icon: {
    borderRadius: '50px',
    marginLeft: '5px',
    padding: '3px'
  },
  Image: {
    height: '60%',
    width: '80%',
    borderRadius: '10px',
    borderWidth: 1,
  },
  FlatListInfoText: { 
    fontSize:18,
    marginLeft:20,
    fontWeight:'600',
    marginTop: 40,
    marginBottom:5,
    letterSpacing:1,
   },
   searchResults: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    width:'92%',
    alignSelf:'center'
  },
  searchResultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchResultText: {
    fontSize: 16,
    color: '#333',
  },
})

