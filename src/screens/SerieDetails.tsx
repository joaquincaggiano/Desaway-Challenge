import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {RootStackParamsSerie} from '../navigation/SeriesNavigator';
import {useSeries} from '../hooks/useSeries';
import {Loading} from '../components/Loading';
import {CardMediaDetail} from '../components/CardMediaDetail';

interface Props
  extends StackScreenProps<RootStackParamsSerie, 'SerieDetails'> {}

export const SerieDetails = ({route, navigation}: Props) => {
  const serie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500/${serie?.poster_path}`;
  const {isLoading} = useSeries();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <CardMediaDetail
          uri={uri}
          media={serie}
          onPress={() => navigation.pop()}
        />
      )}
    </>
  );
};
