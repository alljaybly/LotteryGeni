Random Number Generator App
App Screenshot
Generate random lottery numbers for Daily Lotto, Powerball, Lotto Plus 1, Lotto Plus 2, and International Lottery.

Table of Contents
Introduction

Features

Technologies Used

Installation

Usage

Contributing

License

Contact

Introduction
The Random Number Generator App is a web-based application designed to help users generate random numbers for popular lottery games such as Daily Lotto, Powerball, Lotto Plus 1, Lotto Plus 2, and International Lottery. Users can customize the number of main numbers and bonus balls, save their favorite numbers, and set preferences for their default lottery type.

This app is built with HTML, CSS, JavaScript, and Firebase for authentication, data storage, and notifications. It is fully responsive and optimized for SEO.

Features
Generate Random Numbers:

Customize the number of main numbers and bonus balls.

Supports multiple lottery types: Daily Lotto, Powerball, Lotto Plus 1, Lotto Plus 2, and International Lottery.

Save Favorites:

Save your favorite generated numbers for future reference.

User Authentication:

Login and registration system powered by Firebase.

Settings:

Set your default lottery type for a personalized experience.

Responsive Design:

Works seamlessly on mobile, tablet, and desktop devices.

SEO Optimization:

Meta tags, alt attributes, and a clear site structure for better search engine visibility.

Water Dripping Effect:

A visually appealing animation for the app name.

Technologies Used
Frontend:

HTML5, CSS3, JavaScript

Backend:

Firebase (Authentication, Firestore, Hosting)

SEO:

Meta tags, alt attributes, and semantic HTML.

Animations:

CSS animations for the water-dripping effect.

Installation
To run this project locally, follow these steps:

Clone the Repository:

bash
Copy
git clone(https://github.com/alljaybly/LotteryGeni.git)
cd random-number-generator
Set Up Firebase:

Create a Firebase project at Firebase Console.

Add your Firebase configuration in script.js:

javascript
Copy
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
Run the App:

Open index.html in your browser or use a local server (e.g., VS Code Live Server).

Deploy:

Deploy the app using Firebase Hosting:

bash
Copy
firebase init hosting
firebase deploy
Usage
Login/Register:

Use the login/registration form to create an account or log in.

Generate Numbers:

Select your preferred lottery type.

Enter the number of main numbers and bonus balls.

Click Generate Numbers.

Save Favorites:

Click Save to Favorites to store your generated numbers.

Customize Settings:

Set your default lottery type in the Settings section.

Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch:

bash
Copy
git checkout -b feature/your-feature-name
Commit your changes:

bash
Copy
git commit -m "Add your message here"
Push to the branch:

bash
Copy
git push origin feature/your-feature-name
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
If you have any questions or suggestions, feel free to reach out:

Email: allanjblythe@gmail.com

GitHub: your-username

Project Link: (https://github.com/alljaybly/LotteryGeni)

Screenshots
Login Page
Main App
Settings

Future Enhancements
Add daily notifications for users to check their numbers.

Integrate social media sharing for generated numbers.

Add analytics to track user engagement.

Thank you for checking out the Random Number Generator App! We hope it helps you generate your lucky numbers. 🍀
