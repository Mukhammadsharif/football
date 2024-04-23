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
import {List} from 'react-native-paper';
import {
  domination,
  formatCompetition,
  history,
  influence,
  leagueCup,
  origin,
  sponsors,
} from '../data/data';

const {width, height} = Dimensions.get('window');

export default function Main() {
  const navigation = useNavigation();
  const [expanded, setExpanded] = React.useState(true);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground source={BackgroundImage} style={styles.background}>
        <Text style={styles.title}>Английская Премьер-лига</Text>

        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <List.Section
            title="Разделы"
            titleStyle={{
              color: 'white',
              fontFamily: 'Poppins-Bold',
              fontSize: 30,
            }}>
            <List.Accordion
              title="История"
              left={props => <List.Icon {...props} icon="history" />}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{history}</Text>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Основание (1991)"
              left={props => <List.Icon {...props} icon="origin" />}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{origin}</Text>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Формат соревнования"
              left={props => (
                <List.Icon {...props} icon="format-align-center" />
              )}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{formatCompetition}</Text>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Спонсоры"
              left={props => <List.Icon {...props} icon="cash-multiple" />}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{sponsors}</Text>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Доминирование (2003—2009)"
              left={props => <List.Icon {...props} icon="signal-4g" />}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{domination}</Text>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Влияние на мировой футбол"
              left={props => <List.Icon {...props} icon="ph" />}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{influence}</Text>
              </View>
            </List.Accordion>

            <List.Accordion
              title="Кубок Премьер-лиги"
              left={props => <List.Icon {...props} icon="soccer" />}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{leagueCup}</Text>
              </View>
            </List.Accordion>
          </List.Section>
          <Text style={styles.text}></Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: height,
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginTop: 10,
  },
  textContainer: {
    backgroundColor: 'white',
    paddingRight: 20,
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'justify',
    fontFamily: 'Poppins-Light',
  },
  scrollView: {
    marginTop: 30,
    paddingBottom: 100,
  },
});
