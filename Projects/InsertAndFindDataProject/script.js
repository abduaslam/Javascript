
  
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAxUV7uILtNGjzpXHOykh13lGOQuQG_9mo",
      authDomain: "abdu-932e9.firebaseapp.com",
      projectId: "abdu-932e9",
      storageBucket: "abdu-932e9.firebasestorage.app",
      messagingSenderId: "748357225149",
      appId: "1:748357225149:web:2d334ef3a54565455cc5d4"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    import { getDatabase, set, ref, remove, update, child, get }
      from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
    const db = getDatabase();
    // get all inputs
    let enterName = document.getElementById('enterName');
    let enterAge = document.getElementById('enterAge');
    let enterId = document.getElementById('enterId');
    let findId = document.getElementById('findId');
 

    let findName=document.getElementById('findName');
    let findAge=document.getElementById("findAge");
    //buttons
    let insertBtn = document.getElementById('insert');
    let updateBtn = document.getElementById('update');
    let removeBtn = document.getElementById('remove');
    let findBtn = document.getElementById('findBtn');
   
    //functions
    function insertData(){
  set(ref(db,"people/"+enterId.value) , {
    Name:enterName.value,
    Age:enterAge.value,
    ID:enterId.value
  })
  .then(()=>{
    alert('the Data insered seccsussfuly')
  })
  .catch((error)=>{
    alert(error);
  })
    }



    function updateData(){
      
    }
    function removeData(){
      
    }
    function findData(){
     const refDb=ref(db);
     get(child(refDb,'people/'  +findId.value))
     .then((dataGet)=>{
      if(dataGet.exists){
     findName.innerHTML=  'Name :' + dataGet.val().Name ;
     findAge.innerHTML="Age :" + dataGet.val().Age;
         }
         else{
          alert("the data not found");
         }
     })
     .catch((error)=>{
      alert(error);
     })
    }
   // even listener for all buttons
    insertBtn.addEventListener("click",insertData);
    findBtn.addEventListener('click',findData);
    updateBtn.addEventListener('click',updateData);
    removeBtn.addEventListener("click",removeData);
