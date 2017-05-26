window.onload = function() {
    var a = {
        apiKey: "AIzaSyAJi4sI7b5M9IkhEfLvn9OJ7TbRkNv-RE8",
        authDomain: "birchaquarium-fd036.firebaseapp.com",
        databaseURL: "https://birchaquarium-fd036.firebaseio.com",
        projectId: "birchaquarium-fd036",
        storageBucket: "birchaquarium-fd036.appspot.com",
        messagingSenderId: "33111057118"
    };
    firebase.initializeApp(a);
    var b = document.getElementById("email"),
        c = document.getElementById("password"),
        d = document.getElementById("submit"),
        e = document.getElementById("emailPop"),
        f = document.getElementById("passPop");
    firebase.auth().signOut(), d.addEventListener("click", a => {
        const d = b.value,
        g = c.value;
    null != e && null != f && (e.style.visibility = "hidden", e.style.display = "none", f.style.visibility = "hidden", f.style.display = "none"), "" == d && (e.style.visibility = "visible", e.style.display = "block"), g.length < 6 && (f.innerHTML = "Invalid Password <br> Must be 6 characters or more", f.style.visibility = "visible", f.style.display = "block");
    const h = firebase.auth(),
        i = h.signInWithEmailAndPassword(d, g);
    i.catch(function(a) {
        "auth/email-already-in-use" == a.code && (f.innerHTML = "Email already in use. Click Sign In link below!", f.style.visibility = "visible", f.style.display = "block"), "auth/invalid-email" == a.code && (e.innerHTML = "Invalid Email", e.style.visibility = "visible", e.style.display = "block"), "auth/wrong-password" == a.code && (f.innerHTML = "Incorrect Password", f.style.visibility = "visible", f.style.display = "block"), "auth/user-not-found" == a.code && (f.innerHTML = "Incorrect Username and or Password", f.style.visibility = "visible", f.style.display = "block"), console.log(a.code)
    })
}), firebase.auth().onAuthStateChanged(a => {
        a ? (console.log(a), window.location = "../html/employee.html") : console.log("not logged in")
    })
};