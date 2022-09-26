var counter = 0 
var rps = ["rock","paper","scissors"] 
var win = 0 
var lost = 0 
var draw = 0 
var res = "" 

function comp_res(){ 
    let index = Math.floor(Math.random()*3) 
    return rps[index]; 
} 
 
function winner_check(index){ 
    let comp_choice = comp_res() 
    let player_choice = rps[index]; 
    
    change_value("comp","Comp: "+comp_choice) 

    if(comp_choice == player_choice){ 
        res = "draw" 
        draw++ 
        change_value("draw","Draw: " +draw) 
    } else if(comp_choice=="rock" && player_choice == "paper"){ 
        res= "win" 
        win++ 
        change_value("win","Win: "+win) 
    } else if(comp_choice=="rock" && player_choice == "scissors"){ 
        res= "lost"
        lost++ 
        change_value("lost","Lost: "+lost) 
    }else if(comp_choice=="paper" && player_choice == "rock"){ 
        res= "lost" 
        lost++ 
        change_value("lost","Lost: "+lost) 
    }else if(comp_choice=="paper" && player_choice == "scissors"){ 
        res= "win" 
        win++ 
        change_value("win","Win: "+win) 
    }else if(comp_choice=="scissors" && player_choice == "rock"){ 
        res= "win" 
        win++ 
        change_value("win","Win: "+win) 
    }else if(comp_choice=="scissors" && player_choice == "paper"){ 
        res= "lost"
        lost++
        change_value("lost","Lost: "+lost) 
} 

    document.getElementById("rock").disabled = true; 
    document.getElementById("paper").disabled = true; 
    document.getElementById("scissors").disabled = true; 
 
    return change_value("demo","Result: "+res) 
} 

function new_game(){ 
    document.getElementById("rock").disabled = false; 
    document.getElementById("paper").disabled = false; 
    document.getElementById("scissors").disabled = false; 
} 
 
function change_value(id,value){ 
    return document.getElementById(id).innerHTML = value; 
} 

function reset(){ 
    win = 0 
    lost = 0 
    draw = 0 
    change_value("lost","Lost: "+lost) 
    change_value("win","Win: "+win) 
    change_value("draw","Draw: "+draw) 
    change_value("demo","Result: ") 
    change_value("comp","Comp: ") 
} 

function light(){ 
    document.body.style.backgroundColor = "white"; 
    document.body.style.color = "black"; 
} 

function dark(){ 
    document.body.style.backgroundColor = "black"; 
    document.body.style.color = "white"; 
}