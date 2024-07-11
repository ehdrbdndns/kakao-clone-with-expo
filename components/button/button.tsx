import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { PropsWithChildren } from "react";
import { fonts, colors } from "../../themes/styles";

export type ButtonProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>,
  onPress?: () => void
}>

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