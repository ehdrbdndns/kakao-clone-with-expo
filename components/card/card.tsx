import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { PropsWithChildren } from "react";
import Button, { ButtonProps } from "../button/button";
import Row from "../row";
import { backgroundColors, colors, fonts, style } from "../../themes/styles";
import { RightChevronIcon } from "../icon/icon";
import PrimaryButton from "../button/primaryButton";
import SecondButton from "../button/secondButton";

export type CardProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>,
  headerProps?: {
    title: string,
    hasButton?: boolean,
    buttonTitle?: string,
    style?: StyleProp<ViewStyle>,
    onPress?: () => void
  },
  contentProps?: {
    style: StyleProp<ViewStyle>
  }
  buttonProps?: {
    title: string,
    type: "primary" | "second"
  } & ButtonProps
}>

export default function Card(props: CardProps) {
  const { headerProps, contentProps, buttonProps } = props;
  return (
    <View style={[customStyles.container, props.style]}>
      {/* Header */}
      <View>
        {
          headerProps
            ? (
              <View style={headerProps?.style}>
                {/* HEADER */}
                <Row style={[style.pl10, style.pr20, style.justifyContentBetween, style.alignItemsCenter]}>
                  {/* TITLE */}
                  <Text style={[fonts.BODY2_BOLD, colors.GREY_600]}>{headerProps.title}</Text>
                  {headerProps.hasButton ? (
                    <TouchableOpacity onPress={headerProps.onPress}>
                      <Row style={[style.alignItemsCenter, style.g7]}>
                        <Text style={[fonts.DETAIL2_REGULAR, colors.GREY_500]}>{headerProps.buttonTitle}</Text>
                        <RightChevronIcon />
                      </Row>
                    </TouchableOpacity>
                  ) : ``}
                </Row>
              </View>
            ) : ``
        }
      </View>
      {/* Content */}
      <View style={contentProps?.style}>
        {props.children}
      </View>
      {/* Botton */}
      {buttonProps ? (
        <View style={buttonProps.style}>
          {
            buttonProps.type === 'primary'
              ? <PrimaryButton style={customStyles.button}>{buttonProps.title}</PrimaryButton>
              : <SecondButton style={customStyles.button}>{buttonProps.title}</SecondButton>
          }
        </View>
      ) : ``}
    </View >
  )
}

const customStyles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden',
    ...backgroundColors.WHITE
  },
  button: {
    height: 52
  }
});