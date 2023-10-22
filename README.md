# Tailwind Theme Controller

The Tailwind Theme Controller is a lightweight JavaScript module that allows you to effortlessly manage the theme of your web application built with the Tailwind CSS framework. It provides functionality to initialize the theme based on user preferences and local storage, as well as toggle between dark and light themes.

## Features

- Automatic theme initialization based on user preference or system color scheme
- Seamless toggle between dark and light themes
- Easy integration with Tailwind CSS projects
- Lightweight and dependency-free

## Usage


To get started with the Tailwind Theme Controller, follow the steps below:

### Install the module using npm:

```shell
npm i tailwind-theme-controller
```

installing from github

```shell
npm install https://github.com/maulydev/tailwind-theme-controller.git
```

After setting up your tailwindcss project configuration, add to `tailwind.config.js`

```js
darkMode: "class",
```

### Import the Theme Controller module into your JavaScript file:

```javascript
import ThemeController from "tailwind-theme-controller";
```

### Initialize the theme based on the user's preferences:

```javascript
ThemeController.initialize();
```

The initialize() method automatically sets the theme based on the user's preference stored in local storage. If no preference is found, it checks the system's color scheme and applies the appropriate theme.

### Add a theme toggle functionality to your application using

```html
<button onClick="{ThemeController.toggle}"></button>
```

## Example code

```javascript
import ThemeController from "tailwind-theme-controller";

ThemeController.initialize();

const toggler = () => ThemeController.toggle();

<button onClick={toggler}></button>;
```

# License

The Tailwind Theme Controller is open-source software licensed under the MIT License.

# Contributing

Contributions are welcome! If you encounter any issues, have suggestions, or want to contribute to the project, please feel free to submit a pull request.

# Credits

The Tailwind Theme Controller is developed and maintained by `Mauly dotDev`.
