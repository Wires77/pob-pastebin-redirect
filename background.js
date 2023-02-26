const redirectHost = "https://pathofbuilding.community";

browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url);

    return { redirectUrl: redirectHost + "/?pastebin=" + url.pathname.slice(url.pathname.lastIndexOf('/')) };
  },
  {
    urls: [
      "*://pastebin.com/*"
    ],
    types: [
      "main_frame"
    ],
  },
  ["blocking"]
);
