let countEl = document.getElementById("count");
console.log(countEl);
let counter =0;
function increment(){
    counter = counter + 1;
    countEl.innerText = counter;
}
function reset(){
    counter = 0;
    countEl.innerText = counter;

}
