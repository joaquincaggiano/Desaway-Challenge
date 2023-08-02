import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const MoviesScreen = () => {
  const {isLoading, moviesInCine} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  return (
    <View style={{marginTop: top + 20}}>
      <Text>MoviesScreen</Text>
    </View>
  );
};
