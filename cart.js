let cart= JSON.parse(localStorage.getItem("cart")) || [];
let div= document.getElementById("cart");
let total= 0;
cart.forEach((item) => 
{
    total+= item.price;
    div.innerHTML+= `<p>${item.name} - रु${item.price}</p>`;
});
document.getElementById("total").innerText= "Total: रु" + total;
function checkout() {
    if(!auth.currentUser)
    {
        alert("Login first");
        window.location.href= "login.html";
        return;
    }
    db.collection("orders").add({
        userId: auth.currentUser.uid,
        items: cart,
        total: total,
        createdAt: new Date()}).then(() => {
            alert("Order placed");
            localStorage.removeItem("cart");
            window.location.href= "home.html";
        });
    }