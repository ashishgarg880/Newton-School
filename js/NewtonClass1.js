for (var j = 1; j <= 8; j++) {
  for (var i = 1; i <= 8; i++) {
    var black = document.createElement('div');
    black.className = 'black';
    black.id = "" + j + i;
    var white = document.createElement('div');
    white.className = 'white';
    white.id = "" + j + i;
    if ((j % 2 == 1 && i % 2 == 1) || (j % 2 == 0 && i % 2 == 0)) {
      document.getElementById("chess").appendChild(white);
      
    } 
    else {

      document.getElementById("chess").appendChild(black);
    }
  }
}

var btn = document.querySelector('#chess');
btn.addEventListener('click',(event)=>{
    console.log("clicked",event.target);
})

function pressHandler(e){
// target key

if(key=='rightKey'){
	//move troop right
  var troop = document.getElementsByClass('troop')[0];
  var id = troop.id; //11
  var newId = 12
  //remive current troop class
  //assign new troop class
}  

	console.log(e.target);
}

document.getElementById('11').className+=' troop';
var chess=document.getElementById('chess');
console.log(chess);
chess.addEventListener('keypress',pressHandler);

