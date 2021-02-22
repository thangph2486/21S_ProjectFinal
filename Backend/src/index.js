const app = require('./server')
const config = require('./config')

app.listen(7009, () => {
    console.log(`Server is running in ${config.HOST}: ${config.PORT}`)
})
