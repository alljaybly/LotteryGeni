// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// DOM Elements
const authSection = document.getElementById('auth-section');
const appSection = document.getElementById('app-section');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');
const generateButton = document.getElementById('generate');
const saveFavoritesButton = document.getElementById('save-favorites');
const saveSettingsButton = document.getElementById('save-settings');

// Auth State Listener
auth.onAuthStateChanged(user => {
  if (user) {
    authSection.classList.add('hidden');
    appSection.classList.remove('hidden');
    loadUserSettings(user.uid);
    loadFavorites(user.uid);
  } else {
    authSection.classList.remove('hidden');
    appSection.classList.add('hidden');
  }
});

// Login
loginButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.signInWithEmailAndPassword(email, password)
    .catch(error => alert(error.message));
});

// Register
registerButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.createUserWithEmailAndPassword(email, password)
    .catch(error => alert(error.message));
});

// Generate Numbers
generateButton.addEventListener('click', generateNumbers);

function generateNumbers() {
  const lotteryType = document.getElementById('lottery-type').value;
  const mainNumbersCount = parseInt(document.getElementById('main-numbers').value);
  const bonusBallsCount = parseInt(document.getElementById('bonus-balls').value);

  if (isNaN(mainNumbersCount) || mainNumbersCount < 1) {
    alert('Please enter a valid number of main numbers.');
    return;
  }

  if (isNaN(bonusBallsCount) || bonusBallsCount < 0) {
    alert('Please enter a valid number of bonus balls.');
    return;
  }

  const mainNumbers = generateRandomNumbers(mainNumbersCount, 1, 50);
  const bonusBalls = generateRandomNumbers(bonusBallsCount, 1, 10);

  displayNumbers(mainNumbers, 'main-numbers-output');
  displayNumbers(bonusBalls, 'bonus-balls-output', true);
}

function generateRandomNumbers(count, min, max) {
  const numbers = [];
  while (numbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numbers.includes(num)) numbers.push(num);
  }
  return numbers.sort((a, b) => a - b);
}

function displayNumbers(numbers, elementId, isBonus = false) {
  const outputDiv = document.getElementById(elementId);
  outputDiv.innerHTML = numbers.map(num => {
    const randomColor = isBonus ? '' : `hsl(${Math.random() * 360}, 70%, 50%)`;
    const ballClass = isBonus ? 'number bonus-ball' : 'number';
    return `<div class="${ballClass}" style="background-color: ${randomColor}">${num}</div>`;
  }).join('');
}

// Save Favorites
saveFavoritesButton.addEventListener('click', () => {
  const user = auth.currentUser;
  if (user) {
    const mainNumbers = document.getElementById('main-numbers-output').textContent;
    const bonusBalls = document.getElementById('bonus-balls-output').textContent;
    db.collection('favorites').doc(user.uid).set({
      mainNumbers,
      bonusBalls,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => alert('Favorites saved!'));
  } else {
    alert('Please log in to save favorites.');
  }
});

// Load Favorites
function loadFavorites(userId) {
  db.collection('favorites').doc(userId).get().then(doc => {
    if (doc.exists) {
      const data = doc.data();
      document.getElementById('favorites-list').textContent = `Main: ${data.mainNumbers}, Bonus: ${data.bonusBalls}`;
    }
  });
}

// Save Settings
saveSettingsButton.addEventListener('click', () => {
  const user = auth.currentUser;
  if (user) {
    const defaultLottery = document.getElementById('default-lottery').value;
    db.collection('settings').doc(user.uid).set({
      defaultLottery,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => alert('Settings saved!'));
  } else {
    alert('Please log in to save settings.');
  }
});

// Load Settings
function loadUserSettings(userId) {
  db.collection('settings').doc(userId).get().then(doc => {
    if (doc.exists) {
      const data = doc.data();
      document.getElementById('default-lottery').value = data.defaultLottery;
    }
  });
}