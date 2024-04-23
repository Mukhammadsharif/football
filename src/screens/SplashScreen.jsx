import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import BackgroundImage from '../assets/backgrounds/Onboarding.png';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.background}>
        <View>
          <Text style={styles.text}>Английская Премьер-лига</Text>

          <Text style={styles.subText}>
            #История {'  '} #Факты {'  '} #Новости
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('TabScreen')}>
            <Text style={styles.title}>Продолжить</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#FF5050',
    width: width * 0.85,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 50,
    borderRadius: 12,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  text: {
    color: 'black',
    fontSize: 42,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  subText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
    marginBottom: 30,
  },
});
