import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Movie} from '../interfaces/movieInterfaces';

const heightDimension = Dimensions.get('screen').height;

interface Props {
  uri: string;
  movie: Movie;
  onPress: () => void;
}

export const CardMovieDetail = ({uri, movie, onPress}: Props) => {
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.popularity}>{movie.popularity}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>

      {/* Botón para regresar */}
      <TouchableOpacity style={styles.backButton} onPress={onPress}>
        <Icon name="arrow-back-outline" size={60} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: heightDimension * 0.7,
    marginBottom: 40,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,

    elevation: 10,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  infoContainer: {
    marginHorizontal: 20,
    marginBottom: 120,
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  popularity: {
    fontSize: 20,
    color: 'grey',
    marginTop: 5,
  },
  overview: {
    fontSize: 22,
    color: 'black',
    marginTop: 10,
    textAlign: 'justify',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 40,
    left: 5,
  },
});
