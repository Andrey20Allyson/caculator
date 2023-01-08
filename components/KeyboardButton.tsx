import { useState } from "react";
import { PressableProps, StyleProp, Text, TextStyle, ViewStyle, StyleSheet, Pressable } from "react-native";
import { styles } from "./styles";

export interface KeyboardButtonProps extends PressableProps {
  title: string;
  pressedStyle?: StyleProp<ViewStyle>;
  releasedStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

export function KeyboardButton(props: KeyboardButtonProps) {
  let [pressed, setPressed] = useState(false);

  function pressInListener() {
    setPressed(true);
  }

  function pressOutListener() {
    setPressed(false);
  }

  const style = pressed? props.pressedStyle ?? styles.keyboard.pressedButton: props.releasedStyle;

  return (
    <Pressable style={StyleSheet.flatten([styles.keyboard.button, style])} onPressOut={pressOutListener} onPressIn={pressInListener} {...props} >
      <Text style={StyleSheet.flatten([styles.keyboard.buttonText, props.titleStyle])}>
        {props.title}
      </Text>
    </Pressable>
  );
}