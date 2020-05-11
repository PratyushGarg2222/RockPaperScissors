let outc;
let personScore = 0;
let compScore = 0;

function computerPlay(){

    let num = 3;
    let computerChoice = Math.floor(Math.random()*num);

    if(computerChoice==0){

        return "rock";

    }
    if(computerChoice==1)
        return "paper";

    if(computerChoice==2)
        return "scissors";

}

function gamePlay(personChoice, computerChoice){


    personChoice = personChoice.toLowerCase();
    let outcom; 

    switch(personChoice){

        case 'rock': switch(computerChoice){

                        case 'rock':

                                outcom = "tie";
                                outc = 2;
                                break;

                        case 'paper':
                                outcom = "lose";
                                outc = 3;
                                break;

                         case 'scissors':
                                outcom = "win"; 
                                outc = 1; 
                                break;


                    }

                    break;

        case 'paper': switch(computerChoice){

                    case 'rock':
                    outcom = "win";
                    outc = 1;
                    break;

                    case 'paper': outcom = "tie";
                    outc = 2;
                    break;


                    case 'scissors': outcom = "lose";
                    outc = 3;
                    break;


        }  
                break;

        case 'scissors':      switch(computerChoice){

                            case 'rock':
                            outcom = "lose";
                            outc = 3;
                            break;

                            case 'paper': 
                            outcom = "win";
                            outc = 1;
                            break;


                            case 'scissors': 
                            outcom = "tie";
                            outc = 2;
                            break;


                }     


    } 

        let str;
    if(outcom=="tie"){
            str = "Tie! " + personChoice + " and " + computerChoice;
        

    }
    if(outcom == "lose"){

            str = "You Lose! " + computerChoice + " beats " + personChoice;

    }
    if(outcom=="win"){

        str = "You win! " + personChoice + " beats " + computerChoice;

    }

        return str;

}

var buttons = document.querySelectorAll(".butto");
var roundR = document.getElementById("roundResult");
var pes = document.getElementById("PlayerScore");
var cos = document.getElementById("CompScore");
var resT = document.getElementById("resultText");

function mainFunc(p){

    var c = computerPlay();
    let disp = gamePlay(p, c);
    roundR.innerHTML = disp;

        switch(outc){
            case 1:
                personScore++;
                break;

            case 3: compScore++;

        }

        pes.textContent = personScore;
        cos.textContent = compScore;

        if(personScore==5){

            pes.classList.add("green-text");
            resT.textContent = "Player WINS!";

        }
        else
        if(compScore==5){

            cos.classList.add("green-text");
            resT.textContent = "Computer WINS!";

        }


}


buttons[0].addEventListener("click", function(){

    if(personScore<5&&compScore<5){
    
    console.log("Hi");
    var p = "rock";
        mainFunc(p);

    }


});

buttons[1].addEventListener("click", function(){

    if(personScore<5&&compScore<5){
    
    console.log("Hi");
    var p = "paper";
        mainFunc(p);

    }


});

buttons[2].addEventListener("click", function(){

    if(personScore<5&&compScore<5){
    
    console.log("Hi");
    var p = "scissors";
        mainFunc(p);

    }


});

