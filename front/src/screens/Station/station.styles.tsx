import {StyleSheet} from 'react-native';

import {COLORS, FONT, SIZES} from '../../constants';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  cardDetails: {
    width: '50%',
    height: '50%',
    backgroundColor: 'rgba(220, 119, 84, 0.2)',
    borderRadius: SIZES.small,
    alignSelf: 'center',
    marginVertical: '9%',
    padding: SIZES.medium,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    flexShrink: 1,
  },
  headText: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    fontWeight: 'bold',
    color: COLORS.primary,
    alignSelf: 'center',
    marginBottom: '8%',
  },
  infoBox: {
    backgroundColor: COLORS.white, // Choose a background color for the boxes
    borderRadius: SIZES.small, // Rounded corners for the boxes
    padding: SIZES.small, // Padding inside the boxes
    margin: SIZES.xSmall, // Margin around the boxes
    minWidth: '30%', // Minimum width for each box
    maxWidth: '80%', // Maximum width for each box to ensure they don’t stretch too much
    alignItems: 'center', // Center text horizontally inside the box
    justifyContent: 'center', // Center text vertically inside the box
  },
  textContainer: {
    width: '20%',
    height: '50%',
    backgroundColor: COLORS.secondary,
  },
  rowCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
