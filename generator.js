let text = document.querySelector('h3');
let box = document.querySelector('div');
let btn = document.querySelector('button');

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return (`rgb(${red},${green},${blue})`);
}
btn.addEventListener("click", function (){
    let randomColor = getRandomColor();
    text.innerText = randomColor;
    box.style.backgroundColor = randomColor;
})