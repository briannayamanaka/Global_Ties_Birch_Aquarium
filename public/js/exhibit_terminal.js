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

var userID = window.localStorage.getItem('userID');
console.log("RFID: " + userID);

// Read from Firebase database
firebase.database().ref('/RFID/' + userID).once('value').then(function (snapshot) {
    // To get a specific field,
    // i.e. name, use `snapshot.val().name`
    var name = snapshot.val().name;
    var avatar = snapshot.val().avatar;
    var age = snapshot.val().ageGroup;
    var language = snapshot.val().language;

    console.log("Name: " + name);
    console.log("Avatar: " + avatar);
    console.log("Age: " + age);
    console.log("Language: " + language);

    var pic = null;
    switch(avatar) {
      case 'Bea the Butterflyfish':
        pic = "../img/avatars/butterflyfish.png";
        break;
      case 'Goldie the Goldfish':
        pic = "../img/avatars/goldfish1.png";
        break;
      case 'George the Goldfish':
        pic = "../img/avatars/goldfish2.png";
        break;
      case 'Pearl the Perch':
        pic = "../img/avatars/perch.png";
        break;
      case 'Sally the Seahorse':
        pic = "../img/avatars/sea-horse1.png";
        break;
      case 'Sam the Seahorse':
        pic = "../img/avatars/sea-horse2.png";
        break;
      case 'Tammy the Turtle':
        pic = "../img/avatars/sea-turtle.png";
        break;
      case 'Sophie the Shark':
        pic = "../img/avatars/shark.png";
    }

    // Update greeting text with name grabbed from Firebase data
    document.getElementById("greeting").innerHTML = "Hello " + name + "!";
    document.getElementById("avatarImg").src = pic;
});
