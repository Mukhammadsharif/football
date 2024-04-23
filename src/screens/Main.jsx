import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BackgroundImage from '../assets/backgrounds/main-background.png';

const {width, height} = Dimensions.get('window');

export default function Main() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground
        source={BackgroundImage}
        style={styles.background}></ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#03203D',
    borderBottomWidth: 8,
    borderColor: '#E40539',
  },
  background: {
    flex: 1,
    height: height,
  },
});
