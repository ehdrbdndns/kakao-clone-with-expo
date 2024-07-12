import { ScrollView, StyleSheet, Text, View } from "react-native";
import { backgroundColors, colors, fonts, style } from "../../themes/styles";
import IntegrationCard from "../../components/card/integrationCard";
import AccountCard from "../../components/card/accountCard";
import NavigationCard from "../../components/card/navigationCard";
import SettlementCard from "../../components/card/settlementCard";
import Row from "../../components/row";

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.defaultFrame}>
        <View style={[style.flexDirectionColumn, style.g12]}>
          {/* 계좌 */}
          <AccountCard />
          {/* 네비게이션 */}
          <NavigationCard />
          {/* 통합 내역 */}
          <IntegrationCard />
          {/* 정산 보낼 돈 */}
          <SettlementCard
            title="정산 보낼 돈"
            buttonProps={{ title: '보내기', type: 'primary' }}
            datas={[
              { name: '양동균', money: 100000 }, { name: '양무개', money: 100400 },
              { name: '양동균2', money: 100000 }, { name: '양무개2', money: 100400 },
              { name: '양동균3', money: 100000 }, { name: '양무개3', money: 100400 }
            ]}
          />
          {/* 정산 받을 돈 */}
          <SettlementCard title="정산 받을 돈" buttonProps={{ title: '확인하기', type: 'second' }} datas={[{ name: '김동균', money: 100000 }, { name: '김무개', money: 100400 }]} />
        </View>
        {/* 개인정보처리방침 | 고객센터 | 신고하기 */}
        <Row style={[style.mv36, style.pt14, style.pb15, style.centralize, style.g21]}>
          <Text style={[fonts.BODY3_BOLD, colors.GREY_600]}>개인정보처리방침</Text>
          <View style={customStyle.hr} />
          <Text style={[fonts.BODY3_REGULAR, colors.GREY_600]}>고객센터</Text>
          <View style={customStyle.hr} />
          <Text style={[fonts.BODY3_REGULAR, colors.GREY_600]}>신고하기</Text>
        </Row>
      </View>
    </ScrollView>
  )
}

const customStyle = StyleSheet.create({
  hr: {
    width: 2,
    height: 14,
    ...backgroundColors.GREY_500
  },
})