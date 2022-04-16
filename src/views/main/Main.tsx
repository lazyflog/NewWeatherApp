import React from 'react';
import {View, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import MainBody from '../../components/main/MainBody';
import MainFooter from '../../components/main/MainFooter';
import MainHeader from '../../components/main/MainHeader';

const Main: React.FC = () => {
  interface WeatherTypes {
    요일: String;
    날씨: String;
    최고기온: Number;
    최저기온: Number;
  }
  const data: WeatherTypes[] = [
    {요일: '월요일', 날씨: '맑음', 최고기온: 23, 최저기온: 13},
    {요일: '화요일', 날씨: '흐림', 최고기온: 22, 최저기온: 11},
    {요일: '수요일', 날씨: '맑음', 최고기온: 25, 최저기온: 16},
    {요일: '목요일', 날씨: '구름', 최고기온: 20, 최저기온: 15},
    {요일: '금요일', 날씨: '호우', 최고기온: 19, 최저기온: 10},
    {요일: '토요일', 날씨: '번개', 최고기온: 17, 최저기온: 9},
    {요일: '일요일', 날씨: '맑음', 최고기온: 20, 최저기온: 12},
  ];
  return (
    <View style={styles.container}>
      <View style={{flex: 1, paddingTop: getStatusBarHeight()}}>
        <MainHeader />
        <MainBody />
        <MainFooter data={data} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
});

export default Main;
