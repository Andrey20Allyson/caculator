import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Keyboard } from './Keyboard';
import { Operation } from './OperationButton';
import { Output } from './Output';
import { styles } from './styles';

function addDigit(value: string, setValue: React.Dispatch<string>, digit: string) {
  let newValue = '';

    if (value !== '0')
      newValue += value;
      
    newValue += digit;

    setValue(newValue);
}

export function Calculator() {
  let [value, setValue] = useState('0');

  function operationListener(op: Operation) {
    switch (op) {
      case Operation.Clear:
        setValue(value.slice(0, value.length - 1) || '0');
        break;
      case Operation.Division:
        addDigit(value, setValue, Operation.Division);
    }
  }

  function addDigitListener(digit: string) {
    addDigit(value, setValue, digit);
  }
  
  return (
    <View style={styles.calculator.root}>
      <Output text={value}/>
      <Keyboard onAddDigit={addDigitListener} onOperation={operationListener} />
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