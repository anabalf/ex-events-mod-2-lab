const express = require('express');
const events = require('../controllers/events.controller');

const router = express.Router();

router.get('/events', events.list);
router.get('/events/:id', events.detail);
router.get('/create-event', events.create);         /**Preguntar cuándo poner '/' y cuándo no*/
router.post('/create-event', events.doCreate);
router.get('/events/:id/delete', events.delete);

router.get('/', (req, res, next) => res.redirect('/events'));

module.exports = router;