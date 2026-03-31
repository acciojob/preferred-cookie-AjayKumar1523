//your JS code here. If required.
const form = document.querySelector("form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

// 🔥 Helper: set cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// 🔥 Helper: get cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, value] = c.split("=");
    if (key === name) return value;
  }
  return null;
}

// 🔥 Apply preferences
function applyPreferences(size, color) {
  if (size) {
    document.documentElement.style.setProperty("--fontsize", `${size}px`);
  }
  if (color) {
    document.documentElement.style.setProperty("--fontcolor", color);
  }
}

// ✅ On form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const size = fontSizeInput.value;
  const color = fontColorInput.value;

  // Save cookies
  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  // Apply immediately
  applyPreferences(size, color);
});

// ✅ On page load
window.addEventListener("load", () => {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) {
    fontSizeInput.value = savedSize;
  }
  if (savedColor) {
    fontColorInput.value = savedColor;
  }

  applyPreferences(savedSize, savedColor);
});