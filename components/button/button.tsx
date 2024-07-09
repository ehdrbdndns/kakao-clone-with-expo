import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { PropsWithChildren } from "react";
import { style, fonts, colors } from "../../themes/styles";

export type ButtonProps = {
  style?: StyleProp<ViewStyle>,
  onPress?: () => void
} & PropsWithChildren

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
      <Text style={[fonts.BODY3_BOLD, colors.BLACK]}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});