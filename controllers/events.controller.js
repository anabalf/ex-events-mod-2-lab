const createError = require('http-errors');
const mongoose = require('mongoose');
const Event = require('../models/event.model');

module.exports.list = (req, res, next) => {
  Event.find()
    .sort({start: -1})
    .then((events) => res.render('events/list', {events}))
    .catch((error) => next(error));
}

module.exports.detail = (req, res, next) => {
    const { id } = req.params;
    Event.findById(id)
        .then((event) => {
            if(!event) {
                next(createError(404, 'Event not found'))
            } else {
                res.render('events/detail', {event})
            }
            })               
        .catch((error) => next(error));
}

module.exports.delete = (req, res, next) => {   
  const id = req.params.id;
  Event.findByIdAndDelete(id)
    .then((event) => {                                      
      if(!event) {
        next(createError(404, 'Event not found'))
      } else {
        res.redirect('/events');
      }
    })
    .catch((error) => next(error));
}

module.exports.create = (req, res, next) => res.render('events/create');

module.exports.doCreate = (req, res, next) => {
    const event = req.body;
    Event.create(event)
      .then((event) => res.redirect('/events'))
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(400).render('events/create', { event, errors: error.errors })
        } else {
            next(error);
        }
      });
}