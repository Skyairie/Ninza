import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontLoaded, error] = useFonts({
    'Jersey20-Regular': require('../assets/fonts/Jersey20-Regular.ttf'),
    Lilita: require('../assets/fonts/Lilita.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
  });
  useEffect(() => {
    if (error) throw error;
    if (fontLoaded) SplashScreen.hideAsync();
  }, [fontLoaded, error]);
  if (!fontLoaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
