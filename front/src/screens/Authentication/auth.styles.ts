import {StyleSheet} from 'react-native';

import {COLORS, FONT, SIZES} from '../../constants';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  wholeBody: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,119,84,0.9)',
  },
  container: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    height: '65%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.large,
    height: '6%',
    width: '50%',
  },
  switchContainer: {
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    height: '8%',
    width: '50%',
    justifyContent: 'flex-start',
  },
  headText: {
    fontSize: RFValue(20),
    alignContent: 'center',
    fontFamily: FONT.bold,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: '8%',
  },
  normalText: {
    fontSize: RFValue(20),
    color: COLORS.tertiary,
    fontFamily: FONT.bold,
    marginBottom: '8%',
  },
  smallText: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    marginRight: '2%',
  },
  errorText: {
    color: 'red',
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  contentBox: {
    alignItems: 'center',
  },
  contextText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small,
  },
  searchInput: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.medium * 1.25,
    marginBottom: SIZES.small,
    borderRadius: SIZES.small,
  },
  submitBtn: {
    width: '50%',
    height: 50,
    marginTop: 20,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZES.medium,
  },
  underlineBtn: {
    textDecorationLine: 'underline',
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
});

export default styles;
