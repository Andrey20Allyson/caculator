import { View } from "react-native";
import { styles } from "./styles";
import { KeyboardButton } from "./KeyboardButton";
import { Operation, OperationButton } from "./OperationButton";
import { KeyboardRow } from "./KeyBoardRow";

export interface KeyboardProps {
  onAddDigit?: (value: string) => void;
  onOperation?: (operation: Operation) => void;
}

const defaultListener = () => undefined;

export function Keyboard(props: KeyboardProps) {
  const { onAddDigit = defaultListener, onOperation = defaultListener } = props;

  function operationPressListener(operation: Operation) {
    onOperation(operation);
  }

  function buttonPressListener(value: string) {
    onAddDigit(value);
  }

  return (
    <View style={styles.keyboard.root}>
      <KeyboardRow>
        <OperationButton operation={Operation.OpenParentheses} onPress={operationPressListener} />
        <OperationButton operation={Operation.CloseParentheses} onPress={operationPressListener} />
        <OperationButton operation={Operation.RootSquare} onPress={operationPressListener} />
        <OperationButton operation={Operation.Power} onPress={operationPressListener} />
      </KeyboardRow>
      <KeyboardRow>
        <OperationButton operation={Operation.Sin} onPress={operationPressListener} />
        <OperationButton operation={Operation.Cos} onPress={operationPressListener} />
        <OperationButton operation={Operation.Log} onPress={operationPressListener} />
        <OperationButton operation={Operation.Clear} onPress={operationPressListener} />
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton title="7" onPress={buttonPressListener} />
        <KeyboardButton title="8" onPress={buttonPressListener} />
        <KeyboardButton title="9" onPress={buttonPressListener} />
        <OperationButton operation={Operation.Division} onPress={operationPressListener} />
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton title="4" onPress={buttonPressListener} />
        <KeyboardButton title="5" onPress={buttonPressListener} />
        <KeyboardButton title="6" onPress={buttonPressListener} />
        <OperationButton operation={Operation.Multiplication} onPress={operationPressListener} />
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton title="1" onPress={buttonPressListener} />
        <KeyboardButton title="2" onPress={buttonPressListener} />
        <KeyboardButton title="3" onPress={buttonPressListener} />
        <OperationButton operation={Operation.Sum} onPress={operationPressListener} />
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton title="," onPress={buttonPressListener} />
        <KeyboardButton title="0" onPress={buttonPressListener} />
        <OperationButton operation={Operation.Subtraction} onPress={operationPressListener} />
        <OperationButton operation={Operation.Ok} onPress={operationPressListener} />
      </KeyboardRow>
    </View>
  );
}