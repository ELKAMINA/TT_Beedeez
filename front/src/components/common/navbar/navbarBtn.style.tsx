import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../../constants';

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '5%',
    backgroundColor: COLORS.tertiary,
    borderRadius: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  btnImg: {
    width: SIZES.xxLarge,
    height: SIZES.xxLarge,
    borderRadius: SIZES.small / 1.25,
    backgroundColor: COLORS.white,
    margin: SIZES.small,
  },
  nameLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
