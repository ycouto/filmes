import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, InteractionManager, ImageBackground, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const DetailScreen = ({ navigation, route }) => {
    const movie = route.params.movie;
    const youtube_url = `https://www.youtube.com/watch?v=${movie.yt_trailer_code}`;
    const getStars = () => {
        let stars = '';
        return stars.padStart(movie.rating, '★');
    };

    const callYoutube = () => {
        Linking.openURL(youtube_url);
    }


    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                imageStyle={{ opacity: 0.6 }}
                style={styles.banner}
                source={{ uri: movie.background_image }}
            >
                <Image style={styles.cover} source={{ uri: movie.medium_cover_image }} />
                <View>
                    <Text style={styles.title}>{movie.title_long}</Text>
                </View>
            </ImageBackground>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.content}>
                    <Text style={styles.year}>{`Ano: ${movie.year}`}</Text>
                    <Text
                        style={{ ...styles.evaluation, color: movie.rating >= 7 ? 'green' : 'red' }}
                    >{`Avaliação: ${movie.rating}`}</Text>
                    <Text style={styles.evaluation}>{getStars()}</Text>

                    <TouchableOpacity onPress={callYoutube}>
                        <Text style={styles.youtube}>Veja no YouTube</Text>
                    </TouchableOpacity>

                    <Text style={styles.subtitle}>Descrição</Text>
                    <Text style={styles.description}> {movie.description_full}</Text>
                    <Text style={styles.subtitle}>Gêneros</Text>
                    {movie.genres.map((genre) => (
                        <Text style={styles.description}> {genre}</Text>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    youtube: {
        marginTop: 18,
        color: 'red',
        fontWeight: 'bold',
    },
    subtitle: {
        marginTop: 12,
        color: 'white',
        fontWeight: 'bold',
    },
    content: {
        padding: 16,
    },
    description: {
        marginTop: 6,
        color: 'white',
        fontSize: 10,
    },
    banner: {
        padding: 50,
        alignItems: 'center',
        flexDirection: 'row',
    },
    cover: {
       // marginLeft: 5,
        marginRight: 16,
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
    },
});

export default DetailScreen;