import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  maxWidth: {
    width: 330
  },
  defaultFrame: {
    width: 330,
    marginHorizontal: 'auto',
    marginTop: 8,
  },
  // flex
  centralize: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  // position
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  b0: {
    bottom: 0
  },
  b50: {
    bottom: '50%'
  },
  l0: {
    left: 0
  },
  l50: {
    left: '50%'
  },
  // width
  w2: {
    width: 2
  },
  w4: {
    width: 4
  },
  w8: {
    width: 8
  },
  w14: {
    width: 14
  },
  w16: {
    width: 16
  },
  w44: {
    width: 44
  },
  // height
  h2: {
    height: 2
  },
  h4: {
    height: 4
  },
  h8: {
    height: 8
  },
  h16: {
    height: 16
  },
  h21: {
    height: 21
  },
  h44: {
    height: 44
  },
  // padding
  pb0: {
    paddingBottom: 0
  },
  p1: {
    padding: 1,
  },
  pb1: {
    paddingBottom: 1
  },
  pb4: {
    paddingBottom: 4
  },
  ph4: {
    paddingHorizontal: 4
  },
  p7: {
    padding: 7,
  },
  ph8: {
    paddingHorizontal: 8
  },
  pt8: {
    paddingTop: 8
  },
  p10: {
    padding: 10
  },
  pr10: {
    paddingRight: 10
  },
  pb10: {
    paddingBottom: 10
  },
  ph10: {
    paddingHorizontal: 10
  },
  pl10: {
    paddingLeft: 10
  },
  pv11: {
    paddingVertical: 11,
  },
  ph11: {
    paddingHorizontal: 11
  },
  pv12: {
    paddingVertical: 12,
  },
  pv13: {
    paddingVertical: 13,
  },
  ph13: {
    paddingHorizontal: 13
  },
  pt14: {
    paddingTop: 14
  },
  pv16: {
    paddingVertical: 16
  },
  pt15: {
    paddingTop: 15
  },
  pb15: {
    paddingBottom: 15
  },
  pr20: {
    paddingRight: 20
  },
  ph20: {
    paddingHorizontal: 20
  },
  // margin
  mt32: {
    marginTop: 32,
  },
  mv36: {
    marginVertical: 36
  },
  // gap
  g1: {
    gap: 1
  },
  g2: {
    gap: 2
  },
  g3: {
    gap: 3
  },
  g4: {
    gap: 4
  },
  g5: {
    gap: 5
  },
  g6: {
    gap: 6
  },
  g7: {
    gap: 7
  },
  g8: {
    gap: 8
  },
  g9: {
    gap: 9
  },
  g10: {
    gap: 10
  },
  g11: {
    gap: 11
  },
  g12: {
    gap: 12
  },
  g15: {
    gap: 15
  },
  g21: {
    gap: 21
  },
  // flex
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  // border
  borderRad5: {
    borderRadius: 5
  },
  borderRad8: {
    borderRadius: 8
  },
  borderRad10: {
    borderRadius: 10
  },
  borderRad15: {
    borderRadius: 15
  }
});

export const fonts = StyleSheet.create({
  HEAD1: {
    fontFamily: 'NotoSansKR_700Bold',
    fontSize: 22,
    lineHeight: 33,
    letterSpacing: -0.32
  },
  HEAD2: {
    fontFamily: 'NotoSansKR_700Bold',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -0.32
  },
  HEAD3: {
    fontFamily: 'NotoSansKR_700Bold',
    fontSize: 18,
    lineHeight: 27,
    letterSpacing: -0.32
  },
  HEAD4: {
    fontFamily: 'NotoSansKR_700Bold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.32
  },
  BODY1_BOLD: {
    fontFamily: 'NotoSansKR_700Bold',
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: -0.32
  },
  BODY1_REGULAR: {
    fontFamily: 'NotoSansKR_400Regular',
    fontSize: 15,
    lineHeight: 22,
    letterSpacing: -0.32
  },
  BODY2_BOLD: {
    fontFamily: 'NotoSansKR_700Bold',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.32
  },
  BODY2_REGULAR: {
    fontFamily: 'NotoSansKR_400Regular',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.32
  },
  BODY3_BOLD: {
    fontFamily: 'NotoSansKR_700Bold',
    fontSize: 13,
    lineHeight: 19,
    letterSpacing: -0.32
  },
  BODY3_REGULAR: {
    fontFamily: 'NotoSansKR_400Regular',
    fontSize: 13,
    lineHeight: 19,
    letterSpacing: -0.32
  },
  DETAIL1_BOLD: {
    fontFamily: 'NotoSansKR_700Bold',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.32
  },
  DETAIL1_REGULAR: {
    fontFamily: 'NotoSansKR_400Regular',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.32
  },
  DETAIL2_BOLD: {
    fontFamily: 'NotoSansKR_700Bold',
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: -0.32
  },
  DETAIL2_REGULAR: {
    fontFamily: 'NotoSansKR_400Regular',
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: -0.32
  }
});

export const colors = StyleSheet.create({
  YELLOW: { color: '#FFEB00' },
  YELLOW_DARK: { color: '#FFDB00' },
  YELLOW_LIGHT: { color: '#FFF68F' },

  GREY_600: { color: '#737679' },
  GREY_500: { color: '#BFC0C2' },
  GREY_400: { color: '#D7D8D9' },
  GREY_300: { color: '#E9E9EA' },
  GREY_200: { color: '#F3F4F5' },

  BLUE_GREY_500: { color: '#ADB5BD' },
  BLUE_GREY_400: { color: '#E9ECEF' },

  BLACK: { color: '#060B11' },
  WHITE: { color: '#FFFFFF' },

  RED: { color: '#FF3C3C' },
  PINK: { color: '#FFF0F0' },

  BLUE: { color: '#008DFF' },
  LIGHT_BLUE: { color: '#E5F3FF' },
  ORRANGE: {
    color: '#FF7143'
  }
});

export const backgroundColors = StyleSheet.create({
  YELLOW: { backgroundColor: '#FFEB00' },
  YELLOW_DARK: { backgroundColor: '#FFDB00' },
  YELLOW_LIGHT: { backgroundColor: '#FFF68F' },

  GREY_600: { backgroundColor: '#737679' },
  GREY_500: { backgroundColor: '#BFC0C2' },
  GREY_400: { backgroundColor: '#D7D8D9' },
  GREY_300: { backgroundColor: '#E9E9EA' },
  GREY_200: { backgroundColor: '#F3F4F5' },

  BLUE_GREY_500: { backgroundColor: '#ADB5BD' },
  BLUE_GREY_400: { backgroundColor: '#E9ECEF' },

  BLACK: { backgroundColor: '#060B11' },
  WHITE: { backgroundColor: '#FFFFFF' },

  RED: { backgroundColor: '#FF3C3C' },
  PINK: { backgroundColor: '#FFF0F0' },

  BLUE: { backgroundColor: '#008DFF' },
  LIGHT_BLUE: { backgroundColor: '#E5F3FF' },
  ORRANGE: {
    backgroundColor: '#FF7143'
  }
});

export default { style, fonts, colors };