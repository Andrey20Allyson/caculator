import { HTMLProps } from "react";
import { View } from "react-native";
import { styles } from "./styles";

export interface KeyboardRowProps extends HTMLProps<View> {}

export function KeyboardRow(props: KeyboardRowProps) {
  return (
    <View style={styles.keyboard.row}>
      {props.children}
    </View>
  )
}