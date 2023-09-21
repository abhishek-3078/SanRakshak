const mongoose = require('mongoose');

const dbURI = process.env.MONGO_URL;
console.log(dbURI)

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(dbURI);
    console.log("mongodb connected successfuly")

  }  