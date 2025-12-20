Last login: Fri Dec 19 20:01:51 on ttys000
vivienmacnguyen@Mac ~ % ls
Desktop		Downloads	Movies		Pictures
Documents	Library		Music		Public
vivienmacnguyen@Mac ~ % cd Documents
vivienmacnguyen@Mac Documents % ls
BUILD-1-PROJECT		Prac-This		Stephen Float Serve.mov
Build-1-Terminal	practice-app-forreal
vivienmacnguyen@Mac Documents % cd Build-1-project
vivienmacnguyen@Mac Build-1-project % ls
BUILD-1.pck		GodotRNApp
BUILD-1.zip		package-lock.json
vivienmacnguyen@Mac Build-1-project % cd GodotRNApp
vivienmacnguyen@Mac GodotRNApp % npx expo run:ios
› Planning build
› Executing react-native Pods/hermes-engine » [CP-User] [Hermes] Replace Hermes for the right configuration, if needed
› Executing react-native Pods/ReactNativeDependencies » [CP-User] [RNDeps] Replace React Native Dependencies for the right configuration, if needed
› Preparing expo-constants Pods/EXConstants-EXConstants » ResourceBundle-EXConstants-EXConstants-Info.plist
› Preparing Pods/React-cxxreact-React-cxxreact_privacy » ResourceBundle-React-cxxreact_privacy-React-cxxreact-Info.plist
› Preparing expo-image Pods/SDWebImage-SDWebImage » ResourceBundle-SDWebImage-SDWebImage-Info.plist
› Preparing Pods/React-Core-React-Core_privacy » ResourceBundle-React-Core_privacy-React-Core-Info.plist
› Preparing Pods/ExpoSystemUI-ExpoSystemUI_privacy » ResourceBundle-ExpoSystemUI_privacy-ExpoSystemUI-Info.plist
› Preparing Pods/ExpoFileSystem-ExpoFileSystem_privacy » ResourceBundle-ExpoFileSystem_privacy-ExpoFileSystem-Info.plist
› Preparing Pods/EXConstants-ExpoConstants_privacy » ResourceBundle-ExpoConstants_privacy-EXConstants-Info.plist
› Executing react-native Pods/React-Core-prebuilt » [CP-User] [RNDeps] Replace React Native Core for the right configuration, if needed
› Executing react-native Pods/React-RCTFBReactNativeSpec » [CP-User] [RN]Check FBReactNativeSpec
› Compiling godotrnapp Pods/ReactCodegen » ComponentDescriptors.cpp
› Compiling godotrnapp Pods/ReactAppDependencyProvider » RCTAppDependencyProvider.mm
› Compiling godotrnapp Pods/ReactCodegen » ComponentDescriptors.cpp
› Compiling godotrnapp Pods/ReactCodegen » safeareacontext-generated.mm
› Compiling godotrnapp Pods/ReactCodegen » safeareacontextJSI-generated.cpp
› Compiling godotrnapp Pods/ReactCodegen » rnworkletsJSI-generated.cpp
› Compiling godotrnapp Pods/ReactCodegen » rnworklets-generated.mm
› Compiling godotrnapp Pods/ReactCodegen » rnscreensJSI-generated.cpp
› Compiling godotrnapp Pods/ReactCodegen » rnscreens-generated.mm
› Compiling godotrnapp Pods/ReactCodegen » rnreanimatedJSI-generated.cpp
› Compiling godotrnapp Pods/ReactCodegen » rnreanimated-generated.mm
› Compiling godotrnapp Pods/ReactCodegen » rngesturehandler_codegenJSI-generated.cpp
› Compiling godotrnapp Pods/ReactCodegen » rngesturehandler_codegen-generated.mm
› Compiling godotrnapp Pods/ReactCodegen » States.cpp
› Compiling godotrnapp Pods/ReactCodegen » States.cpp
› Compiling godotrnapp Pods/ReactCodegen » States.cpp
› Compiling godotrnapp Pods/ReactCodegen » States.cpp
› Compiling godotrnapp Pods/ReactCodegen » ShadowNodes.cpp
› Compiling godotrnapp Pods/ReactCodegen » ShadowNodes.cpp
› Compiling godotrnapp Pods/ReactCodegen » ShadowNodes.cpp
› Compiling godotrnapp Pods/ReactCodegen » ShadowNodes.cpp
› Compiling godotrnapp Pods/ReactCodegen » RNGodotJSI-generated.cpp
› Compiling godotrnapp Pods/ReactCodegen » RNGodot-generated.mm
› Compiling godotrnapp Pods/ReactCodegen » RCTUnstableModulesRequiringMainQueueSetupProvider.mm
› Compiling godotrnapp Pods/ReactCodegen » RCTThirdPartyComponentsProvider.mm
› Compiling godotrnapp Pods/ReactCodegen » RCTModulesConformingToProtocolsProvider.mm
› Compiling godotrnapp Pods/ReactCodegen » Props.cpp
› Compiling godotrnapp Pods/ReactCodegen » RCTModuleProviders.mm
› Compiling godotrnapp Pods/ReactCodegen » Props.cpp
› Compiling godotrnapp Pods/ReactCodegen » Props.cpp
› Compiling godotrnapp Pods/ReactCodegen » Props.cpp
› Compiling godotrnapp Pods/ReactCodegen » EventEmitters.cpp
› Compiling godotrnapp Pods/ReactCodegen » EventEmitters.cpp
› Compiling godotrnapp Pods/ReactCodegen » EventEmitters.cpp
› Compiling godotrnapp Pods/ReactCodegen » EventEmitters.cpp
› Compiling godotrnapp Pods/ReactCodegen » ComponentDescriptors.cpp
› Compiling godotrnapp Pods/ReactCodegen » ComponentDescriptors.cpp
› Packaging godotrnapp Pods/ReactCodegen » libReactCodegen.a
› Packaging godotrnapp Pods/ReactAppDependencyProvider » libReactAppDependencyProvider.a
› Executing expo-constants Pods/EXConstants » [CP-User] Generate app.config for prebuilt Constants.manifest
› Executing GodotRNApp » [Expo] Configure project
› Compiling GodotRNApp » SplashScreen.storyboard
› Linking   GodotRNApp » GodotRNApp.debug.dylib
⚠️  ld: ignoring duplicate libraries: '-lc++'
⚠️  ld: Could not find or use auto-linked framework 'AudioUnit': framework 'AudioUnit' not found
⚠️  ld: Could not find or use auto-linked framework 'CoreAudioTypes': framework 'CoreAudioTypes' not found
⚠️  ld: Could not find or use auto-linked framework 'UIUtilities': framework 'UIUtilities' not found
⚠️  ld: Could not parse or use implicit file '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator.sdk/System/Library/Frameworks/SwiftUICore.framework/SwiftUICore.tbd': cannot link directly with 'SwiftUICore' because product being built is not an allowed client of it
❌  Undefined symbols for architecture arm64
┌─ Symbol: _vkAllocateCommandBuffers
└─ Referenced from: RenderingDeviceDriverVulkan::command_buffer_create(RenderingDeviceDriver::CommandPoolID) in ReactNativeGodot[arm64][1875](rendering_device_driver_vulkan.ios.template_release.arm64.simulator.o)


❌  ld: symbol(s) not found for architecture arm64



❌  clang: error: linker command failed with exit code 1 (use -v to see invocation)


    Run script build phase '[CP-User] [Hermes] Replace Hermes for the right configuration, if needed' will be run during every build because it does not specify any outputs. To address this issue, either add output dependencies to the script phase, or configure it to run in every build by unchecking "Based on dependency analysis" in the script phase. (in target 'hermes-engine' from project 'Pods')

› 3 error(s), and 6 warning(s)

CommandError: Failed to build iOS project. "xcodebuild" exited with error code 65.
npm notice
npm notice New major version of npm available! 10.9.4 -> 11.7.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.7.0
npm notice To update run: npm install -g npm@11.7.0
npm notice
vivienmacnguyen@Mac GodotRNApp % 
