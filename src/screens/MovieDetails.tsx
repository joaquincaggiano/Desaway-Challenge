import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import {RootStackParamsMovie} from '../navigation/MoviesNavigator';
import {useMovies} from '../hooks/useMovies';
import {CardMediaDetail} from '../components/CardMediaDetail';

interface Props extends StackScreenProps<RootStackParamsMovie, 'MovieDetails'> {}

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
        <CardMediaDetail
          uri={uri}
          media={movie}
          onPress={() => navigation.pop()}
        />
      )}
    </>
  );
};
