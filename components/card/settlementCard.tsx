import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "./card";
import { backgroundColors, fonts, style } from "../../themes/styles";
import { ButtonProps } from "../button/button";
import Row from "../row";
import { Profile } from "../icon/icon";
import { useState } from "react";

type SettlementCardProps = {
  title: string,
  datas: { name: string, money: number }[],
  buttonProps: { title: string, type: 'primary' | 'second' } & ButtonProps
}

export default function SettlementCard(props: SettlementCardProps) {
  const { title, buttonProps, datas } = props;
  const [curPage, setCurPage] = useState(0);

  return (
    <Card
      headerProps={{ title: title, style: { ...style.p10 } }}
      buttonProps={{ title: buttonProps.title, type: buttonProps.type, onPress: buttonProps.onPress }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={330}
        decelerationRate={'fast'}
        onScroll={(event) => {
          const { contentOffset } = event.nativeEvent;
          const page = Math.round(contentOffset.x / 330);
          setCurPage(page);
        }}
      >
        {
          datas.map((row, index) => {
            const { name, money } = row;
            return (
              <Row style={[customStyle.card]} key={`${name}_settlement_card_${index}`}>
                {/* Profile */}
                <Row style={[style.alignItemsCenter, style.g11]}>
                  <Profile />
                  <Text style={fonts.BODY2_BOLD}>{name}</Text>
                </Row>
                {/* Price */}
                <View>
                  <Text style={fonts.BODY2_BOLD}>{money.toLocaleString()}원</Text>
                </View>
              </Row>
            )
          })
        }
      </ScrollView>
      {/* Page */}
      <Row style={[customStyle.page]}>
        {datas.map((_, index) => {
          return (
            <View
              key={`${title}_settlement_list_${index}`}
              style={[customStyle.dot, backgroundColors[curPage === index ? 'BLACK' : 'GREY_500']]}
            />
          )
        })}
      </Row>
    </Card>
  )
}

const customStyle = StyleSheet.create({
  card: {
    width: 330,
    paddingHorizontal: 20,
    paddingBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  page: {
    paddingBottom: 11,
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 100,
    ...backgroundColors.GREY_500
  }
});