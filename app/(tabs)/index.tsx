import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "../../components/card";
import Row from "../../components/row";
import { Image } from "expo-image";
import SecondButton from "../../components/button/secondButton";
import PrimaryButton from "../../components/button/primaryButton";
import { MoreIcon, RightChevronIcon } from "../../components/icon/icon";
import { style, fonts, colors, backgroundColors } from "../../themes/styles";
import PrimaryBadge from "../../components/badge/primaryBadge";
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
  more: require('../../assets/dots.svg'), // 더보기 이미지
  kakao: require('../../assets/kakaobank_logo.svg'), // 카카오뱅크 로고
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
  { title: '카카오뱅크', amount: 15000000, isPrimary: true, info: undefined },
  { title: '토스뱅크', amount: 15000000, isPrimary: true, info: undefined },
  { title: '테스트뱅크', amount: 15000000, isPrimary: true, info: undefined },
  { title: '테스트2뱅크', amount: 15000000, isPrimary: true, info: undefined },
]

const integrationList = [
  {
    name: '동균 카뱅',
    price: -20000,
    date: '04. 19.',
    type: '송금'
  },
  {
    name: '동균2 카뱅',
    price: -20000,
    date: '04. 19.',
    type: '송금'
  },
  {
    name: '동균3 카뱅',
    price: -2000000,
    date: '04. 19.',
    type: '송금'
  },
  {
    name: '동균4 카뱅',
    price: 100,
    date: '04. 19.',
    type: '송금'
  }
]

export default function Home() {
  return (
    <View style={style.defaultFrame}>
      <View style={[style.flexDirectionColumn, style.g12]}>
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
        <Card style={style.p10}>
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
        <Card style={[style.pl10, style.pv16, style.g15]}>
          {/* HEADER */}
          <Row style={[style.pl10, style.pr20, style.justifyContentBetween, style.alignItemsCenter]}>
            {/* TITLE */}
            <Text style={[fonts.BODY2_BOLD, colors.GREY_600]}>통합 내역</Text>
            {/* BUTTON */}
            <TouchableOpacity>
              <Row style={[style.alignItemsCenter, style.g7]}>
                <Text style={[fonts.DETAIL2_REGULAR, colors.GREY_500]}>전체보기</Text>
                <RightChevronIcon />
              </Row>
            </TouchableOpacity>
          </Row>
          {/* CONTENT */}
          <View>
            {/* CAROUSEL */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={style.g8}
              snapToInterval={291}
              decelerationRate={'fast'}
            >
              {integrationList.map((row, index) => {
                return (
                  <Row style={custom.integrationCard} key={`integration_card_${index}`}>
                    {/* PROFILE */}
                    <Row style={style.g10}>
                      <Image style={[style.w44, style.h44]} source={imageSourceDict['kakao']} />
                      <View style={style.g2}>
                        <Text style={[fonts.BODY2_BOLD]}>{row.name}</Text>
                        <Text style={[fonts.DETAIL1_REGULAR, colors.GREY_600]}>{row.date}</Text>
                      </View>
                    </Row>
                    {/* PRICE */}
                    <View style={[style.g2]}>
                      <Text style={[fonts.BODY2_BOLD]}>{row.price.toLocaleString()}원</Text>
                      <Row style={style.justifyContentBetween}>
                        <View></View>
                        <Text style={[fonts.DETAIL1_REGULAR, colors.GREY_600]}>{row.type}</Text>
                      </Row>
                    </View>
                  </Row>
                )
              })}
              {/* Empty Box */}
              <View style={custom.emptyIntegrationCard}></View>
            </ScrollView>
            {/* PAGE */}
            <View></View>
          </View>
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
    </View >
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
  },
  integrationCard: {
    width: 283,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    ...backgroundColors.GREY_200,
  },
  emptyIntegrationCard: {
    width: 8
  }
})