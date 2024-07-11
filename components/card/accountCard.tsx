import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fonts, style } from "../../themes/styles";
import Card from "./card";
import Row from "../row";
import PrimaryBadge from "../badge/primaryBadge";
import { MoreIcon } from "../icon/icon";
import Info from "../info/info";
import SecondButton from "../button/secondButton";
import PrimaryButton from "../button/primaryButton";

const accountList = [
  { title: '페이머니', amount: 15000, isPrimary: false, info: '내 계좌 혜택을 받으세요!' },
  { title: '카카오뱅크', amount: 15000000, isPrimary: true, info: undefined },
  { title: '토스뱅크', amount: 15000000, isPrimary: true, info: undefined },
  { title: '테스트뱅크', amount: 15000000, isPrimary: true, info: undefined },
  { title: '테스트2뱅크', amount: 15000000, isPrimary: true, info: undefined },
]

export default function AccountCard() {
  return (
    <View>
      {/* 케러셀 */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.g10}
        decelerationRate={'fast'}
        snapToOffsets={accountList.map((_, index) => 320 * index)}

      >
        {accountList.map((row, index) => {
          const { title, amount } = row;
          return (
            <Card style={[customStyle.accountCard, style.p7]} key={`account_carousel_${index}`}>
              {/* TOP */}
              <Row style={[style.justifyContentBetween, style.alignItemsCenter, style.ph13, style.pv11]}>
                {/* INFO */}
                <View>
                  <Row style={[style.g5, style.alignItemsCenter]}>
                    <Text style={[fonts.BODY1_REGULAR, colors.GREY_600]}>{title}</Text>
                    {row.isPrimary && <PrimaryBadge>주계좌</PrimaryBadge>}
                  </Row>
                  <Text style={[fonts.HEAD4, colors.BLACK]}>{amount.toLocaleString()}원</Text>
                </View>
                {/* BUTTON */}
                <TouchableOpacity>
                  <MoreIcon />
                </TouchableOpacity>
              </Row>
              {/* BOTTOM */}
              <Row style={[style.mt32, style.g6]}>
                {/* SECOND */}
                <View style={[style.relative, style.flex1]}>
                  {row.info && (
                    <View style={customStyle.infoBox}>
                      <Info>{row.info}</Info>
                    </View>
                  )}
                  <SecondButton style={[style.pt8, style.pb10, style.borderRad10]}>충전</SecondButton>
                </View>
                {/* PRIMARY */}
                <View style={[style.relative, style.flex1]}>
                  <PrimaryButton style={[style.pt8, style.pb10, style.borderRad10]}>송금</PrimaryButton>
                </View>
              </Row>
            </Card>
          )
        })}
      </ScrollView>
    </View>
  )
}

const customStyle = StyleSheet.create({
  accountCard: {
    width: 310
  },
  infoBox: {
    position: 'absolute',
    left: '50%',
    top: 0,
    transform: [{ translateX: -58 }, { translateY: -30 }],
  },
})