import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonCard = ({ name, index }) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.name}>{name.toUpperCase()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 5,
        backgroundColor: '#e03434',
        borderRadius: 8,
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PokemonCard;;
