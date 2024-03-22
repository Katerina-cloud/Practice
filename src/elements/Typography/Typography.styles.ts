import { TextStyle } from 'react-native';

import { Theme } from '@rneui/themed';
import { get } from 'lodash';

import { ColorsType, createStyles } from '@fresh-direct/theme';

export type Variant =
  | 'h1'
  | 'h2Bold'
  | 'h2'
  | 'h3'
  | 'h3Bold'
  | 'h4'
  | 'h4Bold'
  | 'h5'
  | 'h5Link'
  | 'body'
  | 'bodyBold'
  | 'bodyCrossed'
  | 'bodySmallCrossed'
  | 'bodySmall'
  | 'bodySmallBold'
  | 'button'
  | 'buttonSmall'
  | 'link'
  | 'linkSmall'
  | 'label';

type VariantStyles = {
  size: string;
  font: string;
  lineHeight: string;
  bold?: boolean;
  uppercase?: boolean;
  letterSpacing?: number;
  textDecorationLine?: TextStyle['textDecorationLine'];
};

const typographyVariantsStyles = {
  h1: {
    size: 'heading.lg',
    font: 'bold',
    lineHeight: 'heading.lg',
  },
  h2: {
    size: 'heading.md',
    font: 'book',
    lineHeight: 'heading.md',
  },
  h2Bold: {
    size: 'heading.md',
    font: 'bold',
    lineHeight: 'heading.md',
  },
  h3: {
    size: 'heading.sm',
    font: 'book',
    lineHeight: 'heading.sm',
  },
  h3Bold: {
    size: 'heading.sm',
    font: 'bold',
    lineHeight: 'heading.sm',
  },
  h4: {
    size: 'heading.xs',
    font: 'book',
    lineHeight: 'heading.xs',
  },
  h4Bold: {
    size: 'heading.xs',
    font: 'bold',
    lineHeight: 'heading.xs',
  },
  h5: {
    size: 'heading.xxs',
    font: 'medium',
    lineHeight: 'heading.xxs',
  },
  h5Link: {
    size: 'heading.xxs',
    font: 'medium',
    lineHeight: 'heading.xxs',
    textDecorationLine: 'underline' as TextStyle['textDecorationLine'],
  },
  body: {
    size: 'body.md',
    font: 'book',
    lineHeight: 'body.md',
  },
  bodyBold: {
    size: 'body.md',
    font: 'bold',
    lineHeight: 'body.md',
  },
  bodyCrossed: {
    size: 'body.md',
    font: 'book',
    lineHeight: 'body.md',
    textDecorationLine: 'line-through' as TextStyle['textDecorationLine'],
  },
  bodySmallCrossed: {
    size: 'body.sm',
    font: 'book',
    lineHeight: 'body.sm',
    textDecorationLine: 'line-through' as TextStyle['textDecorationLine'],
  },
  bodySmall: {
    size: 'body.sm',
    font: 'book',
    lineHeight: 'body.sm',
  },
  bodySmallBold: {
    size: 'body.sm',
    font: 'bold',
    lineHeight: 'body.md',
  },
  button: {
    size: 'control.md',
    font: 'medium',
    lineHeight: 'control.md',
    weight: 'normal',
  },
  buttonSmall: {
    size: 'control.sm',
    font: 'medium',
    lineHeight: 'control.sm',
  },
  link: {
    size: 'control.md',
    font: 'medium',
    lineHeight: 'control.xl',
    textDecorationLine: 'underline' as TextStyle['textDecorationLine'],
  },
  linkSmall: {
    size: 'control.sm',
    font: 'medium',
    lineHeight: 'control.lg',
    textDecorationLine: 'underline' as TextStyle['textDecorationLine'],
  },
  label: {
    size: 'control.xxs',
    font: 'bold',
    lineHeight: 'control.sm',
    uppercase: true,
  },
};

export interface StylingProps {
  variant: Variant;
  color?: keyof ColorsType;
  fontStyle?: TextStyle['fontStyle'];
  align?: TextStyle['textAlign'];
  textTransform?: TextStyle['textTransform'];
  gutterBottom?: number;
  multiline?: boolean;
  fontFamily?: string;
}

const variantBuilder = (variant: Variant, currentTheme: Theme): TextStyle => {
  const { typography } = currentTheme;
  const variantStyles: VariantStyles = typographyVariantsStyles[variant];

  return {
    fontSize: get(typography.size, variantStyles.size),
    lineHeight: get(typography.lineHeight, variantStyles.lineHeight),
    fontFamily: get(typography.font, variantStyles.font),
    ...(variantStyles.uppercase && { textTransform: 'uppercase' }),
    ...(variantStyles.textDecorationLine && {
      textDecorationLine: variantStyles.textDecorationLine,
    }),

    ...(variantStyles.letterSpacing && {
      letterSpacing: variantStyles.letterSpacing,
    }),
  };
};

export const useTypographyStyles = createStyles((theme, props: StylingProps) => {
  const {
    color = 'black',
    gutterBottom = 0,
    fontStyle = 'normal',
    align = 'left',
    textTransform = 'none',
  } = props;
  return {
    root: {
      color: theme.colors[color],
      fontStyle,
      textAlign: align,
      marginBottom: gutterBottom,
      textTransform,
      ...variantBuilder(props.variant, theme),
    },
  };
});
