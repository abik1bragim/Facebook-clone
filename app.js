const Opentn = document.querySelector(".btn_register")
const loginRegister = document.querySelector(".login_register")
const Register = document.querySelector(".register")
const form = document.querySelector("form")
const Xmark = document.querySelector(".fa-xmark")

form.addEventListener("submit", facebook)


// const Open = () => {
//    loginRegister.classList.add("open")
//    loginRegister.className = "login_register_open"
// }
// const Close = () => {
//    loginRegister.classList.remove("open")
//    // Xmark.style.display = "block"
//    loginRegister.className = "login_register"

// }

function facebook(e) {
   e.preventDefault()
   console.log(e);
   const Email = e.target[0].value
   const Password = e.target[1].value
   console.log(Email);
   console.log(Password);


   // const locEmail = localStorage.getItem("name", Email)
   // const locPassword = localStorage.getItem("password", Email)

   // const localName = localStorage.getItem("name")
   const localEmail = localStorage.getItem("email")
   const localPassword = localStorage.getItem("password")

   if (localEmail === Email && localPassword === Password) {
       location.replace("/facebook.html")
   } else if(localEmail ==="") {
       alert("Email kriting")
   }else if(localPassword === ""){
      alert("Password kiriting")
   }else{
      location.replace("/register.html")
   }
   // const localData = localStorage.getItem("name")

}