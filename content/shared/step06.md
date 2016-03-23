{{#template name="sharedStep06"}}

# Running your app on iOS or Android

So far, we've been building our app and testing only in a web browser, but Meteor has been designed to work across different platforms - your simple todo list website can become an iOS or Android app in just a few commands.

Downloading and installing all of the prerequisites for building mobile apps can take a while. If you don't want to wait for this, feel free to skip to the next step.

{{#if specialContent}}
  {{> Template.dynamic template=specialContent}}
{{/if}}

### Running on an iOS Simulator or on an iOS device (Mac Only)

If you have a Mac, you can run your app inside the iOS Simulator or on an iOS device. In order to build and run iOS apps, you will need to install Xcode 7.2 or higher. Refer to the [mobile guide](http://guide.meteor.com/mobile.html#installing-prerequisites-ios-on-mac) for the installation steps.

In the terminal, go to your app folder and type:

```bash
meteor add-platform ios
meteor run ios
```

You will see the iOS Simulator pop up with your app running inside.

You can also run your app on an iOS device. Run the following command:

```bash
meteor run ios-device
```

This will open Xcode with a project for your iOS app. You can use Xcode to then launch the app on any device or simulator that Xcode supports.

### Running on an Android device

In order to build and run Android apps, you will need to install a Java Development Kit (JDK), the Android SDK, and download the required tools, platforms, and other components (which is done most easily by installing Android Studio). Refer to the [mobile guide](http://guide.meteor.com/mobile.html#installing-prerequisites-android-on-mac) for the installation steps.

In the terminal, go to your app folder and type:

```bash
meteor add-platform android
```

Make sure you have [USB Debugging enabled on your phone](http://developer.android.com/tools/device.html#developer-device-options) and the device is plugged into your computer with a USB cable.

Then, run the following command:

```bash
meteor run android-device
```

The app will be built and installed on your device.

Now that we have seen how easy it is to run our app on mobile, let's get to adding some more features.

{{/template}}
