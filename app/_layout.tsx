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
import { SQLiteProvider, type SQLiteDatabase } from 'expo-sqlite';


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
      <SQLiteProvider databaseName="db.myfitness" onInit={migrateDbIfNeeded}>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} options={{
            headerRight: () => {
              return <Icon name="plus" onPress={() => {console.log("test")}} />;
            }
          }}/>
        </Drawer.Navigator>
        <StatusBar style="auto" />
      </SQLiteProvider>
    </ThemeProvider>
  );
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;

  let currentDbVersion = await db.getFirstAsync<{ user_version: number }>(
    'PRAGMA user_version'
  );
  let user_version = 0;
  if (currentDbVersion !== null) {
    user_version = currentDbVersion.user_version;
  }

  if (user_version >= DATABASE_VERSION) {
    return;
  }
  if (user_version === 0) {
    await db.execAsync(`
PRAGMA journal_mode = 'wal';
CREATE TABLE excersises (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
`);
    await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'hello', 1);
    await db.runAsync('INSERT INTO todos (value, intValue) VALUES (?, ?)', 'world', 2);
    user_version = 1;
  }
  // if (currentDbVersion === 1) {
  //   Add more migrations
  // }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}