import React from 'react'
import Game from './Game/Game'
import ModalButton from './Config/ModalButton'
import {View, Text, StyleSheet} from "react-native";


export default function App(){
  return(
      <View style={styles.container}>
        <View style={styles.top}><Text style={styles.title}>三目並べ</Text></View>
          <View style={styles.middle}><Game /></View>
          <View style={styles.bottom}><ModalButton /></View>
      </View>
  )}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 50,

    },
    top:{
        flex: 1
    },
    title:{
      color:"black",
      fontSize:30,
      alignItems: "center",
        justifyContent:"center",

    },
    middle:{
        flex: 2,
        backgroundColor:"black"
    },
    bottom:{
        flex: 1
    }
    })