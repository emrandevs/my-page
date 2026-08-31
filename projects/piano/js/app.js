const keys = document.querySelectorAll(".key");
const sound = document.querySelector(".sound");
const volumeRange = document.querySelector(".volume-range");
const keyCheckbox = document.querySelector(".keys-checkbox input");

sound.volume = volumeRange.value;
volumeRange.addEventListener("input",function(){
    sound.volume = volumeRange.value;
});

function playVoice(pianoKey){
    sound.src = `./public/tunes/${pianoKey}.wav`;
    sound.play();
};

let selectKey = '';

document.addEventListener("keydown",function(e){
    if(e.key === 'a' || e.key === 's' || e.key === 'd' || e.key === 'f' || e.key === 'g' || e.key === 'h' || e.key === 'j' || e.key === 'k' || e.key === 'l' || e.key === ';' || e.key === 'w' || e.key === 'e' || e.key === 't' ||  e.key === 'y' ||  e.key === 'u' ||  e.key === 'o' ||  e.key === 'p'){
        selectKey = e.key;
        playVoice(selectKey);
    }
});
keys.forEach(function(item){
    item.addEventListener("click",function(e){
        
        if(e.target.classList[0] === "key"){
            selectKey =e.target.dataset.key;
        }else{
            selectKey =e.target.parentElement.dataset.key;
        }
        playVoice(selectKey);
    });
});
let showKeys = true;


keyCheckbox.addEventListener("click",function(){
    if(showKeys){
        keys.forEach(function(item){
            item.children[0].innerHTML = '';
        });
        showKeys = false;
    }else{
        keys.forEach(function(item){
            item.children[0].innerHTML = item.dataset.key ;
        });
        showKeys = true;
    }
});
