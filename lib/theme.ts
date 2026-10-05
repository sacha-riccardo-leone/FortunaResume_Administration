export const THEME_STORAGE_KEY = "fortuna-cv-theme";

// Runs in <head> before the page paints, so there's no flash. Light is the
// default for everyone; dark only applies once the visitor has chosen it.
export const themeInitScript = `(function () {
  try {
    if (localStorage.getItem("${THEME_STORAGE_KEY}") === "dark") {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();`;
