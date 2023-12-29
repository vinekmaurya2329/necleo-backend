const mongoose = require('mongoose');
const url  = process.env.MONGODBURI
mongoose.connect(url)
.then(()=>{
    console.log('DB is now connected ');
}).catch(()=>{
    console.log('error while connectinmg DB');
})

module.exports = mongoose; 