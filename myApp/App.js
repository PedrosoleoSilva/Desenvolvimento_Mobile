import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

import { Exec1 } from './src/components/04082023/Exec1';

export default function App() {
  const [contador, setContador]= useState(0);

  return (
    <View style={styles.card}>
    <Text></Text>
</View>
)
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    backgroundColor: "aliceblue",
    height: 350,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    
  }
});