// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB9iLtubwkriVDotP8XkVLCczgBzzjMdjo",
      authDomain: "kwitter-rooms-721de.firebaseapp.com",
      databaseURL: "https://kwitter-rooms-721de-default-rtdb.firebaseio.com",
      projectId: "kwitter-rooms-721de",
      storageBucket: "kwitter-rooms-721de.appspot.com",
      messagingSenderId: "774632691883",
      appId: "1:774632691883:web:adccb9ca1c5c7ed401bfee"
};
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
      window.location = "index.html";
  }