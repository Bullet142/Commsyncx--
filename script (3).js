
const firebaseConfig = {
  apiKey: "AIzaSyAIXd4mn4hwL3YL3rIRe86laa3G6dvSrTA",
  authDomain: "commsyncx.firebaseapp.com",
  projectId: "commsyncx",
  storageBucket: "commsyncx.firebasestorage.app",
  messagingSenderId: "440481642803",
  appId: "1:440481642803:web:984ccec73cc3d373d46646",
  measurementId: "G-4F6NP9Y2WV"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(user => showChat(user.user))
    .catch(err => alert(err.message));
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(user => showChat(user.user))
    .catch(err => alert(err.message));
}

function googleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => showChat(result.user))
    .catch(err => alert(err.message));
}

function logout() {
  auth.signOut().then(() => {
    document.getElementById("chat-screen").style.display = "none";
    document.getElementById("login-screen").style.display = "block";
  });
}

function showChat(user) {
  document.getElementById("username").innerText = user.email;
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("chat-screen").style.display = "flex";
}

auth.onAuthStateChanged(user => {
  if (user) showChat(user);
});
