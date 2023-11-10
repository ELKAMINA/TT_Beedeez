import {StyleSheet} from 'react-native';

import {COLORS, FONT, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.small,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.medium,
    // backgroundColor: COLORS.gray,
    height: '100vh',
  },
  flatlistContainer: {
    marginRight: SIZES.small,
    marginBottom: SIZES.small,
  },
});

export default styles;
