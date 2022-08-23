let result = document.getElementById('input_text');
let final_result = document.getElementById('result_text');

var click_sound = new Audio();
var click2_sound = new Audio();
var answer_sound = new Audio();
click_sound.src = "button click.mp3"
click2_sound.src = "del.mp3"
answer_sound.src = "answer.mp3"

function playSound(){
    click_sound.play();
}
function playSound2(){
    click2_sound.play();
}
function playSound3(){
    answer_sound.play();
}

function calculate(number){
    result.value = result.value + number;
}

function Result(){
    try{
        final_result.value = eval(result.value)
    }
    catch(err){
        alert("Enter a valid input");
    }
}
function ce(){
    result.value = " ";
    final_result.value = " ";
}
function del(){
    result.value = result.value.slice(0,-1);
}
function factorial(number){
    let factorial = 1;
     for (i=result.value; i >= 1; i--) {
     factorial = factorial * i;
    }
    result.value+=number;
    final_result.value=factorial;
}
