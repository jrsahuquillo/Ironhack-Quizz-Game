
var Question= function(qid, questiontext, okanswer){
  this.questiontext = questiontext;
  this.okanswer = okanswer;
  this.qid=qid;
};

Question.prototype.quest = function () {
  console.log(this.questiontext);
};

module.exports = Question;
