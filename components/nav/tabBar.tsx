import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

const imageSourceDict: {[key: string]: ImageSourcePropType} = {
  assets_grey: require('../../assets/nav/ic_assets_grey.svg'),
  assets_black: require('../../assets/nav/ic_assets_black.svg'),
  benefit_grey: require('../../assets/nav/ic_benefits_grey.svg'),
  benefit_black: require('../../assets/nav/ic_benefits_black.svg'),
  index_grey: require('../../assets/nav/ic_home_grey.svg'),
  index_black: require('../../assets/nav/ic_home_black.svg'),
  stock_grey: require('../../assets/nav/ic_stocks_grey.svg'),
  stock_black: require('../../assets/nav/ic_stocks_black.svg'),
  total_grey: require('../../assets/nav/ic_all_grey.svg'),
  total_black: require('../../assets/nav/ic_all_black.svg'),
}

export default function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { key, name } = route;
        const { options } = descriptors[key];
        const { navigate, emit } = navigation;

        const label = options.title;
        const isFocused = state.index === index;

        const imageSource = imageSourceDict[`${name}_${isFocused ? 'black' : 'grey'}`];

        const onPress = () => {
          const event = emit({
            type: 'tabPress',
            target: key,
            canPreventDefault: true,
          });

          if(!isFocused && !event.defaultPrevented) {
            navigate(name);
          }
        }

        const onLongPress = () => {
          emit({
            type: 'tabLongPress',
            target: key,
          })
        }

        return (
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.menu}
            key={key}
          >
            {/* ICON */}
            <Image
              style={styles.icon}
              source={imageSource}
            />
            {/* TEXT */}
            <Text
              style={[styles.label, { color: isFocused ? colors.BLACK : colors.GREY_600 }]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,

    paddingBottom: 8,
    paddingTop: 3,
    paddingHorizontal: 10,

    backgroundColor: colors.WHITE,
    borderTopWidth: 1,
    borderTopColor: colors.GREY_300
  },
  menu: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    paddingHorizontal: 18,
    gap: 3
  },
  icon: {
    width: 16,
    height: 16,
  },
  label: {
    ...fonts.DETAIL2_REGULAR
  }
})