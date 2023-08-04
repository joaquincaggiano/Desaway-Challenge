import React from 'react';
import {View} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {InifiteShowMedia} from '../components/InifiteShowMedia';
import {Loading} from '../components/Loading';

export const MoviesScreen = () => {
  const {isLoading, moviesInCine, getMovies} = useMovies();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={{padding: 10}}>
          <InifiteShowMedia
            data={moviesInCine}
            getMedia={getMovies}
            title="Películas"
            mediaDetail='MovieDetails'
          />
        </View>
      )}
    </>
  );
};
