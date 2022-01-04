document.getElementById("name").innerHTML="Welcome "+localStorage.getItem("username");
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDpMNRi1nOa_bm9HWrswNUQyq4ghompaKU",
      authDomain: "einstein-ljur.firebaseapp.com",
      databaseURL: "https://einstein-ljur-default-rtdb.firebaseio.com",
      projectId: "einstein-ljur",
      storageBucket: "einstein-ljur.appspot.com",
      messagingSenderId: "46289300521",
      appId: "1:46289300521:web:b96d458f6bd6f2f53a4038",
      measurementId: "G-KJ2KM2QFKD"
    };
    firebase.initializeApp(firebaseConfig)  ;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addUser(){
      username=localStorage.getItem("username");
      firebase.database().ref("/").child(username).update({
            purpose:"adding user",
            food:"biryani"
            
      })
}

function logout(){
      localStorage.setItem("username","");
window.location="index.html";
}
