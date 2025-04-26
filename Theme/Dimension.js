import { Dimensions } from "react-native";

const {width: SCREEN_WIDTH} = Dimensions.get('window')
const {height: SCREEN_HIGHT} = Dimensions.get('window')

export {SCREEN_WIDTH, SCREEN_HIGHT}

export const SAFE_PADDING_BOTTOM = SCREEN_HIGHT * 0.1
export const SAFE_PADDING_TOP = SCREEN_HIGHT * 0.03

export const BORDER_RADIUS = 10