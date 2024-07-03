import { Tabs } from "expo-router";
import TabBar from "../../components/tabBar";

export default function Layout() {
  return (
    <Tabs 
      tabBar={props => <TabBar {...props} /> }
      screenOptions={{ headerShown: false }}>
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
        options={{ title: "홈" }} 
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