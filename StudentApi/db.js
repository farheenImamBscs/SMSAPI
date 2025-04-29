// made a class pool an
const{Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString:process.env.DATABASE_URL, 
    // http server
    ssl:{
        rejectUnauthorized:false
    }
});
module.exports=pool;