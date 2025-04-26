import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fontfamily, Fontsize} from '../../Theme/FontConfig';
import {SCREEN_HIGHT, SCREEN_WIDTH} from '../../Theme/Dimension';
import {useTheme} from '../../ThemeProvider';

const _tabBarHeight = SCREEN_HIGHT * 0.1;
const _eachTabBarContainerWidth = SCREEN_WIDTH * 0.2;
const _eachTabBarContainerHeight = _tabBarHeight * 0.8;

const TabBar = ({state, descriptors, navigation, IconNames}) => {
  const {THEME} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: THEME.TABBAR}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const lable = options.tabBarLabel ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        const Name = IconNames[route.name]?.[isFocused ? 0 : 1] || null;

        return (
          <Pressable
            style={[styles.tabContainer]}
            onPress={onPress}
            key={index.toString()}>
            <Ionicons
              name={Name}
              size={Fontsize.SUB}
              color={isFocused ? THEME.TABBAR_ICON_ACTIVE : THEME.TABBAR_ICON_INACTIVE}
            />
            <Text
              style={[
                styles.lable,
                {
                  color: isFocused
                    ? THEME.TABBAR_ICON_ACTIVE
                    : THEME.TABBAR_ICON_INACTIVE,
                },
              ]}>
              {lable}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    height: _tabBarHeight,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    padding: SCREEN_WIDTH * 0.03,
    borderTopWidth: 0,
    elevation: 10
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: _eachTabBarContainerWidth,
    height: _eachTabBarContainerHeight,
    gap: _eachTabBarContainerHeight * 0.05,
  },
  lable: {
    fontSize: Fontsize.SMALLTEXT,
    fontFamily: Fontfamily.MEDIUM,
  },
});
