import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../../Theme/Dimension';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import {HandleGridData} from '../../../Utilities/HandleGridData';
import DATA from '../temdata';
import Card from '../../../components/Card';

const numOfColumns = 2;

const ProductRecommend = ({THEME}) => {
  const formatedData = useMemo(() => HandleGridData(numOfColumns, DATA), []);

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: SCREEN_WIDTH * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:"space-between"
        }}>
        <Text style={[styles.title,{color: THEME.TEXTPRIMARY}]}>Best selling product</Text>
        <Text style={[styles.seeAll,{color: THEME.TEXTPRIMARY}]}>See All</Text>
      </View>

      <FlatList
        scrollEnabled={false}
        data={formatedData}
        renderItem={({item}) => (
          <Card
            title={item.title}
            image={item.image}
            price={item.price}
            wholeData={item}
          />
        )}
        numColumns={numOfColumns}
        keyExtractor={item => item.id.toString()}
        style={{marginTop: SCREEN_HIGHT * 0.01}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems:'center'}}
      />
    </View>
  );
};

export default ProductRecommend;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    marginVertical: SCREEN_HIGHT * 0.02,
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
