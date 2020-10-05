
const client = require('./database_postgres.js')

async function listData(){
  await client.connect()
  var result
  // Eventos
  result = await client.query("SELECT * FROM evento")
  console.log("EVENTOS:")
  console.log(result.rows);

  // Participantes
  result = await client.query("SELECT * FROM participante;")
  console.log("PARTICIPANTES:")
  console.log(result.rows);

  // Eventos e participantes
  result = await client.query("SELECT e.nome AS evento, p.nome AS participante FROM evento AS e, participante AS p, evento_participante ep WHERE ep.evento_id = e.id AND ep.participante_id = p.id")
  console.log("EVENTOS COM PARTICIPANTES:")
  console.log(result.rows);
}

listData()