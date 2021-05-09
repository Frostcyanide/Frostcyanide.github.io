

let myImg = document.querySelector("img");
myImg.onclick=function () {
    let mySrc = myImg.getAttribute('src');

    if(mySrc==='box.jpg')
        myImg.setAttribute('src', 'i2.jpg')
    else
        myImg.setAttribute('src', 'box.jpg');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setName(){
    let name = prompt('What is your name?');
    localStorage.setItem('name', name);
    myHeading.textContent = name;

}

if(!localStorage.getItem('name'))
    setName();
else{
    let stored = localStorage.getItem('name');
    myHeading.textContent = stored;
}

myButton.onclick = function () {
    setName();
}