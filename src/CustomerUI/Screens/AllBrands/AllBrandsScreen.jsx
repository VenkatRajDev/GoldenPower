import {StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BrandCard from '../../components/BrandCard';
import {BrandData} from '../../../../Data/Brand';
import {HandleGridData} from '../../Utilities/HandleGridData';
import {useNavigation} from '@react-navigation/native';
import Header from './sections/Header';
import {useTheme} from '../../../../ThemeProvider';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  withSpring,
} from 'react-native-reanimated';
import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../../../Theme/Dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fontsize} from '../../../../Theme/FontConfig';
import InputField from './sections/InputField';

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);
const _scrollToTopContainer = 50;

const AllBrandsScreen = () => {
  const scrollRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const navigation = useNavigation();
  const gridDta = HandleGridData(2, BrandData);
  const {THEME} = useTheme();

  const scrollToButtonAnimation = useAnimatedStyle(() => {
    const Opacity = interpolate(
      scrollOffset.value,
      [0, 200],
      [0, 1],
      Extrapolation.CLAMP,
    );
    const Transplate = withSpring(
      interpolate(scrollOffset.value, [0, 300], [100, 0], Extrapolation.CLAMP),
      {
        damping: 30,
        stiffness: 40,
      },
    );
    return {opacity: Opacity, transform: [{translateX: Transplate}]};
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: THEME.BACKGROUND}}>
      <Header THEME={THEME}/>
      <Animated.FlatList
        data={gridDta}
        ref={scrollRef}
        renderItem={({item}) => (
          <BrandCard brandInfo={item} navigation={navigation} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center',}}
        ListHeaderComponent={<InputField THEME={THEME} />}
        keyboardDismissMode="on-drag"
      />
      <AnimatedButton
        onPress={() =>
        scrollRef.current?.scrollToOffset({offset: 0, animation: true})
        }
        style={[
          styles.scrollToTop,
          scrollToButtonAnimation,
          {backgroundColor: THEME.ACCENT},
        ]}>
        <Ionicons name="arrow-up" size={Fontsize.SUB + 5} color={THEME.BUTTONTEXTCOLOR} />
      </AnimatedButton>
    </SafeAreaView>
  );
};

export default AllBrandsScreen;

const styles = StyleSheet.create({
  scrollToTop: {
    width: _scrollToTopContainer,
    height: _scrollToTopContainer,
    position: 'absolute',
    bottom: SCREEN_HIGHT * 0.05,
    right: SCREEN_WIDTH * 0.05,
    borderRadius: _scrollToTopContainer / 2,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },
});
