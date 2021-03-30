let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'download.jpeg') {
      myImage.setAttribute('src','logo.jpeg');
    } else {
      myImage.setAttribute('src','download.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'welcome to HUMPTY DUMPTY, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'welcome to HUMPTY DUMPTY ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
