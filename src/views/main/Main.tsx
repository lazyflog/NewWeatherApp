import React from 'react';
import {View, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import MainBody from '../../components/main/MainBody';
import MainHeader from '../../components/main/MainHeader';

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, paddingTop: getStatusBarHeight()}}>
        <MainHeader />
        <MainBody />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default Main;
