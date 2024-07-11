import { StyleSheet } from "react-native";
import Button, { ButtonProps } from "./button";
import { colors } from "../../themes/colors";
import { backgroundColors } from "../../themes/styles";

type PrimaryButtonProps = ButtonProps;

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <Button style={[backgroundColors.YELLOW, props.style]} onPress={props.onPress}>
      {props.children}
    </Button>
  )
}