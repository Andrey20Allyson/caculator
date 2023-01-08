import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { Keyboard } from './Keyboard';
import { Output } from './Output';
import { styles } from './styles';

export function Calculator() {
  return (
    <View style={styles.calculator.root}>
      <Output text='0'/>
      <Keyboard />
      <StatusBar style="inverted" />
    </View>
  )
}

export const calculatorStyles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)'
  }
});