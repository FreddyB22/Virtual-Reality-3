let carousel, surpriseBox, myTree, myTree2;

window.addEventListener("DOMContentLoaded", function() {
  carousel = document.getElementById("carousel-arms");
  carousel.r = 0;
  carousel.dr = 1;
  carousel.rotate = false;



  carousel.addEventListener("mouseenter", function() {
    carousel.setAttribute("scale", "1.3 1.3 1.3");
  });
  carousel.addEventListener("mouseleave", function() {
    carousel.setAttribute("scale", "1 1 1");
  });




  surpriseBox = document.getElementById("surpriseBox");
  surpriseBox.addEventListener("click", function() {
    carousel.rotate=true;
    surpriseBox.setAttribute("color", "green");
  });

  myTree = document.getElementById("tree");
  myTree.y = 0;
  myTree.dy = -0.1;
  myTree.r = 0;     
  myTree.dr = 2; 
  myTree.fall= false;
  myTree.addEventListener("click", ()=>{
    myTree.fall= true;
  })


  myTree2 = document.getElementById("tree2");
  myTree2.y = 0;
  myTree2.dy = -0.1;
  myTree2.r = 0;     
  myTree2.dr = 2; 
  myTree2.fall= false;
  myTree2.addEventListener("click", ()=>{
    myTree2.fall= true;
  })




  loop();
});

function loop() {
  if (carousel.rotate) {
    carousel.r += carousel.dr;
    carousel.setAttribute("rotation",{x:0, y:0, z: carousel.r});
  }
  if(myTree.fall){
    myTree.y += myTree.dy;
    myTree.r += myTree.dr; 
    myTree.setAttribute("position", {x:-5,y:myTree.y, z:1})
    myTree.setAttribute("rotation", {x:-5,y:myTree.r, z:1})
  }

  if(myTree2.fall){
    myTree2.y += myTree2.dy;
    myTree2.r += myTree2.dr; 
    myTree2.setAttribute("position", {x:-3,y:myTree2.y, z:-3})
    myTree2.setAttribute("rotation", {x:-4,y:myTree2.r, z:-4})
  }

  window.requestAnimationFrame(loop);
}