let myImg = document.querySelector('img');

myImg.onclick = () => {
    let mySrc = myImg.getAttribute('src');
    if( mySrc === "images/chrome.png") {
        myImg.setAttribute('src', 'images/chrome2.png');
    } else {
        myImg.setAttribute('src', 'images/chrome.png');
    }
}

let myTitle = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Insert Your Name!');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myTitle.innerHTML = "Google Chrome #1, " + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myTitle.innerHTML = "Google Chrome #1, " + storedName;
}

myButton.onclick = () => {
    setUserName();
}