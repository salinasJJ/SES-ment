const Sequelize = require("sequelize");

const db = require("../config/db-config");


const Ses = db.define("ses", {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    sex: {
        type: Sequelize.STRING
    },
    birthDate: {
        type: Sequelize.STRING
    },
});

Ses.sync()
    .then(() => {
        console.log("Drop and resync database.");
    })

module.exports = Ses;