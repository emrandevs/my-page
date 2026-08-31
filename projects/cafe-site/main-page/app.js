function deleteSpace (item){
    const arraytext =[];
    for(let i =0;i<item.length;i++){
        if(item[i] !== ' '){
            arraytext.push(item[i]);
        }
    }
    return arraytext.join('');
}
const menu =[
    {name:"Cappuccino",price:3,image:"../picture/Cappuccino.jpg",page:"../page__1/index.html"},
    {name:"Cortado",price:3,image:"../picture/Cortado.jpg",page:"../page__2/index.html"},
    {name:"Caffè macchiato",price:3,image:"../picture/Caffè macchiato.jpg",page:"../page__3/index.html"},
    {name:"Flat white",price:3,image:"../picture/Flat white.jpg",page:"../page__4/index.html"},
    {name:"Latte",price:3,image:"../picture/Latte..jpg",page:"../page__5/index.html"},
    {name:"Affogato",price:3,image:"../picture/Affogato.jpg",page:"../page__6/index.html"},
    {name:"Mocha",price:3,image:"../picture/Mocha.jpg",page:"../page__7/index.html"},
    {name:"Espresso",price:3,image:"../picture/Espresso.jpg",page:"../page__8/index.html"},
    {name:"Americano",price:3,image:"../picture/Americano.jpg",page:"../page__9/index.html"},
];
const shoppingCard = [];
const containerMenu =document.querySelector(".container");
const shoppingBtn =document.querySelector(".shopping-card");
const selectedList =document.querySelector(".selected-list");

function addProductToList(){
    shoppingCard.forEach(function(product){
        selectedList.append(product);
    })
}

menu.forEach(function(item){
    const link =document.createElement("a");
    link.href =item.page;

    const box =document.createElement("div");
    box.classList.add("box");
    box.classList.add(`${deleteSpace(item.name)}`);
    link.append(box);

    const image =document.createElement("img");
    image.src =item.image;
    image.alt =item.name;
    image.classList.add("img-box");

    const imgContainer =document.createElement("div");
    imgContainer.classList.add("img-container");
    imgContainer.append(image);
    box.append(imgContainer);
    
    const line =document.createElement("div");
    line.classList.add("line-box");
    box.append(line);

    const caption =document.createElement("div");
    caption.classList.add("caption");

    const nameBox =document.createElement("p");
    nameBox.classList.add("name-box");
    nameBox.innerHTML =item.name;
    caption.append(nameBox);

    const price = document.createElement("p");
    price.classList.add("price");
    price.innerHTML =`${item.price}$`;
    caption.append(price);

    box.append(caption);
    
    const btnContainer =document.createElement("div");
    btnContainer.classList.add("btns-container");
    box.append(btnContainer);

    const addBtn =document.createElement("button");
    addBtn.classList.add("add");
    addBtn.innerHTML="Add to card";
    btnContainer.append(addBtn);

    const numberInput =document.createElement("input");
    numberInput.classList.add("numberInput");
    numberInput.readOnly =true;
    btnContainer.append(numberInput);

    const minusBtn =document.createElement("button");
    minusBtn.classList.add("minusBtn");
    minusBtn.innerHTML ="-";
    btnContainer.append(minusBtn);
    containerMenu.append(link);
});
let isshoppingListOpen = false;
shoppingBtn.addEventListener("click",function(e){
    if(isshoppingListOpen === false){
        selectedList.style.visibility = "visible";
        selectedList.style.opacity = 1;
        isshoppingListOpen = true;
    }else{
        selectedList.style.visibility = "hidden";
        selectedList.style.opacity = 0;
        isshoppingListOpen = false;
    }
})

const addBtns =document.querySelectorAll(".add");
const minusBtns =document.querySelectorAll(".minusBtn");

