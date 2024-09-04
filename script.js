// Write your code here
console.log("hello")
// May need to remove the hashes
const light1 = document.querySelector("#lightbulb1")
const light2 = document.querySelector("#lightbulb2")
const light3 = document.querySelector("#lightbulb3")
let subTitle = document.querySelector(".subtitle")
let count = 0
light1.addEventListener("click", function(){
    count++
    subTitle.innerHTML=`You've clicked the lights ${count} times`
    console.log(subTitle.innerHTML=`You've clicked the lights ${count} times`)
    light1.classList.toggle("active")
})
light2.addEventListener("click", function(){
    count++
    subTitle.innerHTML=`You've clicked the lights ${count} times`
    console.log(subTitle.innerHTML=`You've clicked the lights ${count} times`)
    light2.classList.toggle("active")

})
light3.addEventListener("click", function(){
    count++
    subTitle.innerHTML=`You've clicked the lights ${count} times`
    console.log(subTitle.innerHTML=`You've clicked the lights ${count} times`)
    light3.classList.toggle("active")


})

console.log(light1)
console.log(light2)
console.log(light3)
console.log(subTitle)
console.log(count)