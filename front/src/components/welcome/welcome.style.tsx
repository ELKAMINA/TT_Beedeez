import {StyleSheet} from 'react-native';

import {COLORS, FONT, SIZES} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: SIZES.large,
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xxLarge,
    color: COLORS.secondary,
    flexWrap: 'wrap',
    marginBottom: SIZES.small,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium * 1.5,
    color: COLORS.tertiary,
    marginTop: SIZES.small,
    marginBottom: SIZES.large,
  },
  searchContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: '30%',
    width: '30%',
  },
  searchInput: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.xSmall,
    marginBottom: SIZES.small,
    marginRight: '1%',
    width: '100%',
    height: '70%',
    paddingHorizontal: SIZES.small,
  },
  searchBtn: {
    width: '10%',
    height: '70%',
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: '100%',
    margin: SIZES.small,
  },
});

export default styles;
