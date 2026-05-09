//const {Person} = require('./person');
//const person = new Person('Raviel')
const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect');

dotenv.config();

connectToDatabase();

//require('./modules/path');
//require("./modules/http");
require('./modules/express');

//console.log(person.sayMyName());