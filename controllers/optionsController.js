const db = require("../models");

module.exports = {

    findByGenre: function(req, res){
        db.Option.find({})
        .where('genres.name').equals(genres)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.json(err));
    },
    findById: function(req, res){
        db.Option.find({_id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch((err) => res.json(err));
    },
    create: function(req, res){
        db.Option.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch((err) => res.json(err));
    },
    update: function(req, res){
        db.Option.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch((err) => res.json(err));
    },
    remove: function(req, res){
        db.Option.findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch((err) => res.json(err));
    }

}