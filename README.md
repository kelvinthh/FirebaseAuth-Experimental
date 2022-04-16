# Firebase Experiment

A little experiment with Google Firebase authentication created in React Native w/ Expo
![](https://i.imgur.com/3DoMjJR.png)![](https://i.imgur.com/DRVKYoW.png)
### Features:
1. Register an account to Firebase
2. Login using accounts stored on Firebase
3. Logout

## How to run it

### Install Expo CLI

This project utilizes Expo, please have Expo-CLI installed before proceeding [https://docs.expo.dev/get-started/installation/](https://docs.expo.dev/get-started/installation/)

### Clone the repository and install dependencies

To run the project on your own, simply clone this repository and run the following command in the terminal:

#### `npm install`

Installs all the required libraries and packages.

### Prepare your own config.js based on your Firebase app config
```
 export const API_KEY = "";
 export const AUTH_DOMAIN = "";
 export const PROJECT_ID = "";
 export const STORAGE_BUCKET = "";
 export const MESSAGING_SENDER_ID = "";
 export const APP_ID = "";
```
Save as `config.js` and put into the project's root directory (same as `app.js`).

### Start Expo server and run the app
#### `expo start`

Open [http://localhost:19000](http://localhost:19000) in the browser to view the app. You may need to install Expo Go app to test it on your mobile device(s).
