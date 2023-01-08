import { StyleSheet } from "react-native";

export namespace styles {
  export const calculator = StyleSheet.create({
    root: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 1)'
    }
  });

  export const keyboard = StyleSheet.create({
    root: {
      width: '100%',
      height: '70%'
    },

    row: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#222',
      width: '100%'
    },

    button: {
      backgroundColor: '#0077aa',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 2,
      borderBottomEndRadius: 8,
      borderTopStartRadius: 8
    },

    pressedButton: {
      backgroundColor: '#0097ca'
    },

    buttonText: {
      color: '#000',
      fontSize: 60,
    },

    operationButton: {
      backgroundColor: '#3a3a3a',
    },

    pressedOperationButton: {
      backgroundColor: '#5a5a5a',
    },

    operationButtonText: {
      color: '#ddd'
    }
  });

  export const output = StyleSheet.create({
    root: {
      height: '30%',
      width: '100%',
      backgroundColor: '#333',
      justifyContent: 'center',
      paddingRight: '5%',
      borderBottomColor: '#555',
      borderBottomWidth: 2
    },

    text: {
      color: '#ffffff',
      textAlign: 'right',
      fontSize: 80,
    }
  });
}