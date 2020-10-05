
const client = require('./database_postgres.js')

async function insertData(){
  await client.connect()
  // Criar Eventos

  const queryEvento = "INSERT INTO evento (nome) VALUES ($1)"

  await client.query(queryEvento, ['Encontro de Nodejs'])
  await client.query(queryEvento, ['Encontro de Postgresql'])

  //Criar Participantes

  const queryParticipante = "INSERT INTO participante (nome) VALUES ($1)"

  await client.query(queryParticipante,['Carlos'])
  await client.query(queryParticipante, ['Augusto'])
  await client.query(queryParticipante,['Janaína'])
  await client.query(queryParticipante,['Rafael'])

  // Adicionar participantes do evento Nodejs

  const queryEventoParticipante = "INSERT INTO evento_participante (evento_id,participante_id) VALUES ($1, $2)"

  await client.query(queryEventoParticipante, [1, 1])
  await client.query(queryEventoParticipante, [1, 2])
  await client.query(queryEventoParticipante, [1, 3])

  // Adicionar participantes do evento Postgresql

  await client.query(queryEventoParticipante, [2, 3])
  await client.query(queryEventoParticipante, [2, 4])

  await client.end()

  console.log("Dados Inseridos");
}

insertData()