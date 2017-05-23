/* Authors: Proud, Joyce*/

// Set the configuration for your app
var config = {
  apiKey: "AIzaSyAJi4sI7b5M9IkhEfLvn9OJ7TbRkNv-RE8",
  authDomain: "birchaquarium-fd036.firebaseapp.com",
  databaseURL: "https://birchaquarium-fd036.firebaseio.com/",
  storageBucket: "birchaquarium-fd036.appspot.com"
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

/* Write an object to the Firebase database under the database Employees tree
* with the key idInput and the values idInput and pwdInput.
* Example: writeToFirebase(42, 'pwd123')
*   will store under key 42 an object containing id 42, paswword pwd123
*   This object is then stored at https://birchaquarium-fd036.firebaseio.com/42 */
function writeToFirebase(emailInput, pwdInput) {

    // Write the object under the database root "users"
    // Datbase schema: RFID tree-->user object that contains links id with name and age group
    database.ref("Employees/" + emailInput).set({
        email: emailInput,
        password: pwdInput
    });
}


// This function will get called when the button is clicked
function login() {

    //Get values from the text boxes
    var emailText = document.getElementById("emailInput").value;
    var nameText = document.getElementById("pwdInput").value;

    // debugging (press Ctrl+shift+I) for console
    console.log("update?")

    // Write user object to Firebase under the key rfidText
    writeToFirebase(emailText, nameText);

    // User should be created within Firebase "authentication" tab
    firebase.auth().createUserWithEmailAndPassword(emailText, pwdText).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}
