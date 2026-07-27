function login(){

const id=document.getElementById("studentID").value;
const password=document.getElementById("password").value;

const users=JSON.parse(localStorage.getItem("users"));

const user=users.find(u=>u.id===id && u.password===password);

if(user){

localStorage.setItem("currentUser",JSON.stringify(user));

alert("Login Successful");

if(user.role==="student"){

window.location="student-dashboard.html";

}

else if(user.role==="lecturer"){

window.location="lecturer-dashboard.html";

}

else{

window.location="admin-dashboard.html";

}

}

else{

alert("Invalid Student ID or Password");

}

}
