const { JSON } = require("sequelize/types");

const quiz = $("div#quiz");

function startQuiz() {
    window.location.replace('/question/0');
};



function answerQ(data) {
    const nextQ = parseInt(data.qID) + 1;
    const answrKeys = data.keys;
    /* saveLocally(answrKeys); */
    if (nextQ < 14) {
        window.location.replace(`/question/${nextQ}`);
    } else {
        window.location.replace('/result');
    }
};

/* function SaveDataToLocalStorage(data)
{
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('session')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value
    alert(a);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('session', JSON.stringify(a));
} */
/* 
function saveLocally(data) {
    let keyArray = [];
    keyArray = JSON.parse(localStorage.getItem('pupQuiz')) || [];
    keyArray.push(data);
    localStorage.setItem('pupQuiz', JSON.stringify(keyArray));
} */