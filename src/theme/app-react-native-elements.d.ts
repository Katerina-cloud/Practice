import { ScaledSize } from 'react-native';

import { ColorsType } from './colors.styles';
import { gaps } from './gaps.styles';
import { typography } from './typography.styles';

export * from '@rneui/themed';

declare module '@rneui/themed' {
  export interface Theme {
    colors: ColorsType;
    typography: typeof typography;
    gaps: typeof gaps;
    dimensions: ScaledSize;
  }
}
