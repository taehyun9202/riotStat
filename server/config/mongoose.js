const mongoose = require("mongoose");
module.exports = db_name =>{
    mongoose.connect(`mongodb://localhost/${db_name}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(()=> console.log(`Successfully connected to ${db_name}`))
        .catch( err => console.log("Something went wrong", err));
}