import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const MainBody: React.FC = () => {
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
      <View
        style={{
          backgroundColor: 'rgba(245,245,245,0.6)',
          padding: 20,
          borderRadius: 20,
        }}>
        <View
          style={{
            padding: 20,
            backgroundColor: '#ddd',
            borderRadius: 20,
          }}>
          <FlatList
            data={data}
            keyExtractor={item => JSON.stringify(item)}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#393939',
                    }}>
                    {item.요일}
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#393939',
                    }}>
                    {item.날씨}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: '#393939',
                      }}>
                      {item.최고기온}℃{' '}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#383b40',
                        fontWeight: '600',
                        width: 20,
                      }}>
                      {item.최저기온}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
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
