const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log("Can't connect to database!")
        }
        else {
            console.log("Connected to database!")
        }
    }
);