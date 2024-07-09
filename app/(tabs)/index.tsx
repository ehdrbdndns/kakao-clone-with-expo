import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/card";
import Row from "../../components/row";
import { Image } from "expo-image";
import SecondButton from "../../components/button/secondButton";
import PrimaryButton from "../../components/button/primaryButton";
import { MoreIcon } from "../../components/icon/icon";
import { style, fonts, colors } from "../../themes/styles";
import PrimaryBadge from "../../components/badge/primaryBadge";
import Badge from "../../components/badge/badge";
import Info from "../../components/info/info";

const imageSourceDict: { [key: string]: any } = {
  insurance: require('../../assets/nav/home/ic_insurance.svg'), // 보험
  card: require('../../assets/nav/home/ic_card.svg'), // 내카드한도
  docs: require('../../assets/nav/home/ic_docs.svg'), // 내문서함
  benefit: require('../../assets/nav/home/ic_benefits.svg'), // 내계좌혜택
  loan: require('../../assets/nav/home/ic_loan.svg'), // 내대출한도
  manage: require('../../assets/nav/home/ic_manage.svg'), // 신용관리
  moneycheck: require('../../assets/nav/home/ic_moneycheck.svg'), // 머니 체크
  point: require('../../assets/nav/home/ic_point.svg'), // 매일 모으기
  more: require('../../assets/dots.svg')
}

const navList = [
  [
    { type: 'insurance', name: '보험' }, { type: 'manage', name: '신용관리' },
    { type: 'card', name: '내카드한도' }, { type: 'loan', name: '내대출한도' }
  ],
  [
    { type: 'docs', name: '내문서함' }, { type: 'benefit', name: '내계좌혜택' },
    { type: 'moneycheck', name: '머니체크' }, { type: 'point', name: '매일모으기' }
  ],
]

const accountList = [
  { title: '페이머니', amount: 15000, isPrimary: false, info: '내 계좌 혜택을 받으세요!' },
  { title: '카카오뱅크', amount: 15000000, isPrimary: true, info: undefined }
]

export default function Home() {
  return (
    <View style={style.defaultFrame}>
      <View style={[style.flexDirectionColumn, style.g12]}>
        {/* 케러셀 */}
        <ScrollView contentContainerStyle={style.g10} horizontal showsHorizontalScrollIndicator={false} pagingEnabled={true}>
          {accountList.map((row, index) => {
            const { title, amount } = row;
            return (
              <Card style={[custom.accountCard, style.p7]} key={`account_carousel_${index}`}>
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
                      <View style={custom.infoBox}>
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
        {/* 네비게이션 */}
        <Card style={{ padding: 10 }}>
          {navList.map((row, index) => {
            return (
              <Row style={[style.g6]} key={`home_nav_${index}`}>
                {row.map((nav, index) => {
                  return (
                    <TouchableOpacity
                      key={`home_nav_item_${index}`}
                      activeOpacity={.8}
                      style={[custom.navItem, style.flexDirectionColumn, style.centralize]}
                    >
                      <Image source={imageSourceDict[nav.type]} style={custom.navImage} />
                      <Text style={[fonts.DETAIL2_REGULAR, colors.GREY_600]}>{nav.name}</Text>
                    </TouchableOpacity>
                  )
                })}
              </Row>
            )
          })}
        </Card>
        {/* 통합 내역 */}
        <Card>
          <Text>통합 내역</Text>
        </Card>
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
    </View>
  )
}

const custom = StyleSheet.create({
  navItem: {
    width: 73,
    height: 69,
  },
  navImage: {
    width: 34,
    height: 34
  },
  accountCard: {
    width: 310
  },
  infoBox: {
    position: 'absolute',
    left: '50%',
    top: 0,
    transform: [{ translateX: -58 }, { translateY: -30 }],
  }
})