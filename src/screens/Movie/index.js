import {useRoute} from '@react-navigation/native';
import React, {useEffect, useCallback, useState} from 'react';
import {Text, View, ActivityIndicator, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {getMovieDetails} from '../../api/movie';
import {Section} from '../../components';
import {COLORS} from '../../theme';
import styles from './styles';

export const MovieScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const route = useRoute();
  const {id} = route.params;

  useEffect(() => {
    _onLoad();
  }, [_onLoad]);

  const _onLoad = useCallback(async () => {
    const _data = await getMovieDetails({id});
    setData(_data);
    setLoading(false);
  }, [id]);

  return loading ? (
    <ActivityIndicator style={styles.activityIndicator} color={COLORS.sun} />
  ) : (
    <>
      <View style={styles.topView}>
        <FastImage
          source={
            data?.Poster === 'N/A'
              ? require('../../../assets/images/no-photo.png')
              : {uri: data?.Poster}
          }
          style={styles.image}
        />
        <View style={styles.movieShortInfo}>
          <Text style={styles.title}>{data?.Title}</Text>
          <Text style={styles.shortInfoText}>{data?.Released}</Text>
          <Text style={styles.shortInfoText}>{data?.Genre}</Text>
          <Text style={styles.shortInfoText}>{data?.Runtime}</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollableData}
        showsVerticalScrollIndicator={false}>
        <View style={styles.ratingsContainer}>
          {data.Ratings.map(item => (
            <View style={styles.ratingCol}>
              <Text style={styles.ratingHeader}>
                {item.Source === 'Internet Movie Database'
                  ? 'IMDB'
                  : item.Source}
              </Text>
              <Text style={styles.rating}>{item.Value}</Text>
            </View>
          ))}
        </View>
        <Section title={'Summary'} body={data.Plot} />
        <Section title={'Director'} body={data.Director} />
        <Section title={'Actors'} body={data.Actors} />
      </ScrollView>
    </>
  );
};
