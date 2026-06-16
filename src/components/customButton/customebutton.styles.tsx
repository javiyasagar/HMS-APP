import { StyleSheet } from 'react-native';
import Typography from '../../utils/typography';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  buttonText: {
    ...Typography.semiBold16,
    color: colors.white,
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
