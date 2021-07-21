const express = require("express");
const cors = require("cors");


const db = require("./app/config/db-config");
db.authenticate()
    .then(() => {
        console.log(
            'Connected to database.'
        )
    })
    .catch(err => { 
        console.log(
            'Error: ' + err
        )
    })

const app = express();
app.use(cors({
    origin: 'http://localhost:3001'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Welcome" });
});

app.use('/api', require("./app/routes/routes"));

const port = process.env.PORT || 3000;
app.listen(
    port, 
    () => {
        console.log(`Server is running on port ${port}.`);
    }
);