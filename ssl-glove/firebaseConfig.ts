import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp, getApps } from 'firebase/app';
import * as FirebaseAuth from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD0G6O8ksMmqdxlUWbVtUTbYkGb1qE34xE',
  authDomain: 'glove-b95ba.firebaseapp.com',
  projectId: 'glove-b95ba',
  databaseURL: 'https://glove-b95ba-default-rtdb.asia-southeast1.firebasedatabase.app/',
  storageBucket: 'glove-b95ba.firebasestorage.app',
  messagingSenderId: '610332069931',
  appId: '1:610332069931:web:227d3dd38d38df43cbda6e',
  measurementId: 'G-LVEFF64GTQ',
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

type InitializeAuthDependencies = NonNullable<
  Parameters<typeof FirebaseAuth.initializeAuth>[1]
>;

const getReactNativePersistence = (
  FirebaseAuth as typeof FirebaseAuth & {
    getReactNativePersistence?: (
      storage: typeof AsyncStorage
    ) => InitializeAuthDependencies['persistence'];
  }
).getReactNativePersistence;

let auth: FirebaseAuth.Auth;
try {
  auth =
    typeof getReactNativePersistence === 'function'
      ? FirebaseAuth.initializeAuth(app, {
          persistence: getReactNativePersistence(AsyncStorage),
        })
      : FirebaseAuth.getAuth(app);
} catch (error) {
  auth = FirebaseAuth.getAuth(app);
}

export { auth };
export const database = getDatabase(app);

export default app;
