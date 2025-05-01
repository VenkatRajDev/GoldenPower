import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../../../../ThemeProvider';
import {SCREEN_WIDTH, SCREEN_HIGHT} from '../../../../../Theme/Dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BrandCard from '../../../components/BrandCard';
import {brandsData} from '../tempData';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import {GroupIntoColumns} from '../../../Utilities/GroupIntoColumns';

const _scrollHeight = SCREEN_HIGHT * 0.25;
const _arrowContainer = 40;

const RenderItems = ({item}) => {
  return (
    <View>
      {item.map((elements, index) => {
        return (
          <BrandCard
            key={index}
            image={elements.image}
            wholeData={brandsData}
          />
        );
      })}
    </View>
  );
};

const FotterComponent = ({THEME}) => {
  return (
    <TouchableOpacity
      style={[styles.fotterContainer, {backgroundColor: THEME.CARDBACKGROUND}]}>
      <Text style={[styles.fotterText, {color: THEME.TEXTPRIMARY}]}>
        See All
      </Text>
      <View
        style={[
          styles.fotterArrowContainer,
          {backgroundColor: THEME.TEXTPRIMARY},
        ]}>
        <Ionicons
          name="arrow-forward"
          size={Fontsize.BUTTONTEXT}
          color={THEME.CARDBACKGROUND}
        />
      </View>
    </TouchableOpacity>
  );
};

const BrandsRecommend = () => {
  const groupedData = GroupIntoColumns(brandsData, 2);
  const {THEME} = useTheme();
  return (
    <View style={[styles.container]}>
      <FlatList
        data={groupedData}
        renderItem={({item, index}) => <RenderItems item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: SCREEN_WIDTH * 0.01,
        }}
        keyExtractor={(_, index) => index.toString()}
        style={{marginTop: SCREEN_HIGHT * 0.001}}
        ListFooterComponent={<FotterComponent THEME={THEME} />}
      />
    </View>
  );
};

export default BrandsRecommend;

const styles = StyleSheet.create({
  container: {},
  fotterContainer: {
    width: SCREEN_WIDTH * 0.2,
    height: _scrollHeight * 0.87,
    margin: SCREEN_WIDTH * 0.02,
    borderRadius: _scrollHeight / 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: SCREEN_HIGHT * 0.012,
  },
  fotterText: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.MEDIUM,
  },
  fotterArrowContainer: {
    width: _arrowContainer,
    height: _arrowContainer,
    borderRadius: _arrowContainer / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
