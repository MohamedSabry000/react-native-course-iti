import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';
export default StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.spaceCadet,
    padding: 16,
  },
  image: {
    width: 140,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.sun,
  },
  movieShortInfo: {
    marginStart: 14,
  },
  title: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: FONTS.bold,
  },
  shortInfoText: {
    color: COLORS.white,
    fontSize: 12,
    fontFamily: FONTS.regular,
    marginTop: 8,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.spaceCadet,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  ratingHeader: {
    color: COLORS.sun,
    fontFamily: FONTS.bold,
    fontSize: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  rating: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 10,
  },
  ratingCol: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  scrollableData: {
    paddingBottom: 40,
  },
});
