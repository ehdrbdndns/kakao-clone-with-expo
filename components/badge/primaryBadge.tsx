import { Text } from "react-native";
import Badge, { BadgeProps } from "./badge";
import { backgroundColors, colors, fonts, style } from '../../themes/styles';

type PrimaryBadgeProps = BadgeProps;

export default function PrimaryBadge(props: PrimaryBadgeProps) {
  return (
    <Badge style={[backgroundColors.LIGHT_BLUE, style.ph4, style.pb1, props.style]}>
      <Text style={[colors.BLUE, fonts.DETAIL2_REGULAR]}>{props.children}</Text>
    </Badge>
  )
}