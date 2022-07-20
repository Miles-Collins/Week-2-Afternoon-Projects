let vendingMachine = 0

const food = {
  chips: 1,
  candy: .5,
  jerky: 2,
  roll: 1.5
}
let vendingTotal = 0
let total = 0

function buyFood(item) {
  total += item
  console.log(item)
  console.log(total)
}

console.log(total)

function buyChips() {
  buyFood(food.chips)
}

function vTotal() {
 let vendingTotal = total
  vendingTotal = document.getElementById(total).innerHTML
}