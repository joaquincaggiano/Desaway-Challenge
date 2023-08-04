import React from 'react';
import {View} from 'react-native';
import {useSeries} from '../hooks/useSeries';
import {Loading} from '../components/Loading';
import {InifiteShowMedia} from '../components/InifiteShowMedia';

export const SeriesScreen = () => {
  const {isLoading, seriesInTv, getSeries} = useSeries();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={{padding: 10}}>
          <InifiteShowMedia
            data={seriesInTv}
            getMedia={getSeries}
            title="Series"
            mediaDetail='SerieDetails'
          />
        </View>
      )}
    </>
  );
};
