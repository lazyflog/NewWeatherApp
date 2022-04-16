import React from 'react';
import {View, StyleSheet} from 'react-native';

const MainBody: React.FC = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20},
  text: {
    fontWeight: '700',
    fontSize: 20,
    color: '#393939',
  },
});

export default MainBody;
