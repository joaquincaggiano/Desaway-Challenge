import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CardMovie} from '../components/CardMovie';

export const MoviesScreen = () => {
  const {isLoading, moviesInCine, getMovies} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }
  return (
    <View style={{padding: 10}}>
      <FlatList
        data={moviesInCine}
        keyExtractor={movie => movie.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <CardMovie movie={item} />}
        onEndReached={getMovies}
        onEndReachedThreshold={0.4}
        ListHeaderComponent={
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              fontWeight: 'bold',
              marginBottom: top + 20,
              marginTop: top + 20,
            }}>
            Películas
          </Text>
        }
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size="large" color="grey" />
        }
      />
    </View>
  );
};
