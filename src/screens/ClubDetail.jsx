import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import BackgroundImage from '../assets/backgrounds/background-club.png';
import BackIcon from '../assets/icons/carbon_chevron-right.png';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function ClubDetail({route}) {
  const {club} = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.background}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <Image source={BackIcon} style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.name}>{club.name}</Text>

        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <Image style={styles.image} source={club.image} />

          <Text style={styles.description}>{club.description}</Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: height,
    padding: 20,
  },
  image: {
    width: '100%',
    height: height / 3.5,
    borderRadius: 12,
    marginTop: 10,
  },
  name: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
    fontFamily: 'Poppins-Bold',
    textDecorationLine: 'underline',
  },
  scrollView: {
    paddingBottom: 100,
  },
  description: {
    textAlign: 'justify',
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Light',
  },
  data: {
    color: '#FF5050',
  },
  link: {
    color: '#0448D8',
  },
  backIcon: {
    width: 40,
    height: 40,
  },
});
