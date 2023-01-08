import { View } from "react-native";
import { HTMLProps } from 'react';
import { styles } from "./styles";
import { KeyboardButton } from "./KeyboardButton";
import { Operation, OperationButton } from "./OperationButton";
import { KeyboardRow } from "./KeyBoardRow";

export interface KeyboardProps {}

export function Keyboard() {
  return (
    <View style={styles.keyboard.root}>
      <KeyboardRow>
        <OperationButton operation={Operation.SIN} />
        <OperationButton operation={Operation.COS} />
        <OperationButton operation={Operation.LOG} />
        <OperationButton operation={Operation.CLEAR} />
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton title="7" />
        <KeyboardButton title="8" />
        <KeyboardButton title="9" />
        <OperationButton operation={Operation.DIVISION} />
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton title="4" />
        <KeyboardButton title="5" />
        <KeyboardButton title="6" />
        <OperationButton operation={Operation.MULTIPLICATION} />
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton title="1" />
        <KeyboardButton title="2" />
        <KeyboardButton title="3" />
        <OperationButton operation={Operation.SUM} />
      </KeyboardRow>
      <KeyboardRow>
        <KeyboardButton title="," />
        <KeyboardButton title="0" />
        <OperationButton operation={Operation.SUBTRACTION} />
        <OperationButton operation={Operation.OK} />
      </KeyboardRow>
    </View>
  );
}