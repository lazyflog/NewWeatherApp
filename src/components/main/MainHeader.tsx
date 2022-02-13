import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MainHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WeatherApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingLeft: 20, paddingBottom: 20},
  text: {
    fontWeight: '700',
    fontSize: 20,
    color: '#393939',
  },
});

export default MainHeader;
