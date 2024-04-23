import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Badge} from 'react-native-paper';
import {stadiums} from '../data/stadiums';
import {useNavigation} from '@react-navigation/native';

export default function Stadiums() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        {stadiums.map((stadium, index) => (
          <TouchableOpacity
            style={styles.card}
            key={index}
            onPress={() =>
              navigation.navigate('StadiumDetail', {stadium: stadium})
            }>
            <Image source={stadium.image} style={styles.image} />

            <View style={styles.titleContainer}>
              <Text style={styles.title}>{stadium.name}</Text>
              <Text style={styles.content}>
                {stadium.description.substring(0, 100)}...
              </Text>

              <Badge style={styles.badge}>Подробнее</Badge>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    marginBottom: 6,
    marginLeft: 10,
    fontFamily: 'Jura-Bold',
  },
  content: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
    fontFamily: 'Jura-Light',
  },
  image: {
    width: '40%',
    height: 100,
    borderRadius: 12,
  },
  titleContainer: {
    width: '60%',
  },
});
