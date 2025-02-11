# Random Number Generator

## Overview

The Random Number Generator is a web application designed to generate random numbers for lottery games, personal use, or any scenario requiring randomized number sets. It supports customizable ranges, numbers of generated items, and includes options for specific lottery types like Daily Lotto, Powerball, Lotto Plus 1, Lotto Plus 2, and International Lottery. The project aims to provide a user-friendly experience with visually appealing and responsive design.

## Features

- **Customizable Number Ranges:** Set minimum and maximum values for the range of numbers to be generated.
- **Number Count Selection:** Specify how many random numbers to generate per set.
- **Lottery Game Support:** Choose between generating numbers for:
  - Daily Lotto
  - Powerball (including bonus Powerball)
  - Lotto Plus 1 (including bonus ball)
  - Lotto Plus 2 (including bonus ball)
  - International Lottery (including bonus ball)
- **Theming:** Select from several pre-defined themes (default, dark, light, ocean) to customize the app's appearance.
- **Responsive Design:** App is designed to work well on various devices, including desktops, tablets, and mobile phones.
- **Accessibility:** Implements basic accessibility considerations like appropriate use of ARIA attributes and keyboard focus styles.
- **Favorites List:** Allows users to save their generated numbers for future reference.
- **Feedback Mechanism:** A feedback form where users can submit suggestions or report issues.
- **Water Dripping App Name Effect:** The application’s name has a water-dripping animation for visual interest.
- **Local Storage:** Saves app settings and favorites in local storage.
- **Bonus Ball Options**: Includes a feature to add Bonus Ball to the following lottos,"Daily Lotto, Powerball, Lotto Plus 1, Lotto Plus 2, and International Lottery.

## Technologies Used

- **HTML:** For structuring the web page.
- **CSS:** For styling, layout, and responsive design.
- **JavaScript:** For handling application logic, DOM manipulation, and event handling.
- **Font Awesome:** For icons.

## Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.)
- A text editor or IDE for code modification (VS Code, Sublime Text, Atom, etc.)

### Installation

1. **Clone the Repository:**

2. **Open `index.html` in Your Browser:**
- Simply double-click the `index.html` file to open it in your web browser. This will run the app locally.
- Alternatively, you can use a local web server for development, which helps avoid CORS issues. For example:

  ```
  python -m http.server  # For Python 3
  # OR
  python -m SimpleHTTPServer # For Python 2
  ```
  Then, open `http://localhost:8000` in your browser.

  - **Using `http-server` (Node.js):**
    ```
    npm install -g http-server
    http-server .
    ```
    Then, open `http://localhost:8080` in your browser.

## Usage

1.  **Open the App:**
 - Open `index.html` in your web browser.

2.  **Customize Settings:**
 - Click the "Open Settings" button to open the settings modal.
 - Set the desired Minimum Number, Maximum Number, and Number of Random Numbers.
 - Choose your preferred App Theme.
 - Click "Save Settings" to apply.

3.  **Generate Numbers:**
 - Click the "Generate Numbers" button to generate a new set of random numbers based on the configured settings.
 -  Use the Lottery Type drop-down to generate main and bonus ball numbers for a specific lottery.

4.  **View Generated Numbers:**
 - The generated numbers are displayed in a grid format.

5.  **Favorites:**
 - Click on a generated number to add it to or remove it from your favorites list.
 - View and clear your saved favorites in the Favorites section.

6.  **Feedback:**
 - Use the feedback form to provide any suggestions or issues.

## Contributing

Contributions are welcome! Here’s how you can contribute to the project:

1.  **Fork the Repository.**
2.  **Create a new branch for your feature or bug fix:**
 ```
 git checkout -b feature/new-feature
 # OR
 git checkout -b fix/bug-fix
 ```

3.  **Make your changes and commit them:**
 ```
 git add .
 git commit -m "Add some feature or fix a bug"
 ```

4.  **Push to the branch:**
 ```
 git push origin feature/new-feature
 # OR
 git push origin fix/bug-fix
 ```

5.  **Create a new Pull Request.**
 - Ensure your PR is well-described and references any related issues.

### Contribution Guidelines

- Follow consistent coding style.
- Add appropriate comments to your code.
- Test your changes thoroughly before submitting a pull request.

## License

This project is open-source. Details about licensing will be provided here in the future.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact [Your Name/Organization] at [Your Email/Contact Method].

## Roadmap

- **Implement Statistics Feature:** Show most frequently drawn numbers or overdue numbers based on historical data.
- **Implement Export/Import Settings Feature:** Show settings to share with a firend for example or import settings shared.
- **Automated Testing:** Add tests for core functionality.
- **Enhanced Theming:** Allow user to customize the colors to his preferences.
- **Implement Favorite Setting Feature:** Show user that click number as a glow when click again the number lose the glow, so that the user can see the selected numbers

