//vi arbejder herefter med RNA og ikke DNA
let sequence1P = document.getElementById("Protein1").value //is empty //must be same length or an error will be cast
let sequence2P = document.getElementById("Protein2").value //result equals +6

function calculateFillP() { //Her indskrives de forskellige værdier der gives, hvis f.eks A står over A. Se værdierne i nedstående skema
// længde = 21 for proteiner
//    ; Ala; Arg; Asn; Asp; Cys; Gln; Glu; Gly; His; Ile; Leu; Lys; Met; Phe; Pro; Ser; Thr; Trp; Tyr; Val;  - ;----; <-- Ekstra felt der vil regne mellemrum hvis - ikke indsættes, de vil altid have samme værdi
// Ala;  4 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// Arg; -1 ;  5 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// Asn; -2 ;  0 ;  6 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// Asp; -2 ; -2 :  1 ;  6 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// Cys;  0 ; -3 : -3 ; -3 ;  9 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// Gln; -1 ;  1 :  0 ;  0 ; -3 ;  5 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// Clu; -1 ;  0 :  0 ;  2 ; -4 ;  2 ;  5 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// Gly;  0 ; -2 :  0 ; -1 ; -3 ; -2 ; -2 ;  6 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// His; -2 ;  0 :  1 ; -1 ; -3 ;  0 ;  0 ; -2 ;  8 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// Ile; -1 ; -3 : -3 ; -3 ; -1 ; -3 ; -3 ; -4 ; -3 ;  4 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// Leu; -1 ; -2 : -3 ; -4 ; -1 ; -2 ; -3 ; -4 ; -3 ;  2 ;  4 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// Lys; -1 ;  2 :  0 ; -1 ; -3 ;  1 ;  1 ; -2 ; -1 ; -3 ; -2 ;  5 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// Met; -1 ; -1 : -2 ; -3 ; -1 ;  0 ; -2 ; -3 ; -2 ;  1 ;  2 ; -1 ;  5 ;    ;    ;    ;    ;    ;    ;    ;    ;    ;
// Phe; -2 ; -3 : -3 ; -3 ; -2 ; -3 ; -3 ; -3 ; -1 ;  0 ;  0 ; -3 ;  0 ;  6 ;    ;    ;    ;    ;    ;    ;    ;    ;
// Pro; -1 ; -2 : -2 ; -1 ; -3 ; -1 ; -1 ; -2 ; -2 ; -3 ; -3 ; -1 ; -2 ; -4 ;  7 ;    ;    ;    ;    ;    ;    ;    ;
// Ser;  1 ; -1 :  1 ;  0 ; -1 ;  0 ;  0 ;  0 ; -1 ; -2 ; -2 ;  0 ; -1 ; -2 ; -1 ;  4 ;    ;    ;    ;    ;    ;    ;
// Thr;  0 ; -1 :  0 ; -1 ; -1 ; -1 ; -1 ; -2 ; -2 ; -1 ; -1 ; -1 ; -1 ; -2 ; -1 ;  1 ;  5 ;    ;    ;    ;    ;    ;
// Trp; -3 ; -3 : -4 ; -4 ; -2 ; -2 ; -3 ; -2 ; -2 ; -3 ; -2 ; -3 ; -1 ;  1 ; -4 ; -3 ; -2 ; 11 ;    ;    ;    ;    ;
// Tyr; -2 ; -2 : -2 ; -3 ; -2 ; -1 ; -2 ; -3 ;  2 ; -1 ; -1 ; -2 ; -1 ;  3 ; -3 ; -2 ; -2 ;  2 ;  7 ;    ;    ;    ;
// Val;  0 ; -3 : -3 ; -3 ; -1 ; -2 ; -2 ; -3 ; -3 ;  3 ;  1 ; -2 ; -1 ; -1 ; -2 ; -2 ;  0 ; -3 ; -1 ;  4 ;    ;    ;
// -  ;  -1; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ;  0 ;  0 ;
// ---;  -1; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ; -1 ;  0 ;  0 ; 
  lookUpP [lookUpP.length] = 4 ; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  5; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  6; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] =  6; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  9; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  5; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] =  5; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  6; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  8; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  4; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] =  4; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  5; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  5; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  6; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] =  3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] =  7; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  4; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] =  5; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -4; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = 11; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  2; lookUpP [lookUpP.length] =  7; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] =  3; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] = -2; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] = -3; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  4; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1;
  lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  0;
  lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] = -1; lookUpP [lookUpP.length] =  0; lookUpP [lookUpP.length] =  0;
}

const ContainP = []


function containerP(){
  ContainP [ContainP.length] = 'A'
  ContainP [ContainP.length] = 'R'
  ContainP [ContainP.length] = 'N'
  ContainP [ContainP.length] = 'D'
  ContainP [ContainP.length] = 'C'
  ContainP [ContainP.length] = 'Q'
  ContainP [ContainP.length] = 'E'
  ContainP [ContainP.length] = 'G'
  ContainP [ContainP.length] = 'H'
  ContainP [ContainP.length] = 'I'
  ContainP [ContainP.length] = 'L'
  ContainP [ContainP.length] = 'K'
  ContainP [ContainP.length] = 'M'
  ContainP [ContainP.length] = 'F'
  ContainP [ContainP.length] = 'P'
  ContainP [ContainP.length] = 'S'
  ContainP [ContainP.length] = 'T'
  ContainP [ContainP.length] = 'W'
  ContainP [ContainP.length] = 'Y'
  ContainP [ContainP.length] = 'V'
  ContainP [ContainP.length] = '-'
  ContainP [ContainP.length] = ' '
}

const lookUpP = []

let sequence1CalP = []
let sequence2CalP = []

function TranslateP(){
  for (let i = 0; i < sequence1P.length; i++){
    for(let ii = 0; ii < ContainP.length; ii++){
      if(sequence1P[i] == ContainP[ii]) {
        sequence1CalP[i] = ii
      }
    }
  }
  for (var i = 0; i < sequence2P.length; i++){
    for(let ii = 0; ii< ContainP.length; ii++){
      if(sequence2P[i] == ContainP[ii]) {
        sequence2CalP[i] = ii
      }
    }
  }
}

let valuesP = 0


function compareP(){
  if(sequence1P.length != sequence2P.length){
    console.log ("aren't even the same length you idiot... It must be... at least for now")
    return
  }
  //x = i % længde                 // i  = x + iy
  //y = (i - (i % længde))/længde  // iy = y*længde
  try{
    for (var i = 0; i < sequence1P.length || i < sequence2P.length; i++){
      valuesP += lookUpP[(sequence1CalP[i] + ((sequence2CalP[i])*ContainP.length))]
    }
  } 

  //skriver i console, at der er sket en fejl
  catch(err){ 
    console.log("your an idiot, why did you fail at this simple task")
  }

  //Gør så værdien valuesP kan visualiseres i HTML ved brug af id
  document.getElementById("valuesP").innerHTML = valuesP;
}
