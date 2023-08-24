import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

import { Exec1 } from './src/components/04082023/Exec1';
import Visible from './src/screens/Visible';

export default function App() {


  return (
   <Visible/>
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