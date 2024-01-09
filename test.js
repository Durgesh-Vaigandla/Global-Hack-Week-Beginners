function rockPaperScissors() {
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    console.log("::::::::::::::::::::::ROCK PAPER SCISSOR::::::::::::::::::::::::::::::");
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    console.log(":::::::::::::::::::::PLAY WITH COMPUTER:::::::::::::::::::::::::::::::");
    console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::\n");

    let points = parseInt(prompt("Enter points :: "));
    console.log("\n\n");

    let pt1 = 0, pt2 = 0;

    let choices = ["rock", "paper", "scissor"];

    while (pt1 !== points && pt2 !== points) {
        let ip1 = prompt("ENTER YOUR CHOICE :: ").toLowerCase();
        let index = Math.floor(Math.random() * 3);
        let ip2 = choices[index];
        console.log("COMPUTER'S CHOICE ::", ip2, "\n");

        if ((ip1 === "rock" || ip2 === "rock") && (ip1 === "scissor" || ip2 === "scissor")) {
            if (ip1 === "rock") pt1++;
            else if (ip2 === "rock") pt2++;
        } else if ((ip1 === "paper" || ip2 === "paper") && (ip1 === "rock" || ip2 === "rock")) {
            if (ip1 === "paper") pt1++;
            else if (ip2 === "paper") pt2++;
        } else if ((ip1 === "paper" || ip2 === "paper") && (ip1 === "scissor" || ip2 === "scissor")) {
            if (ip1 === "scissor") pt1++;
            else if (ip2 === "scissor") pt2++;
        }

        console.log(`YOUR POINTS <<<<<<<<< ${pt1} POINT <<<<<<<<<<<<<<<<`);
        console.log(`COMPUTER POINTS <<<<<<<< ${pt2} POINT <<<<<<<<<<<<<<<<\n`);
    }

    if (pt1 === points) console.log("::::::::::::::::::::  YOU WON !!!! ::::::::::::::::::::::::: \n");
    else console.log(":::::::::::::::::::  COMPUTER WON  :::::::::::::::::::::::: \n");
}

rockPaperScissors();