addBtns.forEach(function(item){
    item.addEventListener("click",function(e){
        e.preventDefault();
        item.classList.remove("add");
        item.classList.add("addBtn");
        item.innerHTML ="+";

        item.parentElement.querySelector(".minusBtn").style.display ="flex";
        item.parentElement.querySelector(".minusBtn").addEventListener("click",function(e){
            e.preventDefault();
        })
        item.parentElement.querySelector(".numberInput").style.display ="flex";
        item.parentElement.querySelector(".numberInput").addEventListener("click",function(e){
            e.preventDefault();
        })

        item.parentElement.querySelector(".numberInput").value++;

        clickedBox=e.target.parentElement.parentElement;

        let clickedBoxIndex;
        switch(clickedBox.classList[1]) {
            case "Cappuccino":
                clickedBoxIndex = 0;
                break;
            case "Cortado":
                clickedBoxIndex=1;
                break;
            case "Caffèmacchiato":
                clickedBoxIndex=2;
                break;
            case "Flatwhite":
                clickedBoxIndex=3;
                break;
            case "Latte":
                clickedBoxIndex=4;
                break;
            case "Affogato":
                clickedBoxIndex=5;
                break;
            case "Mocha":
                clickedBoxIndex=6;
                break;
            case "Espresso":
                clickedBoxIndex=7;
                break;
            case "Americano":
                clickedBoxIndex=8;
                break;
            default :
                -1;
            break;
        }
        

        const selectedItem =document.createElement("div");
        selectedItem.classList.add("selected-item");
        selectedItem.classList.add(`${item.parentElement.parentElement.classList[1]}`);
        
        const selectedItemImg =document.createElement("img");
        selectedItemImg.classList.add("selected-item_img");
        selectedItemImg.src =menu[clickedBoxIndex].image;
        selectedItem.append(selectedItemImg);

        const selectedItemTitle =document.createElement("span");
        selectedItemTitle.classList.add("selected-item_title");
        selectedItemTitle.innerHTML =menu[clickedBoxIndex].name;

        const selectedItemTitleContainer =document.createElement("div");
        selectedItemTitleContainer.classList.add("selected-item_title-container");
        selectedItemTitleContainer.append(selectedItemTitle)
        selectedItem.append(selectedItemTitleContainer);

        const selectedItemPrice =document.createElement("span");
        selectedItemPrice.classList.add("selected-item_price");
        selectedItemPrice.innerHTML = `${menu[clickedBoxIndex].price}$`;
        selectedItem.append(selectedItemPrice);

        const selectedItemNumber = document.createElement("span");
        selectedItemNumber.classList.add("selected-item_number");
        selectedItemNumber.innerHTML = +item.parentElement.querySelector(".numberInput").value;
        selectedItem.append(selectedItemNumber);

        //push selected item in shopping card array
        let isItemExist = shoppingCard.some(function(item){
            return item.classList[1] === selectedItem.classList[1];
        })

        let indexOfItemExist = -1;
        if(isItemExist){
            indexOfItemExist=shoppingCard.findIndex(function(item){
                return item.classList[1] === selectedItem.classList[1];
            })
            let NumberOfSelectedItem=+shoppingCard[indexOfItemExist].children[3].innerHTML+1; 
            shoppingCard[indexOfItemExist].children[3].innerHTML=NumberOfSelectedItem;
        }else{
            shoppingCard.push(selectedItem)
        }

        addProductToList();
    });
})
minusBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){

        let numberInput =btn.parentElement.querySelector(".numberInput");
        if(Number(numberInput.value) !== 0){
            let inputNumber =Number(numberInput.value);
            inputNumber--;
            numberInput.value = String(inputNumber);
        }if(Number(numberInput.value) === 0){
            btn.parentElement.querySelector(".addBtn").classList.remove("addBtn");
            btn.parentElement.firstChild.classList.add("add");
            btn.parentElement.firstChild.innerHTML ="Add to card";

            btn.parentElement.querySelector(".minusBtn").style.display ="none";
            btn.parentElement.querySelector(".numberInput").style.display ="none";
        }

        let selectedBoxIndex =shoppingCard.findIndex(function(item){
            return btn.parentElement.parentElement.classList[1] === item.classList[1];
        })
        let selectedBoxNumber =+shoppingCard[selectedBoxIndex].children[3].innerHTML;
       if(selectedBoxNumber === 1){
            shoppingCard.splice(selectedBoxIndex, 1);
            selectedList.children[selectedBoxIndex].remove();
        }else{
            shoppingCard[selectedBoxIndex].children[3].innerHTML=selectedBoxNumber-1;
        }
        addProductToList();
    })
})

