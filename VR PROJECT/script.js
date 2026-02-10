

let maze = [
"m--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
"---x--------x--x--------x--x-----x-----------x-----------x--------x--x--x--x",
"x--xxxxxxx--x--x--xxxx--x--xxxx--x--xxxx--x--xxxx--xxxxxxx--x--x--x--x--x--x",
"x--x--x--------------x--x-----x--x--x-----x-----x--x--------x--x-----x-----x",
"x--x--x--xxxxxxx--xxxxxxx--xxxx--x--x--xxxxxxx--x--xxxx--xxxxxxx--xxxxxxx--x",
"x-----x--------x--x-----------x--x--x--x--x-----------x-----x--------------x",
"xxxx--xxxx--xxxxxxxxxx--x--x--x--xxxxxxx--xxxxxxx--xxxxxxx--xxxxxxx--xxxxxxx",
"x--x--x-----------------x--x-----x-----------------x-----------x--------x--x",
"x--x--x--xxxxxxxxxxxxxxxx--x--x--x--x--xxxxxxx--x--x--x--xxxx--xxxxxxxxxx--x",
"x-----------------x-----x--x--x--x--x--x--x-----x--x--x-----x--------------x",
"x--xxxxxxx--x--xxxxxxx--xxxx--x--x--xxxx--xxxxxxxxxxxxx--xxxxxxx--x--xxxxxxx",
"x--x--------x--x--x-----x-----x--x--------x--x-----------------x--x--------x",
"xxxxxxxxxxxxxxxx--xxxx--x--xxxx--x--xxxxxxx--xxxx--xxxxxxxxxx--xxxxxxxxxx--x",
"x-----x--------x-----x-----x-----x--x-----x--x-----x-----x--------x--x-----x",
"x--x--x--x--x--xxxx--xxxxxxx--x--x--x--x--x--xxxxxxx--xxxxxxxxxx--x--xxxx--x",
"x--x-----x--x-----------x--x--x--------x--------x--x--x--x-----------x-----x",
"xxxxxxx--xxxx--x--xxxx--x--x--xxxx--x--xxxx--xxxx--x--x--x--xxxxxxx--xxxxxxx",
"x-----x-----x--x-----x-----x-----x--x--x--------x--x--------x--x--x--------x",
"x--x--x--x--xxxxxxxxxx--x--x--xxxxxxxxxxxxxxxx--x--xxxxxxx--x--x--x--x--x--x",
"x--x-----x-----x--x--x--x-----x-----x--------x--x-----------x--------x--x--x",
"xxxx--xxxx--xxxx--x--xxxx--xxxx--xxxx--x--xxxx--xxxx--xxxx--x--xxxx--xxxxxxx",
"x--x--x--x--x--------x-----x--------x--x--x--------------x--x--x--x-----x--x",
"x--x--x--xxxxxxx--xxxx--xxxx--xxxxxxx--xxxx--x--xxxx--xxxxxxxxxx--x--x--x--x",
"x-----x-----x--x--------------------x-----x--x--x--x-----x--x--------x-----x",
"x--xxxxxxx--x--xxxxxxxxxxxxxxxx--x--x--xxxxxxxxxx--xxxxxxx--xxxx--xxxxxxxxxx",
"x--x-----------------x--------x--x-----x--------x--x-----x-----------x-----x",
"x--x--xxxxxxxxxxxxxxxxxxx--xxxxxxxxxx--xxxxxxx--x--x--x--xxxx--xxxx--x--x--x",
"x-----x-----x-----x--------------x--------------x-----x--x-----x--------x--x",
"x--xxxxxxx--xxxx--x--xxxx--xxxx--x--xxxxxxx--xxxxxxx--xxxx--xxxxxxxxxxxxxxxx",
"x--------x-----x-----x-----x--x--x--x-----x-----x--------x--------x--------x",
"xxxx--xxxx--x--xxxxxxx--x--x--xxxxxxxxxx--xxxxxxx--x--xxxx--x--xxxxxxx--xxxx",
"x--x--------x-----x-----x-----x--x--------x--x-----x--------x--x-----x-----x",
"x--x--xxxxxxxxxxxxx--xxxx--xxxx--x--xxxx--x--xxxxxxx--x--xxxx--x--xxxx--x--x",
"x-----x--x--------x--x-----------------x--x--------x--x--x--x--x-----x--x--x",
"x--x--x--x--x--xxxx--xxxx--x--xxxxxxx--xxxx--x--x--xxxxxxx--x--x--xxxx--x--x",
"x--x-----x--x--x--x--x-----x--x-----x-----x--x--x-----x--------------x--x--x",
"xxxxxxx--xxxx--x--x--xxxx--xxxxxxx--xxxx--xxxxxxxxxx--x--xxxx--xxxx--xxxx--x",
"x--x-----x--------x--x-----x--x-----x--x--x--------x-----x--------x--x--x--x",
"x--xxxx--xxxx--xxxxxxx--xxxx--xxxx--x--xxxx--xxxxxxx--x--xxxxxxxxxx--x--x--x",
"x-----------------------x--------------------------x--x--x-----x-----------x",
"x--xxxx--x--x--xxxxxxx--x--xxxxxxxxxxxxx--xxxx--xxxx--xxxxxxx--x--xxxxxxx--x",
"x--x-----x--x--x--------x--------x--x--x-----x--x--x--x-----------x--------x",
"x--x--xxxxxxxxxxxxxxxxxxx--xxxxxxx--x--x--xxxx--x--xxxxxxxxxx--x--x--xxxxxxx",
"x--x-----x--x-----x--x--x-----x--------------x--------------x--x--x--x-----x",
"xxxx--xxxx--xxxx--x--x--xxxxxxxxxx--xxxxxxx--x--xxxxxxx--xxxx--xxxx--x--x--x",
"x-----x-----x--x-----x-----x--x-----------x--x-----x--------x--x--------x--x",
"xxxx--xxxx--x--x--x--x--xxxx--x--xxxxxxxxxxxxx--xxxx--xxxxxxx--xxxx--x--xxxx",
"x--------------x--x-----------------x--------x--x-----------------x--x-----x",
"x--xxxx--xxxx--x--x--xxxx--x--xxxxxxxxxxxxx--x--xxxxxxx--x--xxxxxxxxxxxxx--x",
"x--x--------x--x--x--x-----x--------x--------------x-----x--------x---------",
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx---"

];


let scene , surpriseBox, t = 200;

window.addEventListener("DOMContentLoaded",function() {
  time = document.getElementById("time");
  this.setTimeout(countdown, 1000);

   
  surpriseBox = document.getElementById("surpriseBox");
  surpriseBox.addEventListener("click", function() {
    carousel.rotate=true;
    surpriseBox.setAttribute("color", "green");
  });
  
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){

    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Wall(4*c,0,4*r);
      }
      
      
    }
 
  }

}) 


function countdown(){
  time.setAttribute("value",`Time: ${t}`);
  t--;
  setTimeout(countdown,1000);
}



window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
  
  }
  
})