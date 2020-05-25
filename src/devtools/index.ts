chrome.devtools.panels.create(
  'DevTools Starter',
  'assets/icons/icon32.png',
  'devtools/app/index.html',
  () => {
    console.log('DevTools panel loaded!');
  }
);