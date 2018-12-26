const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);

const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cab-sloution' 

mongoose.connect(
CONNECTION_URI, { useNewUrlParser: true}).then(() => {
    console.log('connected to db');
}).catch((err) =>{
    console.log(err);
});

module.exports = {
    mongoose
}
