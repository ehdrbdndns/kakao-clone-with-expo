import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NotoSansKR_400Regular, NotoSansKR_700Bold } from "@expo-google-fonts/noto-sans-kr";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    NotoSansKR_400Regular,
    NotoSansKR_700Bold
  })

  useEffect(() => {
    if(loaded || error) {
      SplashScreen.hideAsync();
    
    }
  }, [loaded, error]);

  if(!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}