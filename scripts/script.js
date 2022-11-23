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

    if(comp_choice == "rock"){
        document.getElementById('comp').classList.add("rock");
    } else if(comp_choice == "paper"){
        document.getElementById('comp').classList.add("paper");
    } else if(comp_choice == "scissors"){
        document.getElementById("comp").classList.add("scissors");
    }

    

    if(comp_choice == player_choice){
        res = "Draw!"
        draw++
        change_value("draw",draw)
    } else if(comp_choice=="rock" && player_choice == "paper"){
        res= "Win!"
        win++
        change_value("win",win)
    } else if(comp_choice=="rock" && player_choice == "scissors"){
        res= "Lost!"
        lost++
        change_value("lost",lost)
    }else if(comp_choice=="paper" && player_choice == "rock"){
        res= "Lost!"
        lost++
        change_value("lost",lost)
    }else if(comp_choice=="paper" && player_choice == "scissors"){
        res= "Win!"
        win++
        change_value("win",win)
    }else if(comp_choice=="scissors" && player_choice == "rock"){
        res= "Win!"
        win++
        change_value("win",win)
    }else if(comp_choice=="scissors" && player_choice == "paper"){
        res= "Lost!"
        lost++
        change_value("lost",lost)
    }

    change_value("results",res);
    document.getElementById("result_div").classList.remove("hidden");
    document.getElementById("result_div").classList.add("res_div");

    document.getElementById("mainframe").classList.add("blur_main");
}

function new_game(){
    document.getElementById("result_div").classList.remove("res_div");
    document.getElementById("result_div").classList.add("hidden");

    document.getElementById("mainframe").classList.remove("blur_main");

    document.getElementById("comp").classList.remove("paper");
    document.getElementById("comp").classList.remove("scissors");
    document.getElementById("comp").classList.remove("rock");
}

function change_value(id,value){
    return document.getElementById(id).innerHTML = value;
}

function reset(){
    win = 0
    lost = 0
    draw = 0
    change_value("lost",lost)
    change_value("win",win)
    change_value("draw",draw)
}

function create_btn(text,id_name,func,appendto){
    btn = document.createElement("button");
    btn.innerHTML = text;
    btn.id = id_name;
    btn.type = "button";
    btn.addEventListener("click", function(){
        func();
    })
    appendto.appendChild(btn);
}

function create_div_with_scores(sc_id,title,score_id,appendto){
    score_div = document.createElement("div");
    score_div.id = sc_id;

    title_text = document.createElement("p");
    title_text.innerHTML = title;
    score_div.appendChild(title_text);

    score_text = document.createElement("p");
    score_text.innerHTML = "0";
    score_text.id = score_id;
    score_div.appendChild(score_text);

    appendto.appendChild(score_div);
}

function create_image(source,id_image,param,appendto){
    image = document.createElement('img')
    image.src = source;
    image.id = id_image;
    image.addEventListener('click',function(){
        winner_check(param);
    })
    appendto.appendChild(image);
}

function create_div(){
    res_div = document.createElement("div");
    res_div.classList.add("hidden");
    res_div.id = "result_div";

    result_table = document.createElement("table")
    result_table.classList.add("res_table")
    
    res_row = document.createElement("tr")
    res_col = document.createElement("td")
    result = document.createElement("p");
    result.innerHTML = "";
    result.id = "results";
    res_col.appendChild(result)
    res_row.appendChild(res_col)
    result_table.appendChild(res_row)


    comp_row = document.createElement("tr")
    comp_col = document.createElement("td")
    comp_div = document.createElement('div');
    comp_div.id = 'comp';
    comp_col.appendChild(comp_div)
    comp_row.appendChild(comp_col)
    result_table.appendChild(comp_row)

    // enter = document.createElement('br');
    // res_div.appendChild(enter);

    btn_row = document.createElement("tr")
    btn_col = document.createElement("td")
    new_game_btn = document.createElement("button");
    new_game_btn.innerHTML = "New Game";
    new_game_btn.type = "button";
    new_game_btn.id = "new_game";
    new_game_btn.addEventListener("click", function(){
        new_game();
    })
    btn_col.appendChild(new_game_btn)
    btn_row.appendChild(btn_col)
    result_table.appendChild(btn_row)
    res_div.appendChild(result_table)
    document.body.appendChild(res_div);
}

function main(){
    mainframe = document.createElement("div");
    mainframe.id = "mainframe";
    document.body.appendChild(mainframe);

    header = document.createElement("h1");
    header.innerHTML = "Rock Paper Scissors Game";
    mainframe.appendChild(header)

    score_table = document.createElement("table");
    score_table.classList.add("score_table");
    score_row = document.createElement("tr");
    
    win_col = document.createElement("td");
    create_div_with_scores("win_div","Wins:","win",win_col);
    score_row.appendChild(win_col);

    lost_col = document.createElement("td")
    create_div_with_scores("lost_div","Losts:","lost",lost_col);
    score_row.appendChild(lost_col);

    draw_col = document.createElement("td");
    create_div_with_scores("draw_div","Draws:","draw",draw_col);
    score_row.appendChild(draw_col);

    score_table.appendChild(score_row);
    mainframe.appendChild(score_table);

    game_table = document.createElement("table");
    game_table.classList.add("game_table");
    game_row = document.createElement("tr");

    rock_col = document.createElement("td");
    create_image('images/rock.png','rock_image',0,rock_col);
    game_row.appendChild(rock_col);

    paper_col = document.createElement("td");
    create_image('images/paper.png','paper_image',1,paper_col);
    game_row.appendChild(paper_col);

    scissors_col = document.createElement("td")
    create_image('images/scissors.png','scissors_image',2,scissors_col);
    game_row.appendChild(scissors_col);

    game_table.appendChild(game_row)
    mainframe.appendChild(game_table)

    create_btn("Reset","reset",reset,mainframe);

    create_div();
}

window.addEventListener('DOMContentLoaded',() => {
    main()
})
