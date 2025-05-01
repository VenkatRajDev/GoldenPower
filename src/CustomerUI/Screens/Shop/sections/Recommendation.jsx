import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../../Theme/Dimension';
import Card from '../../../components/Card';

const Recommendation = ({THEME, title, products}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, {color: THEME.TEXTPRIMARY}]}>
          {title}
        </Text>
        <Text style={[styles.seeAll]}>See All</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Card price={item.price} image={item.image} wholeData={item} />
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
