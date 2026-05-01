let params= new URLSearchParams(window.location.search);
let id= params.get("id");
let product;
db.collection("products").doc(id).get().then((doc) => 
{
    product= doc.data();
    document.getElementById("name").innerText= product.name;
    document.getElementById("image").src= product.image;
    document.getElementById("price").innerText= "रु" + product.price;
});
function addToCart() {
    let cart= JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}