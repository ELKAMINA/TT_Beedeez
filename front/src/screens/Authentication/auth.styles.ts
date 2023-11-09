import {StyleSheet} from 'react-native';

import {COLORS, FONT, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    marginLeft: '15%',
    backgroundColor: '#FFF',
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
    height: '70%',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.large,
    height: 50,
    width: '50%',
    backgroundColor: '#fafafa',
  },
  headText: {
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    marginBottom: '20%',
  },
  normalText: {
    fontSize: SIZES.xxLarge,
    color: COLORS.tertiary,
    fontFamily: FONT.bold,
    marginBottom: '20%',
  },
  errorText: {
    color: 'red',
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
  },
  contentBox: {
    marginVertical: SIZES.small,
  },
  contextText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.small / 1.25,
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.medium,
  },
  submitBtn: {
    width: '50%',
    height: 50,
    marginTop: 20,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
