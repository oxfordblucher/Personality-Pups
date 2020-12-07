// Make sure we wait to attach our handlers until the DOM is fully loaded.
// PUT request: NEEDS UPDATING
$(function() {
  $(".eat-burger").on("click", function(event) {
    const id = $(this).data("id");
    const answerPup = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/quizzes/" + id, {
      type: "PUT",
      data: answerPup
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();

      }
    );
  });

  // POST request: NEEDS UPDATING...?
  // set up an on click event connected to the submit button...
  // ..that does a create to push the users answer array
  $(".submit").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newResults = {
      name: $("#results").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/pups", {
      type: "POST",
      data: newResults
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();

      }
    );
  });
});

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

// Users answer array
userAnswer = []


// questions and answer options array 
var questions = [
      {
          question: "You are sleeping next to your partner and they are taking up two thirds of the space, you...",
          options: [
            {
            optionA: "closer the better! Who needs space?", 
            optionB: "grumpily push them over, it's so inconsiderate of your needs!",
            optionC: "It's not ideal but you make it work!"
            }]
      },
       {
          question: "the check comes to the table, do you...",
          options: [
            {
            optionA: "jump at the offer to pay the bill?", 
            optionB: "pull up your calculator app, let's split it!",
            optionC: "Let everyone know that you only got a salad and don't want to split"
            }]
      },
       {
          question: "It is 10am on Saturday morning, your day begins with...",
          options: [{
            optionA: "It began at 5am, I am already halfway through my errands!", 
            optionB: "smash that snooze button!",
            optionC: "I've had a cup of coffee and am reading the paper"
          }]
      },
        {
          question: "Your friend spilled red wine on your carpet, you...",
          options: [{
            optionA: "It's fine, the rug is old and I'll just hide that corner under the couch!", 
            optionB: "I've already called the carpet cleaner and sent my friend a copy of the bill",
            optionC: "I think I've got a stain stick somewhere, or some club soda?"
          }]
      },
        {
          question: "You meet someone for the first time at a party and your friend thinks they were unfriendly...",
          options: [{
            optionA: "Totally, such bad vibes", 
            optionB: "Maybe? We did just meet, some people don't give great first impressions",
            optionC: "I am sure they were just shy! I'd love to talk to them more, I am sure there is a reason they got invited!"
          }]
      },
        {
          question: "You're headed to the airport, where is your passport?",
          options: [{
            optionA: "somewhere in my bag, oh whoops it's unzipped!", 
            optionB: "in my pocket, easily accessible for going through security",
            optionC: "in a hidden pouch attached to my body, there are pick-pockets you know!"
          }]
      },
        {
          question: "You find out your teacher has a favorite student, you...",
          options: [{
            optionA: "think that is unfair, all students should be treated equally", 
            optionB: "I guess that is an inevitability, they are human after all, and not all students produce the same work",
            optionC: "hope it is you, it'll be SO dissapointing if it isn't you"
          }]
      },
        {
          question: "You have two friends that are in a fight, you: a. make plans with them separately, you hope they work it out but it isn't your job to manage their relationship",
          options: [{
            optionA: "make plans with them separately, you hope they work it out but it isn't your job to manage their relationship",
            optionB: "Invite them over to mediate, can't we all get along?", 
            optionC: "Invite the friend you have a stronger relationship with over. You hate drama"
          }]
      },
        {
          question: "Your car needs an expensive fix to pass inspection, you...",
          options: [{
            optionA: "are glad you have an emergency fund just for this type of occassion!", 
            optionB: "Weigh your options, the car does have a lot of miles? Should you just sell it?",
            optionC: "I am a student, I don't have that kind of money! Back to the bus I suppose..."
          }]
      },
        {
          question: "You show up to your cousin's wedding and your friend is wearing the exact same jumpsuit, you...",
          options: [{
            optionA: "love it! Let's get a picture together!",
            optionB: "Turn right around, you packed another outfit just in case", 
            optionC: "Who cares? You love the outfit and it looks great on you, where's the dance floor??"
          }]
      },
        {
          question: "You're looking for a house to buy and your realtor suggests a home close to train tracks, you think...",
          options: [{
            optionA: "Deal breaker, I'm a light sleeper as it is, plus I work from home!",
            optionB: "It is a beautiful home, I am sure you adapt to the sounds over time, let's see it!", 
            optionC: "Just how close is it...?"
          }]
      },
        {
          question: "Your friend joined a new gym and is trying to get you to join with her, you say...",
          options: [{
            optionA: "Definitely! It'll be great to workout with a friend",
            optionB: "No thank you. I don't need to pay for something I won't use", 
            optionC: "Maybe. You already belong to a gym and frequent several studios to diverisfy my weekly workout regimine, but what do they offer?"
          }]
      },
        {
          question: "Your idea of grocery shopping with your partner looks like:",
          options: [{
            optionA: "divide up, let's make this errand go by quickly!",
            optionB: "Slowly go through the aisles and look for inspiration, hey look at how good these apples look!", 
            optionC: ""
          }]
      },
        {
          question: "Your nephew is at an inquisitive age and has locked his attention and questions in on you. You respond with",
          options: [{
            optionA: "Hey buddy, where are your parents? You're not interested in entertaining him",
            optionB: " thoughtfully answering all of his questions and marvelling to yourself about how interesting his thought process is at that age", 
            optionC: "hang out for a bit with him and have fun but eventually distract him with a new activity and make your escape"
          }]
      },
        {
          question: "You got an amazing job offer in another city, which means leaving your best friend and wonderful apartment behind, you...",
          options: [{
            optionA: "Accept the offer, you'll miss your friend and the life you built but there are new relationships and life experiencing awaiting you, that's life",
            optionB: "Look for opportunities in your city, great friendships like this aren't worth leaving behind!", 
            optionC: "Weigh your options, you have to look at the bigger picture here! "
          }]
      },
  ]; 

// Dog breed and corresponding answers array
var dogs = [
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
