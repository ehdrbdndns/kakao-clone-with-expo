import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "../themes/colors";
import { PropsWithChildren } from "react";

export default function Card(props: PropsWithChildren<{ style?: StyleProp<ViewStyle> }>) {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: 15,
  }
});