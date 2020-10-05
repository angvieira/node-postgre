
const client = require('./database_postgres.js')

async function createTables(){
    await client.connect()

    await client.query(`CREATE TABLE evento(
        id  SERIAL      PRIMARY KEY,
        nome VARCHAR(50) UNIQUE NOT NULL
    )`)

    await client.query(`CREATE TABLE participante(
        id   SERIAL         PRIMARY KEY,
        nome VARCHAR(50)    UNIQUE NOT NULL
    )`)

    await client.query(`CREATE TABLE evento_participante(
        evento_id INTEGER NOT NULL,
        participante_id INTEGER NOT NULL,
        PRIMARY KEY(evento_id, participante_id),
        FOREIGN KEY (evento_id) REFERENCES evento(id),
        FOREIGN KEY (participante_id) REFERENCES participante(id)
    )`)

    await client.end()

    console.log("Tabelas criadas")
}

createTables()