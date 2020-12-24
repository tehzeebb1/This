class Game
{
   constructor()
   {

    
   }
   getState()
   {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){gameState=data.val();})
        console.log("gameState is:"+gameStateRef)
   }
   update(state)
   {
    database.ref('/').update({
        gameState:state
       });
   }
   
   async start()
   {
       
    if (gameState === 0)
    {
        console.log("inside start");
        player=new Player();
        var playerCountRef = await database.ref('playerCount').once("value");

        if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
        player.getCount();
        }
        form=new Form();
        form.display();     
    }
    //add players here
    
    cb1 = createSprite(180, 300);
    cb1.addAnimation("conf", cImg);
    cb1.scale = 0.05;
    cb2 = createSprite(400, 160);
    cb2.addAnimation("conf", cImg);
    cb2.scale = 0.05;
    cb3 = createSprite(975, 170);
    cb3.addAnimation("conf", cImg);
    cb3.scale = 0.05;
    cb4 = createSprite(915, 565);
    cb4.addAnimation("conf", cImg);
    cb4.scale = 0.05;
    cb5 = createSprite(340, 575);
    cb5.addAnimation("conf", cImg);
    cb5.scale = 0.05;
    cb6 = createSprite(750, 468);
    cb6.addAnimation("conf", cImg);
    cb6.scale = 0.05;
    cb7 = createSprite(55, 370);
    cb7.addAnimation("conf", cImg);
    cb7.scale = 0.05;
    cb8 = createSprite(520, 225);
    cb8.addAnimation("conf", cImg);
    cb8.scale = 0.05;
    cb9 = createSprite(1090, 110);
    cb9.addAnimation("conf", cImg);
    cb9.scale = 0.05;
    cb10 = createSprite(110, 70);
    cb10.addAnimation("conf", cImg);
    cb10.scale = 0.05;
   
    mad1 = createSprite(435, 350);
    mad1.addAnimation("mad", mImg);
    mad1.scale = 0.4;
    mad2 = createSprite(290, 230);
    mad2.addAnimation("mad", mImg);
    mad2.scale = 0.4;
    mad3 = createSprite(530, 540);
    mad3.addAnimation("mad", mImg);
    mad3.scale = 0.4;
    mad4 = createSprite(490, 415);
    mad4.addAnimation("mad", mImg);
    mad4.scale = 0.4;
    mad5 = createSprite(175, 450);
    mad5.addAnimation("mad", mImg);
    mad5.scale = 0.4;
    mad6 = createSprite(600, 250);
    mad6.addAnimation("mad", mImg);
    mad6.scale = 0.4;

    h1 = createSprite(260, 350);
    h1.addAnimation("hurry", hImg);
    h1.scale = 0.6;
    h2 = createSprite(820, 150);
    h2.addAnimation("hurry", hImg);
    h2.scale = 0.6;
    h3 = createSprite(100, 230);
    h3.addAnimation("hurry", hImg);
    h3.scale = 0.6;
    h4 = createSprite(915, 470);
    h4.addAnimation("hurry", hImg);
    h4.scale = 0.6;
    h5 = createSprite(1035, 425);
    h5.addAnimation("hurry", hImg);
    h5.scale = 0.6;
    h6 = createSprite(790, 390);
    h6.addAnimation("hurry", hImg);
    h6.scale = 0.6;
    
    endGame=createSprite(540,250);
    endGame.addImage(endGameImg);
    endGame.scale=0.2;

    madGroup.add(mad1);
    madGroup.add(mad2);
    madGroup.add(mad3);
    madGroup.add(mad4);
    madGroup.add(mad5);
    madGroup.add(mad6);

    hurryGroup.add(h1);
    hurryGroup.add(h2);
    hurryGroup.add(h3);
    hurryGroup.add(h4);
    hurryGroup.add(h5);
    hurryGroup.add(h6);
    
    confGroup.add(cb1);
    confGroup.add(cb2);
    confGroup.add(cb3);
    confGroup.add(cb4);
    confGroup.add(cb5);
    confGroup.add(cb6);
    confGroup.add(cb7);
    confGroup.add(cb8);
    confGroup.add(cb9);
    confGroup.add(cb10);
    
    player1 = createSprite(290, 20)
    player1.addImage(player1Img);
    player1.scale = 0.15;
    player2 = createSprite(320, 20)
    player2.addImage(player2Img);
    player2.scale = 0.1;
    players=[player1,player2];
    createWallPuzzle();
   }
   

   play()
   {
        background("black");
        form.hide();
       
         Player.getPlayerInfo();
            fill("white");
            text(mouseX+","+mouseY,mouseX,mouseY);
            var index = 0;
            var x = 525;
            var y;
            
            drawSprites();
                for (var plr in allPlayers)
                {

                    index = index+1;
                    y = allPlayers[plr].playerY;
                    x = allPlayers[plr].playerX;
                   
                    players[index-1].x=x;
                    players[index-1].y=y;

                   fill("black");
                   textSize(20);
                   text("START POSITION:",10,20)
                   text("Player 1 :" +allPlayers.player1.confidence,650,24);
                   text("Player 2 :" + allPlayers.player2.confidence, 850, 24);
                   

                }
            

         
    
       
 
    // form.hide();
    if(keyIsDown(UP_ARROW)&& player.index != null)
    {
        console.log("It worked!");
        player.playerY = player.playerY-2;
        player.update();
    }
    if(keyIsDown(DOWN_ARROW)&& player.index != null)
    {
        player.playerY = player.playerY+2;
        player.update();
    }
    if(keyIsDown(RIGHT_ARROW)&& player.index != null)
    {
        player.playerX = player.playerX+2;
        player.update();
    }
    if(keyIsDown(LEFT_ARROW)&& player.index != null)
    {
        player.playerX = player.playerX-2;
        player.update();
    }
    
   //write code here to spawn the coins
   
   if (frameCount % 20 === 0) 
   {
    var reward = createSprite(600,120,40,10);
    reward.addAnimation("rewardCoin", rewardImg);
    reward.scale = 0.2;
    reward.y = Math.round(random(100,1000));
    reward.x = Math.round(random(100, 1000));
  
   
    
    //add each cloud to the group
    rewardGroup.add(reward);
  }

 

  if (player.index !== null)
  {
      for (var i = 0; i < rewardGroup.length; i++) 
      {
          if (rewardGroup.get(i).isTouching(players)) {
              coinSound.play();
            rewardGroup.get(i).destroy();
            console.log("before:"+player.confidence);
              player.confidence =player.confidence+1;
              console.log("after:"+player.confidence);
              player.update();
              
          }
         
          
      }
      for (var i = 0; i < confGroup.length; i++) 
      {
          if (confGroup.get(i).isTouching(players))
           {
               cbSound.play();
            confGroup.get(i).destroy();
            console.log("before:"+player.confidence);
              player.confidence =player.confidence+5;
              console.log("after:"+player.confidence);
              player.update();
              
          }
         
          
      }
      for (var i = 0; i < madGroup.length; i++) 
      {
          if (madGroup.get(i).isTouching(players)) {
              fireSound.play();
            madGroup.get(i).destroy();
           
              player.confidence =player.confidence-10;
              
              player.update();
              
          }
        
        }

        for (var i = 0; i < hurryGroup.length; i++) 
      {
          if (hurryGroup.get(i).isTouching(players)) 
          {
              fireSound.play();
            hurryGroup.get(i).destroy();
           
              player.confidence =player.confidence-5;
              
              player.update();
              
          }
        }

      for (var i = 0; i < wallGroup.length; i++) 
      {
        if (wallGroup.get(i).isTouching(players)) 
        { 

            //resetSound.play();
            console.log("my wall:"+wallGroup.get(24));
            if(player.index==1)
            {
                player.playerX =290;
                player.playerY =20;
            }
            if(player.index==2)
            {
                player.playerX =320;
                player.playerY =20;
            }
           
            player.update();
            
        }
       
        
    }
    if(endGame.isTouching(players))
   {
       console.log("Ufffffffffffffff")
        end();
   }
     
    
  }
  
      
   }
   end()
   {
    imageMode(CENTER);
    Player.getPlayerInfo();  
    console.log("Game Ended");
    fill("red");
    textAlign(CENTER);
    textSize(50);
    // Add ending rank here 

   } 
} 

