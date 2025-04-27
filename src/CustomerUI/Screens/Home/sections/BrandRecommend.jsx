import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../../Theme/Dimension';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import BRANDDATA from '../brandtem';
import BrandCard from '../../../components/BrandCard';

const numOfColumns = 2;

const BrandRecommend = ({THEME}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: SCREEN_WIDTH * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={[styles.title, {color: THEME.TEXTPRIMARY}]}>
          Best Brands
        </Text>
        <Text style={[styles.seeAll, {color: THEME.TEXTPRIMARY}]}>See All</Text>
      </View>

      <FlatList
        data={BRANDDATA}
        renderItem={({item}) => (
          <BrandCard
            image={item.image}
            wholeData={item}
            WIDTH={SCREEN_WIDTH * 0.45}
          />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={numOfColumns}
        scrollEnabled={false}
        style={{marginTop: SCREEN_HIGHT * 0.01}}
        contentContainerStyle={{alignItems: 'center'}}
      />
    </View>
  );
};

export default BrandRecommend;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
  },
  title: {
    fontSize: Fontsize.SUB,
    fontFamily: Fontfamily.SEMIBOLD,
  },
  seeAll:{
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.REGULAR
  }
});
