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

// Users answer array
userAnswer = []


// questions and answer options array 
var questions = [
      {
          question: "You are sleeping next to your partner and they are taking up two thirds of the space, you...",
          options: [{
            optionA: [{
              name:"closer the better! Who needs space?",
              keys: all
            }],
            optionB: [{
              name: "grumpily push them over, it's so inconsiderate of your needs!",
              keys: [4,5,7,10,11,12,13,16,18,20,21,22,24,25]
            }],
            optionC: [{
              name: "It's not ideal but you make it work!",
              keys: [1,3,4,5,7,8,9,10,11,12,13,14,15,16,18,20,21,22,24,25]
            }]
          }]
      },
       {
          question: "the check comes to the table, do you...",
          options: [{
            optionA: [{
              name: "jump at the offer to pay the bill?", 
              keys: all
            }],
            optionB: [{
              name: "pull up your calculator app, let's split it!",
              keys: [1,3,9,10,13,14,15,18,20,21,22,25]
            }],
            optionC: [{
              name: "Let everyone know that you only got a salad and don't want to split",
              keys: [7,12,24]
            }]
      },
       {
          question: "It is 10am on Saturday morning, your day begins with...",
          options: [{
            optionA: [{
              name: "It began at 5am, I am already halfway through my errands!", 
              keys: [13,15,21]
            }],
            optionB: [{
              name: "smash that snooze button!",
              keys: [4,5,11,12,16,20,22,23]
            }],
            optionC: [{
              name: "I've had a cup of coffee and am reading the paper",
              keys: [1,2,3,6,7,8,9,10,14,17,18,19,24,25]
            }],
          }]
      },
        {
          question: "Your friend spilled red wine on your carpet, you...",
          options: [{
            optionA: [{
              name:  "It's fine, the rug is old and I'll just hide that corner under the couch!",
              keys: all
            }],
            optionB: [{
              name: "I've already called the carpet cleaner and sent my friend a copy of the bill",
              keys: [4,6,7,9,11,12,14,18,19,20,21,22,24]
            }],
            optionC: [{
              name: "I think I've got a stain stick somewhere, or some club soda?",
              keys: [1,4,5,6,7,8,9,10,11,12,14,17,18,19,20,21,22,24]
            }]
          }]
      },
        {
          question: "You meet someone for the first time at a party and your friend thinks they were unfriendly...",
          options: [{
            optionA: [{
              name: "Totally, such bad vibes",
              keys: [1,3,4,5,6,10,12,13,14,16,17,19,20,22,23,24,25]
            }], 
            optionB: [{
              name: "Maybe? We did just meet, some people don't give great first impressions",
              keys: [2,7,11,18,21,]
            }],
            optionC: [{
              name: "I am sure they were just shy! I'd love to talk to them more, I am sure there is a reason they got invited!",
              keys: all
            }]
          }]
      },
        {
          question: "You're headed to the airport, where is your passport?",
          options: [{
            optionA: [{
              name: "somewhere in my bag, oh whoops it's unzipped!",
              keys: all
            }], 
            optionB: [{
              name: "in my pocket, easily accessible for going through security",
              keys: [1,2,3,6,8,9,14,15,17,19,23]
            }],
            optionC: [{
              name:"in a hidden pouch attached to my body, there are pick-pockets you know!",
              keys: [2,8,9,15,19]
            }]
          }]
      },
        {
          question: "You find out your teacher has a favorite student, you...",
          options: [{
            optionA: [{
              name: "think that is unfair, all students should be treated equally",
              keys: [2,6,8,10,11,13,16,18,19,20,21,22,23,24]
            }], 
            optionB: [{
              name: "I guess that is an inevitability, they are human after all, and not all students produce the same work",
              keys: all
            }],
            optionC: [{
              name: "hope it is you, it'll be SO dissapointing if it isn't you",
              keys: [2,6,8,10,11,13,16,18,19,20,21,22,23,24]
            }]
          }]
      },
        {
          question: "You have two friends that are in a fight, you: a. make plans with them separately, you hope they work it out but it isn't your job to manage their relationship",
          options: [{
            optionA: [{
              name: "make plans with them separately, you hope they work it out but it isn't your job to manage their relationship",
              keys: []
            }],
            optionB: [{
              name: "Invite them over to mediate, can't we all get along?",
              keys: all
            }], 
            optionC: [{
              name: "Invite the friend you have a stronger relationship with over. You hate drama",
              keys: []
            }]
          }]
      },
        {
          question: "Your car needs an expensive fix to pass inspection, you...",
          options: [{
            optionA: [{
              name: "are glad you have an emergency fund just for this type of occassion!",
              keys: all
            }], 
            optionB: [{
              name: "Weigh your options, the car does have a lot of miles? Should you just sell it?",
              keys: []
            }],
            optionC: [{
              name: "I am a student, I don't have that kind of money! Back to the bus I suppose...",
              keys: []
            }]
          }]
      },
        {
          question: "You show up to your cousin's wedding and your friend is wearing the exact same jumpsuit, you...",
          options: [{
            optionA: [{
              name: "love it! Let's get a picture together!",
              keys: []
            }],
            optionB: [{
              name: "Turn right around, you packed another outfit just in case",
              keys: []
            }], 
            optionC: [{
              name: "Who cares? You love the outfit and it looks great on you, where's the dance floor??",
              keys: []
            }]
          }]
      },
        {
          question: "You're looking for a house to buy and your realtor suggests a home close to train tracks, you think...",
          options: [{
            optionA: [{
              name: "Deal breaker, I'm a light sleeper as it is, plus I work from home!",
              keys: []
            }],
            optionB: [{
              name: "It is a beautiful home, I am sure you adapt to the sounds over time, let's see it!",
              keys: []
            }], 
            optionC: [{
              name: "Just how close is it...?",
              keys: []
            }]
          }]
      },
        {
          question: "Your friend joined a new gym and is trying to get you to join with her, you say...",
          options: [{
            optionA: [{
              name: "Definitely! It'll be great to workout with a friend",
              keys: []
            }],
            optionB: [{
              name: "No thank you. I don't need to pay for something I won't use",
              keys: []
            }], 
            optionC: [{
              name: "Maybe. You already belong to a gym and frequent several studios to diverisfy my weekly workout regimine, but what do they offer?",
              keys: []
            }]
          }]
      },
        {
          question: "Your idea of grocery shopping with your partner looks like:",
          options: [{
            optionA: [{
              name: "Divide and conquer, let's make this errand go by quickly!",
              keys: []
            }],
            optionB: [{
              name: "Slowly go through the aisles and look for inspiration, hey look at how good these apples look!",
              keys: []
            }], 
            optionC: [{
              name: "",
              keys: []
            }]
          }]
      },
        {
          question: "Your nephew is at an inquisitive age and has locked his attention and questions in on you. Your response:",
          options: [{
            optionA: [{
              name: "Hey buddy, where are your parents? You're not interested in entertaining him",
              keys: []
            }],
            optionB: [{
              name: "Thoughtfully answering all of his questions and marvelling to yourself about how interesting his thought process is at that age",
              keys: []
            }], 
            optionC: [{
              name: "Hang out for a bit with him and have fun but eventually distract him with a new activity and make your escape",
              keys: []
            }]
          }]
      },
        {
          question: "You got an amazing job offer in another city, which means leaving your best friend and wonderful apartment behind, you...",
          options: [{
            optionA: [{
              name: "Accept the offer, you'll miss your friend and the life you built but there are new relationships and life experiencing awaiting you, that's life",
              keys: []
            }],
            optionB: [{
              name: "Look for opportunities in your city, great friendships like this aren't worth leaving behind!",
              keys: []
            }], 
            optionC: [{
              name: "Weigh your options, you have to look at the bigger picture here!",
              keys: []
            }]
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
