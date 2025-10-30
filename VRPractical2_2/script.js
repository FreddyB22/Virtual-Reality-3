let scene;
let car;
let pokeball;
let rocket;
let dude;
let sun;

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene"); 
    car = document.querySelector("#car");
    car.a = 0;
    car.da = -.03;
    car_loop();
   
})
function car_loop(){
    car.a += car.da;
    car.setAttribute("position", {x:car.a, y:0, z:0});
    window.requestAnimationFrame(car_loop);
}

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene"); 
    pokeball = document.querySelector("#pokemonball");
    pokeball.a = 0;
    pokeball.da = 1;
    pokeball_loop();
   
})
function pokeball_loop(){
    pokeball.a += pokeball.da;
    pokeball.setAttribute("rotation", {x:pokeball.a, y:0, z:0});
    window.requestAnimationFrame(pokeball_loop);
}

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene"); 
    rocket = document.querySelector("#rocket");
    rocket.a = 0;
    rocket.da = 0.1;
    rocket_loop();
   
})
function rocket_loop(){
    rocket.a += rocket.da;
    rocket.setAttribute("position", {x:0, y:rocket.a, z:0});
    window.requestAnimationFrame(rocket_loop);
}

window.addEventListener("DOMContentLoaded", function() {
    const scene = document.querySelector("a-scene");
    const dude = document.querySelector("#dude");

    dude.a = 1;  
    dude.da = 0.01; 

    function dude_loop() {
        dude.a += dude.da;
        dude.setAttribute("scale", `${dude.a} ${dude.a} ${dude.a}`);
        window.requestAnimationFrame(dude_loop);
    }

    dude_loop();
});



