export const THEME_STORAGE_KEY = "fortuna-cv-theme";

// Runs in <head> before the page paints: applies the saved theme, or the
// system preference when the visitor hasn't chosen one, so there's no flash.
export const themeInitScript = `(function () {
  try {
    var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
    var dark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();`;
