import React from 'react';
import {Text, View, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

export const MovieCard = ({title, releaseDate, imageUrl, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FastImage
        source={
          imageUrl === 'N/A'
            ? require('../../../assets/images/no-photo.png')
            : {uri: imageUrl}
        }
        style={styles.image}
      />
      <View style={styles.rightContainer} />
      <View style={styles.leftContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.releaseDateText}>{`Released: ${releaseDate}`}</Text>
      </View>
    </Pressable>
  );
};
