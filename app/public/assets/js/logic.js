let keyArray = [];

function startQuiz() {
    window.location.replace('/question/0');
};

function answerQ(data) {
    const nextQ = parseInt(data.qID) + 1;
    const answrKeys = data.keys;
    
    saveLocally(answrKeys);

    if (nextQ < 15) {
        window.location.replace(`/question/${nextQ}`);
    } else {
        window.location.replace('/result');
    }
};

function saveLocally(data) {
    keyArray = JSON.parse(localStorage.getItem('pupQuiz')) || [];

    const allAnswrs = keyArray.concat(data);

    console.log(allAnswrs);

    localStorage.setItem('pupQuiz', JSON.stringify(allAnswrs));
}