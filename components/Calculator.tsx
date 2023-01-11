import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as lib from '../lib';
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

type OperationsCases = {
  [k in Operation]: (value: string, operation: Operation) => string;
}

function clearOperation(value: string) {
  return value.slice(0, value.length - 1) || '0';
}

function normalOperation(value: string, operation: Operation) {
  return `${value}${operation}`;
}

function operationWithParentheses(value: string, operation: Operation) {
  return `${value}${operation}(`;
}

const operationsCases: OperationsCases = {
  [Operation.Clear]: clearOperation,
  [Operation.Cos]: operationWithParentheses,
  [Operation.Multiplication]: normalOperation,
  [Operation.Sum]: normalOperation,
  [Operation.Subtraction]: normalOperation,
  [Operation.Division]: normalOperation,
  [Operation.Log]: operationWithParentheses,
  [Operation.Sin]: operationWithParentheses,
  [Operation.Ok]: function (value: string, operation: Operation): string {
    throw new Error('Cant call this function');
  },
  [Operation.OpenParentheses]: normalOperation,
  [Operation.CloseParentheses]: normalOperation,
  [Operation.RootSquare]: operationWithParentheses,
  [Operation.Power]: normalOperation,
}

export interface CalculatorProps {
  calculatorCallback: (input: string) => string;
}

const unrepetableOperations: string[] = [
  Operation.Division,
  Operation.Multiplication,
  Operation.Sum,
  Operation.Subtraction,
  Operation.Power
]

export function Calculator(props: CalculatorProps) {
  let [value, setValue] = useState('0');

  const { calculatorCallback } = props;

  function operationListener(op: Operation) {
    if (op === Operation.Ok)
      return setValue(calculatorCallback(value));

    if ([value[value.length - 1], op].every(v => unrepetableOperations.includes(v)))
      return setValue(normalOperation(clearOperation(value), op));
    
    setValue(operationsCases[op](value, op));
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