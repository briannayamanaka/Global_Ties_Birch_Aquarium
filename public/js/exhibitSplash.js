/*jslint browser: true*/
/*global $, jQuery*/



$(document).ready(function () {

    /********** application configuration **********/
    var config = {
        apiKey: "AIzaSyAJi4sI7b5M9IkhEfLvn9OJ7TbRkNv-RE8",
        authDomain: "birchaquarium-fd036.firebaseapp.com",
        databaseURL: "https://birchaquarium-fd036.firebaseio.com/",
        storageBucket: "birchaquarium-fd036.appspot.com"
    };
    //initialize application
    firebase.initializeApp(config);

    "use strict";
    var scanned = false,
        scannedInput = [];

    $(window).keypress(function (scanEvent) {

        // check to make sure input is a number 0 - 9 in ASCII
        if (scanEvent.which >= 48 && scanEvent.which <= 57) {

            // push number to array
            scannedInput.push(String.fromCharCode(scanEvent.which));
        }

        setTimeout(function () {

            // if length is equivalent to proper length, add the string to userID variable
            if (scannedInput.length === 10) {

                // store array into string
                var userID = scannedInput.join("");
                scanned = true;
                $("#userId").val(userID);
                console.log("user: " + userID);


                if (scanned) {
                    console.log("scanned");
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

                        //stores user info aka RFID locally in web browser for persistent data
                        window.localStorage.setItem('name', name);
                        window.localStorage.setItem('avatar', avatar);
                        window.localStorage.setItem('age', age);
                        window.localStorage.setItem('language', language);

                    });

                    //jump to exhibit_terminal page
                    window.location.href = "../html/exhibit_terminal.html";
                }
            }

            // clear array
            scannedInput = [];

        }, 5000);
    });
});
