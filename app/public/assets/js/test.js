$(document).ready(function(){


    function getData() {
        const currentUserRes = JSON.parse(sessionStorage.getItem('suggestedPups'));
          console.log(currentUserRes);
         // window.location.replace(`/results/${currentUserRes[0]}/${currentUserRes[1]}/${currentUserRes[2]}`);
       
        

        $.get(`/test/${currentUserRes[0]}/${currentUserRes[1]}/${currentUserRes[2]}`)
            .then(function (newResultId) {
                console.log(newResultId);
              
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    getData()
});