import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Linking, ImageBackground, Dimensions } from 'react-native';
import { TextInput, Button, Text, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {


  const [country, onChangeCountry] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [text, onChangeText] = useState(null);
  return (
    <Provider>
      <View style={styles.container}>
        <ImageBackground
          resizeMode={'cover'}
          style={styles.backgroundImage}
          source={require('./assets/wp-bg.png')}
        >
          <TextInput
            style={{ fontSize: 30 }}
            mode="outlined"
            theme={{ colors: { primary: 'green', underlineColor: 'transparent', } }}
            multiline={false}
            onChangeText={country => onChangeCountry(country)}
            value={country}
            placeholder="Country Code (ex. 90)"
            placeholderTextColor="#999"
            keyboardType="number-pad"
          />
          <TextInput
            style={{ fontSize: 30 }}
            mode="outlined"
            theme={{ colors: { primary: 'green', underlineColor: 'transparent', } }}
            multiline={false}
            onChangeText={number => onChangeNumber(number)}
            value={number}
            placeholder="Phone (ex. 5XXXXXXXXX)"
            placeholderTextColor="#999"
            keyboardType="number-pad"
          />
          <TextInput
            style={{ fontSize: 30, marginBottom: 30 }}
            mode="outlined"
            theme={{ colors: { primary: 'green', underlineColor: 'transparent', } }}
            multiline={true}
            onChangeText={text => onChangeText(text)}
            placeholder="Message (ex. Hello!)"
            placeholderTextColor="#999"
            value={text}
          />
          <View style={[{ width: "60%", alignSelf: 'center' }]}>
            <Button
              onPress={() => { Linking.openURL('https://api.whatsapp.com/send?phone=' + country + number + '&text=' + text) }}
              color="green"
              mode="contained"
              backgroundColor="green"
            >
              <Icon name="whatsapp" size={24} color="#fff" />
              <Text style={{ fontSize: 20, color: "white", zIndex: -1 }}> SEND</Text>
            </Button>
          </View>
          <Text
            style={{ fontSize: 14, textAlign: 'center', marginTop: 20 }}
          >Copyright © 2021 by aydoscs </Text>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 35
  },
  backgroundImage: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    zIndex: -1,
    paddingTop: 200,
    padding: 40,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 50,
  }
});
