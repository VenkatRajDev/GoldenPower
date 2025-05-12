import {Image,Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import {
  BORDER_RADIUS,
  SCREEN_HIGHT,
  SCREEN_WIDTH,
} from '../../../../../Theme/Dimension';
import BackButton from '../../../components/BackButton';

const _imageWidht = SCREEN_WIDTH * 0.9;

const Header = ({THEME, BrandDetails, isDarkMode}) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  return (
    <View style={[styles.container]}>
      <View>
        <Image
        source={{uri: BrandDetails.image}} style={styles.image}
        />
        <View
          style={{
            ...StyleSheet.absoluteFill,
            backgroundColor: isDarkMode
              ? `rgba(0,0,0,0.5)`
              : `rgba(255,255,255,0.5)`,
            ...styles.foggyView,
          }}>
          <Pressable
            onPress={() => setIsInfoVisible(!isInfoVisible)}
            style={styles.infoIcon}>
            <Ionicons
              name="information-circle-outline"
              color={THEME.TEXTPRIMARY}
              size={Fontsize.SUB + 3}
            />
          </Pressable>

          <View
            style={{
              height: SCREEN_HIGHT * 0.05,
              alignItems: 'center',
              flexDirection: 'row',
              gap: SCREEN_HIGHT * 0.02,
            }}>
            <BackButton />
            <Text style={[styles.title, {color: THEME.TEXTPRIMARY}]}>
              Nike Product's
            </Text>
          </View>

          {isInfoVisible && (
            <View style={[styles.BrandDescription]}>
              <Text style={[styles.BrandDescriptionText]}>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Ducimus dolorum
                necessitatibus illum nisi ullam aperiam ex animi neque minima
                deleniti, veniam autem
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: SCREEN_WIDTH * 0.05,
    gap: SCREEN_HIGHT * 0.015,
  },
  title: {
    fontSize: Fontsize.SUB,
    fontFamily: Fontfamily.SEMIBOLD,
  },
  line: {
    width: SCREEN_WIDTH * 0.9,
    borderWidth: 1,
  },
  image: {
    width: _imageWidht,
    height: SCREEN_HIGHT * 0.35,
    alignSelf: 'center',
    borderRadius: BORDER_RADIUS,
  },
  foggyView: {
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    padding: SCREEN_WIDTH * 0.02,
    gap: SCREEN_WIDTH * 0.03,
  },
  infoIcon: {
    position: 'absolute',
    right: '3%',
    top: '3%',
  },
  BrandDescription: {
    position: 'absolute',
    bottom: '10%',
    right: '5%',
    left: '2%',
    width: _imageWidht,
  },
  BrandDescriptionText: {
    fontSize: Fontsize.BODYTEXT,
    fontFamily: Fontfamily.MEDIUM,
  },
});
