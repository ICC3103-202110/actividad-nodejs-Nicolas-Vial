const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Please type a number: ', ask => {
    var number=parseInt(ask);
    
    if (number==0){
        console.log("\nThe fibonacci value is: 0");
    } else if (number==1){
        console.log("\nThe fibonacci value is: 1");
    }else{
        var n_2=0;
        var n_1=1;
        var result;
        for(var counter=1; counter<number;counter++){
            result=n_1+n_2;
            n_2=n_1;
            n_1=result;
        }
        console.log("\nThe fibonacci value is: "+result);
    }
    
    readline.close();
  });

 