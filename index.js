// console.log("I like pizza")
// console.log("Its really good")

//window.alert("I really love pizza")

/*
let = variables are limited to block scope {}
var = varriables are limited to function() {}
*/

let age;
document.getElementById("myButton").onclick = function(){
    age = document.getElementById("myText").value;
    console.log(age, typeof age)
    age = Number(age)
    console.log(age, typeof age)
    document.getElementById("myLabel2").innerHTML = age;
}

let counter = 0
document.getElementById("increaseButton").onclick = function (){
    counter += 1
    document.getElementById("counterLabel").innerHTML = counter
}

document.getElementById("decreaseButton").onclick = function (){
    counter -= 1
    document.getElementById("counterLabel").innerHTML = counter
}

document.getElementById("resetButton").onclick = function (){
    counter = 0
    document.getElementById("counterLabel").innerHTML = counter
}

document.getElementById("submitButton").onclick = function (){

    const myCheckbox = document.getElementById("myCheckbox")
    const visaButton = document.getElementById("visaBtn")
    const mastercardButton = document.getElementById("mastercardBtn")
    const paypalButton = document.getElementById("paypalBtn")


    if(myCheckbox.checked){
        document.getElementById("onCheckbox").innerHTML = "You are subscribed"
    }
    else{
        document.getElementById("onCheckbox").innerHTML = "You are not subscribed"
    }

    if(visaButton.checked){
        document.getElementById("onPayment").innerHTML = "Visa"
    }
    else if(mastercardButton.checked){
        document.getElementById("onPayment").innerHTML = "Mastercard"
    }
    else if(paypalButton.checked){
        document.getElementById("onPayment").innerHTML = "Paypal"
    }
    else{
        document.getElementById("onPayment").innerHTML = "Select a payment mode"
        document.getElementById("onPayment").innerHTML += "<br>Select a payment mode"

    }
    
}

// let username
// do{
//     username = window.prompt("Enter your name")
// }while(username == "")
// console.log("Hello", username)


// let rows = window.prompt("Enter # of rows")
// let cols = window.prompt("Enter # of cols")

// for(let r = 1; r <= rows; r++){
//     for(let c = 1; c <= cols; c++){
//         document.getElementById("myRectangle").innerHTML += c
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>"
// }

let username = "bro";
let items = 3;
let total = 75;
console.log(`Hello ${username}, you have ${items} items in your cart, total price is $${total}`)

let myNum = 123456.678
let myNumUS = myNum.toLocaleString("en-US", {style:"currency", currency: "USD"});
console.log(myNumUS)
let myNumIN = myNum.toLocaleString("hi-IN", {style:"currency", currency: "INR"});
console.log(myNumIN) 

// number guessing game
const answer = Math.floor(Math.random() * 10 + 1)

let guesses = 0
document.getElementById("submitButton2").onclick = function(){
    let guess = document.getElementById("guessField").value
    guesses += 1

    if(guess == answer){
        alert(`${answer} is the answer. It took you ${guesses}.`)
    }
    else if(guess < answer){
        alert("too small")
    }
    else{
        alert("too big")
    }
}

// temperature convertor
function toCelcius(temp){
    return (temp - 32) * (5 / 9)
}

function toFahrenhiet(temp){
    return temp * 9 / 5 + 32
}

document.getElementById("submitTemperatureButton").onclick = function(){
    let temp = Number(document.getElementById("temperatureTextBox").value);

    if(document.getElementById("fahrenhiet").checked){    
        temp = toFahrenhiet(temp)
        document.getElementById("tempLabel").innerHTML = temp + "°F"
    }
    else if(document.getElementById("celcius").checked){
        temp = toCelcius(temp)
        document.getElementById("tempLabel").innerHTML = temp + "°C"
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit"
    }
}

//array
let fruits = ["apple", "oranges", "banana"]
console.log(fruits)
fruits.push("pear")
console.log(fruits)
fruits.pop("pear")
console.log(fruits)
fruits.unshift("mango") // adds to beginning
console.log(fruits)
fruits.shift("mango") // removes from beginning
console.log(fruits)

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

for(let fruit of fruits){
    console.log(fruit)
}

console.log(fruits.sort())
console.log(fruits.sort().reverse())

console.log("\n")

//2D array
let vegetables = ["carrots", "onions", "potatoes"]
let meats = ["eggs", "chicken", "fish"]

