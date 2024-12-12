import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from './(tabs)/home';
import { Button } from 'react-native';
import { Icon } from 'react-native-elements';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          headerRight: () => {
            return <Icon name="plus" onPress={() => {console.log("test")}} />;
          }
        }}/>
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
