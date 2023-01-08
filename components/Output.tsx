import { HTMLProps } from "react";
import { Text, View, StyleSheet } from "react-native";
import { styles } from './styles';

export interface OutputProps extends HTMLProps<HTMLDivElement> {
  text?: string;
}

export function Output(props: OutputProps) {
  return (
    <View style={styles.output.root}>
      <Text style={styles.output.text}>
        {props.text}
      </Text>
    </View>
  )
}