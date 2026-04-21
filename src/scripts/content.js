function applyPrivacyStyles() {
  // start as unblur
  chrome.storage.sync.get({
    profileBlur: false, 
    nameBlur: false,
    chatBlur: false
  }, (data) => {
    let styleEl = document.getElementById('wa-privacy-pro-css');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'wa-privacy-pro-css';
      document.head.appendChild(styleEl);
    }

    let css = "";
    // add css if true
    if (data.profileBlur) {
      css += `[data-testid="avatar"], ._ak8h img { filter: blur(15px) !important; transition: 0.2s; }
              [data-testid="avatar"]:hover, ._ak8h img:hover { filter: blur(0px) !important; }`;
    }
    if (data.nameBlur) {
      css += `[data-testid="cell-frame-title"], ._ak8j, span[title] { filter: blur(10px) !important; transition: 0.2s; }
              [data-testid="cell-frame-title"]:hover, ._ak8j:hover, span[title]:hover { filter: blur(0px) !important; }`;
    }
    if (data.chatBlur) {
      css += `[data-testid="msg-container"], .message-in, .message-out { filter: blur(12px) !important; transition: 0.2s; }
              [data-testid="msg-container"]:hover, .message-in:hover, .message-out:hover { filter: blur(0px) !important; }`;
    }
    styleEl.innerHTML = css;
  });
}
applyPrivacyStyles();

// check listener
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync') applyPrivacyStyles();
});