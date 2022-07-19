let home = 0;
let visitor = 0;
 
function onePoint() {
  home += 1;
  let counterElm = document.getElementById('monstars')
  counterElm.innerHTML = home;
  
}

function threePoint() {
  home += 3;
  let counterElm = document.getElementById('monstars')
  counterElm.innerHTML = home;
}

function onePointTune() {
  visitor += 1;
  let tuneElm = document.getElementById('tunesquad')
  tuneElm.innerHTML = visitor;
}

function threePointTune() {
  visitor += 3;
  let tuneElm = document.getElementById('tunesquad')
  tuneElm.innerHTML = visitor;
}

function reset() {
  yourCode = '0'
  let codeElement = document.getElementById('monstars')
  let codeElm = document.getElementById('tunesquad')
  codeElement.innerHTML = yourCode
  codeElm.innerHTML = yourCode
  home = 0
  visitor = 0
}


function clearCode(){
  // NOTE debugger stops the code so you can run it line by line and watch it evaluate
  // debugger
  yourCode = ''
  let codeElement = document.getElementById('your-code')
  codeElement.innerText = yourCode
}