# Park-it App
This is a application that allows users to reserve parking spots.

## Screenshots
![image22](https://github.com/user-attachments/assets/34641aee-560a-4dc6-85db-0c6038a28783)

![image26](https://github.com/user-attachments/assets/dcc7c744-d77b-46a6-a513-c456e459d14a)

![image27](https://github.com/user-attachments/assets/d4069b4d-19cc-4daf-8321-58d2043a2e51)

![image10](https://github.com/user-attachments/assets/06fccc1c-a119-4dea-873a-8c2bc18a0ce6)

![image11](https://github.com/user-attachments/assets/601b6da5-d146-436b-99cf-1d5a6b1b7fc8)

![image14](https://github.com/user-attachments/assets/8e526f5c-676f-4879-8b3e-4326fc5cee13)

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
