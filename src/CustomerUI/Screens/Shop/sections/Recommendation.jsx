import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../../Theme/Dimension';
import Card from '../../../components/Card';
import { useNavigation } from '@react-navigation/native';

const Recommendation = ({THEME, title, products}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, {color: THEME.TEXTPRIMARY}]}>
          {title}
        </Text>
        <Pressable>
        <Text style={[styles.seeAll,{color: THEME.TEXTPRIMARY}]}>See All</Text>
        </Pressable>
      </View>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Card cardInfo={item} navigation={navigation} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
  container: {
    marginTop: SCREEN_HIGHT * 0.01,
  },
  header: {
    paddingVertical: SCREEN_WIDTH * 0.001,
    paddingHorizontal: SCREEN_WIDTH * 0.045,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: Fontsize.SUB - 2,
    fontFamily: Fontfamily.MEDIUM,
  },
  seeAll: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.REGULAR,
  },
});