let groceryList = [fruits, vegetables, meats]
groceryList[0][1] = "mangoes"
for(let list of groceryList){
    console.log(list)
    for(let food of list){
        console.log(food)
    }
}


let numbers = [1, 2, 3, 4]
console.log("\n", numbers, "\n", ...numbers)
console.log(Math.max(...numbers))

vegetables.push(...meats)
console.log(...vegetables)

// rest params
let a = 1
let b = 2
let c = 3

console.log(sum(a, b, c))
function sum(...numbers){
    let total = 0
    for(let number of numbers){
        total+=number
    }
    return total
}

// callback = a function passed as an argument to another function
sum_(2, 3, displayConsole);

function sum_(x, y, callBack){
    let result = x + y;
    callBack(result);
}

function displayConsole(output){
    console.log(output)
}

function displayDOM(output){
    document.getElementById("myLabel1").innerHTML = output
}


// array.forEach() = executes a provided callback function
//                   once for each array element

let students = ["spongebob", "patrick", "squidward"]
students.forEach(capitalize)
console.log(...students)
students.forEach(print)

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(element){
    console.log(element)
}

// array.map() = executes a provided callback function
//                   once for each array element
//                and creates a new array

numbers = [1, 2, 3, 4, 5]
let squares = numbers.map(square)
console.log(squares)
squares.forEach(print)

function square(element){
    return Math.pow(element, 2)
}


// array.filter() = creates a new array with all elements
//                 that pass the test provided by the function

let ages = [18, 16, 21, 24, 29]
let adults = ages.filter(checkAge)
console.log(adults)
function checkAge(element){
    return element >= 21
}

// array.reduce() = reduces an array to single value

let prices = [5, 10, 15, 20]
total = prices.reduce(checkOut)

console.log(`Your total is ${total}`)
function checkOut(total, element){
    return total + element
}


let grades = [100, 50, 90, 60, 80, 70]

grades = grades.sort(descendingSort)
grades.forEach(print)

function descendingSort(x, y){
    return y - x
}

// function expression = funtion without a name (anonymous function)
//                        avaoid polluting the global scope with names
//                         write it and forget about it

const greeting = function(username){
    console.log(`Hello ${username}`);
}
greeting("Bro");

// arrow function expression = compact alternative to a traditional function expression
//                   =>
//1.
const greetingArrow = (username) => 
    console.log(`Hello ${username}`);
greetingArrow("Bro from arrow");

//2.
const percent = (x, y) => x / y * 100
console.log(`${percent(30, 50)}%`)

//3.
grades = grades.sort(function(x, y){
    return y - x
});
console.log(...grades)

grades.push(99)
grades.sort((x, y) => y - x); // inplace
console.log(...grades)
grades.forEach((x) => console.log(x))


let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
shuffle(cards)
console.log(...cards)

function shuffle(array){
    let currentIndex = array.length;
    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1
        let temp = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temp
    }
    return array
}


// nested functions

username = "Bro"
let userInbox = 0
login()
function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(username)
    }

    function displayUserInbox(){
        console.log(userInbox)
    }
}

// Map

const store  = new Map([
    ["tshirt", 20],
    ["jeans", 30],
    ["jacket", 50],
]);
store.set("undie",12)
store.forEach((value, key) => console.log(`${key} price is ${value}`))
store.delete("undie")
store.forEach((_, key) => console.log(`${key} price is ${store.get(key)}`))
console.log(store.has("undie"))
console.log(store.size)


// object

const car = {
    model: "Mustang",
    color: "Red",
    year: 2023,

    drive: function(){
        console.log(`You drive the ${this.model}`)
    }
}
console.log(car.model)
car.drive()


// class = blueprint for creating objects

class Player{
    score = 0;

    pause(){
        console.log("You paused the game")
    }
    exit(){
        console.log("You exited the game")
    }
}

const player1 = new Player();
player1.score += 1
console.log(player1.score)


// constructors

