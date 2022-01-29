//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaLJ2ecbTqyoJtHFkfDNAX269y85FrcxA",
    authDomain: "kwitter-3c38f.firebaseapp.com",
    databaseURL: "https://kwitter-3c38f-default-rtdb.firebaseio.com",
    projectId: "kwitter-3c38f",
    storageBucket: "kwitter-3c38f.appspot.com",
    messagingSenderId: "718751684495",
    appId: "1:718751684495:web:90c30b667f14496cfeddfa"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

 
   user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name"); 

  function send()
  {
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
               name:user_name,
              like : 0,
              message : msg
        });

      document.getElementById("msg").value="";
  }
  


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();