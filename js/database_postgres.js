const { Client } = require('pg')


const client = new Client({

    host:'localhost',
    port: 5432,
    
    database:'postgres',
    user:'postgres',
    password:'123454321'
    
})



module.exports = client