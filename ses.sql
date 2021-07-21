CREATE TABLE ses(
    id serial PRIMARY KEY,
    firstName VARCHAR ( 200 ),
    lastName VARCHAR ( 200 ),
    sex VARCHAR ( 10 ),
    birthDATE DATE,
    editable BOOLEAN DEFAULT false,
    created_on DATE,
    last_login DATE
);
