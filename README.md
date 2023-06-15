# Tailwind Theme Manager

The Tailwind Theme Manager is a lightweight JavaScript module that allows you to effortlessly manage the theme of your web application built with the Tailwind CSS framework. It provides functionality to initialize the theme based on user preferences and local storage, as well as toggle between dark and light themes.

## Features

- Automatic theme initialization based on user preference or system color scheme
- Seamless toggle between dark and light themes
- Easy integration with Tailwind CSS projects
- Lightweight and dependency-free

## Usage

To get started with the Tailwind Theme Manager, follow the steps below:

### Install the module using npm:

```shell
npm install https://github.com/ercodr/tailwind-theme-manager.git
```

### Import the Theme Manager module into your JavaScript file:

```javascript
import ThemeManager from "tailwind-theme-manager";
```

### Initialize the theme based on the user's preferences:

```javascript
ThemeManager.initialize();
```

The initialize() method automatically sets the theme based on the user's preference stored in local storage. If no preference is found, it checks the system's color scheme and applies the appropriate theme.

### Add a theme toggle functionality to your application using `ThemeManager.toggle();`
```javascript
<button onClick={ThemeManager.toggle}></button>
```

## Example code
```javascript
import ThemeManager from "tailwind-theme-manager";

ThemeManager.initialize();

const toggler = () => ThemeManager.toggle();

<button onClick={toggler}></button>
```

# License
The Tailwind Theme Manager is open-source software licensed under the MIT License.

# Contributing
Contributions are welcome! If you encounter any issues, have suggestions, or want to contribute to the project, please feel free to submit a pull request.

# Credits
The Tailwind Theme Manager is developed and maintained by `Mauly dotDev`.