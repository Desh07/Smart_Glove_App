import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp, getApps } from 'firebase/app';
import * as FirebaseAuth from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  databaseURL: process.env.EXPO_PUBLIC_DATABASE_URL,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID,
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
