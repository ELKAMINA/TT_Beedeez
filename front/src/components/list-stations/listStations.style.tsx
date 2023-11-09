import {StyleSheet} from 'react-native';

import {COLORS, FONT, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    backgroundColor: COLORS.tertiary,
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
    justifyContent: 'space-around',
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
