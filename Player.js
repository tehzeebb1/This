class Player
{
    constructor()
    {
        this.name=null;
        this.index=null;
        this.playerY=250;
        this.playerX=250;
        this.confidence=0;
        
    }
      getCount()
   {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){playerCount=data.val();})
   }
   updateCount(count)
   {
    database.ref('/').update({
        playerCount:count
       });
   }

   update()
   {
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
        name:this.name,
       playerY:this.playerY,
       playerX:this.playerX,
       confidence:this.confidence
    });
   }
   static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })

   }
   playersGone()
   {
    var playerInfoRef = database.ref('players');
    playerInfoRef.remove();
   }

   }

  
   

