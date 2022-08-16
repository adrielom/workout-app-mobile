import { StatusBar } from 'expo-status-bar';
import { Text, NativeBaseProvider, Image } from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgFromUri, SvgFromXml, SvgUri, SvgXml } from 'react-native-svg';
import LogoFull from './src/components/LogoFull';
import LoginScreen from './src/screens/Login';


export default function App() {
  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
