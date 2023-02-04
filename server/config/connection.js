// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/salty-chamber-17710',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);