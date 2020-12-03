DROP TABLE if exists burgers;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN default false,
    createdAt TIMESTAMP default CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name) VALUES ('Swiss/Gruyere, carmelized onion, mushroom -MR'), ('A1, grilled onion, double stack -MW'), ('Vermont sharp, blt -MD');