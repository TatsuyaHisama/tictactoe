import React, {createContext, useContext} from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard,Pressable  } from 'react-native';
import {FirstPlayerContext,SecondPlayerContext} from'./Context';


export default function PlayersName  () {
    const {firstPlayer,setFirstPlayer}=useContext(FirstPlayerContext)
    const {secondPlayer,setSecondPlayer}=useContext(SecondPlayerContext)


return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <Text style={styles.header}>Player's name</Text>
                <TextInput placeholder="Player1's name"
                           style={styles.textInput1}
                           onChangeText={setFirstPlayer}
                           value={firstPlayer}
                />
                <TextInput placeholder="Player2's name"
                           style={styles.textInput2}
                           onChangeText={setSecondPlayer}
                           value={secondPlayer}
                />
                <View style={styles.btnContainer}>

                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
)};



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    textInput1: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },
    textInput2: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12
    }
});

export class setFirstPlayer {
}
export class setSecondPlayer{

}