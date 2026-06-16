import { Dimensions, PixelRatio } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;

const Typography = {
  // Font sizes with weight 400 (Regular)
  regular16: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(16),
  },
  regular18: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(18),
  },
  regular14: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(14),
  },
  regular10: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(10),
  },
  regular12: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(12),
  },
  regular13: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(13),
  },
  regular17: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(17),
  },
  regular32: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(32),
  },
  regular25: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(25),
  },
  regular30: {
    fontFamily: 'Poppins-Regular',
    fontSize: getFontSize(30),
  },

  // Font sizes with weight 500 (Medium)
  medium8: {
    fontFamily: 'Poppins-Medium',
    fontSize: getFontSize(8),
  },
  medium16: {
    fontFamily: 'Poppins-Medium',
    fontSize: getFontSize(16),
  },
  medium18: {
    fontFamily: 'Poppins-Medium',
    fontSize: getFontSize(18),
  },
  medium20: {
    fontFamily: 'Poppins-Medium',
    fontSize: getFontSize(20),
  },
  medium12: {
    fontFamily: 'Poppins-Medium',
    fontSize: getFontSize(12),
  },
  medium10: {
    fontFamily: 'Poppins-Medium',
    fontSize: getFontSize(10),
  },
  medium14: {
    fontFamily: 'Poppins-Medium',
    fontSize: getFontSize(14),
  },

  // Font sizes with weight 600 (SemiBold)
  semiBold18: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(18),
  },
  semiBold14: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(14),
  },
  semiBold16: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(16),
  },
  semiBold10: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(10),
  },
  semiBold12: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(12),
  },
  semiBold13: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(13),
  },
  semiBold22: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(22),
  },
  semiBold20: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(20),
  },
  semiBold24: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(24),
  },
  semiBold32: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(32),
  },
  semiBold40: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(40),
  },
  semiBold48: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(48),
  },

  // Font sizes with weight 800 (Bold)
  bold24: {
    fontFamily: 'Poppins-Bold',
    fontSize: getFontSize(24),
  },
  bold32: {
    fontFamily: 'Poppins-Bold',
    fontSize: getFontSize(32),
  },
};

export default Typography;
