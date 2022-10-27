const form = document.querySelector("form")

form.addEventListener("submit", facebook)


function facebook(e) {
    e.preventDefault()

    const Username = e.target[0].value
    const Familiya = e.target[1].value
    const Email = e.target[2].value
    const Password = e.target[3].value

    if (Username === "") {
        alert("Username ni to'ldiring")
    } else if(Familiya === ""){
        alert("Familiyani ni to'ldiring")
    } else if(Email === ""){
        alert("Email ni to'ldiring")
    } else if(Password === ""){
        alert("Passowrd ni to'ldiring")
    }
     else {
        const localName = localStorage.setItem("name", Username)
        const localFamiliya = localStorage.setItem("familiya", Familiya)
        const localEmail = localStorage.setItem("email", Email)
        const localPassword = localStorage.setItem("password", Password)

        const localData = localStorage.getItem("password")
        location.replace("/index.html")

    }
}