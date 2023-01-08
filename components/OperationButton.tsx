import { PropsWithChildren } from 'react';
import { KeyboardButton } from "./KeyboardButton"
import { styles } from "./styles"

export enum Operation {
  Multiplication = '\u00d7',
  Sum = '+',
  Subtraction = '-',
  Division = '\u00f7',
  Clear = 'C',
  Log = 'log',
  Sin = 'sin',
  Cos = 'cos',
  Ok = '=',
  OpenParentheses = '(',
  CloseParentheses = ')',
  RootSquare = '√',
  Power = '^'
}

export interface OperationButtonProps extends PropsWithChildren {
  operation: Operation;
  onPress?: (op: Operation) => void;
}

const defaultListener = () => undefined;

export function OperationButton(props: OperationButtonProps) {
  const { onPress = defaultListener } = props;

  function pressListener() {
    onPress(props.operation);
  }

  return (
    <KeyboardButton
      onPress={pressListener}
      pressedStyle={styles.keyboard.pressedOperationButton}
      releasedStyle={styles.keyboard.operationButton}
      titleStyle={styles.keyboard.operationButtonText}
      title={props.operation}
    />
  )
}