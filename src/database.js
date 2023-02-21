import mongoose from "mongoose";

const uri = "mongodb+srv://ale:MichisLove$10@cinema.14nlufs.mongodb.net/test";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((db)=> {
    return console.log('♡ Our database is connected!! ♡')
}).catch(err => console.log(err))