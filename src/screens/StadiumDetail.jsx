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
  Linking,
} from 'react-native';
import BackgroundImage from '../assets/backgrounds/stadium.png';
import {DataTable} from 'react-native-paper';
import BackIcon from '../assets/icons/carbon_chevron-right.png';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function StadiumDetail({route}) {
  const {stadium} = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={BackgroundImage} style={styles.background}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <Image source={BackIcon} style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.name}>{stadium.name}</Text>

        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <Image style={styles.image} source={stadium.image} />

          <Text style={styles.description}>{stadium.description}</Text>

          <DataTable>
            <DataTable.Row>
              <DataTable.Cell>
                <Text style={styles.data}>Вместимость</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={styles.data}>{stadium.views}</Text>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>
                <Text style={styles.data}>Год открытия</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={styles.data}>{stadium.openYear}</Text>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>
                <Text style={styles.data}>Сайт</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <TouchableOpacity onPress={() => Linking.openURL(stadium.site)}>
                  <Text style={styles.link}>{stadium.site}</Text>
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
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
