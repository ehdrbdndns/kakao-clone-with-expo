import { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { style } from "../../themes/styles";

export type BadgeProps = PropsWithChildren<{ style?: StyleProp<ViewStyle> }>

export default function Badge(props: BadgeProps) {
  return (
    <View style={[style.h16, style.ph4, style.centralize, style.borderRad8, props.style]}>
      {props.children}
    </View>
  )
}