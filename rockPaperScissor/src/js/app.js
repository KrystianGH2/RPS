// scoping all variables in the function block.
const game = () => {
    let pScore = 0;
    let cScore = 0;


    //Start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');



        playBtn.onclick = () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        }
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hands');
        const computerHand = document.querySelector('.computer-hands');
        const hands = document.querySelectorAll('.hands img');


        hands.forEach(hand =>{
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            })

        })


        //computer options
        const computerOptions = ["rock", "paper", "scissors"]

        options.forEach(option => {
            option.addEventListener('click', function (){

                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]
                // console.log(computerChoice)
                // console.log(computerNumber)

                setTimeout(() =>{
                    compareHands(this.innerHTML, computerChoice);

                     //Update images'
                        playerHand.src = `./src/image/${this.innerHTML}.png`;
                        computerHand.src = `./src/image/${computerChoice}.png`

                },2000)


           

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            })
        });
    };

    //Update Score

    const updateScore = () => {
        const playerScore = document.querySelector ('.player-score p');
        const computerScore = document.querySelector ('.computer-score p');

        playerScore.innerHTML = pScore
        computerScore.innerHTML = cScore

    }

    //who's winning

    const compareHands = (playerChoice, computerChoice ) => {

        const winner = document.querySelector('.winner');

        //Checking for a tie:
        if(playerChoice === computerChoice){
            winner.innerHTML = "It's a tie!"
             return;
        }

        if(playerChoice === "rock") {
            if(computerChoice === "scissors") {
                winner.innerHTML = "Player Wins!"
                pScore++;
                updateScore();
                return;
            } else{
                winner.innerHTML = "Computer Wins!"
                cScore++;
                updateScore();
                return;
            }
        }


        //Checking for paper
        
        if(playerChoice === "paper") {
            if(computerChoice === "scissors") {
                winner.innerHTML = "Computer Wins!"
                cScore++;
                updateScore();
                return;
            } else{
                winner.innerHTML = "Player Wins!"
                pScore++;
                updateScore();

                return;
            }
        }

        //Checking for scissors

        
        if(playerChoice === "scissors") {
            if(computerChoice === "rock") {
                winner.innerHTML = "Computer Wins!"
                cScore++;
                updateScore();
                return;
            } else{
                winner.innerHTML = "Player Wins!"
                pScore++;
                updateScore();
                return;
            }
        }
    }



    //Call all the inner functions
    startGame();
    playMatch();
};


//start the game function.
game();





