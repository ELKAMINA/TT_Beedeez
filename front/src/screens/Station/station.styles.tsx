import {StyleSheet} from 'react-native';

import {COLORS, FONT, SIZES} from '../../constants';
// import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  cardDetails: {
    width: '50%',
    height: '50%',
    backgroundColor: 'rgba(220, 119, 84, 0.2)',
    borderRadius: SIZES.small,
    padding: '20%',
    elevation: '60%',
    alignSelf: 'center',
    marginVertical: '5%',
  },
});

export default styles;
