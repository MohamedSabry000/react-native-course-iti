import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.spaceCadet,
    marginTop: 16,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.sun,
    padding: 16,
  },
  header: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.bold,
    marginBottom: 10,
  },
  body: {
    fontSize: 12,
    color: COLORS.white,
    fontFamily: FONTS.regular,
    lineHeight: 24,
  },
});
