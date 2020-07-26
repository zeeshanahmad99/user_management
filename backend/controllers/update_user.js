const bcrypt = require('bcrypt');

const db = require('../db');

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { user } = req.body;

  db.transaction((trx) => {
    trx
      .select('*')
      .where('id', id)
      .from('user')
      .then((users) => {
        if (users.length < 1) throw new Error('user not found');
        return trx('user')
          .where('id', id)
          .update(user)
          .then(() => {
            return trx
              .select('*')
              .where('id', id)
              .from('user')
              .then((users) => res.json(users[0]));
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(404).json(err.message));
};

module.exports = deleteUser;
