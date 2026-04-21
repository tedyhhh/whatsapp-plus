const settings = ['profileBlur', 'nameBlur', 'chatBlur'];

chrome.storage.sync.get({
  profileBlur: false,
  nameBlur: false,
  chatBlur: false
}, (data) => {
  settings.forEach(key => {
    const el = document.getElementById(key);
    if (el) {
      el.checked = data[key];
      el.addEventListener('change', () => {
        chrome.storage.sync.set({ [key]: el.checked });
      });
    }
  });
});

// update keybind
function updateShortcutDisplay() {
  chrome.commands.getAll((commands) => {
    const toggleCommand = commands.find(c => c.name === "toggle-all-privacy");
    const shortcutDisplay = document.getElementById('currentShortcut');

    if (toggleCommand && toggleCommand.shortcut) {
      shortcutDisplay.innerText = toggleCommand.shortcut;
      shortcutDisplay.style.color = "#128c7e";
    } else {
      shortcutDisplay.innerText = "Not configured";
      shortcutDisplay.style.color = "#888"; 
    }
  });
}

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync') {
    settings.forEach(key => {
      if (changes[key]) {
        const state = document.getElementById(key);
        if (state) {
          state.checked = changes[key].newValue;
        }
      }
    });
  }
});

document.getElementById('toggleAllBtn').addEventListener('click', () => {
    chrome.storage.sync.get(settings.reduce((acc, k) => ({...acc, [k]: false}), {}), (data) => {
        // If any are currently OFF, turn all ON. 
        // If all are ON, turn all OFF.
        const allOn = settings.every(key => data[key]);
        const newState = !allOn;
        
        const update = {};
        settings.forEach(key => {
            update[key] = newState;
            const el = document.getElementById(key);
            if (el) el.checked = newState;
        });
        
        chrome.storage.sync.set(update);
    });
});

function updateShortcutDisplay() {
    chrome.commands.getAll((commands) => {
        const toggleCommand = commands.find(c => c.name === "toggle-all-privacy");
        const container = document.getElementById('shortcutDisplayContainer');
        
        container.innerHTML = '';
        if (toggleCommand && toggleCommand.shortcut) {
            const keys = toggleCommand.shortcut.split('+');
            
            keys.forEach((key, index) => {
                const keyBox = document.createElement('span');
                keyBox.className = 'key-box';
                keyBox.innerText = key.trim();
                container.appendChild(keyBox);

                if (index < keys.length - 1) {
                    const separator = document.createElement('span');
                    separator.className = 'key-separator';
                    separator.innerText = '+';
                    container.appendChild(separator);
                }
            });
        } else {
            container.innerText = "Shortcut not set";
        }
    });
}
updateShortcutDisplay();

document.getElementById('changeShortcut').addEventListener('click', () => {
  chrome.tabs.create({ url: 'chrome://extensions/shortcuts' });
});