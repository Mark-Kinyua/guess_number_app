import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.27,
        elevation: 12,
        backgroundColor: 'white',
        padding: 16 ,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20 ,
    }
});

export default Card;