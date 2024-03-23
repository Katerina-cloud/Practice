import { FC, memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { Text, TextProps } from '@rneui/themed';

import { StylingProps, useTypographyStyles } from './Typography.styles';

interface TypographyComponentProps
  extends StylingProps,
    //  TestIDProps,
    TextProps {
  isCheckboxDisabled?: boolean;
}

const BUTTON_ROLE = 'button';

export const TypographyComponent: FC<TypographyComponentProps> = ({
  testID = 'Typography',
  color,
  variant,
  ...props
}) => {
  const typographyComponentStyles = useTypographyStyles({ ...props, color, variant });
  const a11yRole =
    (Boolean(props.accessibilityRole) && props.accessibilityRole) ||
    (props.onPress && BUTTON_ROLE) ||
    undefined;

  const style = useMemo(
    () => StyleSheet.flatten([{ ...typographyComponentStyles.root }, props.style]),
    [props.style, typographyComponentStyles.root],
  );

  return (
    <Text
      {...props}
      testID={`${testID}-button`}
      // {...setTestId(`${testID}${variant ? `_${variant}` : ''}`)}
      accessibilityRole={a11yRole}
      // Flattening to prevent undefines in snapshots
      style={style}
    />
  );
};

export const Typography = memo(TypographyComponent);
