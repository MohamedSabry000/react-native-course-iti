import React from 'react';

import {View, Text} from 'react-native';
import styles from './styles';

export const Section = ({title, body}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};
