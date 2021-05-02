const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Please type a number: ', ask => {
    var number=parseInt(ask);
    console.log(number)
    
    readline.close();
  });

 