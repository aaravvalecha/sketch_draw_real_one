

function setup(){

    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    console.log( quick_draw_data_set);
    add_random_pick();
}
var array_1=["pen","paper","book","bottle"];

var random_number= Math.floor((Math.random()*array_1.length)+1);

var quick_draw_data_set  = array_1[random_number];

var timer_counter = 0;

var timer_check="";

var drawn_sketch="";

var answer_holder="";

var score=0;

function add_random_pick(){
    document.getElementById("sketch_drawn").innerHTML="Sketch to be Drawn : "+quick_draw_data_set;

}


