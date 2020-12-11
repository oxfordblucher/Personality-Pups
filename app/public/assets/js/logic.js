let keyArray = [];

function startQuiz() {
    localStorage.removeItem('pupQuiz');

    localStorage.removeItem('suggestedPups');

    window.location.replace('/question/0');
};

function answerQ(data) {
    const nextQ = parseInt(data.qID) + 1;
    const answrKeys = data.keys;

    saveLocally(answrKeys);

    if (nextQ < 15) {
        window.location.replace(`/question/${nextQ}`);
    } else {
        calculateResult();
    }
};

function saveLocally(data) {
    keyArray = JSON.parse(localStorage.getItem('pupQuiz')) || [];

    const allAnswrs = keyArray.concat(data);

    localStorage.setItem('pupQuiz', JSON.stringify(allAnswrs));
}

function calculateResult() {
    keyArray = JSON.parse(localStorage.getItem('pupQuiz')) || [];
    let counts = keyArray.reduce((map, key) => {
        map[key] = (map[key] || 0) + 1;
        return map;
    }, {});

    let sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    let top3 = sorted.slice(0, 3);
    localStorage.setItem('suggestedPups', JSON.stringify(top3));
    
    $.post('/api/results', {
        breed1: parseInt(top3[0]),
        breed2: parseInt(top3[1]),
        breed3: parseInt(top3[2])
    })
        .then(function (data) {
            console.log("Success!");
        })
        .catch(function (err) {
            console.log(err);
        });
}
