//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCQbS2wvbg2HFUnzelYimsjJbUMmLJMj2k",
    authDomain: "kwitter-50816.firebaseapp.com",
    databaseURL: "https://kwitter-50816-default-rtdb.firebaseio.com",
    projectId: "kwitter-50816",
    storageBucket: "kwitter-50816.appspot.com",
    messagingSenderId: "242423543365",
    appId: "1:242423543365:web:f9c2ac5d829a5d1434952c",
    measurementId: "G-QGT4M3F9VT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  // Initialize Firebase
  
  
  user_name = localStorage.getItem("Username");
  console.log(user_name);
  document.getElementById("welcome").innerHTML =  "Welcome "+ user_name +"!";

  function add_room(){

  room_name = document.getElementById("new_room").value;
  
  firebase.database().ref('/').child(room_name).update({ purpose : "Addroom"
  
  
});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirectToRoomName(name){
  console.log("name");
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}

  

  