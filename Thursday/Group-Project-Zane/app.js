const heroes = {
  Kirby : {
    health: 100,
    img: 'Styles/kirbyWave.webp'
}}

const boss = {
  Ex : {  
    health: 100,
    img: 'Styles/original.gif',
    maxHealth: 100,
}}

gold = 0
emptyArr = []

function drawHero(){
  let template =''
  for(let key in heroes){
    let hero = heroes[key]
    template += 
    `

        <div class="col-12">
          <img style="height: 25VH" class="img-fluid position-absolute bottom-0 start-0" src="${hero.img}" alt="">
        </div>
 
      <div styles=height"10VH" class="col-10 offset-1 progress p-0">
          <div class="progress-bar bg-success" role="progressbar" aria-label="Danger example" style="width: ${hero.health}%"
            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${hero.health}%</div>
      </div>
     `
  let heroElm = document.getElementById('images')
  heroElm.innerHTML = template
  }
}

drawHero()

function drawBoss(){
  let template = ''
  for(let key in boss){
    let raptor = boss[key]
    template += 
    ` 
  
          <img style="height: 70VH; width:25VW" class="img-fluid position-absolute bottom-0 end-0 cursor" onclick="kill('${key}')" src="${raptor.img}" alt="">
        </div>
      </div>
      <div class="justify-contents-center col-10 offset-1 progress p-0">
      <div class="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style="width: ${boss.Ex.health}%"
        aria-valuenow="100" aria-valuemin="0" aria-valuemax="${boss.Ex.maxHealth}">${boss.Ex.health}/${boss.Ex.maxHealth}</div>
      </div>  
    `
  let raptorElm = document.getElementById('boss')
  raptorElm.innerHTML = template
  }
}

drawBoss()

function drawGold() {
  document.getElementById('gold').innerText = gold
}

function dying(){
  for(let key in heroes){
    let hero = heroes[key]
    if(boss.Ex.health > 0) {  
      hero.health -= 2
    } else {
    }
   drawHero()   
  }
}

function kill(key) {
  let raptor = boss[key]
  raptor.health -= 20
  // if(boss.Ex.health < 0) {
  //   boss.Ex.health = 0
  // }
  if(boss.Ex.health <= 0) { 
    gold += 100000
    boss.Ex.maxHealth *= 2
    boss.Ex.health = boss.Ex.maxHealth
  }
  drawGold()
  drawBoss()
}

function reset() {
  boss.Ex.health = 100
  heroes.Kirby.health = 100
  drawBoss()
  drawHero()
}


// INTERVALS
setInterval(dying, 1000)