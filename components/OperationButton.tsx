import { KeyboardButton } from "./KeyboardButton"
import { styles } from "./styles"

export enum Operation {
  MULTIPLICATION = '\u00d7',
  SUM = '+',
  SUBTRACTION = '-',
  DIVISION = '\u00f7',
  CLEAR = 'C',
  LOG = 'log',
  SIN = 'sin',
  COS = 'cos',
  OK = '='
}

export interface OperationButtonProps {
  operation: Operation
}

export function OperationButton(props: OperationButtonProps) {
  return (
    <KeyboardButton
      pressedStyle={styles.keyboard.pressedOperationButton}
      releasedStyle={styles.keyboard.operationButton}
      titleStyle={styles.keyboard.operationButtonText}
      title={props.operation}
    />
  )
}