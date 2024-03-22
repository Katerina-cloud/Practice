import { FC, memo } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { ButtonProps, Button as RneuiButton } from '@rneui/themed';

import { Typography } from '@practice/elements';

import { useButtonStyle } from './Button.styles';
// import { ButtonTypes } from './Button.types';

interface ButtonComponentProps extends ButtonProps, TestIDProps {
  buttonType: ButtonTypes;
  loading?: boolean;
}

export const ButtonComponent: FC<ButtonComponentProps> = ({
  title,
  buttonType,
  disabled,
  testID = 'Button',
  style = {},
  loading,
  onPress,
  ...props
}) => {
  const styles = useButtonStyle();
  // { buttonType, disabled }

  return (
    <RneuiButton
      onPress={onPress}
      buttonStyle={[styles.buttonStyle, style]}
      // containerStyle={styles.containerStyle}
      // disabledStyle={styles.disabledStyle}
      disabled={disabled}
      TouchableComponent={TouchableWithoutFeedback}
      title={
        loading ? (
          <ActivityIndicator animating={loading} />
        ) : (
          <Typography
            // style={styles.titleStyle}
            variant="body"
          >
            {title}
          </Typography>
        )
      }
      testID={`${testID}_${buttonType}${disabled ? '_disabled' : ''}`}
      {...props}
    />
  );
};

export const Button = memo(ButtonComponent);
