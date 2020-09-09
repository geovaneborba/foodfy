const express = require('express')
const cors = require('cors')
const nunjucks = require('nunjucks')

const app = express()

app.use(cors())
app.use(express.static("public"))

// Configuração do template engine
app.set("view engine", "html")

nunjucks.configure("views", {
    express: app
})


app.listen(3001, () => console.log('Servidor rodando na porta 3001'))