class Wall{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position", {x:x, y:y, z:z});
    this.obj.setAttribute("static-body","");
    
    let wall = document.createElement("a-box");
    wall.setAttribute("width", "4");
    wall.setAttribute("height", "10");
    wall.setAttribute("depth", "4");
    wall.setAttribute("position", "0 0 0");
    wall.setAttribute("material", "repeat: 0.5 2");
    wall.setAttribute("color", "white");
    
    let baseboard = document.createElement("a-box");
    baseboard.setAttribute("width", "4.1");
    baseboard.setAttribute("height", "0.2");
    baseboard.setAttribute("depth", "4.1");
    baseboard.setAttribute("position", "0 -4.9 0");
    baseboard.setAttribute("color", "gray");
    
    this.obj.append(wall)
    this.obj.append(baseboard)
    scene.append(this.obj);
    
  }
}