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

app.get('/', (req, res) => {
    return res.render("index")
})

app.get('/sobre', (req, res) => {
    return res.render("sobre")
})

app.get('/receitas', (req, res) => {
    return res.render("receitas")
})


app.listen(3001, () => console.log('Servidor rodando na porta 3001'))