import Button, { ButtonProps } from "./button";
import { backgroundColors } from "../../themes/styles";

type SecondButtonProps = ButtonProps;

export default function SecondButton(props: SecondButtonProps) {
  return (
    <Button style={[backgroundColors.BLUE_GREY_400, props.style]} onPress={props.onPress}>
      {props.children}
    </Button>
  )
}