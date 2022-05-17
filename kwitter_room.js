const firebaseConfig = {
    apiKey: "AIzaSyD62gkCRYNxePI4DSPeqaQBOpVzA4m-f8w",
    authDomain: "chat-friends-d3e6e.firebaseapp.com",
    databaseURL: "https://chat-friends-d3e6e-default-rtdb.firebaseio.com",
    projectId: "chat-friends-d3e6e",
    storageBucket: "chat-friends-d3e6e.appspot.com",
    messagingSenderId: "616861610555",
    appId: "1:616861610555:web:9370558da99aecb52c221e",
    measurementId: "G-5WGJKTT9VC"
  };

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";


function add_room()
{
Room=document.getElementById().value;
firebase.database().ref("/").child(Room).update({
purpose:"adding_room_name"
});

localStorage.setItem("room_name",Room);
window.location="kwitter_page.html";
}


function getData()
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room_name" + Room_names);
     row="<div  class='room name' id="+Room_names+" onclick='redirect_to_room_name(this id)'>#" + Room_names + "</div> <hr>";
     document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirect_to_room_name(name)
{
    console.log(name);
    localStorage.setItem("Room_name",name);
    window.location="kwitter_page.html";
          
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");


}