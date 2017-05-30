// Authors: Leon

/********** application configuration **********/
var config = {
    apiKey: "AIzaSyAJi4sI7b5M9IkhEfLvn9OJ7TbRkNv-RE8",
    authDomain: "birchaquarium-fd036.firebaseapp.com",
    databaseURL: "https://birchaquarium-fd036.firebaseio.com/",
    storageBucket: "birchaquarium-fd036.appspot.com"
};
//initialize application
firebase.initializeApp(config);
// Get a reference to the database service
var database = firebase.database();
