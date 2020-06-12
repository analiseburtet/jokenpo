const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Rock, paper or scissors?', option=> {
  const options = {
    rock: 1,
    paper: 2,
    scissors: 3
  };
  const userInput = options[option.toLowerCase()];
  const randomInput = Math.round(Math.random() * 2) +1
  const win = 'You won!'
  const lose = 'You lose!'
  const tie = 'You drew!'

  switch(userInput){
    case 1:
      if(randomInput === 1) message = tie
      if(randomInput === 2) message = lose
      if(randomInput === 3) message = win
    break
    case 2:
      if(randomInput === 1) message = win
      if(randomInput === 2) message = tie
      if(randomInput === 3) message = lose
    break
    case 3:
      if(randomInput === 1) message = lose
      if(randomInput === 2) message = win
      if(randomInput === 3) message = tie
    break
    default:
      message = lose
  }
  console.log(message)
  rl.close();
});
