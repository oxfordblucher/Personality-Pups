

module.exports = function dogPics() {
    $.get("https://dog.ceo/api/breeds/image/random").then(function(err, res) {
        console.log(res);
    })
}