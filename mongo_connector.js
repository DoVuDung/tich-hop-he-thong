const mongoose = require('mongoose')

//model
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/kiemthubaomat', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log('$$$$$$$ Connect successfully!!!!')
    } catch (error) {
        console.log('@@@@@@ Connect failed!!!!')

    }
}

module.exports = { connect }