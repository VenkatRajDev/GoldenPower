import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  BORDER_RADIUS,
  SCREEN_HIGHT,
  SCREEN_WIDTH,
} from '../../../../../Theme/Dimension';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import Animated, {useAnimatedRef} from 'react-native-reanimated';

const filterTags = ['All', 'Inventors', 'Batterys', 'Combos'];

const Tag = ({
  item,
  index,
  THEME,
  slectedIndex,
  setSlectedIndex,
  scrollRef,
}) => {
  return (
    <Pressable
      onPressIn={() => {
        setSlectedIndex(index);
        scrollRef.current?.scrollToIndex({index, animation: true});
      }}
      style={[
        styles.tagsButton,
        {
          backgroundColor:
            slectedIndex === index ? THEME.TEXTPRIMARY : THEME.CARDBACKGROUND,
        },
      ]}>
      <Text
        style={[
          styles.tagsButtonText,
          {
            color:
              slectedIndex === index ? THEME.CARDBACKGROUND : THEME.TEXTPRIMARY,
          },
        ]}>
        {item}
      </Text>
    </Pressable>
  );
};

const FilterTags = ({THEME}) => {
  const scrollRef = useAnimatedRef();
  const [slectedIndex, setSlectedIndex] = useState(0);
  console.log(slectedIndex);
  return (
    <View>
      <Animated.FlatList
        ref={scrollRef}
        data={filterTags}
        horizontal={true}
        renderItem={({item, index}) => (
          <Tag
            item={item}
            index={index}
            THEME={THEME}
            slectedIndex={slectedIndex}
            setSlectedIndex={setSlectedIndex}
            scrollRef={scrollRef}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          gap: SCREEN_WIDTH * 0.04,
          paddingHorizontal: SCREEN_WIDTH * 0.03,
        }}
        showsHorizontalScrollIndicator={false}
        style={{marginLeft: SCREEN_WIDTH * 0.03}}
      />
    </View>
  );
};

export default FilterTags;

const styles = StyleSheet.create({
  tagsButton: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_HIGHT * 0.065,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  tagsButtonText: {
    fontSize: Fontsize.BUTTONTEXT,
    fontFamily: Fontfamily.MEDIUM,
  },
});
