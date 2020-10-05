
const sequelize = require('./_database.js')

async function test(){
    try {
        let result = await sequelize.authenticate()
        console.log("Sequelize realizou a conexão com o banco com sucesso!")
    } catch (error) {
        console.error("Houve um erro ao conectar com o banco de dados!")
        console.error(error)
        process.exit
    }
}

test()