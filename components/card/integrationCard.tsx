import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Card from "./card"
import Row from "../row"
import { DarkDot, GreyDot, KakaoBankLogo, RightChevronIcon } from "../icon/icon"
import { backgroundColors, colors, fonts, style } from "../../themes/styles"
import { useState } from "react"

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

const CARD_WIDTH = 283;
const SNAP_WIDTH = 291;

export default function integrationCard() {

  const [curPage, setCurPage] = useState<number>(0);

  return (
    <View>
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
            snapToInterval={SNAP_WIDTH}
            decelerationRate={'fast'}
            onScroll={(event) => {
              const { contentOffset } = event.nativeEvent;

              const page = Math.ceil(contentOffset.x / SNAP_WIDTH);

              setCurPage(page);
            }}
          >
            {integrationList.map((row, index) => {
              return (
                <Row style={customStyle.integrationCard} key={`integration_card_${index}`}>
                  {/* PROFILE */}
                  <Row style={style.g10}>
                    <KakaoBankLogo />
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
            <View style={customStyle.emptyIntegrationCard}></View>
          </ScrollView>
          {/* PAGE */}
          <Row style={[
            style.centralize, style.g6, style.pr10,
            style.pt15, style.pb4
          ]}>
            {integrationList.map((_, index) => {
              return (
                <TouchableOpacity key={`integration_list_${index}`}>
                  {curPage === index ? <DarkDot /> : <GreyDot />}
                </TouchableOpacity>
              )
            })}
          </Row>
        </View>
      </Card>
    </View>
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