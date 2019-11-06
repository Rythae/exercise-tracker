const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = config.get('mongoURI');

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: false })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  const exerciseRouter = require('./routes/exercises');
  const userRouter = require('./routes/users');

  app.use('/exercises', exerciseRouter);
  app.use('/users', userRouter);

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
//  .then(() => console.log('MongoDB Connected...'))
//  .catch(err => console.log(err));
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
// })

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})