function createWallPuzzle()
{
    wall1 = createSprite(505, 250, 10,100);
    wall1.shapeColor = "blue";
   
    wall2 = createSprite(540, 200, 80, 10);
    wall2.shapeColor ="blue";
    wall3 = createSprite(575, 215, 10, 20);
    wall3.shapeColor = "blue";
    wall4 = createSprite(575, 285, 10, 20);
    wall4.shapeColor = "blue";
    wall5 = createSprite(540, 300, 80, 10);
    wall5.shapeColor = "blue"
    wall6 = createSprite(595, 230, 50, 10);
    wall6.shapeColor = "blue";
    wall7 = createSprite(595, 270, 50, 10);
    wall7.shapeColor = "blue";
    wall8 = createSprite(625, 300, 10, 70);
    wall8.shapeColor = "blue";
    wall9 = createSprite(625, 215, 10, 40);
    wall9.shapeColor = "blue";
    wall10 = createSprite(670, 250, 10, 100);
    wall10.shapeColor = "blue";
    wall11= createSprite(700, 300, 70, 10);
    wall11.shapeColor = "blue";
    wall12 = createSprite(645, 340, 50, 10);
    wall12.shapeColor = "blue";
    wall13 = createSprite(665, 370, 10, 50);
    wall13.shapeColor = "blue";
    wall14 = createSprite(705, 385, 10, 100);
    wall14.shapeColor = "blue";
    wall15 = createSprite(725, 340, 50, 10);
    wall15.shapeColor = "blue";
    wall16 = createSprite(605, 390, 130, 10);
    wall16.shapeColor = "blue";
    wall17 = createSprite(650, 430, 40, 10);
    wall17.shapeColor = "blue";
    wall18 = createSprite(665, 440, 10, 30);
    wall18.shapeColor = "blue";
    wall19 = createSprite(810, 540, 80, 10);
    wall19.shapeColor = "blue";
    wall20 = createSprite(810, 580, 80, 10);
    wall20.shapeColor = "blue";
    wall21 = createSprite(590, 460, 10, 70);
    wall21.shapeColor = "blue";
    wall22 = createSprite(610, 430, 40, 10);
    wall22.shapeColor = "blue";
    wall23 = createSprite(550, 440, 10, 30);
    wall23.shapeColor = "blue";
    wall24 = createSprite(560, 490, 70, 10);
    wall24.shapeColor = "blue";
    wall25 = createSprite(535, 450, 40, 10);
    wall25.shapeColor = "blue";
    wall26 = createSprite(530, 430, 30, 10);
    wall26.shapeColor = "blue";
    wall27 = createSprite(490, 430, 60, 10);
    wall27.shapeColor = "blue";
    wall28 = createSprite(515, 390, 50, 10);
    wall28.shapeColor = "blue";
    wall29 = createSprite(455, 405, 10, 60);
    wall29.shapeColor = "blue";
    wall30 = createSprite(490, 370, 10, 50);
    wall30.shapeColor = "blue";
    wall31 = createSprite(460, 340, 70, 10);
    wall31.shapeColor = "blue";
    wall32 = createSprite(420, 380, 60, 10);
    wall32.shapeColor = "blue";
    wall33 = createSprite(390, 338, 10, 95);
    wall33.shapeColor = "blue";
    wall34 = createSprite(490, 450, 60, 10);
    wall34.shapeColor = "blue";
    wall35 = createSprite(430, 290, 10, 90);
    wall35.shapeColor = "blue";
    wall36= createSprite(490, 490, 80, 10);
    wall36.shapeColor = "blue";
    wall37 = createSprite(390, 250, 70, 10);
    wall37.shapeColor = "blue";
    wall38 = createSprite(355, 290, 80, 10);
    wall38.shapeColor = "blue";
    wall39 = createSprite(450, 450, 30, 10);
    wall39.shapeColor = "blue";
    wall40 = createSprite(430, 490, 60, 10);
    wall40.shapeColor = "blue";
    wall41 = createSprite(395, 505, 10, 40);
    wall41.shapeColor = "blue";
    wall42 = createSprite(360, 505, 10, 40);
    wall42.shapeColor = "blue";
    wall43 = createSprite(378, 530, 45, 10);
    wall43.shapeColor = "blue";
    wall44 = createSprite(430, 435, 10, 40);
    wall44.shapeColor = "blue";
    wall45 = createSprite(400, 435, 10, 40);
    wall45.shapeColor = "blue";
    wall46 = createSprite(415, 410, 40, 10);
    wall46.shapeColor = "blue";
    wall47 = createSprite(380, 450, 40, 10);
    wall47.shapeColor = "blue";
    wall48 = createSprite(360, 465, 10, 40);
    wall48.shapeColor = "blue";
    wall49 = createSprite(640, 560, 140, 10);
    wall49.shapeColor = "blue";
    wall50 = createSprite(705, 520, 10, 70);
    wall50.shapeColor = "blue";
    wall51 = createSprite(705, 460, 10, 60);
    wall51.shapeColor = "blue";
    wall52 = createSprite(620, 520, 100, 10);
    wall52.shapeColor = "blue";
    wall53 = createSprite(665, 485, 10, 65);
    wall53.shapeColor = "blue";
    wall54 = createSprite(760, 340, 30, 10);
    wall54.shapeColor = "blue";
    wall55 = createSprite(770, 290, 10, 110);
    wall55.shapeColor = "blue";
    wall56 = createSprite(730, 250, 10, 110);
    wall56.shapeColor = "blue";
    wall57 = createSprite(790, 240, 40, 10);
    wall57.shapeColor = "blue";
    wall58= createSprite(750, 200, 40, 10);
    wall58.shapeColor = "blue";
    wall59 = createSprite(810, 205, 10, 80);
    wall59.shapeColor = "blue";
    wall60 = createSprite(770, 165, 10, 80);
    wall60.shapeColor = "blue";
    wall61 = createSprite(750, 130, 50, 10);
    wall61.shapeColor = "blue";
    wall62 = createSprite(825, 160, 40, 10);
    wall62.shapeColor = "blue";
    wall63 = createSprite(825, 125, 40, 10);
    wall63.shapeColor = "blue";
    wall64 = createSprite(740, 90, 70, 10);
    wall64.shapeColor = "blue";
    wall65 = createSprite(700, 75, 10, 40);
    wall65.shapeColor = "blue";
    wall66 = createSprite(660, 75, 10, 40);
    wall66.shapeColor = "blue";
    wall67 = createSprite(800, 110, 10, 40);
    wall67.shapeColor = "blue";
    wall68 = createSprite(790, 90, 30, 10);
    wall68.shapeColor = "blue";
    wall69 = createSprite(840, 190, 10, 50);
    wall69.shapeColor = "blue";
    wall70 = createSprite(840, 95, 10, 50);
    wall70.shapeColor = "blue";
    wall71 = createSprite(880, 145, 10, 150);
    wall71.shapeColor = "blue";
    wall72 = createSprite(730, 150, 10, 50);
    wall72.shapeColor = "blue";
    wall73 = createSprite(670, 190, 10, 30);
    wall73.shapeColor = "blue";
    wall74 = createSprite(700, 170, 70, 10);
    wall74.shapeColor = "blue";
    wall75 = createSprite(655, 130, 60, 10);
    wall75.shapeColor = "blue";
    wall76 = createSprite(625, 160, 10, 70);
    wall76.shapeColor = "blue";
    wall77 = createSprite(625, 110, 10, 40);
    wall77.shapeColor = "blue";
    wall78 = createSprite(640, 90, 40, 10);
    wall78.shapeColor = "blue";
    wall79 = createSprite(840, 255, 10, 80);
    wall79.shapeColor = "blue";
    wall80= createSprite(880, 240, 10, 40);
    wall80.shapeColor = "blue";
    wall81 = createSprite(860, 290, 50, 10);
    wall81.shapeColor = "blue";
    wall82 = createSprite(900, 255, 50, 10);
    wall82.shapeColor = "blue";
    wall83 = createSprite(920, 280, 10, 40);
    wall83.shapeColor = "blue";
    wall84 = createSprite(890, 305, 10, 40);
    wall84.shapeColor = "blue";
    wall85 = createSprite(945, 295, 40, 10);
    wall85.shapeColor = "blue";
    wall86 = createSprite(935, 330, 100, 10);
    wall86.shapeColor = "blue";
    wall87 = createSprite(1030, 345, 10, 40);
    wall87.shapeColor = "blue";
    wall88 = createSprite(990, 345, 10, 40);
    wall88.shapeColor = "blue";
    wall89 = createSprite(1030, 310, 10, 40);
    wall89.shapeColor = "blue";
    wall90 = createSprite(995, 295, 70, 10);
    wall90.shapeColor = "blue";
    wall91 = createSprite(970, 360, 50, 10);
    wall91.shapeColor = "blue";
    wall92 = createSprite(1030, 380, 10, 30);
    wall92.shapeColor = "blue";
    wall93 = createSprite(1045, 400, 40, 10);
    wall93.shapeColor = "blue";
    wall94 = createSprite(1045, 440, 40, 10);
    wall94.shapeColor = "blue";
    wall95 = createSprite(1060, 380, 10, 50);
    wall95.shapeColor = "blue";
    wall96 = createSprite(1060, 460, 10, 50);
    wall96.shapeColor = "blue";
    wall97 = createSprite(1100, 435, 10, 160);
    wall97.shapeColor = "blue";
    wall98 = createSprite(970, 400, 50, 10);
    wall98.shapeColor = "blue";
    wall99 = createSprite(990, 460, 10, 120);
    wall99.shapeColor = "blue";
    wall100 = createSprite(1045, 520, 120, 10);
    wall100.shapeColor = "blue";
    wall101 = createSprite(1045, 480, 40, 10);
    wall101.shapeColor = "blue";
    wall102 = createSprite(1030, 460, 10, 40);
    wall102.shapeColor = "blue";
    wall103 = createSprite(910, 360, 70, 10);
    wall103.shapeColor = "blue";
    wall104 = createSprite(870, 340, 10, 50);
    wall104.shapeColor = "blue";
    wall105 = createSprite(835, 340, 10, 50);
    wall105.shapeColor = "blue";
    wall106 = createSprite(855, 320, 40, 10);
    wall106.shapeColor = "blue";
    wall107 = createSprite(805, 370, 70, 10);
    wall107.shapeColor = "blue";
    wall108 = createSprite(805, 405, 70, 10);
    wall108.shapeColor = "blue";
    wall109 = createSprite(835, 430, 10, 40);
    wall109.shapeColor = "blue";
    wall110 = createSprite(875, 440, 10, 80);
    wall110.shapeColor = "blue";
    wall111 = createSprite(895, 440, 10, 80);
    wall111.shapeColor = "blue";
    wall112 = createSprite(935, 425, 10, 60);
    wall112.shapeColor = "blue";
    wall113 = createSprite(950, 400, 20, 10);
    wall113.shapeColor = "blue";
    wall114 = createSprite(950, 450, 40, 10);
    wall114.shapeColor = "blue";
    wall115 = createSprite(950, 485, 40, 10);
    wall115.shapeColor = "blue";
    wall116 = createSprite(970, 467.5, 10, 45);
    wall116.shapeColor = "blue";
    wall117 = createSprite(805, 450, 70, 10);
    wall117.shapeColor = "blue";
    wall118 = createSprite(805, 485, 150, 10);
    wall118.shapeColor = "blue";
    wall119 = createSprite(775, 430, 10, 40);
    wall119.shapeColor = "blue";
    wall120 = createSprite(730, 430, 10, 120);
    wall120.shapeColor = "blue";
    wall121 = createSprite(750, 370, 50, 10);
    wall121.shapeColor = "blue";
    wall122 = createSprite(895, 510, 10, 60);
    wall122.shapeColor = "blue";
    wall123 = createSprite(930, 510, 10, 60);
    wall123.shapeColor = "blue";
    wall124 = createSprite(875, 540, 50, 10);
    wall124.shapeColor = "blue";
    wall125 = createSprite(950, 540, 50, 10);
    wall125.shapeColor = "blue";
    wall126 = createSprite(910, 580, 130, 10);
    wall126.shapeColor = "blue"
    wall127 = createSprite(430, 205, 10, 20);
    wall127.shapeColor = "blue"
    wall128 = createSprite(885, 400, 30, 10);
    wall128.shapeColor = "blue";
    wall129 = createSprite(900, 40, 130, 10);
    wall129.shapeColor = "blue";
    wall130 = createSprite(905, 75, 40, 10);
    wall130.shapeColor = "blue";
    wall131 = createSprite(930, 95, 10, 50);
    wall131.shapeColor = "blue";
    wall132 = createSprite(970, 90, 10, 110);
    wall132.shapeColor = "blue";
    wall133 = createSprite(840, 60, 10, 40);
    wall133.shapeColor = "blue";
    wall134 = createSprite(775, 560, 10, 40);
    wall134.shapeColor = "blue";
    wall135 = createSprite(985, 140, 40, 10);
    wall135.shapeColor = "blue";
    wall136 = createSprite(985, 190, 40, 10);
    wall136.shapeColor = "blue";
    wall137 = createSprite(1000, 220, 10, 50);
    wall137.shapeColor = "blue";
    wall138 = createSprite(1000, 120, 10, 50);
    wall138.shapeColor = "blue";
    wall139 = createSprite(1045, 180, 10, 100);
    wall139.shapeColor = "blue";
    wall140 = createSprite(930, 155, 10, 80);
    wall140.shapeColor = "blue";
    wall141 = createSprite(1060, 330, 10, 60);
    wall141.shapeColor = "blue";   
    wall142 = createSprite(950, 190, 30, 10);
    wall142.shapeColor = "blue";
    wall143 = createSprite(1100, 330, 10, 60);
    wall143.shapeColor = "blue";
    wall144 = createSprite(1015, 265, 40, 10);
    wall144.shapeColor = "blue";
    wall145 = createSprite(1065, 230, 50, 10);
    wall145.shapeColor = "blue";
    wall146 = createSprite(1000, 250, 10, 20);
    wall146.shapeColor = "blue";
    wall147 = createSprite(1045, 265, 30, 10);
    wall147.shapeColor = "blue";
    wall148 = createSprite(1060, 280, 10, 40);
    wall148.shapeColor = "blue";
    wall149 = createSprite(1095, 230, 20, 10);
    wall149.shapeColor = "blue";
    wall150 = createSprite(1100, 265, 10, 70);
    wall150.shapeColor = "blue";
    wall151 = createSprite(1035, 540, 120, 10);
    wall151.shapeColor = "blue";
    wall152 = createSprite(1035, 580, 120, 10);
    wall152.shapeColor = "blue";
    wall153 = createSprite(1100, 560, 10, 50);
    wall153.shapeColor = "blue";
    wall154 = createSprite(1020, 90, 50, 10);
    wall154.shapeColor = "blue";
    wall155 = createSprite(1065, 130, 50, 10);
    wall155.shapeColor = "blue";
    wall156 = createSprite(1090, 165, 10, 80);
    wall156.shapeColor = "blue";
    wall157 = createSprite(1120, 165, 10, 80);
    wall157.shapeColor = "blue";
    wall158 = createSprite(1100, 200, 30, 10);
    wall158.shapeColor= "red";
    wall159 = createSprite(1085, 90, 80, 10);
    wall159.shapeColor = "blue";
    wall160 = createSprite(1120, 110, 10, 30);
    wall160.shapeColor = "blue";
    wall161 = createSprite(680, 60, 40, 10);
    wall161.shapeColor = "blue";
    wall162 = createSprite(360, 210, 10, 70);
    wall162.shapeColor = "blue";
    wall163 = createSprite(320, 270, 10, 50);
    wall163.shapeColor = "blue";
    wall164 = createSprite(300, 210, 40, 10);
    wall164.shapeColor = "blue";
    wall165 = createSprite(300, 250, 40, 10);
    wall165.shapeColor = "blue";
    wall166 = createSprite(320, 195, 10, 40);
    wall166.shapeColor = "blue";
    wall167 = createSprite(280, 195, 10, 40);
    wall167.shapeColor = "blue";
    wall168 = createSprite(240, 195, 10, 40);
    wall168.shapeColor = "blue";
    wall169 = createSprite(280, 265, 10, 40);
    wall169.shapeColor = "blue";
    wall170 = createSprite(240, 265, 10, 40);
    wall170.shapeColor = "blue";
    wall171 = createSprite(240, 230, 10, 60);
    wall171.shapeColor = "blue";
    wall172 = createSprite(300, 170, 50, 10);
    wall172.shapeColor = "blue";
    wall173 = createSprite(380, 170, 50, 10);
    wall173.shapeColor = "blue";
    wall174 = createSprite(360, 130, 90, 10);
    wall174.shapeColor = "blue";
    wall175 = createSprite(310, 115, 10, 40);
    wall175.shapeColor = "blue";
    wall176 = createSprite(270, 115, 10, 40);
    wall176.shapeColor = "blue";
    wall177 = createSprite(240, 160, 10, 40);
    wall177.shapeColor = "red";
    wall178 = createSprite(255, 140, 40, 10);
    wall178.shapeColor = "blue";
    wall179 = createSprite(225, 290, 40, 10);
    wall179.shapeColor = "blue";
    wall180 = createSprite(225, 330, 40, 10);
    wall180.shapeColor = "blue";
    wall181 = createSprite(280, 320, 10, 70);
    wall181.shapeColor = "blue";
    wall182 = createSprite(305, 360, 60, 10);
    wall182.shapeColor = "blue";
    wall183 = createSprite(305, 400, 60, 10);
    wall183.shapeColor = "blue";
    wall184 = createSprite(335, 380, 10, 50);
    wall184.shapeColor = "blue";
    wall185 = createSprite(240, 380, 10, 100);
    wall185.shapeColor = "blue";
    wall186 = createSprite(280, 420, 10, 50);
    wall186.shapeColor = "blue";
    wall187 = createSprite(295, 450, 40, 10);
    wall187.shapeColor = "blue";
    wall188 = createSprite(295, 490, 40, 10);
    wall188.shapeColor = "blue";

    wall189 = createSprite(320, 470, 10, 50);
    wall189.shapeColor = "blue";
    wall190 = createSprite(225, 430, 40, 10);
    wall190.shapeColor = "blue";
    wall191 = createSprite(225, 470, 40, 10);
    wall191.shapeColor = "blue";
    wall192 = createSprite(280, 525, 10, 60);
    wall192.shapeColor = "blue";
    wall193 = createSprite(240, 530, 10, 120);
    wall193.shapeColor = "blue";
    wall194 = createSprite(350, 550, 130, 10);
    wall194.shapeColor = "blue";
    wall195 = createSprite(340, 590, 210, 10);
    wall195.shapeColor = "blue";
    wall196 = createSprite(470, 580, 10, 30);
    wall196.shapeColor = "blue";
    wall197 = createSprite(520, 560, 110, 10);
    wall197.shapeColor = "blue";
    wall198 = createSprite(460, 590, 30, 10);
    wall198.shapeColor = "blue";
    wall199 = createSprite(500, 520, 150, 10);
    wall199.shapeColor = "blue";
    wall200 = createSprite(420, 535, 10, 40);
    wall200.shapeColor = "blue";
    wall201 = createSprite(430, 200, 10, 60);
    wall201.shapeColor = "blue";   
    wall202 = createSprite(470, 200, 10, 60);
    wall202.shapeColor = "blue";
    wall203 = createSprite(420, 170, 30, 10);
    wall203.shapeColor = "blue";
    wall204 = createSprite(500, 170, 70, 10);
    wall204.shapeColor = "blue";
    wall205 = createSprite(450, 130, 100, 10);
    wall205.shapeColor = "blue";
    wall206 = createSprite(540, 130, 10, 90);
    wall206.shapeColor = "blue";
    wall207 = createSprite(495, 100, 10, 50);
    wall207.shapeColor = "blue";
    wall208 = createSprite(450, 230, 50, 10);
    wall208.shapeColor = "blue";
    wall209 = createSprite(200, 380, 10, 110);
    wall209.shapeColor = "blue";
    wall210 = createSprite(200, 510, 10, 90);
    wall210.shapeColor = "blue";
    wall211 = createSprite(160, 490, 10, 50);
    wall211.shapeColor = "blue";
    wall212 = createSprite(200, 250, 10, 90);
    wall212.shapeColor = "blue";
    wall213 = createSprite(160, 270, 10, 50);
    wall213.shapeColor = "blue";
    wall214 = createSprite(160, 380, 10, 180);
    wall214.shapeColor = "blue";
    wall215 = createSprite(150, 560, 110, 10);
    wall215.shapeColor = "blue";
    wall216 = createSprite(145, 520, 40, 10);
    wall216.shapeColor = "blue";
    wall217 = createSprite(130, 510, 10, 30);
    wall217.shapeColor = "blue";
    wall218 = createSprite(90, 530, 10, 70);
    wall218.shapeColor = "blue";
    wall219 = createSprite(110, 490, 50, 10);
    wall219.shapeColor = "blue";
    wall220 = createSprite(115, 200, 180, 10);
    wall220.shapeColor = "blue";
    wall221 = createSprite(115, 250, 80, 10);
    wall221.shapeColor = "blue";
    wall222 = createSprite(30, 260, 10, 110);
    wall222.shapeColor = "blue";
    wall223 = createSprite(70, 260, 10, 30);
    wall223.shapeColor = "blue";
    wall224 = createSprite(95, 280, 60, 10);
    wall224.shapeColor = "blue";
    wall225 = createSprite(55, 320, 60, 10);
    wall225.shapeColor = "blue";
    wall226 = createSprite(130, 325, 10, 100);
    wall226.shapeColor = "blue";
    wall227 = createSprite(90, 330, 10, 30);
    wall227.shapeColor = "blue";
    wall228 = createSprite(65, 350, 60, 10);
    wall228.shapeColor = "blue";
    wall229 = createSprite(80, 390, 100, 10);
    wall229.shapeColor = "blue";
    wall230 = createSprite(130, 380, 10, 30);
    wall230.shapeColor = "blue";
    wall231 = createSprite(30, 370, 10, 50);
    wall231.shapeColor = "blue";
    wall232 = createSprite(245, 90, 60, 10);
    wall232.shapeColor = "blue";
    wall233 = createSprite(325, 90, 40, 10);
    wall233.shapeColor = "blue";
    wall234 = createSprite(170, 50, 170, 10);
    wall234.shapeColor = "blue";
    wall235 = createSprite(215, 110, 10, 50);
    wall235.shapeColor = "blue";
    wall236 = createSprite(175, 110, 10, 50);
    wall236.shapeColor = "blue";
    wall237 = createSprite(130, 90, 90, 10);
    wall237.shapeColor = "blue";
    wall238 = createSprite(195, 140, 50, 10);
    wall238.shapeColor = "blue";
    wall239 = createSprite(90, 70, 10, 50);
    wall239.shapeColor = "blue";
    wall240 = createSprite(520, 80, 50, 10);
    wall240.shapeColor = "blue";
    wall241 = createSprite(350, 70, 10, 50);
    wall241.shapeColor = "blue";
    wall242 = createSprite(255, 30, 10, 50);
    wall242.shapeColor = "blue";
    wall243 = createSprite(350, 30, 10, 50);
    wall243.shapeColor = "blue";

wallGroup.add(wall243)
wallGroup.add(wall242)
wallGroup.add(wall1)
wallGroup.add(wall2)
wallGroup.add(wall3)
wallGroup.add(wall4)
wallGroup.add(wall5)
wallGroup.add(wall6)
wallGroup.add(wall7)
wallGroup.add(wall8)
wallGroup.add(wall9)
wallGroup.add(wall10)
wallGroup.add(wall11)
wallGroup.add(wall12)
wallGroup.add(wall13)
wallGroup.add(wall14)
wallGroup.add(wall15)
wallGroup.add(wall16)
wallGroup.add(wall17)
wallGroup.add(wall18)
wallGroup.add(wall19)
wallGroup.add(wall20)
wallGroup.add(wall21)
wallGroup.add(wall22)
wallGroup.add(wall23)
wallGroup.add(wall24)
wallGroup.add(wall25)
wallGroup.add(wall26)
wallGroup.add(wall27)
wallGroup.add(wall28)
wallGroup.add(wall29)
wallGroup.add(wall30)
wallGroup.add(wall31)
wallGroup.add(wall32)
wallGroup.add(wall33)
wallGroup.add(wall34)
wallGroup.add(wall35)
wallGroup.add(wall36)
wallGroup.add(wall37)
wallGroup.add(wall38)
wallGroup.add(wall39)
wallGroup.add(wall40)
wallGroup.add(wall41)
wallGroup.add(wall42)
wallGroup.add(wall43)
wallGroup.add(wall44)
wallGroup.add(wall45)
wallGroup.add(wall46)
wallGroup.add(wall47)
wallGroup.add(wall48)
wallGroup.add(wall49)
wallGroup.add(wall50)
wallGroup.add(wall51)
wallGroup.add(wall52)
wallGroup.add(wall53)
wallGroup.add(wall54)
wallGroup.add(wall55)
wallGroup.add(wall56)
wallGroup.add(wall57)
wallGroup.add(wall58)
wallGroup.add(wall59)
wallGroup.add(wall60)
wallGroup.add(wall61)
wallGroup.add(wall62)
wallGroup.add(wall63)
wallGroup.add(wall64)
wallGroup.add(wall65)
wallGroup.add(wall66)
wallGroup.add(wall67)
wallGroup.add(wall68)
wallGroup.add(wall69)
wallGroup.add(wall70)
wallGroup.add(wall71)
wallGroup.add(wall72)
wallGroup.add(wall73)
wallGroup.add(wall74)
wallGroup.add(wall75)
wallGroup.add(wall76)
wallGroup.add(wall77)
wallGroup.add(wall78)
wallGroup.add(wall79)
wallGroup.add(wall80)
wallGroup.add(wall81)
wallGroup.add(wall82)
wallGroup.add(wall83)
wallGroup.add(wall84)
wallGroup.add(wall85)
wallGroup.add(wall86)
wallGroup.add(wall87)
wallGroup.add(wall88)
wallGroup.add(wall89)
wallGroup.add(wall90)
wallGroup.add(wall91)
wallGroup.add(wall92)
wallGroup.add(wall93)
wallGroup.add(wall94)
wallGroup.add(wall95)
wallGroup.add(wall96)
wallGroup.add(wall97)
wallGroup.add(wall98)
wallGroup.add(wall99)
wallGroup.add(wall100)
wallGroup.add(wall101)
wallGroup.add(wall102)
wallGroup.add(wall103)
wallGroup.add(wall104)
wallGroup.add(wall105)
wallGroup.add(wall106)
wallGroup.add(wall107)
wallGroup.add(wall108)
wallGroup.add(wall109)
wallGroup.add(wall110)
wallGroup.add(wall111)
wallGroup.add(wall112)
wallGroup.add(wall113)
wallGroup.add(wall114)
wallGroup.add(wall115)
wallGroup.add(wall116)
wallGroup.add(wall117)
wallGroup.add(wall118)
wallGroup.add(wall119)
wallGroup.add(wall120)
wallGroup.add(wall121)
wallGroup.add(wall122)
wallGroup.add(wall123)
wallGroup.add(wall124)
wallGroup.add(wall125)
wallGroup.add(wall126)
wallGroup.add(wall127)
wallGroup.add(wall128)
wallGroup.add(wall129)
wallGroup.add(wall130)
wallGroup.add(wall131)
wallGroup.add(wall132)
wallGroup.add(wall133)
wallGroup.add(wall134)
wallGroup.add(wall135)
wallGroup.add(wall136)
wallGroup.add(wall137)
wallGroup.add(wall138)
wallGroup.add(wall139)
wallGroup.add(wall140)
wallGroup.add(wall141)
wallGroup.add(wall142)
wallGroup.add(wall143)
wallGroup.add(wall144)
wallGroup.add(wall145)
wallGroup.add(wall146)
wallGroup.add(wall147)
wallGroup.add(wall148)
wallGroup.add(wall149)
wallGroup.add(wall150)
wallGroup.add(wall151)
wallGroup.add(wall152)
wallGroup.add(wall153)
wallGroup.add(wall154)
wallGroup.add(wall155)
wallGroup.add(wall156)
wallGroup.add(wall157)
wallGroup.add(wall158)
wallGroup.add(wall159)
wallGroup.add(wall160)
wallGroup.add(wall161)
wallGroup.add(wall162)
wallGroup.add(wall163)
wallGroup.add(wall164)
wallGroup.add(wall165)
wallGroup.add(wall166)
wallGroup.add(wall167)
wallGroup.add(wall168)
wallGroup.add(wall169)
wallGroup.add(wall170)
wallGroup.add(wall171)
wallGroup.add(wall172)
wallGroup.add(wall173)
wallGroup.add(wall174)
wallGroup.add(wall175)
wallGroup.add(wall176)
wallGroup.add(wall177)
wallGroup.add(wall178)
wallGroup.add(wall179)
wallGroup.add(wall180)
wallGroup.add(wall181)
wallGroup.add(wall182)
wallGroup.add(wall183)
wallGroup.add(wall184)
wallGroup.add(wall185)
wallGroup.add(wall186)
wallGroup.add(wall187)
wallGroup.add(wall188)
wallGroup.add(wall189)
wallGroup.add(wall190)
wallGroup.add(wall191)
wallGroup.add(wall192)
wallGroup.add(wall193)
wallGroup.add(wall194)
wallGroup.add(wall195)
wallGroup.add(wall196)
wallGroup.add(wall197)
wallGroup.add(wall198)
wallGroup.add(wall199)
wallGroup.add(wall200)
wallGroup.add(wall201)
wallGroup.add(wall202)
wallGroup.add(wall203)
wallGroup.add(wall204)
wallGroup.add(wall205)
wallGroup.add(wall206)
wallGroup.add(wall207)
wallGroup.add(wall208)
wallGroup.add(wall209)
wallGroup.add(wall210)
wallGroup.add(wall211)
wallGroup.add(wall212)
wallGroup.add(wall213)
wallGroup.add(wall214)
wallGroup.add(wall215)
wallGroup.add(wall216)
wallGroup.add(wall217)
wallGroup.add(wall218)
wallGroup.add(wall219)
wallGroup.add(wall220)
wallGroup.add(wall221)
wallGroup.add(wall222)
wallGroup.add(wall223)
wallGroup.add(wall224)
wallGroup.add(wall225)
wallGroup.add(wall226)
wallGroup.add(wall227)
wallGroup.add(wall228)
wallGroup.add(wall229)
wallGroup.add(wall230)
wallGroup.add(wall231)
wallGroup.add(wall232)
wallGroup.add(wall233)
wallGroup.add(wall234)
wallGroup.add(wall235)
wallGroup.add(wall236)
wallGroup.add(wall237)
wallGroup.add(wall238)
wallGroup.add(wall239)
wallGroup.add(wall240)
wallGroup.add(wall241)

//console.log(wallGroup);
}

