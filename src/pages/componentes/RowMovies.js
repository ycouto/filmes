import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';



const RowMovies = ({ item, onPress }) => {
    const getStars = () => {
        let stars = '';
        return stars.padStart(item.rating, '★');
    };
    return (
        <TouchableOpacity
            onPress={onPress} style={{ flexDirection: 'row', marginVertical: 8 }}>
            <Image style={styles.cover} source={{ uri: item.medium_cover_image }} />
            <View style={styles.side}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.year}>{`Ano: ${item.year}`}</Text>
                <Text style={{ ...styles.evaluation, color: item.rating >= 7 ? 'green' : 'red' }}
                >{`Avaliação: ${item.rating}`}</Text>
                <Text style={styles.evaluation}>{getStars()}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    cover: {
        marginLeft: 16,
        width: 70,
        height: 100,
    },
    side: {
        height: 100,
        marginLeft: 10,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    year: {
        color: 'grey',
        marginTop: 5,
        fontSize: 12,
        fontWeight: 'bold',
    },
    evaluation: {
        color: 'yellow',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
export default RowMovies;