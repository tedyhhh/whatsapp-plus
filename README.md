# WhatsApp+

A simple lightweight privacy extension for Whatsapp Web on Google Chrome and Microsoft Edge. It is open-source and you can inspect the code and modify the contents to your liking!

## Features
- Toggle blur ON/OFF anytimee for profile pictures, group names, and individual contact names
- Unblurs on hover
- Customizable shortcut to blur all

	<img width="311" height="297" alt="WhatsApp+" src="https://github.com/user-attachments/assets/6d3daf28-0649-4b9a-86c6-7fc59207daeb" />

## Install in Locally in Browser
1. Clone or download this repository to your local machine
    ```bash
    git clone https://github.com/ting-how/whatsapp_plus.git
    ```

2.  **Open your browser:**
    - In Chrome: Navigate to `chrome://extensions`
    - In Edge: Navigate to `edge://extensions`
3.  **Enable `Developer Mode`**
4.  Click the **Load unpacked** button, then select `Whatsapp_plus/src` folder
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
| <img width="564" height="136" alt="Full Blur" src="https://github.com/user-attachments/assets/a79ada62-d1e8-4856-b1c0-b5fe9bfe8240" />|<img width="556" height="124" alt="image" src="https://github.com/user-attachments/assets/3dc32dbe-6a2a-417f-ab27-3b558e0ea0e2" />


## Privacy
- This extension runs locally on your browser. It does not collect information about you or your messages.
- This project is licensed under the MIT license - see the LICENSE file for details.
