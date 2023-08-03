import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {RootStackParams} from '../navigation/MoviesNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {useMovies} from '../hooks/useMovies';
import {CardMovieDetail} from '../components/CardMovieDetail';

interface Props extends StackScreenProps<RootStackParams, 'MovieDetails'> {}

const heightDimension = Dimensions.get('screen').height;

export const MovieDetails = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  const {isLoading} = useMovies();

  return (
    <>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <CardMovieDetail
          uri={uri}
          movie={movie}
          onPress={() => navigation.pop()}
        />
      )}
    </>
  );
};
