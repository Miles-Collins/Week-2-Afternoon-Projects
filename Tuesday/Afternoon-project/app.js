const packages = [{
  heavy: true,
  priority: false,
  fragile: false,
  name: 'Sam',
  trackingNumber: '1324kjs',
  lost: false
},
{
  heavy: false,
  priority: true,
  fragile: true,
  name: 'Mark',
  trackingNumber: '1325sdk',
  lost: false
},
{
  heavy: true,
  priority: true,
  fragile: true,
  name: 'Mick',
  trackingNumber: 'jffd147',
  lost: false
},
{
  heavy: false,
  priority: false,
  fragile: false,
  name: 'Jake',
  trackingNumber: 'acdc145',
  lost: false
},
{
  heavy: true,
  priority: true,
  fragile: true,
  name: 'Brittany',
  trackingNumber: '42069jk',
  lost: false
},
{
  heavy: false,
  priority: true,
  fragile: false,
  name: 'Zach',
  trackingNumber: '8081baz',
  lost: false
},
{
  heavy: true,
  priority: false,
  fragile: true,
  name: 'Jeremy',
  trackingNumber: 'suz2367',
  lost: false
}
]

let allPackages = packages

function randomPackage() {
  let rPackage = allPackages[Math.floor(Math.random() * allPackages.length)]
  rPackage.lost = true;
  console.log(rPackage)
}

randomPackage()

function drawPackage() {
  let blank = ''
  allPackages.forEach(pack => blank += `
  <div class="row text-light m-4 border">
            <div class="col-2"><h1 class="green">TO:</h1></div>
            <div class="col-4"><h1 class="text-end hoverable2" onclick="findLost('${pack.name}')">${pack.name}</h1></div>
            <div class="col-2"><h1 class="green text-end">ID:</h1></div>
            <div class="col-4"><h1 class="text-end hoverable2">${pack.trackingNumber}</h1></div>
          </div>
  `)
  let packageElm = document.getElementById('package-list')
  packageElm.innerHTML = blank
}
drawPackage()


function findLost(name) {
  let foundLost = allPackages.find(p => p.name == name)
  console.log('finding', name, foundLost);
  if(foundLost.lost == true) {
    window.alert("You found the lost package!")
  } else {
    window.alert("Keep looking the package is out there somewhere!")
  }
}

// function drawHeavy() {
//   allPackages = allPackages.filter(package => package.heavy)
//   console.log(allPackages)
//   drawPackage()
// }

// function drawPriority() {
//   allPackages = allPackages.filter(package => package.priority)
//   console.log(allPackages)
//   drawPackage()
// }

// function drawFragile() {
//   allPackages = allPackages.filter(package => package.fragile)
//   console.log(allPackages);
//   drawPackage()
// }

function filterPackage(property) {
  allPackages = packages
  let rPackage = allPackages.find(package => package.lost == true)
  allPackages = allPackages.filter(package => package[property] == rPackage[property])
  console.log(allPackages)
  drawPackage()
}

