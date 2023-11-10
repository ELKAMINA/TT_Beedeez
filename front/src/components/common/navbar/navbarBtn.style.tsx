import {StyleSheet} from 'react-native';

import {COLORS, SIZES} from '../../../constants';

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 75,
    backgroundColor: COLORS.tertiary,
    borderRadius: 0.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  btnImg: {
    width: SIZES.xLarge,
    height: SIZES.xLarge,
    borderRadius: SIZES.small / 1.25,
    margin: SIZES.large,
  },
  nameLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
