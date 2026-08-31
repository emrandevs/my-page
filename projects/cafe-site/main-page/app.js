function deleteSpace(item) {
    const arraytext = [];

    for (let i = 0; i < item.length; i++) {
        if (item[i] !== ' ') {
            arraytext.push(item[i]);
        }
    }

    return arraytext.join('');
}

let menu = [];

// items array
const shoppingCard = [];

const containerMenu = document.querySelector(".container");
const shoppingBtn = document.querySelector(".shopping-card");
const selectedList = document.querySelector(".selected-list");

function addProductToList() {
    selectedList.innerHTML = "";

    shoppingCard.forEach(function (product) {
        selectedList.append(product);
    });
}

const loadingDB = (async () => {
    const response = await fetch("../DB.json");
    const data = await response.json();

    menu = data;

    menu.forEach(function (item) {
        containerMenu.insertAdjacentHTML("beforeend", `
            <a href="../item-page/index.html?${item.id}">
                <div class="box ${deleteSpace(item.name)}">
                    <div class="img-container">
                        <img src="${item.image}" alt="${item.name}" class="img-box">
                    </div>

                    <div class="line-box"></div>

                    <div class="caption">
                        <p class="name-box">${item.name}</p>
                        <p class="price">${item.price}$</p>
                    </div>

                    <div class="btns-container">
                        <button class="add">Add to cart</button>
                        <input class="numberInput" readonly />
                        <button class="minusBtn">-</button>
                    </div>
                </div>
            </a>
        `);
    });
})();

// shopping list flag
let isshoppingListOpen = false;

shoppingBtn.addEventListener("click", function () {
    if (isshoppingListOpen === false) {
        selectedList.style.visibility = "visible";
        selectedList.style.opacity = 1;
        isshoppingListOpen = true;
    } else {
        selectedList.style.visibility = "hidden";
        selectedList.style.opacity = 0;
        isshoppingListOpen = false;
    }
});

// ---- helper: map box class name to menu index ----
function getMenuIndex(className) {
    switch (className) {
        case "Cappuccino": return 0;
        case "Cortado": return 1;
        case "Caffèmacchiato": return 2;
        case "Flatwhite": return 3;
        case "Latte": return 4;
        case "Affogato": return 5;
        case "Mocha": return 6;
        case "Espresso": return 7;
        case "Americano": return 8;
        default: return -1;
    }
}

function handleAddClick(item, e) {
    e.preventDefault();
    e.stopPropagation();

    item.classList.remove("add");
    item.classList.add("addBtn");
    item.innerHTML = "+";

    const box = item.parentElement;

    box.querySelector(".minusBtn").style.display = "flex";
    box.querySelector(".numberInput").style.display = "flex";

    box.querySelector(".numberInput").value++;

    const clickedBox = box.parentElement;
    const clickedBoxIndex = getMenuIndex(clickedBox.classList[1]);

    const selectedItem = document.createElement("div");

    selectedItem.classList.add(
        "selected-item",
        clickedBox.classList[1]
    );

    // Image
    const selectedItemImg = document.createElement("img");
    selectedItemImg.classList.add("selected-item_img");
    selectedItemImg.src = menu[clickedBoxIndex].image;

    selectedItem.append(selectedItemImg);

    // Title
    const selectedItemTitle = document.createElement("span");
    selectedItemTitle.classList.add("selected-item_title");
    selectedItemTitle.innerHTML = menu[clickedBoxIndex].name;

    const selectedItemTitleContainer = document.createElement("div");
    selectedItemTitleContainer.classList.add(
        "selected-item_title-container"
    );

    selectedItemTitleContainer.append(selectedItemTitle);
    selectedItem.append(selectedItemTitleContainer);

    // Price
    const selectedItemPrice = document.createElement("span");
    selectedItemPrice.classList.add("selected-item_price");
    selectedItemPrice.innerHTML = `${menu[clickedBoxIndex].price}$`;

    selectedItem.append(selectedItemPrice);

    // Number
    const selectedItemNumber = document.createElement("span");
    selectedItemNumber.classList.add("selected-item_number");
    selectedItemNumber.innerHTML =
        +box.querySelector(".numberInput").value;

    selectedItem.append(selectedItemNumber);

    // Check if item already exists
    const isItemExist = shoppingCard.some(function (cartItem) {
        return cartItem.classList[1] === selectedItem.classList[1];
    });

    if (isItemExist) {
        const indexOfItemExist = shoppingCard.findIndex(function (cartItem) {
            return cartItem.classList[1] === selectedItem.classList[1];
        });

        const numberOfSelectedItem =
            +shoppingCard[indexOfItemExist].children[3].innerHTML + 1;

        shoppingCard[indexOfItemExist].children[3].innerHTML =
            numberOfSelectedItem;

    } else {
        shoppingCard.push(selectedItem);
    }

    addProductToList();
}

function handleMinusClick(btn, e) {
    e.preventDefault();
    e.stopPropagation();

    const numberInput =
        btn.parentElement.querySelector(".numberInput");

    let inputNumber = Number(numberInput.value);

    if (inputNumber !== 0) {
        inputNumber--;
        numberInput.value = String(inputNumber);
    }

    // If number becomes zero
    if (Number(numberInput.value) === 0) {
        const addBtn = btn.parentElement.querySelector(".addBtn");

        addBtn.classList.remove("addBtn");
        addBtn.classList.add("add");

        addBtn.innerHTML = "Add to cart";

        btn.parentElement.querySelector(".minusBtn").style.display = "none";
        btn.parentElement.querySelector(".numberInput").style.display = "none";
    }

    const selectedBoxIndex = shoppingCard.findIndex(function (cartItem) {
        return btn.parentElement.parentElement.classList[1] ===
            cartItem.classList[1];
    });

    if (selectedBoxIndex === -1) return;

    const selectedBoxNumber =
        +shoppingCard[selectedBoxIndex].children[3].innerHTML;

    if (selectedBoxNumber === 1) {
        shoppingCard.splice(selectedBoxIndex, 1);

        if (selectedList.children[selectedBoxIndex]) {
            selectedList.children[selectedBoxIndex].remove();
        }
    } else {
        shoppingCard[selectedBoxIndex].children[3].innerHTML =
            selectedBoxNumber - 1;
    }

    addProductToList();
}

// ---- Event delegation ----
containerMenu.addEventListener("click", function (e) {

    const button = e.target.closest("button");

    if (button) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Add to cart / +
    const addBtn = e.target.closest(".add, .addBtn");

    if (addBtn) {
        handleAddClick(addBtn, e);
        return;
    }

    // Minus
    const minusBtn = e.target.closest(".minusBtn");

    if (minusBtn) {
        handleMinusClick(minusBtn, e);
        return;
    }

    // Number input
    const numberInput = e.target.closest(".numberInput");

    if (numberInput) {
        e.preventDefault();
        e.stopPropagation();
        return;
    }
});