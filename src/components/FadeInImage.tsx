import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageErrorEventData,
  ImageStyle,
  NativeSyntheticEvent,
  StyleProp,
  View,
} from 'react-native';
import {useFade} from '../hooks/useFade';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style = {}}: Props) => {
  const {opacity, fadeIn} = useFade();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
  };

  return (
    <View
      style={{
        ...(style as any),
      }}>
      {isLoading && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator color="black" size="large" />
        </View>
      )}

      <Animated.Image
        source={{uri}}
        onError={onError}
        onLoad={finishLoading}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};
