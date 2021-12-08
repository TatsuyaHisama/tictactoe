import React, {useMemo} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import {setFirstPlayer,setSecondPlayer} from '../Config/PlayersName'
import Square from './Square'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 10,
        justifyContent:"center"
    },
    status: {
        marginBottom: 10,
        color:"white"
    },
    rowContainer: {

        flexDirection: 'row',
    },
    reset: {
        marginVertical: 10
    }
})

type Squares = {
    values: Array<{setFirstPlayer:any} | {setSecondPlayer:any} | null>,
    xIsNext: boolean
}

function calculateWinner(squares: Squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares.values[a] && squares.values[a] === squares.values[b] && squares.values[a] === squares.values[c]) {
            return squares.values[a];
        }
    }
    return null;
}

export default function Board() {
    const initialSquares: Squares = {
        values: Array(9).fill(null),
        xIsNext: true
    }
    const [squares, setSquares] = React.useState(initialSquares)

    const status = useMemo(()=>{
        const winner = calculateWinner(squares)
        if (winner) {
            return( 'Winner: ' + winner)}
            else{
        return (
            'Next player: ' + (squares.xIsNext ? {setFirstPlayer} : {setSecondPlayer})
        )}
    },[squares])



    const handlePress = React.useCallback(
        (i: number) => {
            const values = squares.values.slice()

            if (calculateWinner(squares) || squares.values[i]) {
                return
            }

            setSquares({
                values: values.map((value,index)=> index===i? squares.xIsNext ? {setFirstPlayer} : {setSecondPlayer} : value ),
                xIsNext: !squares.xIsNext
            })
        }, [squares]
    )

    const renderSquare = (i: number) => {
        return <Square value={squares.values[i]} onPress={() => handlePress(i)} />
    }

    const resetSquares = React.useCallback(
        () => setSquares(initialSquares), [setSquares, initialSquares]
    )

    return (
        <View style={styles.container}>
            <Text style={styles.status}>{status}</Text>
            <View style={styles.rowContainer}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </View>
            <View style={styles.rowContainer}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </View>
            <View style={styles.rowContainer}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </View>
            <View style={styles.reset}>
                <Button title="Reset" onPress={resetSquares} />
            </View>
        </View>
    )
}
