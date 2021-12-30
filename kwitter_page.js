// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB-lsKJQdi9rqQe6FwDwsksa1ImJnxUEC4",
  authDomain: "kwitter-messages-413c1.firebaseapp.com",
  databaseURL: "https://kwitter-messages-413c1-default-rtdb.firebaseio.com",
  projectId: "kwitter-messages-413c1",
  storageBucket: "kwitter-messages-413c1.appspot.com",
  messagingSenderId: "525635844264",
  appId: "1:525635844264:web:6e90f4129de318f4d7aa9d"
};
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name")
      room_name = localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0    
      });
      document.getElementById("msg").value = "";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
    }