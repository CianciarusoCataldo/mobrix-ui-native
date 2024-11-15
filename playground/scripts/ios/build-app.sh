#!/bin/bash

npm run build:ios
cd ios
pod install --repo-update
cd ..
xcodebuild -workspace ios/turnmeinapple.xcworkspace -scheme turnmeinapple -sdk iphoneos -destination 'platform=iOS Simulator,name=iPhone 14' -configuration Release clean build