function signup() {
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password).then(() => {
        alert("Signup success");
        window.location.href= "login.html";
    })
    .catch((error) => 
    {
        alert(error.message);
    });
}
function login() {
    let email= document.getElementById("email").value;
    let password= document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password).then(() =>
    {
        alert("Login Success");
        window.location.href= "home.html";
    });
}