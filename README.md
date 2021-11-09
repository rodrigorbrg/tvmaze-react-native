# tvmaze-react-native

## To run the project ##

## Installation

```
npm install
```
iOS environment:
```
cd ios
pod install 
cd ..
react-native run-ios
```
Android environment:
```
react-native run-android
```

## Generate Android Release .apk 

```
cd android
./gradlew app:assembleRelease
```

## Generate Android Release .aab

```
cd android
./gradlew app:bundleRelease
```

## Preview

![preview](https://github.com/rodrigorbrg/tvmaze-react-native/blob/master/ScreenShot.png)

## How to install the app ##

-> Firebase App Distribution

```
https://appdistribution.firebase.dev/i/690d73d5a05f7ef7
```

Step 1: Sign in with Google to accept the invitation

After opening an invitation to test an app, you can sign in with any Google account to accept the invitation, not just the account to which the invitation was originally sent.

Step 2: Download Firebase App Tester

How can I install unknown apps?

Step 3: Download the build in Firebase App Tester
In Firebase App Tester, select the app you want to install and tap Download. Apps you install through App Tester are automatically added to your device's home screen.