var readlineSync=require("readline-sync");
var chalk=require('chalk');

console.clear();
console.log(chalk.bgMagenta("------Who Knows me best?-------"));

var name=readlineSync.question(chalk.yellowBright("\nSo, What's your name: "));
var score=0;
var count=0;

console.log(chalk.yellow("\nWelcome to the game,",name,"\nLet's begin with..."));
console.log(chalk.black.bgYellowBright.bold("\nLEVEL 1"))


//function to add questions
function play(question,options,answer){
  console.log(chalk.cyanBright(question));

  var userAns=readlineSync.keyInSelect(options,"Select your options to lock: ");

  if(options[userAns]===answer){
      console.log(chalk.green("\nSahi jawab...."));
      score+=1;
    console.log(chalk.black.bgYellowBright.bold("AAPKA SCORE HOTA HAI:"),chalk.yellowBright.bold(score))

      if(score>=4 && score<6){
        console.log(chalk.black.bgYellowBright.bold("\nWelcome to LEVEL 2..."))
      }
      else if(score>=6 && score<8){
        console.log(chalk.black.bgYellowBright.bold("\nWelcome to LEVEL 3..."))
      }
      
      // else if(score>8 && score<10){
      //   console.log("\nWelcome to LEVEL 4...")
      // }
      else if(score===10){
        console.log(chalk.black.bgYellowBright.bold("\nYou have won the game...") )       
      }
  }
  else{
    console.log(chalk.red("\nAfsos,Galat jawab"));
    console.log(chalk.black.bgYellowBright.bold("AAPKA SCORE HOTA HAI:"),chalk.yellowBright.bold(score))

  }
  count+=1;
  

}

optionSet1=["Billa","Billava","Billi"];
optionSet2=["Thane","Dombivli","Vikhroli"];
optionSet3=["TCS","Infosys","Capgemini"];
optionSet4=["21","23","20"];
optionSet5=["Swimming","Sketching","Dancing"];
optionSet6=["CSK","RCB","SRH"];
optionSet7=["Baahubali 2","KGF","Dangal"];
optionSet8=["Tamil Nadu","Karnataka","Kerala"];
optionSet9=["Blue","Red","Black"];
optionSet10=["Kundapura","Karwar","Mangalore"];

//question 1
play("\nWhat is my nick name in school ",optionSet1,"Billi");
//question 2
play("\nWhere do I live?: ",optionSet2,"Dombivli");
//question 3
play('\nWhere do I work?: ',optionSet3,"TCS");
//question 4
play("\nHow old am I?: ",optionSet4,"20");
//question 5
play('\nWhat among these is my hobbies?: ',optionSet5,"Sketching");
//question 6
play("\nWhich team do I support in IPL?: ",optionSet6,"RCB");
//question 7
play("\nWhich movie do I like the most?: ",optionSet7,"KGF");
//question 8
play("\nIn which state is my native place? ",optionSet8,"Karnataka");
//question 9
play("\nWhich is my favourite color?: ",optionSet9,"Black");
//question 10
play("\nWhere was I born?:",optionSet10,"Kundapura");


if(count<10){
        console.log(chalk.black.bgYellowBright.bold("\nBetter luck next time...") )       
    
  }


