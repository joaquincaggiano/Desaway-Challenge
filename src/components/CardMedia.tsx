import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Movie} from '../interfaces/movieInterfaces';
import {useNavigation} from '@react-navigation/native';
import { FadeInImage } from './FadeInImage';
import { Serie } from '../interfaces/serieInterfaces';

interface Props {
  media: Movie | Serie;
  mediaDetail: string;
}

const widthDimension = Dimensions.get('screen').width;

export const CardMedia = ({media, mediaDetail}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${media?.poster_path}`;
  const overview = media?.overview.split(' ', 25).join(' ');
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(mediaDetail, media)}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <FadeInImage uri={uri} style={styles.image}/>
        </View>

        <View style={styles.infoContainer}>
          {/*@ts-ignore */}
          <Text style={styles.titleText}>{media?.title || media?.name}</Text>
          <Text style={styles.popularityText}>{media?.popularity}</Text>
          <Text style={styles.overviewText}>{overview}...</Text>
        </View>
      </View>
    </TouchableOpacity>
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
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5
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
