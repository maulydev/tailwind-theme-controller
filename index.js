const ThemeController = {
  initialize() {
    if ("theme" in localStorage) {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      localStorage.setItem("theme", "light");
    }
  },

  toggle() {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.className = "light";
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.className = "dark";
    }
  },
};

export default ThemeController;
