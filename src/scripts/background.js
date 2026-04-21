chrome.commands.onCommand.addListener(async (command) => {
  if (command === "toggle-all-privacy") {
    const data = await chrome.storage.sync.get(['nameBlur']);
    const newState = !(data.nameBlur ?? false);

    await chrome.storage.sync.set({ 
      profileBlur: newState, 
      nameBlur: newState, 
      chatBlur: newState 
    });
  }
});