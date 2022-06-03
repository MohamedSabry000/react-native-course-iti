import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  searchIconContainer: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    width: '20%',
    backgroundColor: COLORS.cloudBurst,
    borderLeftWidth: 1,
    borderLeftColor: COLORS.sun,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  icon: {alignSelf: 'center'},
  contentContainer: {
    paddingHorizontal: 16,
  },
  noResultView: {
    marginTop: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noSearchText: {
    color: COLORS.hitGrey,
    fontSize: 24,
    marginTop: 24,
    fontFamily: FONTS.bold,
  },
  noSearchTextPlain: {
    color: COLORS.hitGrey,
    fontSize: 16,
    marginTop: 24,
    textAlign: 'center',
    fontFamily: FONTS.bold,
  },
});
