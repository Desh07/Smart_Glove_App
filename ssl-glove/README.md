# SSL Glove Mobile App

React Native (Expo) mobile app for the **Smart Glove** project.

The app is designed to support translation of **Sri Lankan Sign Language (SSL) gestures** into spoken output, with multilingual UI and phrase management.

## Features

- **Authentication**
  - Firebase Email/Password sign up, login, and logout.
  - Form validation and user-friendly auth error messages.

- **User profile management**
  - Edit and save name, email, contact number, and device name.
  - Profile data syncs to Firebase Realtime Database.

- **Gesture translation flow (current app behavior)**
  - Home dashboard for device status and latest recognized phrase display.
  - Text-to-speech output for recognized/saved phrases.
  - Output language switching between Sinhala and Tamil.

- **Saved phrases**
  - Add, edit, delete, and tap-to-speak saved phrases.
  - Phrase lists maintained per output language.

- **Multilingual experience**
  - UI language options: English, Sinhala, Tamil.
  - Output phrase options: Sinhala, Tamil.

- **Device and app settings**
  - Voice output toggle.
  - Haptic alerts toggle.
  - Dark mode toggle.

- **Offline-first local storage**
  - Uses AsyncStorage for cached settings, phrases, and local history.
  - Syncs phrase/profile data to Firebase when online.

- **Tutorials section**
  - In-app setup and usage steps with tutorial images.

## Tech Stack

- Expo SDK 54
- React 19 + React Native 0.81
- TypeScript
- Firebase (Auth + Realtime Database)
- AsyncStorage (local persistence)
- NetInfo (online/offline detection)
- Expo Speech (voice output)

## Dependencies

Main dependencies from `package.json`:

- `expo`
- `react`
- `react-native`
- `firebase`
- `@react-native-async-storage/async-storage`
- `@react-native-community/netinfo`
- `expo-speech`
- `expo-status-bar`

Dev dependencies:

- `typescript`
- `@types/react`

## Project Structure

```text
ssl-glove/
	App.tsx
	firebaseConfig.ts
	index.ts
	app.json
	data/
		firestoreService.ts
		localDb.ts
	assets/
		tutorials/
```

## Setup

### 1) Prerequisites

- Node.js (LTS recommended)
- npm
- Expo Go app (for testing on a real device) or Android/iOS emulator
- A Firebase project with:
  - Email/Password Authentication enabled
  - Realtime Database enabled

### 2) Install packages

```bash
npm install
```

### 3) Create environment file

Copy `.env.example` to `.env` and fill your Firebase values.

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

macOS/Linux:

```bash
cp .env.example .env
```

Required variables:

```dotenv
EXPO_PUBLIC_API_KEY=
EXPO_PUBLIC_AUTH_DOMAIN=
EXPO_PUBLIC_PROJECT_ID=
EXPO_PUBLIC_DATABASE_URL=
EXPO_PUBLIC_STORAGE_BUCKET=
EXPO_PUBLIC_MESSAGING_SENDER_ID=
EXPO_PUBLIC_APP_ID=
EXPO_PUBLIC_MEASUREMENT_ID=
```

### 4) Run the app

```bash
npm start
```

Then choose one:

- Press `a` for Android emulator
- Press `i` for iOS simulator (macOS)
- Press `w` for web
- Or scan the QR code in Expo Go

## Available Scripts

- `npm start` - Start Expo dev server
- `npm run android` - Start on Android
- `npm run ios` - Start on iOS
- `npm run web` - Start on web

## Firebase and Security Notes

- `.env` is ignored by Git and should never be committed.
- `.env.example` is safe to commit with placeholder values only.
- `EXPO_PUBLIC_*` variables are exposed in the app bundle at runtime.
  - Do **not** treat Firebase Web API keys as secrets.
  - Protect your backend with strict Firebase rules, authentication, and App Check.

## Current Scope Note

This version includes the end-user flow and integration scaffolding. If hardware streaming is not yet connected, gesture updates may use in-app sample behavior until live glove sensor input is wired in.
