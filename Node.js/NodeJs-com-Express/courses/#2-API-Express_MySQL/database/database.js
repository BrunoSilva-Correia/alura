const mysql = require('mysql2')

module.exports = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '183653',
    database: 'petshop_schedule'
})