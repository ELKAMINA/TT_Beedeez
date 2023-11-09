import {StyleSheet} from 'react-native';

import {COLORS, FONT, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    // backgroundColor: COLORS.primary,
    flexWrap: 'wrap',
    marginRight: SIZES.medium,
    alignItems: 'center',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.medium,
    // backgroundColor: COLORS.gray,
    height: '100vh',
  },
});

export default styles;
