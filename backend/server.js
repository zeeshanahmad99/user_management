const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const createUser = require('./controllers/create_user');
const userRouter = require('./controllers/users');
const deleteUser = require('./controllers/delete_user');
const updateUser = require('./controllers/update_user');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// routes goes here

app.use('/users', userRouter);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

const PORT = process.env.PORT;

app.listen(PORT || 4000, () => {
  console.log(`server started at port ${PORT || 4000}`);
});
