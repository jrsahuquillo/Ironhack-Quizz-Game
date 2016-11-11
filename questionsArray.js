var Question = require("./question.js");

var question1 = new Question(1,"What kind of animal is the largest living creature on Earth? \n A: Elephant, B: Whale, C: Diplodocus", "B");
var question2 = new Question(2,"What is the name of the network of computers from which the Internet has emerged? \n A: Webnet, B: Netweb, C: Arpanet", "C");

questionsArray=[];
questionsArray.push(question1);
questionsArray.push(question2);



module.exports = questionsArray;
