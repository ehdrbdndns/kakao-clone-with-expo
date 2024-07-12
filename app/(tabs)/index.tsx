import { ScrollView, Text, View } from "react-native";
import Card from "../../components/card/card";
import { style } from "../../themes/styles";
import IntegrationCard from "../../components/card/integrationCard";
import AccountCard from "../../components/card/accountCard";
import NavigationCard from "../../components/card/navigationCard";
import SettlementCard from "../../components/card/settlementCard";

export default function Home() {
  return (
    <ScrollView style={style.defaultFrame} showsVerticalScrollIndicator={false}>
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
        {/* 페이 포인트 */}
        <Card>
          <Text>페이 포인트</Text>
        </Card>
        {/* 신용 점수 */}
        <Card>
          <Text>신용 점수</Text>
        </Card>
      </View>
      {/* 개인정보처리방침 | 고객센터 | 신고하기 */}
      <View>
        <Text>개인정보처리방침 | 고객센터 | 신고하기</Text>
      </View>
      {/* 현장 결제 */}
      <View>
        <Text>현장 결제</Text>
      </View>
    </ScrollView>
  )
}