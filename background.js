function openSzmer() {
  browser.tabs.query({active: true, windowId: browser.windows.WINDOW_ID_CURRENT})
  .then(tabs => browser.tabs.get(tabs[0].id))
  .then(currentTab => {
    browser.storage.local.set({ previous_tab_data: currentTab });
    browser.tabs.create({
      "url": "https://szmer.info/create_post"
    });
  });
}
browser.browserAction.onClicked.addListener(openSzmer);
