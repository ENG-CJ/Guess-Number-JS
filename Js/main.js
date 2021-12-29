// js file

let hidden_number=document.getElementById('number');
let input_value=document.getElementById('guess-number');
let result_pane=document.getElementById('resul-text');

let guess_btn=document.getElementById('btn-guess');




// event to the buton
guess_btn.addEventListener('click',guessing)

// function guessing();

function guessing(){
    // calling random function
    random_number()
   
    
}

// random function
function random_number(){
    let random=Math.floor(Math.random()*20)
    result_pane.innerHTML=random
    check_random(input_value.value,random)
}

// checking input value 
function check_random(input,number){
    if (input==number){
        result_pane.innerHTML=`You Win! Guess Number ${number}=${input}`
        result_pane.style.color='green;'
        
        hidden_number.innerHTML=number;
        hidden_number.style.background='green';
        hidden_number.style.color='#fff';
        
        
        
    }else{
        result_pane.innerHTML='Incorrect Guess! Try Again'
    }
}