class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying`)
    }
}

const student1 = new Student("Sandy", 26, 4.0)
student1.study()

// static

class Car{
    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Car.numberOfCars += 1
    }

    static startRace(){
        console.log("3..2..1..GO!")
    }
}

const car1 = new Car("Mustang")
const car2 = new Car("Corvette")
const car3 = new Car("BMW")
const car4 = new Car("Lambo")
console.log(Car.numberOfCars)
Car.startRace()


// inheritance
// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
    
// }

// class Rabbit extends Animal{
//     name = "rabbit";
//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }


// class Fish extends Animal{
//     name = "fish";
//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish()
// console.log(rabbit.alive)
// rabbit.eat()
// rabbit.run()

// super = used to invoke the constructor of parent class
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
}

class Rabbit extends Animal{
    
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}


class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40)
const fish = new Fish("fish", 2, 80)

console.log(fish.name, fish.age, fish.swimSpeed)



// getters and setters

class Car_{
    constructor(power){
        this._gas = 25
        this._power = power;
    }

    get power(){
        return `${this._power}hp`;
    }

    get gas(){
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }

    set gas(value){
        if(value > 50){
            value = 50
        }
        else if (value < 0){
            value = 0
        }
        this._gas = value;
    }
}

let carx = new Car_(40)
carx.gas = 100
// carx.power = 50 // doesnt change
console.log(carx.power)
console.log(carx.gas)

// anonymous objects = objects without a name
//                      not directly referenced
//                  less syntax no need for unique names

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

cards = [new Card("A", "Hearts"), 
        new Card("A", "Spades"), 
        new Card("2", "Hearts"), 
        new Card("2", "Spades")];

console.log(cards[0].suit)
cards.forEach(card => console.log(card.suit))


// error

try{
    console.lag()
}
catch(error){
    console.log(error)
}
finally{
    // always executes
    // ex: close a file
}


// setTimeout() = invokes a functio after a number of miliseconds
//                    async function (doesnt pause execution)


// let item =  "cryptocurrency"
// let price = 420.99

// let timer1 = setTimeout(firstMessage, 3000, item, price);
// let timer2 = setTimeout(secondMessage, 6000);
// let timer3 = setTimeout(thirdMessage, 9000)

// function firstMessage(item, price){
//     alert(`Buy this ${item} for ${price}`)
// }

// function secondMessage(){
//     alert(`This is not a scam`)
// }

// function thirdMessage(){
//     alert(`Do it!`)
// }

// document.getElementById("myBuyButton").onclick = function(){
//     clearTimeout(timer1)
//     clearTimeout(timer2)
//     clearTimeout(timer3)
//     alert(`Thanks for buying`)
// }
 

// Date
let customDate = new Date("January, 1, 2023, 12:39");
console.log(customDate.toLocaleString())
let date = new Date();
document.getElementById("myDateLabel").innerHTML = date.toLocaleString()


const clockLabel = document.getElementById("myDateLabel");
update();
setInterval(update, 1000);
function update(){
    let date = new Date();
    clockLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am";
        hours = (hours % 12) || 12;

        hours = formatZeros(hours)
        minutes = formatZeros(minutes)
        seconds = formatZeros(seconds)


        return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()} ${hours}:${minutes}:${seconds} ${amOrPm}`
    }

    function formatZeros(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time
    }
}


// synchronous, asynchronous

console.log("Start")
// setTimeout(() => {
//     console.log("This is async")
// }, 5000)
console.log("End")


// console.time()

console.time("response time");
console.timeEnd("response time")


// promise = object that encapsulates the result of an asynchronous operation
//                  the STATE is 'pending' then: 'fulfilled' or 'rejected'
//                  the RESULT is what can be returned
//                  2 parts producing & consuming

// const promise = new Promise((resolve, reject) => {

//     let fileLoaded = false;

//     if(fileLoaded){
//         resolve("File loaded");
//     }
//     else{
//         reject("File not loaded")
//     }
// });

// promise.then(value => {console.log(value)})
//        .catch(error => {console.log(error)})


// async = makes a function return a promise

async function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File not loaded";
    }
}

// loadFile().then(value => console.log(value))
//             .catch(error => console.log(error))

// await = makes an async function wait for a promise

// async function startProcess(){
//     try{
//         let message = await loadFile()
//         console.log(message)
//     }catch(error){
//         console.log(error)
//     }
// }
// startProcess()



// modules
import {PI, getCircumference, getArea} from "./math_util.js"
import * as MathUtil from "./math_util.js"

console.log(PI)
console.log(MathUtil.PI)
console.log(getCircumference(2))


// DOM = Document Object Model (API)
//         An interface for changing content of the page

console.log(document)
console.dir(document)
console.log(document.title, document.URL)
document.title = "FirstJS"
//document.body.style.backgroundColor  = "skyblue"


let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen"

fruits = document.getElementsByName("fruits");
fruits.forEach(fruit =>{
    if(fruit.checked){
        console.log(fruit.value)
    }
})

vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightblue"
vegetables[1].style.backgroundColor = "lightpink"
vegetables[2].style.backgroundColor = "lightgreen"


