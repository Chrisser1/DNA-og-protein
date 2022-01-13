function setup() {
  createCanvas(400, 400);
  background("#000000")
  container()
  fillLine()
}

const lineX  = []
const lineY = []
const Contain = []

function draw() {//magien af js

}//slutter magien

function container(){
  Contain [0] = "A"
  Contain [1] = "T"
  Contain [2] = "C"
  Contain [3] = "G"
  
}

function fillLine() {
  lineX [0] = Contain [0]
  lineX [1] = Contain [1]
  lineX [2] = Contain [2]
  lineX [3] = Contain [3]
  
  lineY [0] = Contain [0]
  lineY [1] = Contain [1]
  lineY [2] = Contain [2]
  lineY [3] = Contain [3]
}


function calculateFill() {
lookUp [0] = 2    ; lookUp [1] = -2   ; lookUp [2] = -2   ; lookUp [3] = -1   ; lookUp [4] = -2   ;
lookUp [0+5] = -2 ; lookUp [1+5] = 2  ; lookUp [2+5] = -1 ; lookUp [3+5] = -2 ; lookUp [4+5] = -2 ;
lookUp [0+10] = -2; lookUp [1+10] = -1; lookUp [2+10] = 2 ; lookUp [3+10] = -2; lookUp [4+10] = -2;
lookUp [0+15] = -1; lookUp [1+15] = -2; lookUp [2+15] = -2; lookUp [3+15] = 2 ; lookUp [4+15] = -2;
lookUp [0+20] = -2; lookUp [1+20] = -2; lookUp [2+20] = -2; lookUp [3+20] = -2; lookUp [4+20] = -2;
}

const lookUp = []
//x = i % længde                 // i  = x + iy
//y = (i - (i % længde))/længde  // iy = y*længde

// længde = 5 for DNA
//  ; A; T; C; G; -;
// A; 2;-2;-2;-1;-2;
// T;-2; 2;-1;-2;-2;
// C;-2;-1; 2;-2;-2;
// G;-1;-2:-2; 2;-2;
// -;-2;-2;-2;-2;


lookUp [0] = 2; lookUp [1] = -2; lookUp 