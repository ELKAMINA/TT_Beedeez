import {StyleSheet} from 'react-native';

import {COLORS, FONT, SIZES} from '../../constants';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  cardDetails: {
    width: '70%',
    height: '60%',
    backgroundColor: 'rgba(220, 119, 84, 0.2)',
    borderRadius: SIZES.small,
    alignSelf: 'center',
    marginVertical: '6%',
    padding: SIZES.medium,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  headText: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    fontWeight: 'bold',
    color: COLORS.primary,
    alignSelf: 'center',
    // marginBottom: '8%',
  },
  infoBox: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    padding: SIZES.small,
    margin: SIZES.xSmall,
    minWidth: '80%',
    maxWidth: '100%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: '20%',
    height: '50%',
    backgroundColor: COLORS.secondary,
  },
  paginationButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: COLORS.tertiary,
  },
  paginationImage: {
    width: '60%',
    height: '60%',
    tintColor: COLORS.white,
  },
});

export default styles;
