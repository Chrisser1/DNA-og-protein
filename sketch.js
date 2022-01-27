let sequence1 = document.getElementById("DNA1").value //is empty //must be same length or an error will be cast
let sequence2 = document.getElementById("DNA2").value //result equals +6

function calculateFill() { //Her indskrives de forskellige værdier der gives, hvis f.eks A står over A. Se værdierne i nedstående skema
// længde = 5 for DNA
//  ; A; T; C; G; -;
// A; 2;-2;-2;-1;-2;
// T;-2; 2;-1;-2;-2;
// C;-2;-1; 2;-2;-2;
// G;-1;-2:-2; 2;-2;
// -;-2;-2;-2;-2;
  lookUp [lookUp.length] = 2 ; lookUp [lookUp.length] = -2; lookUp [lookUp.length] = -2; lookUp [lookUp.length] = -1; lookUp [lookUp.length] = -2;
  lookUp [lookUp.length] = -2; lookUp [lookUp.length] =  2; lookUp [lookUp.length] = -1; lookUp [lookUp.length] = -2; lookUp [lookUp.length] = -2;
  lookUp [lookUp.length] = -2; lookUp [lookUp.length] = -1; lookUp [lookUp.length] =  2; lookUp [lookUp.length] = -2; lookUp [lookUp.length] = -2;
  lookUp [lookUp.length] = -1; lookUp [lookUp.length] = -2; lookUp [lookUp.length] = -2; lookUp [lookUp.length] =  2; lookUp [lookUp.length] = -2;
  lookUp [lookUp.length] = -2; lookUp [lookUp.length] = -2; lookUp [lookUp.length] = -2; lookUp [lookUp.length] = -2; lookUp [lookUp.length] =  0;
}

function udregn() {
  run = true
}

function setup() {}

let first = true
let run = true

function draw() {//magien af js
  if (first) {
    calculateFill()
    container()
    Translate()

    calculateFillP()
    containerP()
    TranslateP()
    first = false
  }
  if (!run) return
  sequence1 = document.getElementById("DNA1").value
  sequence2 = document.getElementById("DNA2").value
  Translate()
  values = 0
  compare()
  console.log(values)

  sequence1P = document.getElementById("Protein1").value
  sequence2P = document.getElementById("Protein2").value
  TranslateP()
  valuesP = 0
  compareP()
  console.log(valuesP)


  run = false
}//slutter magien

const Contain = []


function container(){
  Contain [0] = 'a'
  Contain [1] = 't'
  Contain [2] = 'c'
  Contain [3] = 'g'
  Contain [4] = '-'
}

const lookUp = []

let sequence1Cal = []
let sequence2Cal = []

function Translate(){
  for (let i = 0; i < sequence1.length; i++){
    for(let ii = 0; ii < Contain.length; ii++){
      if(sequence1[i] == Contain[ii]) {
        sequence1Cal[i] = ii
      }
    }
  }
  for (var i = 0; i < sequence2.length; i++){
    for(let ii = 0; ii< Contain.length; ii++){
      if(sequence2[i] == Contain[ii]) {
        sequence2Cal[i] = ii
      }
    }
  }
}

let values = 0

function compare(){
  if(sequence1.length != sequence2.length){
    console.log ("aren't even the same length you idiot... It must be... at least for now")
    return
  }
  //x = i % længde                 // i  = x + iy
  //y = (i - (i % længde))/længde  // iy = y*længde
  try{
    for (var i = 0; i < sequence1.length || i < sequence2.length; i++){
      values += lookUp[(sequence1Cal[i] + ((sequence2Cal[i])*Contain.length))]
    }
  } 

  //skriver i console, at der er sket en fejl
  catch(err){ 
    console.log("your an idiot, why did you fail at this simple task")
  }

  //Gør så værdien values kan visualiseres i HTML ved brug af id
  document.getElementById("values").innerHTML = values;
}