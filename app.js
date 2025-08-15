let image = document.querySelectorAll("#img");
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");
let message = document.querySelector("#msg");
let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");

const drawgame = (user_choice, comp_choice) => {
    console.log("Draw");
    message.innerText = `It's a Draw, Your ${user_choice} Draws ${comp_choice} `;
    message.style.backgroundColor = "white";
    message.style.color = "black";
}
const CompGen = () => {
    let option = ["Rock", "Paper", "Scissors"];
    const RandomIdx = Math.floor(Math.random() * 3);
    return option[RandomIdx];
};
const showWinner = (userwin,user_choice,comp_choice) => {
    if (userwin) {
        message.innerText = `You Won, Your ${user_choice} Won Over ${comp_choice}`;
        message.style.backgroundColor = "green";
        message.style.color = "white";
        user_score++;
        user.innerText = user_score;
    }
    else {
        message.innerText = `You Lose, Your ${user_choice} Loses by ${comp_choice}`;
        comp_score++;
        comp.innerText = comp_score;
        message.style.backgroundColor = "red";
    }
}
const playgame = (user_choice) => {
    console.log("user choice", user_choice);
    const comp_choice = CompGen();
    console.log("Comp choice", CompGen());
    if (user_choice === comp_choice) {
        drawgame(user_choice, comp_choice);
    }
    else {
        let userwin = true;
        if (user_choice === "Rock") {
            userwin = comp_choice === "Paper" ? false : true;
        }
        else if (user_choice === "Paper") {
            userwin = comp_choice === "Scissors" ? false : true;
        }
        else {
            userwin = comp_choice === "Rock" ? false : true;
        }
        showWinner(userwin,user_choice,comp_choice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let user_choice = choice.getAttribute("id");
        playgame(user_choice);
    });
});
