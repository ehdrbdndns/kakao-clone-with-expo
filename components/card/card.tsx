import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { PropsWithChildren } from "react";
import { ButtonProps } from "../button/button";
import Row from "../row";
import { backgroundColors, colors, fonts, style } from "../../themes/styles";
import { RightChevronIcon } from "../icon/icon";

export type CardProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>,
  headerProps?: {
    title: string,
    hasButton?: boolean,
    buttonTitle?: string,
    onPress?: () => void
  },
  buttonProps?: {
    title: string
  } & ButtonProps
}>

export default function Card(props: CardProps) {
  return (
    <View style={[styles.container, props.style]}>
      {
        props.headerProps
          ? (
            <View>
              {/* HEADER */}
              <Row style={[style.pl10, style.pr20, style.justifyContentBetween, style.alignItemsCenter]}>
                {/* TITLE */}
                <Text style={[fonts.BODY2_BOLD, colors.GREY_600]}>{props.headerProps.title}</Text>
                {props.headerProps.hasButton ? (
                  <TouchableOpacity onPress={props.headerProps.onPress}>
                    <Row style={[style.alignItemsCenter, style.g7]}>
                      <Text style={[fonts.DETAIL2_REGULAR, colors.GREY_500]}>{props.headerProps.buttonTitle}</Text>
                      <RightChevronIcon />
                    </Row>
                  </TouchableOpacity>
                ) : ``}
              </Row>
            </View>
          ) : ``
      }
      {props.children}
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    ...backgroundColors.WHITE
  }
});