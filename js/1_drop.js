
const client = require('./database_postgres.js')



async function dropTables(){
    await client.connect()
    await client.query('DROP TABLE evento CASCADE')
    await client.query('DROP TABLE participante CASCADE')
    await client.query('DROP TABLE evento_participante CASCADE')
    await client.end()

    console.log("Tabelas removidas")
}

dropTables()