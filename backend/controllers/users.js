const express = require('express');
const router = express.Router();

const db = require('../db');

const getUsers = (req, res) => {
  db.select('*')
    .from('user')
    .orderBy('id', 'desc')
    .then((users) => res.json(users))
    .catch(() => res.status(500).json('Error while fetching users'));
};

const getUser = (req, res) => {
  const { id } = req.params;

  db.select(
    'firstName',
    'lastName',
    'email',
    'phone',
    'mobile',
    'location',
    'image'
  )
    .from('user')
    .where('id', id)
    .then((users) => res.json(users[0]))
    .catch(() => res.status(500).json('Error while fetching users'));
};

router.get('/', getUsers);
router.get('/:id', getUser);

module.exports = router;
