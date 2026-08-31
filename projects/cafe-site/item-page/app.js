const productTitle = document.querySelector(".product__title");
const productIngredients = document.querySelector(".product__Ingredients");
const productPrice = document.querySelector(".product__price");
const productImg = document.querySelector(".product__img");
const boxContainer = document.querySelector(".box-container");

let menu = [];

const showItem = (async() => {
    // get menu
    const response = await fetch("../DB.json");
    menu = await response.json();

    // find selected item
    const itemId = +location.search.slice(1);
    const selectedItem = menu.find( item => item.id === itemId );
    
    productTitle.innerHTML = `${selectedItem.name}`;
    productIngredients.innerHTML = `ingredient : ${selectedItem.ingredient}`;
    productPrice.innerHTML = `price : ${selectedItem.price}$`;
    productImg.src = selectedItem.image;
    
    // suggestions
    let randomNums = [];
    while(randomNums.length !== 3){
        let randomNum = Math.floor(Math.random() * 9);
        if(!randomNums.includes(randomNum)){
            randomNums.push(randomNum);
        };
    };
    
    randomNums.forEach((item) => {
        boxContainer.insertAdjacentHTML("beforeend",`
            <a href="index.html?${item}">
                <div class="box">
                    <img src="${menu[item].image}" alt="${menu[item].name}" class="img-box">
                    <div class="line-box"></div>
                    <div class="caption">
                        <p class="name-box">${menu[item].name}</p>
                        <p class="price">${menu[item].price}$</p>
                    </div>
                </div>
            </a> 
        `);
    });
    
    
})();
