import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterfaces';

interface Props {
  movie: Movie;
}

const widthDimension = Dimensions.get('screen').width;

export const CardMovie = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  const overview = movie?.overview.split(' ', 25).join(' ');

  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>

      <View style={{...styles.infoContainer, padding: 5}}>
        <Text style={styles.titleText}>{movie?.title}</Text>
        <Text style={styles.popularityText}>{movie?.popularity}</Text>
        <Text style={styles.overviewText}>{overview}...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    width: widthDimension * 0.95,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 10,

  },
  infoContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15
  },
  image: {
    flex: 1,
    borderRadius: 15,
    marginRight: 10,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  popularityText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    color: 'grey',
  },
  overviewText: {
    fontSize: 18,
    color: 'black',
  },
});
