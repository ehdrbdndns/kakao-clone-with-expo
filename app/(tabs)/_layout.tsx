import { Tabs } from "expo-router";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

import TabBar from "../../components/nav/tabBar";
import HomeHeader from "../../components/nav/homeHeader";

export default function Layout() {
  return (
    <Tabs
      tabBar={props => <TabBar {...props} /> }>
      <Tabs.Screen
        name="assets"
        options={{ title: "자산" }} 
      />
      <Tabs.Screen
        name="benefit"
        options={{ title: "혜택" }} 
      />
      <Tabs.Screen
        name="index"
        options={{ 
          title: "홈",
          header: (props: BottomTabHeaderProps) => <HomeHeader {...props} />
        }} 
      />
      <Tabs.Screen
        name="stock"
        options={{ title: "주식" }} 
      />
      <Tabs.Screen
        name="total"
        options={{ title: "전체" }} 
      />
    </Tabs>
  )
}