import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

type Props = {
  data: WeatherTypes[];
};
interface WeatherTypes {
  요일: String;
  날씨: String;
  최고기온: Number;
  최저기온: Number;
}

const MainFooter: React.FC<Props> = ({data}) => {
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

export default MainFooter;
