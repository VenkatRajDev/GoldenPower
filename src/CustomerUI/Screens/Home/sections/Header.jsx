import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Fontfamily, Fontsize} from '../../../../../Theme/FontConfig';
import {SCREEN_WIDTH} from '../../../../../Theme/Dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';

const _profileViewDimensions = 35;

const Header = ({THEME}) => {
  return (
    <View style={styles.container}>

      <View style={{flexDirection:'row',alignItems:'center',gap: SCREEN_WIDTH * 0.03}}>
      <Pressable style={[styles.profileContainer]}>
        <Image
          source={require('../../../../../assets/download.jpeg')}
          style={styles.image}
        />
      </Pressable>
      <Text style={[styles.greet, {color: THEME.TEXTPRIMARY}]}>
        {/* Hello <Text style={{fontSize: Fontsize.SUB}}>Username 👋🏻</Text> */}
        GoldenPower
      </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: SCREEN_WIDTH * 0.05,
        }}>
        <Pressable>
          <Ionicons
            name="notifications"
            size={_profileViewDimensions - 10}
            color={THEME.TEXTPRIMARY}
          />
        </Pressable>

        <Pressable>
          <Ionicons
            name="bookmark"
            size={_profileViewDimensions - 10}
            color={THEME.TEXTPRIMARY}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    paddingVertical: SCREEN_WIDTH * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greet: {
    fontSize: Fontsize.HEADING - 2,
    fontFamily: Fontfamily.SEMIBOLD,
  },
  profileContainer: {
    width: _profileViewDimensions,
    height: _profileViewDimensions,
    borderRadius: _profileViewDimensions / 2,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: _profileViewDimensions / 2,
  },
});
