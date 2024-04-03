/*
setInterval - runs function repeatedly, at specific intervals

-- pass function reference
-- duration in ms (1000ms = 1 second)
-- default 0;
-- return unique identifire
-- clearInterval to cancel

*/
function showScore(name, score) {
  console.log(`Hello ${name}, your score is ${score}`);
}

// setInterval(showScore, 2000);
// setInterval(showScore, 2000, 'Sam', 25);

// const firstID = setTimeout(showScore, 1000, 'Sam', 25);
// const secondID = setTimeout(showScore, 4000, 'Sam2', 26);

// we use that to stop interval running
clearInterval(firstID);