let desserts = document.getElementsByClassName("desserts")
desserts[0].style.backgroundColor = "lightblue"

element = document.querySelector("#myTitle")
element.style.color = "blue"

element = document.querySelectorAll(".desserts")
element[1].style.backgroundColor = "lightgreen"


element = document.body;
let child = element.firstElementChild
child.style.backgroundColor = "pink"

// add/change HTML elements
// .innerHTML(vulnerable to XSS attacks)
// .textContent (more secure)

// const nameTag = document.createElement("h1")
// nameTag.textContent = "Whats up?"
// document.body.append(nameTag)


let myList = document.querySelector("#fruits")
const listItem = document.createElement("li");
listItem.textContent = "mango"
myList.append(listItem)


// css with js

const title = document.getElementById("myTitle2")
title.style.backgroundColor = "#123456"
title.style.color = "rgb(50, 200, 250)"
title.style.fontFamily = "consolas"
title.style.textAlign = "center"
title.style.border = "5px solid"
title.style.display = "block"




// event
element = document.getElementById("eventButton")
element.onclick =  doSomething;
function doSomething(){
    alert("done")
}

element = document.getElementById("myDiv")
// element.onmouseover = changeColor;
// element.onmouseout = revertColor;
element.onmousedown = changeColor;
element.onmouseup = revertColor;


function changeColor(){
    element.style.backgroundColor = "blue";
}
function revertColor(){
    element.style.backgroundColor = "blueviolet";
}


//.addEventListener
element.addEventListener("mouseover", changeRed);
element.addEventListener("mouseout", revertColor);

function changeRed(){
    this.style.backgroundColor = "red"
}


const myCarButton = document.querySelector('#myCarButton')
const myCarImg = document.querySelector('#myImg')

myCarButton.addEventListener("click", () =>{
    if(myCarImg.style.display == "none"){
        myCarImg.style.display = "block"
    }
    else{
        myCarImg.style.display = "none"
    }
})



element = document.getElementById("myDiv2")
window.addEventListener("keydown", move)
let x = 0
let y = 0
function move(event){
    switch(event.key){
        case "ArrowDown":
            y += 5
            element.style.top = y + "px"
            break;
        case "ArrowUp":
            y -= 5
            element.style.top = y + "px"
            break;
        case "ArrowRight":
            x += 5
            element.style.left = x + "px"
            break;
        case "ArrowLeft":
            x -= 5
            element.style.left = x + "px"
            break;
    }
}


const myButton = document.getElementById("beginButton")
const myAnimation = document.getElementById("myDiv3")

myButton.addEventListener("click", begin)

function begin(){
    let timerId = null;
    timerId = setInterval(frame, 5);
    let degrees = 0
    let x = 0;
    let y = 0
    function frame(){

        if(x >= 200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            degrees += 5
            x += 1
            y += 1
            myAnimation.style.transform = "rotateZ(" + degrees + "deg)"
            myAnimation.style.left = x + "px"
            myAnimation.style.top = y + "px"
            scaleX += 0.01

        }
    }
}


// canvas API = a means for drawing graphics

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");


context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);

context.stroke();


// draw triangle


//  window = interface used to talk to the web browser
console.log(window.innerWidth)
element = document.querySelector("#googleButton")
element.addEventListener("click", () => window.open("https://google.com"))

element = document.querySelector("#printButton")
element.addEventListener("click", () => window.print())


// cookie = a small text file stored on your computer
//          used to remember information about the user
//          saved in name=value pairs

// console.log(navigator.cookieEnabled)
// document.cookie = "firstName = Patrick; expires = Sun, 1, January 2000; path = /";
// document.cookie = "lastName = Squarepants; expires = Sun, 1, January 2030; path = /";
// console.log(document.cookie)

// setCookie("email", "someemail@gmail.com", 365)
// setCookie("lastName", "pants", 365)
const firstText = document.querySelector("#firstText")
const lastText = document.querySelector("#lastText")
const submitButton = document.querySelector("#setCookies")
const cookieBooton = document.querySelector("#getCookies")

// console.log(getCookie("email"))
submitButton.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
})

cookieBooton.addEventListener("click", () => {
    firstText.value = getCookie("firstName")
    lastText.value = getCookie("lastName")
})

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 3600 * 1000)
    let expires = "expires=" +date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`

}
console.log(document.cookie)

function deleteCookie(name){
    setCookie(name, null, null)
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie)
    let cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result
}
