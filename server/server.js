require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const commentsRouter = require('./routes/comments');

const app = express();

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('Could not connect to MongoDB Atlas', err));

app.use(cors());
app.use(express.json());

app.use('/api/comments', commentsRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));