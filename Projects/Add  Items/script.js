
    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
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
    import { getDatabase, set, ref, remove, update, child, get,push }
      from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
  const database=getDatabase(app);
  let dataInside=ref(database,"Breads")
  let Bread=document.getElementById("Bread");
  let addCart=document.getElementById("addCart");
  let UlItems=document.getElementById("UlItems");
  

  addCart.addEventListener("click",function(){
    let valueInput=Bread.value;
    push(dataInside,valueInput);
   
    UlItems.innerHTML+=`<li> ${valueInput} </li`
   Bread.value="";
   
    
 
   
  })
  