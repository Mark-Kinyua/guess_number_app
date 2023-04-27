import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={style.screen}>
            <Text>Game Over !!</Text>
            <Text>Number Of Rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="New Game" onPress={props.onRestart} />
        </View>
    );
};

const style = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GameOverScreen;