import { StyleSheet } from 'react-native';

export const useButtonStyle = () =>
  StyleSheet.create({
    buttonStyle: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      //   ...(isDisabled && { opacity: 0.5 }), // Apply opacity when disabled
    },
    primary: {},
    secondary: {},
    appButtonText: {
      color: 'white',
      fontSize: 16,
    },
  });
