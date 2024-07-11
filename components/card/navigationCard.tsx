import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { colors, fonts, style } from "../../themes/styles"
import Row from "../row"
import Card from "./card"
import { Image } from "expo-image"

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

const imageSourceDict: { [key: string]: any } = {
  insurance: require('../../assets/nav/home/ic_insurance.svg'), // 보험
  card: require('../../assets/nav/home/ic_card.svg'), // 내카드한도
  docs: require('../../assets/nav/home/ic_docs.svg'), // 내문서함
  benefit: require('../../assets/nav/home/ic_benefits.svg'), // 내계좌혜택
  loan: require('../../assets/nav/home/ic_loan.svg'), // 내대출한도
  manage: require('../../assets/nav/home/ic_manage.svg'), // 신용관리
  moneycheck: require('../../assets/nav/home/ic_moneycheck.svg'), // 머니 체크
  point: require('../../assets/nav/home/ic_point.svg'), // 매일 모으기
}

export default function NavigationCard() {
  return (
    <Card style={style.p10}>
      {navList.map((row, index) => {
        return (
          <Row style={[style.g6]} key={`home_nav_${index}`}>
            {row.map((nav, index) => {
              return (
                <TouchableOpacity
                  key={`home_nav_item_${index}`}
                  activeOpacity={.8}
                  style={[customStyle.navItem, style.flexDirectionColumn, style.centralize]}
                >
                  <Image source={imageSourceDict[nav.type]} style={customStyle.navImage} />
                  <Text style={[fonts.DETAIL2_REGULAR, colors.GREY_600]}>{nav.name}</Text>
                </TouchableOpacity>
              )
            })}
          </Row>
        )
      })}
    </Card>
  )
}

const customStyle = StyleSheet.create({
  navItem: {
    width: 73,
    height: 69,
  },
  navImage: {
    width: 34,
    height: 34
  },
})