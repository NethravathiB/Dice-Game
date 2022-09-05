var randomnumber1 =Math.floor( Math.random()*6);
randomnumber1+=1;
var dice1="dice"+randomnumber1+".png";
document.querySelector(".img1").setAttribute("src","images/"+dice1);

var randomnumber2 =Math.floor( Math.random()*6);
randomnumber2+=1;
var dice2="dice"+randomnumber2+".png";
document.querySelector(".img2").setAttribute("src","images/"+dice2);

//setting h1

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player1 wins!!🚩";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player2 wins!!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}