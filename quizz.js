var Question      = require("./question.js");
var questionsList = require("./questionsArray.js");
var read          = require('read');
var i             =0;


function Quizz(questionsArray){
  // this.i=0;
  this.questionsArray = questionsArray;
}

Quizz.prototype.startQuizz = function(){
  options = {
    prompt: "What's your name?\n>"
  };

  read(options, displayName.bind(this));
  
  function displayName (err, name){
    console.log("Welcome to Quizz Game: " + name + ", \nyou should select the correct answer. Push enter when you are ready.");
    this.makeQuestions();
  }
};

Quizz.prototype.makeQuestions = function(){
  console.log("Question number " + questionsArray[i].qid + ":");

  options = {
    prompt: this.questionsArray[i].questiontext
  };

  read(options, displayAnswer.bind(this));

  function displayAnswer (err, useranswer){

    if (useranswer === this.questionsArray[i].okanswer) {
      console.log("Correct!!!");
    }else{
      console.log("Wrong answer");
    }

    i++;

    if (i < this.questionsArray.length){
      this.makeQuestions();
    } else {
      console.log("Game over");
    }

  }
};

quizz1 = new Quizz(questionsList);
quizz1.startQuizz();
