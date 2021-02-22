const expres = require('express')
const app = expres()
const Database = require('./database')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
const db = new Database()


app.post('/items', (req, res) => {
    let item = req.body
    try {
        db.createItem(item)
        res.status(201).send({
            item: `Item [${item.id}] is created`
        })
    } catch (error) {
        console.log(error)
    }
})

app.get('/', (req, res) => {
    try {
        res.status(200).send(
            db.getAll()
        )
    } catch (error) {
        console.log(error)
    }
})

module.exports = app