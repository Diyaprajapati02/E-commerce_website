db.collection("products").get().then((data) => {
    let div= document.getElementById("products");
    data.forEach((doc) => 
    {
        let p= doc.data();
        div.innerHTML += `<div>
                          <h3>${p.name}</h3>
                          <img src="${p.image}" width="200">
                          <p>${p.price}</p>
                          <a href= "product.html?id=${doc.id}">View</a>
                          </div>
                          `;
    });
});