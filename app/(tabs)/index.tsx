import { Text, View } from "react-native";
import Card from "../../components/card/card";
import { style } from "../../themes/styles";
import IntegrationCard from "../../components/card/integrationCard";
import AccountCard from "../../components/card/accountCard";
import NavigationCard from "../../components/card/navigationCard";

export default function Home() {
  return (
    <View style={style.defaultFrame}>
      <View style={[style.flexDirectionColumn, style.g12]}>
        {/* 계좌 */}
        <AccountCard />
        {/* 네비게이션 */}
        <NavigationCard />
        {/* 통합 내역 */}
        <IntegrationCard />
        {/* 정산 보낼 돈 */}
        <Card>
          <Text>정산 보낼 돈</Text>
        </Card>
        {/* 정산 받을 돈 */}
        <Card>
          <Text>정산 받을 돈</Text>
        </Card>
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
    </View >
  )
}