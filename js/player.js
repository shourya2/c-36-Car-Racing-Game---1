class Player {
 constructor(){

 }  
 
getCount(){

var playerCountRef = database.ref("playerCount")
playerCountRef.on("value",function(data){
playerCount = data.val()

})
} 

updateCount(Count){

database.ref("/").update({
playerCount : Count   
})

}

update(updatedName){
var playerIndex = "player"+playerCount;
database.ref(playerIndex).set({
    name : updatedName
})

}


}