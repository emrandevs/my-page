let turn ='cross';
let winner ="";
const boxes =document.querySelectorAll('.box');
const A1 = document.querySelector('.A1');
const A2 = document.querySelector('.A2');
const A3 = document.querySelector('.A3');
const B1 = document.querySelector('.B1');
const B2 = document.querySelector('.B2');
const B3 = document.querySelector('.B3');
const C1 = document.querySelector('.C1');
const C2 = document.querySelector('.C2');
const C3 = document.querySelector('.C3');
const crossBox=document.querySelector('.cross-box');
const circleBox=document.querySelector('.circle-box');
const crossBoxImg=document.querySelector('.cross-box img');
const circleBoxImg=document.querySelector('.circle-box img');
const winCard =document.querySelector('.win-card');
const winCardText =document.querySelector('.win-card p');
const winCardBtn =document.querySelector('.win-card button');
crossBoxImg.src="./image/cross-white.png";
crossBox.style.backgroundColor="#5CE1E6"

boxes.forEach(function(item){
    item.addEventListener('click',function(){
        if(turn === 'cross' && !item.className.includes("completed")){
            item.style.backgroundImage ="url('./image/cross-blue.png')";
            item.classList.add('completed');
            item.classList.add('cross');
            crossBoxImg.src="./image/cross-blue.png";
            crossBox.style.backgroundColor="black"
            circleBoxImg.src = "./image/circle-white.png";
            circleBox.style.backgroundColor ="#FF004D";
            turn='circle';
        }else if(turn === 'circle' && !item.className.includes("completed")){
            item.style.backgroundImage ="url('./image/circle-red .png')";
            item.classList.add('completed');
            item.classList.add('circle');
            circleBoxImg.src = "./image/circle-red .png";
            circleBox.style.backgroundColor ="black";
            crossBoxImg.src="./image/cross-white.png";
            crossBox.style.backgroundColor="#5CE1E6"
            turn='cross';
        }

        if(
            A1.className.includes("cross")&&
            A2.className.includes("cross")&&
            A3.className.includes("cross")
        ){
            winner = "cross";
        }else if(
            A1.className.includes("circle")&&
            A2.className.includes("circle")&&
            A3.className.includes("circle")
        ){
            winner="circle"
        }else if(
            B1.className.includes("cross")&&
            B2.className.includes("cross")&&
            B3.className.includes("cross")
        ){
            winner = "cross";
        }else if(
            B1.className.includes("circle")&&
            B2.className.includes("circle")&&
            B3.className.includes("circle")
        ){
            winner="circle"
        }else if(
            C1.className.includes("cross")&&
            C2.className.includes("cross")&&
            C3.className.includes("cross")
        ){
            winner = "cross";
        }else if(
            C1.className.includes("circle")&&
            C2.className.includes("circle")&&
            C3.className.includes("circle")
        ){
            winner="circle"
        }else if(
            A1.className.includes("cross")&&
            B1.className.includes("cross")&&
            C1.className.includes("cross")
        ){
            winner = "cross";
        }else if(
            A1.className.includes("circle")&&
            B1.className.includes("circle")&&
            C1.className.includes("circle")
        ){
            winner="circle"
        }else if(
            A2.className.includes("cross")&&
            B2.className.includes("cross")&&
            C2.className.includes("cross")
        ){
            winner = "cross";
        }else if(
            A2.className.includes("circle")&&
            B2.className.includes("circle")&&
            C2.className.includes("circle")
        ){
            winner="circle"
        }else if(
            A3.className.includes("cross")&&
            B3.className.includes("cross")&&
            C3.className.includes("cross")
        ){
            winner = "cross";
        }else if(
            A3.className.includes("circle")&&
            B3.className.includes("circle")&&
            C3.className.includes("circle")
        ){
            winner="circle"
        }else if(
            A1.className.includes("cross")&&
            B2.className.includes("cross")&&
            C3.className.includes("cross")
        ){
            winner = "cross";
        }else if(
            A1.className.includes("circle")&&
            B2.className.includes("circle")&&
            C3.className.includes("circle")
        ){
            winner="circle"
        }else if(
            A3.className.includes("cross")&&
            B2.className.includes("cross")&&
            C1.className.includes("cross")
        ){
            winner = "cross";
        }else if(
            A3.className.includes("circle")&&
            B2.className.includes("circle")&&
            C1.className.includes("circle")
        ){
            winner="circle"
        }else if(
            A1.className.includes("completed")&&
            A2.className.includes("completed")&&
            A3.className.includes("completed")&&
            B1.className.includes("completed")&&
            B2.className.includes("completed")&&
            B3.className.includes("completed")&&
            C1.className.includes("completed")&&
            C2.className.includes("completed")&&
            C3.className.includes("completed")
        ){
            winner="equal";
        }

        if(winner === "cross"){
            winCardText.style.color="#5CE1E6";
            winCardText.innerHTML="the cross wins.";
            winCard.style.visibility ="visible";
        }else if(winner ==="circle"){
            winCardText.style.color="#FF004D";
            winCardText.innerHTML="the circle wins.";
            winCard.style.visibility ="visible";
        }else if(winner === "equal"){
            winCardText.style.color="#FFF";
            winCardText.innerHTML="nobody win.";
            winCard.style.visibility ="visible";
        }
        winCardBtn.addEventListener('click',function(){
            winCard.style.visibility="hidden";
            location.reload();  
        })
    });
});
