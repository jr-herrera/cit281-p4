/*

    CIS Project 4: p4-module.js
    J.R. Herrera Moreno

*/

module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
};

const { data } = require("./p4-data.js");

function getQuestions() {
    let questions = [];
    for ( let item of data ) {
        questions.push(item.question);
    }
    return questions;
}


function getAnswers() {
    let answers = [];
    for (let item of data) {
        answers.push(item.answer);
    }
    return answers;
}


function getQuestionsAnswers() {
    return JSON.parse(JSON.stringify(data));
}


function getQuestion(number = "") {
    num = parseInt(number);
    if (num > data.length) {
        return { error: `Question number must be less than the number of questions (${data.length})`, question: '', number: '',  }
    } else if (num < 1) {
        return { error: 'Question number must be greater than 1', question: '', number: '', }
    } else if (typeof num != 'number' || isNaN(num)) {
        return { error: 'Question number must be an integer', question: '', number: '', }
    } else {
        for (let item of data) {
            let qnum = item.question.split("")[1];
            if (qnum == num) {
                const obj = { error: '', question: item.question, number: qnum, }
                return obj
            }
        }
    }
}


function getAnswer(number = "") {
    num = parseInt(number);
    if (num > data.length) {
        return { error: `Answer number must be less than the number of answers (${data.length})`, answer: '', number: '',  }
    } else if (num < 1) {
        return { error: 'Answer number must be >= 1', answer: '', number: '', }
    } else if (typeof num != 'number' || isNaN(num)) {
        return { error: 'Answer number must be an integer', answer: '', number: '', }
    } else {
        for (let item of data) {
            let qnum = item.answer.split("")[1];
            if (qnum == num) {
                const obj = { error: '', answer: item.answer, number: qnum, }
                return obj
            }
        }
    }
}


function getQuestionAnswer(number = "") {
    num = parseInt(number);
    if (num > data.length) {
        return { error: `Question number must be less than the number of questions (${data.length})`, question: '', number: '', answer: '', }
    } else if (num < 1) {
        return { error: 'Question number must be greater than 1', question: '', number: '', answer: '', }
    } else if (typeof num != 'number' || isNaN(num)) {
        return { error: 'Question number must be an integer', question: '', number: '', }
    } else {
        for (let item of data) {
            let qnum = item.answer.split("")[1];
            if (qnum == num) {
                const obj = { error: '', question: item.question, number: qnum, answer: item.answer, }
                return obj
            }
        }
    }
}


/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }