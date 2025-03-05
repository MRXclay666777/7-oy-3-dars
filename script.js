
const productList = document.querySelector("#list");
const myProductsList = document.querySelector("#my-products");
const myProductsButton = document.querySelector("#my-products-btn");
let myProducts = [];


const totalPriceElement = document.createElement("div");
totalPriceElement.className = "text-lg font-bold mt-4";
totalPriceElement.textContent = "Total Price: $0";
myProductsList.appendChild(totalPriceElement);

function renderProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "w-[300px] bg-gray-200 rounded p-5 flex flex-col items-center";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="w-[100px] h-[100px] object-cover mb-2">
            <h2 class="text-lg font-bold">${product.title}</h2>
            <p class="text-sm">${product.description}</p>
            <p class="text-md font-semibold">$${product.price}</p>
            <button class="order-btn bg-blue-500 text-white px-4 py-2 mt-2 rounded">Order</button>
        `;
        
        const orderButton = productCard.querySelector(".order-btn");
        orderButton.addEventListener("click", () => orderProduct(product));

        productList.appendChild(productCard);
    });
}


function orderProduct(product) {
    alert("Your product was successfully ordered!");
    myProducts.push(product);
    renderMyProducts();
}

function renderMyProducts() {
    myProductsList.innerHTML = "";
    myProducts.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.className = "w-[300px] bg-green-200 rounded p-5 flex flex-col items-center";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="w-[80px] h-[80px] object-cover mb-2">
            <h2 class="text-md font-bold">${product.title}</h2>
            <p class="text-md font-semibold">$${product.price}</p>
            <button class="remove-btn bg-red-500 text-white px-4 py-2 mt-2 rounded">Remove</button>
        `;
        
        const removeButton = productCard.querySelector(".remove-btn");
        removeButton.addEventListener("click", () => removeProduct(index));

        myProductsList.appendChild(productCard);
    });


    myProductsList.appendChild(totalPriceElement);
    updateTotalPrice();
}

function removeProduct(index) {
    myProducts.splice(index, 1);
    renderMyProducts();
}


function updateTotalPrice() {
    const totalPrice = myProducts.reduce((sum, product) => sum + product.price, 0);
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}


myProductsButton.addEventListener("click", () => {
    myProductsList.classList.toggle("hidden");
});


renderProducts();
