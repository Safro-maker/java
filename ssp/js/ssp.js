function ssp(max) {
    let y=Math.floor(Math.random()*max)
    if (y==0) return "stone";
    if(y==1) return "scissors";
    if(y==2) return "paper";
}
function human() {
    let h=prompt("stone or scissors or paper?"," ");
    h=h.toLowerCase();
    if (h=="stone") return "stone";
    if (h=="scissors") return "scissors";
    if (h=="paper") return "paper";
}
function playRound() {
    const hs=human();
    const cs=ssp(3);
    if(hs==cs) {alert("Draw, bro!");return "draw"};
    if(hs=="stone"&&cs=="scissors") {alert("YOOO, take it easy, you win!");
        return "hs"};
    if(hs=="scissors"&&cs=="paper") {alert("YOOO, take it easy, you win!");
        return "hs"};
    if(hs=="paper"&&cs=="stone") {alert("YOOO, take it easy, you win!");
        return "hs"};
    if(cs=="stone"&&hs=="scissors") {alert("HAHAHA, computer more intelligent!");
        return "cs"};
    if(cs=="scissors"&&hs=="paper") {alert("HAHAHA, computer more intelligent!");
        return "cs"};
    if(cs=="paper"&&hs=="stone") {alert("HAHAHA, computer more intelligent!");
        return "cs"};
}
function playGame() {
    let humanScore=0;
    let computerScore=0;
    while(humanScore<3&&computerScore<3) {
        let result =  playRound();
        if(result=="hs") humanScore+=1;
        if(result=="cs") computerScore+=1;
    };
    if(humanScore>computerScore) alert("YOU WIN!");
    if(computerScore>humanScore) alert("YOU LOSE!");
}

let p = prompt("START?"," ");
p=p.toLowerCase();
if (p=="yes") playGame();