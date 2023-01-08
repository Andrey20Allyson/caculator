import { useState } from "react";
import { StyleProp, Text, TextStyle, ViewStyle, StyleSheet, Pressable } from "react-native";
import { styles } from "./styles";

export interface KeyboardButtonProps {
  title: string;
  pressedStyle?: StyleProp<ViewStyle>;
  releasedStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  onPress?: (value: string) => void;
}

export function KeyboardButton(props: KeyboardButtonProps) {
  let [pressed, setPressed] = useState(false);

  const { onPress = () => undefined } = props;

  function pressInListener() {
    setPressed(true);
  }

  function pressOutListener() {
    setPressed(false);
  }

  function pressListener() {
    onPress(props.title);
  }

  const style = pressed? props.pressedStyle ?? styles.keyboard.pressedButton: props.releasedStyle;

  return (
    <Pressable style={StyleSheet.flatten([styles.keyboard.button, style])} onPressOut={pressOutListener} onPressIn={pressInListener} onPress={pressListener}>
      <Text style={StyleSheet.flatten([styles.keyboard.buttonText, props.titleStyle])}>
        {props.title}
      </Text>
    </Pressable>
  );
}