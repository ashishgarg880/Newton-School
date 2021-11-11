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

var x =33
var curr_troops = '11';

var curr_knight = 'knight';

var btn = document.querySelector('#chess');

btn.addEventListener('click',(event)=>{
    console.log("clicked",event.target);
    var clickID = event.target.id;
    var clickName = event.target.className;
    console.log(clickName,"CLickName");
    console.log(curr_troops,clickID);
    document.getElementById(curr_troops).className=document.getElementById(curr_troops).className.replace(" troop","");
    document.getElementById(clickID).className=document.getElementById(clickID).className+" troop";
    console.log(event.target.className);
    curr_troops = clickID; 

    if(clickName==curr_knight){
      console.log("CLICK_KNIGHT",event.target);
      document.getElementsByClassName('KNIG')
      
    }
})


// var btn2 = document.querySelector('#chess');
// btn2.addEventListener('click',(event)=>
// {
//   console.log('knight');
// })

console.log(window)

function pressHandler(e){
// target key
  if(key=='rightKey'){
    //move troop right
    var troop = document.getElementsByClass('troop')[0];
    var id = troop.id; //11
    var newId = 12
    //remive current tssssroop class
    //assign new troop class
  }
	console.log(e.target);
}

document.getElementById('83').className+=' knight';
 

document.getElementById('11').className+=' troop';
var chess=document.getElementById('chess');
console.log(chess);
chess.addEventListener('keypress',pressHandler);

