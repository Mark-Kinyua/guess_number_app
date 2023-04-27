import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from 'react-native'

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = props => {

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );

    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice)
            ||
            (direction === 'higher' && currentGuess > props.userChoice)
        ) {
            Alert.alert('Don\'t Lie Bro!!', 'You know this ain\'t the case, it\'s wrong....', [
                { text: 'Sorry', style: 'cancel' }
            ]);
            return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.guessContainer}>
                <Text>Opponent's Guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
            </View>
            <View style={styles.wrap}>
                <Card style={styles.buttonContainer}>
                    <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                    <Button title="HIGHER" onPress={nextGuessHandler.bind(this, 'higher')} />
                </Card>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    wrap: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    guessContainer: {
        alignItems: 'center',
    },
});

export default GameScreen;