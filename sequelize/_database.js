const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'postgres',
  username: 'postgres',
  password: '123454321',
  dialect: 'postgres',
  port: 5432,
  logging: true
});

module.exports = sequelize

// Test DB Conenction //
async function test(){
  try{
      let result = await sequelize.authenticate()
      console.log("Sequelize realizou a conex�o com o banco de dados com sucesso!")
  }
  catch(error){
      console.error("Houve um erro ao conectar com o banco de dados:")
      console.error(error)
      process.exit()
  }
}

test()