//your JS code here. If required.
const elem = document.getElementById('level');
let count = 0;

while(element.parentElement !== null){
    count++;
    element = element.parentElement;
}

alert(`The level of the element is: ${count}`);