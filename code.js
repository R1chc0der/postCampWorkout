// // Write your pseduo code first
// document.querySelector('h1').addEventListener('click', cToF )

// // c to f
// function cToF(){


// //need the value in c
// let cTemp = Number(document.querySelector('input').value)


// // convert c to f 
// let fTemp = (cTemp * 1.8 + 32)  



// //show the value
// document.querySelector('h2').innerText = fTemp
// }


// document.querySelector('#finalRose').addEventListener('click',
//  hide)



//  function hide () {
// document. querySelector ('#moon').style.display = 'none'
// document.querySelector('#square').style.display = 'none'

// }


// let stopwatch = {}

// stopwatch.currentTime = 12;

// stopwatch.tellTime = function (time){
//   console.log(`This current time is ${time}`)

// }

// stopwatch.tellTime()




let stopwatch = {}

stopwatch.button = {start: 0, Stop: 0}

console.log(stopwatch)




function Makecar(carMake, carModel, carColor, numOfDoors){
  this.make = carMake
  this.model = carModel
  this.color = carColor
  this.door = numOfDoors
  this.honk = function(){
  alert("beep beep")

  }
  this.lock = function(){
    alert(`locked ${this.door} doors!`)

  }
}

let hondaCivic = new Makecar('Honda', 'Civic','Silver', 4)

console.log(hondaCivic.bluetooth);

Makecar.prototype.bluetooth = true

console.log(hondaCivic.bluetooth)

console.log(Makecar)

// let hondaPilot = new Makecar('Honda','Pilot','Red',5)

// console.log(hondaPilot);


// class GmaingPc is an object that containers properties(variables) and methods(functions)
class GamingPc{ 
  // the draft / blueprint for the GamingPc class ()
  constructor(motherboard, ram, graphicsCard, cpu){
    // listing the properties and assigning them to the parameters 
    this.board = motherboard
    this.memory = ram
    this.graphics = graphicsCard
    this.processor = cpu
    // methods or the behaviour of the object 
    this.powerup = function(){
      console.log("beep beep checking bios")

    }
    this.memoryswap = function(){
      console.log(`your swapping in and out of ${this.memory}`)

    }

 

  }
}
// creating a new object from the class or GamingPc
let newRig = new GamingPc(asus, gskill, "2060s",intel )

console.log(newRig)