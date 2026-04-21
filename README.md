# WhatsApp+

A simple lightweight privacy extension for Whatsapp Web on Google Chrome and Microsoft Edge. It is open-source and you can inspect the code and modify the contents to your liking!

## Features
- Toggle blur ON/OFF anytimee for profile pictures, group names, and individual contact names
- Unblurs on hover
- Customizable shortcut to blur all

<img width="307" height="296" alt="WhatsApp+" src="https://github.com/user-attachments/assets/83153b32-68cd-43e5-9596-d0cf1f38b0c6" />


## Install in Locally in Browser
1. Clone or download this repository to your local machine
    ```bash
    git clone https://github.com/ting-how/whatsapp_plus.git
    ```

2.  **Open your browser:**
    - In Chrome: Navigate to `chrome://extensions`
    - In Edge: Navigate to `edge://extensions`
    - In Firefox: Navigate to `about:debugging#/runtime/this-firefox`
3.  **Enable `Developer Mode`**
4.  Click the **Load unpacked** button (Chrome and Edge) or *Load Temporary Add-on...* (Firefox), then select `Whatsapp_plus/src` folder
5.  Visit or refresh [Whatsapp Web](https://web.whatsapp.com)

## Configure the Shortcuts
1. Clicking on the setting button (top right) will open the browser's Extension page
2. Configure the `Panic button to blur all` key bind

## Project Structure
```
whatsapp_plus
├── .git
├── src/
    ├── assets/
    		└── whatsapp.png
    ├── scripts/
    		├── background.js
    		├── content.js
    		└── popup.js
    ├── styles/
    		└── popup.css
    ├── manifest.json
    └── popup.html
├── LICENSE
└── README.md
```
## Screenshots
| Chat List View | Hover To Reveal|
|-|-|
|<img width="553" height="125" alt="image" src="https://github.com/user-attachments/assets/7b83994e-6645-4691-a3b5-be69ccba0e91" />|<img width="558" height="122" alt="image" src="https://github.com/user-attachments/assets/449c93b8-63db-437c-bf95-02b6157790dc" />|



## Privacy
- This extension runs locally on your browser. It does not collect information about you or your messages.
- This project is licensed under the MIT license - see the LICENSE file for details.
