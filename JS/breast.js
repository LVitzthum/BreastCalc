function breast(){
    // Calculates Katz Score //
var Tsize = parseFloat(document.getElementById('Tsize').value);
var score = Tsize * 2.6;


var Pnodes = parseFloat(document.getElementById('Pnodes').value);
var Pnodes_s = Pnodes * 9.2;

var score = Pnodes_s + score;

var Nnodes = parseFloat(document.getElementById('Nnodes').value);
if (Nnodes !=0) {
var score = score - 8.6
}

if (document.getElementById("LVI").checked == true) {
var score = score + 11
}
if (document.getElementById("ILC").checked == true) {
var score = score + 11
}
if (document.getElementById("ECE").checked == true) {
var score = score + 11
}
if (document.getElementById("MM").checked == true) {
var score = score + 16
}
var score = score - 58

// displays error messages for invalid input//
var Tsize = parseFloat(document.getElementById('Tsize').value);
if (!Tsize && Tsize != 0)
  alert("You need to enter a tumor size");
if(Tsize > 10)
{
  alert("Size cannot be > 10");
  return false;
}
else if (Tsize < 0)
{
  alert("Size cannot be < 0");
  return false;
}

if (!Pnodes && Pnodes != 0)
  alert("You need to enter the number of Pnodes");
if(Pnodes > 3)
{
  alert("Pnodes cannot be > 3");
  return false;
}
else if (Pnodes < 0)
{
  alert("Pnodes cannot be < 0");
  return false;
}

if (!Nnodes && Nnodes != 0)
  alert("You need to enter the number of Nnodes");
if(Nnodes > 3)
{
  alert("Nnodes cannot be > 3");
  return false;
}
else if (Nnodes < 0)
{
  alert("Nnodes cannot be < 0");
  return false;
}

// Converts Katz score to nodal risk //
var risk
    if (score < -53) {
        risk = "less than 0.5%"
    }
    else if (score == -53) {
        risk = "0.5%"
    }
    else if (score > -53 && score < -45) {
        risk = "between 0.5 and 1%"
    }
    else if (score == -45 ) {
        risk = "1%"
    }
    else if (score > -45 && score < -39) {
        risk = "between 1 and 2%"
    }
     else if (score == -39 ) {
        risk = "2%"
    }
    else if (score > -39 && score < -29) {
        risk = "between 2 and 5%"
    }
     else if (score == -29 ) {
        risk = "5%"
    }
    else if (score > -29 && score < -22) {
        risk = "between 5 and 10%"
    }
     else if (score == -22 ) {
        risk = "10%"
    }
    else if (score > -22 && score < -14) {
        risk = "between 10 and 20%"
    }
     else if (score == -14 ) {
        risk = "20%"
    }
    else if (score > -14 && score < -8) {
        risk = "between 20 and 30%"
    }
     else if (score == -8 ) {
        risk = "30%"
    }
    else if (score > -8 && score < -4) {
        risk = "between 30 and 40%"
    }
    else if (score == -4 ) {
        risk = "40%"
    }
    else if (score > -4 && score < 0) {
        risk = "between 40 and 50%"
    }
    else if (score == 0 ) {
        risk = "50%"
    }
    else if (score > 0 && score < 4) {
        risk = "between 50 and 60%"
    }
    else if (score == 4 ) {
        risk = "60%"
    }
    else if (score > 4 && score < 8) {
        risk = "between 50 and 60%"
    }
    else if (score == 8 ) {
        risk = "60%"
    }
    else if (score > 8 && score < 14) {
        risk = "between 70 and 80%"
    }
    else if (score == 14 ) {
        risk = "80%"
    }
    else if (score > 14 && score < 22) {
        risk = "between 80 and 90%"
    }
    else if (score == 22 ) {
        risk = "90%"
    }
    else if (score > 22 && score < 29) {
        risk = "between 90 and 95%"
    }
    else if (score == 29 ) {
        risk = "95%"
    }
    else if (score > 29 && score < 39) {
        risk = "between 95 and 98%"
    }
    else if (score == 39 ) {
        risk = "98%"
    }
    else if (score > 39 && score < 45) {
        risk = "between 98 and 99%"
    }
    else if (score == 45 ) {
        risk = "99%"
    }
    else if (score > 49) {
        risk = "greater than 99%"
    }
    var score = Math.round(score * 10) / 10
document.getElementById("prompt1").innerHTML = "Katz Nomogram score =";
document.getElementById("prompt2").innerHTML = "The predicted risk of having 4 or more lymph nodes positive is";
document.getElementById("output").innerHTML = score;
document.getElementById("Krisk").innerHTML = risk;
}
