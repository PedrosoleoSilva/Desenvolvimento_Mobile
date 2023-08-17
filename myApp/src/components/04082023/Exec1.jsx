import { useState } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity, SafeAreaView } from "react-native";
import MyButton from "../MyButton";

export  const Exec1 = ({title, onPressButton}) => {
    const [message, setMessage] = useState(false)
    const [contador, setContador] = useState(0)

    const onPressButtonMessage =() =>{
        setMessage(!message)
      }
      const OnChageAumente = () =>{
        setContador(contador +1)
      }
      const OnChageDiminui = () =>{
        setContador(contador -1)
      }
      const OnChageZera = () =>{
        setContador(0)
      }

    return (
        <SafeAreaView>
           <Text style={style.text}>{contador}</Text>
            <MyButton title= '+ 1' onPressButton={OnChageAumente}/>
            <MyButton title='- 1' onPressButton={OnChageDiminui}/>
            <MyButton title='Zera' onPressButton={OnChageZera}/>

        </SafeAreaView>
    );
}
const style = StyleSheet.create({
    container: {
      flex: 1,    
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'aliceblue'
    },
     text: {
      fontSize: 32,
      color: 'red',
      fontWeight: 'bold'
    }
  })
  


