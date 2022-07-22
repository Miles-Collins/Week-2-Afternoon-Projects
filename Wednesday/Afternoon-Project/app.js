
  const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    qty: 1, 
    }, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    qty: 1
    }, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    qty: 1
    }]

  const vessels = [{  
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    qty: 1
  }, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    qty: 1
  }, {
    name: 'Dipped Cone',
    image: 'https://shewearsmanyhats.com/wp-content/uploads/2013/07/dipped-ice-cream-cones-8-480x480.jpg',
    price: 4 ,
    qty: 1
  }]

  toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    qty: 1
  }, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    qty: 1
  }, {
    name: 'Gummy Worms',
    image: 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VtbXklMjB3b3Jtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    price: 1,
    qty: 1
  }]


let emptyCart = []

function drawToppings() {
  template = ''
  toppings.forEach(topping => {
    template += `
    <div class="col-3 rounded shadow bg-light my-2 hoverable" onclick="selectTop('${topping.name}')">
      <div>
        <img style="height: 15VH" class="img-fluid p-2"
        src=${topping.image} 
        alt="">
        <h5>${topping.name} $${topping.price}</h5>
      </div>
    </div>
    `
    let topElm = document.getElementById('menu-toppings')
    topElm.innerHTML = template
  })
}

drawToppings()

function drawIcecream(){
  let template = ''
  iceCream.forEach(food => {
    template += ` 
    <div class="col-3 rounded shadow bg-light my-2 hoverable" onclick="selectIce('${food.name}')">
      <div>
        <img style="height: 15VH" class="pt-3 img-fluid"
        src=${food.image}
        alt="">
        <h5 class="py-2">'${food.name}' $'${food.price}'</h5>
      </div>
    </div>
    `
  let iceElm = document.getElementById('menu-icecream')
  iceElm.innerHTML = template
  })
}

drawIcecream()

function drawVessels() {
  template = ''
  vessels.forEach(vessel => {
    template += `
    <div class="col-3 rounded shadow bg-light my-2 hoverable" onclick="selectVessel('${vessel.name}')">
      <div">
        <img style="height: 15VH; width: 90%" class="img-fluid pt-3"
        src=${vessel.image} 
        alt="">
        <h5>${vessel.name} $${vessel.price}</h5>
      </div>
    </div>
    `
  let vesselElm = document.getElementById('menu-vessels')
  vesselElm.innerHTML = template
  })
}

drawVessels()

function drawTotal(){
  let subTotal = 0
  emptyCart.forEach(bought => subTotal += bought.price)
  console.log(subTotal);
  let totalElm = document.getElementById('total')
  totalElm.innerText = subTotal
}

function drawEmptyCart() {
  let template = ''
  emptyCart.forEach(cart => template += `
  <div class="col-6 cart">${cart.name}</div>
  <div class="col-2 cart">${cart.qty}</div>
  <div class="col-2 cart">$${cart.price}</div>
  <div class="col-2 cart">$</div>
  `)
  let cartElm = document.getElementById('emptyCart')
  cartElm.innerHTML = template
  drawTotal()
}

function selectVessel(item) {
  console.log(item);
  let selectedItem = vessels.find(vessel => vessel.name == item)
  console.log(selectedItem)
  emptyCart.push(selectedItem)
  drawEmptyCart()
}

function selectIce(item) {
  console.log(item)
  let selectedItem = iceCream.find(cream => cream.name == item)
  console.log(selectedItem)
  emptyCart.push(selectedItem)
  drawEmptyCart()
}

function selectTop(item) {
  console.log(item)
  let selectedItem = toppings.find(top => top.name == item)
  emptyCart.push(selectedItem)
  drawEmptyCart()
}

function clearCart() {
  emptyCart = []
  drawEmptyCart()
}