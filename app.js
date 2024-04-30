

var user_nmb = document.getElementById("user_nmb");
var random_nmb = document.getElementById("random_nmb");
var result = document.getElementById("result");
var box_1_result = document.getElementById("box_1_result");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var total = document.getElementById("total");
var msg = document.getElementById("msg");

var count = 10;
var win = 0;
var loss = 0;

function tryMyLuck(userNmb) {
  // alert(userNmb);
  var randomNmb = Math.random() * 6;
  var ceil = Math.ceil(randomNmb);
  console.log(ceil);
  user_nmb.innerText = userNmb;
  random_nmb.innerText = ceil;

  // total nmb main sy 1 nmbr nikal do.
  total.innerText = --count;
  
  if (ceil === userNmb) {
    console.log("user wins");
    result.innerText = "You won";
    box_1_result.style.backgroundColor = "Green";
    result.style.color = "yellow";
    // total nmb main sy 1 nmbr nikal do.
    win_html.innerText = ++win;
  } else {
    result.innerText = "You Loss";
    box_1_result.style.backgroundColor = "red";
    result.style.color = "yellow";
    loss_html.innerText = ++loss;
  }

  checkResult();
}

function checkResult() {
  if (count == 0) {
    if (win >= 3) {
      msg.innerText = "Congrats! You won";
    } else {
      msg.innerText = "Sorry! You loss try again";
    }
    count = 10;
    win = 0;
    loss = 0;
    total.innerText = count;
    win_html.innerText = loss;
    loss_html.innerText = win;
  }
}