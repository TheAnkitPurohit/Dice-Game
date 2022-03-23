const randomNumber1 = Math.floor(Math.random() * 6) + 1;
var img1 = document.getElementsByClassName("img1")[0];
img1.setAttribute("src", `images/dice${randomNumber1}.png`);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
var img2 = document.getElementsByClassName("img2")[0];
img2.setAttribute("src", `images/dice${randomNumber2}.png`);

// heading change
let heading = document.getElementsByTagName("h1")[0];
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = `	
    <i class="fa fa-flag" style="color: red;"> </i> Player 1 Wins!`;
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = `Player 2 Wins! <i class="fa fa-flag" style="color: red;"> </i>`;
} else if (randomNumber1 === randomNumber2) {
  heading.textContent = `Draw!`;
}
