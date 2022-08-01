var randomNumber1=Math.floor(Math.random()*6)+1;

var randomimg1= "images/dice"+randomNumber1+".png";

var img1= document.querySelectorAll("img")[0];

img1.setAttribute("src",randomimg1);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomimg2= "images/dice"+randomNumber2+".png";

var img2= document.querySelectorAll("img")[1];

img2.setAttribute("src",randomimg2);

var title= document.querySelectorAll("h1")[0];

if(randomNumber1>randomNumber2){
  title.innerText="🚩Player 1 Wins";
}

else if (randomNumber2>randomNumber1) {
  title.innerText="Player 2 Wins🚩";
}

else{
  title.innerText="Match Draw";
}
