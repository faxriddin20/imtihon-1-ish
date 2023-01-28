const wrapper = document.querySelector(".wrapper");

function renderInformations(){
    fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    console.log(data);
    data.forEach(el => {
        const {image,title,price,description,rating} = el;
        wrapper.innerHTML += `<div class="card w-25 ">
            <div class="card-header">
                <img src="${image}" height="100px">
            </div>
                <div class="card-body">
                    <p>Price: ${price}$</p>
                    <p>${description}</p>
                    <p>${title}</p>
                    <p>Count: ${rating.count}</p>
                    <p>Rate: ${rating.rate}</p>
                </div>
                <div class="card-footer text-end"><img src="./images/trash-can.png" height="30" class="trash"></div>
        </div>`
    });
})

}