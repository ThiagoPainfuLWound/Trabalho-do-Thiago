import React from "react";
import {StyleSheet, View, ImageBackground, Image, Text, TextInput, ScrollView} from "react-native";

const App = () => (
  <View style={styles.container}>
    <ImageBackground
    source={require('./assets/Lousa3.png')}
    style={styles.imageBackground}
    >
      <Image
      source={require('./assets/Title2.png')}
      />

      <Image
      source={require('./assets/Enunciado.png')}
      />

      <Image
      source={require('./assets/Drone.png')}
      style={{width: 200, height:200}}
      />

      <TextInput
      style={{
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
      }}
      defaultValue="       ESCREVA A RESPOSTA"
      />

      <Image
      source={require('./assets/Avião.png')}
      style={{width: 200, height:200}}
      />

      <TextInput
      style={{
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
      }}
      defaultValue="       ESCREVA A RESPOSTA"
      />

      <Image
      source={require('./assets/Helicóptero.png')}
      style={{width: 200, height:200}}
      />

      <TextInput
      style={{
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
      }}
      defaultValue="       ESCREVA A RESPOSTA"
      />

      </ImageBackground>
      </View>)
      ;

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: "column"
        },
        imageBackground: {
          flex: 1,
        },
      });

      export default App;
