# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# react-native-reanimated
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# @generated begin @nozbe/watermelondb/jsi-installation - expo prebuild (DO NOT MODIFY) sync-8f6635c6aa4068b66adb52f99310843e185f5491
-keep class com.nozbe.watermelondb.** { *; }
# @generated end @nozbe/watermelondb/jsi-installation
# Add any project specific keep options here:
