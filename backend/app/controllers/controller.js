const Ses = require("../models/model");


exports.create = (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        sex: req.body.sex,
        birthDate: req.body.birthDate,
    };
  
    Ses.create(user)
        .then(data => { 
            res.send(data); 
        })
        .catch(err => {
            res.status(500).send({
                message: err.message,
            });
        });
};

exports.readAll = (req, res) => {
    Ses.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message,
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
  
    Ses.update(req.body, { where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Profile updated."
                });
            } else {
                res.send({
                    message: "Unable to update profile."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message,
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Ses.destroy({ where: { id: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Profile deleted"
                });
            } else {
                res.send({
                    message: "Unable to delete profle."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};