const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://VueDb:Vpu3RQaVW7f4c7n@vuedb.nozup.mongodb.net/VueDb?retryWrites=true&w=majority', {
    useNewUrlParser: true
}); // connect to our database

// db.on('error', console.error.bind(console, 'connection error:'));
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

module.exports = mongoose

