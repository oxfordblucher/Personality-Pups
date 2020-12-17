USE `PersonalityPupDB`;

CREATE TABLE dogs(
	id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    trait VARCHAR(200) NOT NULL,
    picUrl VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

INSERT INTO dogs (id, name, trait, picUrl) VALUES
    ("1", "Labrador Retriever", "Friendly, loyal and ready to retrieve birds on the hunt or fetch for hours!", "http://dog.ceo/api/breed/labrador/images/random"),
    ("2", "German Shepherd", "Smart, alert and protective. This pup is ready to protect the pack!", "http://dog.ceo/api/breed/germanshepherd/images/random"),
    ("3", "Golden Retriever", "The quintessential family dog! Friendly, goofy and easy going.", "http://dog.ceo/api/breed/retriever/golden/images/random"),
    ("4", "French Bulldog", "The class-clown! This goof ball is easy going and a great family pet.", "http://dog.ceo/api/breed/bulldog/french/images/random"),
    ("5", "English Bulldog", "Our favorite mascot dog! This pup is a couch potato with a personality.", "http://dog.ceo/api/breed/bulldog/english/images/random"),
    ("6", "Standard Poodle", "Our valedictorian dog! Be ready to keep this pup stimulated with exercise and tricks.", "http://dog.ceo/api/breed/poodle/standard/images/random"),
    ("7", "Beagle", "A real howler! Beagles have big personality, a strong nose for the hunt but chill with the family.", "http://dog.ceo/api/breed/beagle/images/random"),
    ("8", "Rottweiler", "A workhorse pup! Rottweilers need a job, be ready to offer jobs and direction for this pup.", "http://dog.ceo/api/breed/rottweiler/images/random"),
    ("9", "German Shorthaired Pointer", "An alert spy! This pup is loyal and alert and ready to show you the way towards game.", "http://dog.ceo/api/breed/pointer/german/images/random"),
    ("10", "Pembroke Welsh Corgi", "The Queen's dog! These high energy goofballs are very adaptable.", "http://dog.ceo/api/breed/corgi/cardigan/images/random"),
    ("11", "Dachshund", "A big personality in a little package! These pups are curious, a bit independent and ready for the hunt!", "http://dog.ceo/api/breed/dachshund/images/random"),
    ("12", "Yorkshire Terrier", "A true terrier! This pup is feisty and sweet.", "http://dog.ceo/api/breed/terrier/yorkshire/images/random"),
    ("13", "Australian Shepherd", "Work, work work! This pup is ready to herd the flock, fetch the ball or whatever task you hand it!", "http://dog.ceo/api/breed/australian/shepherd/images/random"),
    ("14", "Boxer", "A playful pup! This dog is sweet, goofy and inquisitive", "http://dog.ceo/api/breed/boxer/images/random"),
    ("15", "Siberian Husky", "Ready for the iditerod! This sledding pup is independent and loves a job. Best suited for a cold climate.", "http://dog.ceo/api/breed/husky/images/random"),
    ("16", "Cavalier King Charles Spaniel", "True royalty! This dog is sweet as pie and ready to warm any lap available.", "http://dog.ceo/api/breed/spaniel/images/random"),
    ("17", "Great Dane", "Make way! This pup is goofy, huge, loving and mistakenly thinks your lap is an option.", "http://dog.ceo/api/breed/dane/great/images/random"),
    ("18", "Miniature Schnauzer", "Smart, friendly and eager to please!", "http://dog.ceo/api/breed/schnauzer/miniature/images/random"),
    ("19", "Doberman Pinscher", "As loyal as they come! This pup is ready to protect the pack, always alert and fearless.", "http://dog.ceo/api/breed/doberman/images/random"),
    ("20", "Shih Tzu", "A true family pet! Easy with children, playful and sweet", "http://dog.ceo/api/breed/shihtzu/images/random"),
    ("21", "Boston Terrier", "Endlessly entertaining! A great apartment pet with playful energy.", "http://dog.ceo/api/breed/terrier/boston/images/random"),
    ("22", "Havanese", "Alert but quiet, these playful pups are ready to be trained!", "http://dog.ceo/api/breed/havanese/images/random"),
    ("23", "Bernese Mountain Dog", "Gentle giant! This pup is a great family pet if you can handle a bit of slobber.", "http://dog.ceo/api/breed/mountain/bernese/images/random"),
    ("24", "Pomeranian", "Tiny with big personality! This pup is ready to play all day", "http://dog.ceo/api/breed/pomeranian/images/random"),
    ("25", "Shetland Sheepdog", "Oh Lassie! This movie star pup is sweet and ready to be put to work. If you can handle the shedding!", "http://dog.ceo/api/breed/sheepdog/shetland/images/random");
