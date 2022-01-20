# Park-it App
This is a application that allows users to reserve parking spots.

## Instructions to Run
After cloning the repo,
            
            cd park-it-app

Ensure all dependencies are installed,

            npm install

Then run,

            expo start

in the terminal you should see an address ex: http://localhost:19002, visit this url on your browser


Before continuing ensure an Android Emulator is running. Once that is up and running, click on "Run on Android device/emulator". You will see a loading bar in the terminal and once that is finished the app will be running on the emulator

### Alternatives

"expo start" will also give you a QR Code which can be scanned on your device which can be run on Expo Go application, available on Android and IOS

### Note:
Interpolate error might occur in the drawer navigator because of the mismatch of package versions.
The issue can be solved by changing the name of the method from "interpolate" to "interpolateNode" for all the occurences in the file.
The file will be present in the following path: 
./node_modules/react-navigation-drawer/lib/module/views/Drawer.js
