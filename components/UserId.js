import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  BookOpenIcon,
  ChevronLeftIcon,
  ClockIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import AppHeader from '../src/appHeader/AppHeader';
import { ChevronRightIcon, Cog6ToothIcon, DocumentTextIcon, UsersIcon } from 'react-native-heroicons/solid';
import styles from './UserIdCss';

// Define color constants
const Colors = {
  background: '#F0FFFF',
  separator: 'lightblue',
};

// Reusable ListItem component
const ListItem = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      {icon}
      <Text style={styles.listItemText}>{label}</Text>
      <ChevronRightIcon />
    </TouchableOpacity>
  );
};

const UserId = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <ChevronLeftIcon size={28} />
        </TouchableOpacity>
        <TouchableOpacity>
          <QuestionMarkCircleIcon size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileImageContainer}>
        <Image source={require('../assets/images/RedPanda.jpg')} style={styles.profileImage} />
      </View>
      <View style={styles.separator} />
      <View style={styles.listContainer}>
        {/* User Data */}
        <ListItem icon={<UserIcon />} label="Personal Data" onPress={() => navigation.navigate('PersonalData')} />

        {/* Settings */}
        <ListItem icon={<Cog6ToothIcon />} label="Settings" onPress={() => navigation.navigate('LogOut')} />

        {/* History */}
        <ListItem icon={<ClockIcon />} label="History" onPress={() => navigation.navigate('History')} />

        {/* E-Statement */}
        <ListItem icon={<DocumentTextIcon />} label="E-Statement" onPress={() => navigation.navigate('EStatement')} />

        {/* Our Handbook */}
        <ListItem icon={<BookOpenIcon />} label="Our Handbook" onPress={() => navigation.navigate('Handbook')} />

        {/* Tell Your Friend */}
        <ListItem icon={<UsersIcon />} label="Tell Your Friend" onPress={() => navigation.navigate('TellFriend')} />

        {/* About Us */}
        <ListItem icon={<InformationCircleIcon />} label="About Us" onPress={() => navigation.navigate('AboutUs')} />
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default UserId;
