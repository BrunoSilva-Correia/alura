const express = require('express')
const app = express()
const port = 3000

const conn = require('./database/database')
const Tables = require('./database/tables')

conn.connect(error => {
    if(error){
        console.log(error)
    } else {
        console.log('Database Connected');

        Tables.init(conn)

    }
})

const servicesRoutes = require('./controllers/ServicesController')

app.use(express.static('public'));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.use('/', servicesRoutes);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on ${port}!`))