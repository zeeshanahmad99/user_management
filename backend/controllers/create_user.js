const bcrypt = require('bcrypt');

const db = require('../db');

const creatUser = async (req, res) => {
  let { user } = req.body;
  const hash = await bcrypt.hash(user.password, 10);

  user = { ...user, password: hash };

  db.transaction((trx) => {
    trx
      .select('*')
      .where('email', user.email)
      .from('user')
      .then((users) => {
        if (users.length > 0)
          return res.status(403).json('email already exists.');
        return trx
          .insert(user)
          .into('user')
          .then((newUserId) => {
            return trx
              .select('*')
              .from('user')
              .where('id', newUserId[0])
              .then((users) => res.json(users[0]));
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json('unable to create user'));
};

module.exports = creatUser;
