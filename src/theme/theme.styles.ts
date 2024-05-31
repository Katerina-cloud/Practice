import { Dimensions } from 'react-native';

import { createTheme } from '@rneui/themed';

import { colors } from './colors.styles';
import { gaps } from './gaps.styles';
import { typography } from './typography.styles';

export const theme = createTheme({
  colors,
  typography,
  gaps,
  dimensions: Dimensions.get('window'),
});
