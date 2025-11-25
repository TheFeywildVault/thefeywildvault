function setFavicon(iconUrl) {
  // Try to find an existing favicon link
  let favicon = document.querySelector("link[rel='shortcut icon']") || document.querySelector("link[rel='icon']");
  
  // If not found, create a new one
  if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "shortcut icon"; // Preferred for better compatibility
      document.head.appendChild(favicon);
  }
  
  // Set the icon URL with a cache-busting query string
  favicon.href = iconUrl + '?v=' + new Date().getTime();
}

// Set the favicon once the page loads
document.addEventListener("DOMContentLoaded", function() {
  setFavicon("./img/favicon.ico");
});

function setAppleTouchIcon(iconUrl) {
  let appleTouchIcon = document.querySelector("link[rel='apple-touch-icon']");
  if (!appleTouchIcon) {
      appleTouchIcon = document.createElement("link");
      appleTouchIcon.rel = "apple-touch-icon";
      document.head.appendChild(appleTouchIcon);
  }
  appleTouchIcon.href = iconUrl;
}

// Set the apple-touch-icon once the page loads
document.addEventListener("DOMContentLoaded", function() {
  setAppleTouchIcon("./img/appleicon.png");
});