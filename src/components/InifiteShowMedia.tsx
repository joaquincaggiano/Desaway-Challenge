import React, {useCallback} from 'react';
import {Text, FlatList, ActivityIndicator} from 'react-native';
import {Movie} from '../interfaces/movieInterfaces';
import {CardMedia} from './CardMedia';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Serie} from '../interfaces/serieInterfaces';

interface Props {
  data: Movie[] | Serie[];
  getMedia: () => void;
  title: string;
  mediaDetail: string;
}

interface Item {
  item: Movie | Serie;
}

export const InifiteShowMedia = ({
  data,
  getMedia,
  title,
  mediaDetail,
}: Props) => {
  const {top} = useSafeAreaInsets();

  const renderItem = useCallback(({item}: Item) => {
    return <CardMedia media={item} mediaDetail={mediaDetail} />;
  }, [mediaDetail]);

  return (
    <FlatList
      //@ts-ignore
      data={data}
      keyExtractor={media => media.id.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      onEndReached={getMedia}
      onEndReachedThreshold={0.6}
      ListHeaderComponent={
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 20,
            marginTop: top + 20,
          }}>
          {title}
        </Text>
      }
      ListFooterComponent={
        <ActivityIndicator style={{height: 100}} size="large" color="grey" />
      }
    />
  );
};
