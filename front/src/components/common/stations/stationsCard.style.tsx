import {StyleSheet} from 'react-native';

import {COLORS, SHADOWS, SIZES} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: SIZES.small,
    padding: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: '#FFF',
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    width: '20vw',
    height: '25vh',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  stationName: {
    fontSize: SIZES.large,
    fontFamily: 'DMBold',
    color: COLORS.tertiary,
    alignSelf: 'center',
  },
  stationType: {
    fontSize: SIZES.small,
    fontFamily: 'DMRegular',
    color: COLORS.gray,
    marginTop: 3,
    textTransform: 'capitalize',
  },
});

export default styles;
