// Make sure we wait to attach our handlers until the DOM is fully loaded.
// PUT request: NEEDS UPDATING

  // POST request: NEEDS UPDATING...?
  // set up an on click event connected to the submit button...
  // ..that does a create to push the users answer array

// set up an on click event with next question that pushes the answer to the array


// Some thoughts:
//   4. how are we storing the dog answer results?
//       -- we are pushing the choices the user selects into an empty array to be evaluated at the end of the quiz
//   5. how do we connect the results to the right dog?
//       -- we send a create request to the DB of the answers array for evaluation/tabulation
//        -- we traverse the array at the end of the quiz and evaluate by location in the array if the result is a +1
//       -- for the dog or not based on what answers connect to the dog
//   6. how do we add up the values to get the right match?
//       -- we store in the DB the quiz results for the user 
//   7. add on-click events for answer and next question? and hiding last question?  


$(function() {

//add on-click event
//store answers in an array - global scale outside of function
// push into the array with every answer selected
// upon final answer submission post request to back end w/ an object that has an array of the answers 
//backend inside post route figure out top three breeds
//send three breeds back to front end as a response results html page
//then call the query to get the images of the results (loop over)

  var queryURL ="";

  // Performing our AJAX GET request
      $.ajax({
      url: queryURL,
      method: "GET",
      })
      // After the data comes back from the API
      .then(function (response) {
          // Storing an array of results in the results variable
          // var results = response.dog;
          if (results == 0) {
            queryURL = "https://dog.ceo/api/breed/labrador/images/random"
          }; 
          
          if (results == 1) {
            queryURL = "https://dog.ceo/api/breed/germanshepherd/images/random"
          }; 
          
          if (results == 2) {
            queryURL = "https://dog.ceo/api/breed/retriever/golden/images/random"
          }; 
          
          if (results == 3) {
            queryURL = "https://dog.ceo/api/breed/bulldog/french/images/random"
          }; 
          
          if (results == 4) {
            queryURL = "https://dog.ceo/api/breed/bulldog/english/images/random"
          }; 
          
          if (results == 5) {
            queryURL = "https://dog.ceo/api/breed/poodle/standard/images/random"
          }; 
          
          if (results == 6) {
            queryURL = "https://dog.ceo/api/breed/beagle/images/random"
          }; 
          
          if (results == 7) {
            queryURL = "https://dog.ceo/api/breed/rottweiler/images/random"
          }; 
          
          if (results == 8) {
            queryURL = "https://dog.ceo/api/breed/pointer/german/images/random"
          }; 
          
          if (results == 9) {
            queryURL = "https://dog.ceo/api/breed/corgi/cardigan/images/random"
          }; 
          
          if (results == 10) {
            queryURL = "https://dog.ceo/api/breed/dachshund/images/random"
          }; 
          
          if (results == 11) {
            queryURL = "https://dog.ceo/api/breed/terrier/yorkshire/images/random"
          }; 
          
          if (results == 12) {
            queryURL = "https://dog.ceo/api/breed/australian/shepherd/images/random"
          }; 
          
          if (results == 13) {
            queryURL = "https://dog.ceo/api/breed/boxer/images/random"
          }; 
          
          if (results == 14) {
            queryURL = "https://dog.ceo/api/breed/husky/images/random"
          }; 
          
          if (results == 15) {
            queryURL = "https://dog.ceo/api/breed/spaniel/images/random"
          }; 
          
          if (results == 16) {
            queryURL = "https://dog.ceo/api/breed/dane/great/images/random"
          }; 
          
          if (results == 17) {
            queryURL = "https://dog.ceo/api/breed/schnauzer/miniature/images/random"
          }; 
          
          if (results == 18) {
            queryURL = "https://dog.ceo/api/breed/doberman/images/random"
          }; 
          
          if (results == 19) {
            queryURL = "https://dog.ceo/api/breed/shihtzu/images/random"
          }; 
          
          if (results == 20) {
            queryURL = "https://dog.ceo/api/breed/terrier/boston/images/random"
          }; 
          
          if (results == 21) {
            queryURL = "https://dog.ceo/api/breed/havanese/images/random"
          }; 
          
          if (results == 22) {
            queryURL = "https://dog.ceo/api/breed/mountain/bernese/images/random"
          }; 
          
          if (results == 23) {
            queryURL = "https://dog.ceo/api/breed/pomeranian/images/random"
          }; 
          
          if (results == 24) {
            queryURL = "https://dog.ceo/api/breed/sheepdog/shetland/images/random"
          }; 
        });
});


// Dog breed and corresponding answers array
/* var dogs = [
      {
          breed: "Labrador Retriever",
          answerKey: 1
      },
       {
          breed: "German Shepherd",
          answerKey: 2
      },
       {
          breed: "Golden Retriever",
          answerKey: 3
      },
       {
          breed: "French Bulldog",
          answerKey: 4
      },
       {
          breed: "English Bulldog",
          answerKey: 5
      },
       {
          breed: "Poodle",
          answerKey: 6
      },
       {
          breed: "Beagle",
          answerKey: 7
      },
       {
          breed: "Rottweiler",
          answerKey: 8
      },
       {
          breed: "German Shorthaired Pointer",
          answerKey: 9
      },
       {
          breed: "Pembroke Welsh Corgi",
          answerKey: 10
      },
       {
          breed: "Dachshund",
          answerKey: 11
      },
       {
          breed: "Yorkshire Terrier",
          answerKey: 12
      },
       {
          breed: "Australian Shepherd",
          answerKey: 13
      },
       {
          breed: "Boxer",
          answerKey: 14
      },
       {
          breed: "Siberian Husky",
          answerKey: 15
      },
       {
          breed: "Cavalier King Charles Spaniel",
          answerKey: 16
      },
       {
          breed: "Great Dane",
          answerKey: 17
      },
       {
          breed: "Miniature Schnauzer",
          answerKey: 18
      },
       {
          breed: "Doberman Pinscher",
          answerKey: 19
      },
       {
          breed: "Shih Tzu",
          answerKey: 20
      },
       {
          breed: "Boston Terrier",
          answerKey: 21
      },
       {
          breed: "Havanese",
          answerKey: 22
      },
       {
          breed: "Bernese Mountain Dog",
          answerKey: 23
      },
       {
          breed: "Pomeranian",
          answerKey: 24
      },
       {
          breed: "Shetland Sheepdog",
          answerKey: 25
      },
  ]; 
 */