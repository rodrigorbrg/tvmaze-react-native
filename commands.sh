#!/usr/bin/env bash
npm i
cd ios
pod install
cd ..
npm run clean
npm run start
emulatorName=$(emulator -list-avds)
emulator @$emulatorName
# emulator "@Pixel_4_API_31" "-verbose" "-show-kernel" "-no-audio" "-no-window" "-no-boot-anim" "-netdelay" "none" "-no-snapshot" "-wipe-data" "-gpu" "swiftshader_indirect" "-camera-back" "none" "-camera-front" "none"
npm run jest
yarn detox:build -l verbose --configuration android.emu.debug
yarn detox:test -l verbose --configuration android.emu.debug