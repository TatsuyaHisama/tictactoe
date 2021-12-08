import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import {setFirstPlayer,setSecondPlayer} from '../Config/PlayersName'

const styles = StyleSheet.create({
        container: {
                width: 80,
                height: 80,
                borderWidth: 1,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center'
        },
        text: {
                fontSize: 24,
                color:"white"
        }
})

type Props = {
        value: {setFirstPlayer:any} | {setSecondPlayer:any} | null
        onPress: () => void
}

export default function Square(props: Props) {
        const { value, onPress } = props
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                    <Text style={styles.text}>{value}</Text>
            </TouchableOpacity>
        )
}
