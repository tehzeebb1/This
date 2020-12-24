var canvas
var gameState=0;
var playerCount;
var database;
var form,player,game;
var backgroundImg;
var allPlayers;
var player1, player2,players;
var player1Img, player2Img;
var reward,coin, cImg, mImg, hImg;
var wallGroup, rewardGroup, confGroup;
var confidence = 0;
var cb1, cb2, cb3, cb4, cb5, cb6, cb7, cb8, cb9, cb10;
var mad1, mad2, mad3, mad4, mad5, mad6;
var h1, h2, h3, h4, h5, h6;
var madGroup, hurryGroup;
var endGameImg,endGame;

var coinSound,cbSound,fireSound,firstSound,wgSound,resetSound;

function preload()
{
   // backgroundImg=loadImage("Images/wp2870968.jpg");
    coinSound=loadSound("Coin Game.mp3");
    resetSound=loadSound("reset.mp3");
    cbSound=loadSound("C B Game.mp3");
    fireSound=loadSound("Fire Game.mp3");
    firstSound=loadSound("First Game.mp3");
    wgSound=loadSound("Whole Game.mp3");
    player1Img=loadImage("Images/Sun1.png");
    player2Img=loadImage("Images/WingBot.png");
    hImg=loadAnimation("Images/Hurry1.png", "Images/Hurry2.png", "Images/Hurry3.png", "Images/Hurry4.png", "Images/Hurry5.png", "Images/Hurry6.png", "Images/Hurry7.png");
    mImg=loadAnimation("Images/Mad1.png", "Images/Mad2.png", "Images/Mad3.png", "Images/Mad4.png", "Images/Mad5.png", "Images/Mad6.png", "Images/Mad7.png");
    cImg=loadAnimation("Images/C1.png", "Images/C2.png", "Images/C3.png", "Images/C4.png", "Images/C5.png", "Images/C6.png");
    rewardImg = loadAnimation("Images/Coin1.png","Images/Coin2.png", "Images/Coin3.png", "Images/Coin4.png", "Images/Coin5.png", "Images/Coin6.png", "Images/Coin7.png", "Images/Coin8.png", "Images/Coin9.png", "Images/Coin10.png");
    endGameImg=loadImage("Images/End.png");
}

function setup()
{
    canvas=createCanvas(displayWidth-100, displayHeight-100);
    //background("Black");
    database=firebase.database();
    game = new Game();
    game.getState();
    game.start();
   
    wallGroup = new Group();
    rewardGroup = new Group();
    confGroup=new Group();
    madGroup = new Group();
    hurryGroup = new Group();

}
function draw()
{
if(playerCount === 2)
{
game.update(1);
}
if(gameState === 1)
{
    clear();
    game.play();
}
if(gameState === 2)
{
    game.end();
}
}