const conn = require('../database/database')
const moment = require('moment')

class Service {
    create(service, res) {

        const creation_date = moment().format('YYYY-MM-DD HH:MM:SS')
        const schedule_date = moment(service.schedule_date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const validDate = moment(schedule_date).isSameOrAfter(creation_date)
        const validClient = service.client.length >= 3

        const validator = [
            {
                field: "schedule_date",
                valid: validDate,
                error_message: "schedule date must be greater than or equal to today's date"
            },
            {
                field: "client",
                valid: validClient,
                error_message: "client length must be greater than or equal 3 characters"
            }
        ]

        const errors = validator.filter(el => !el.valid)

        if(errors.length){
            res.status(409).json(errors)
        } else {
            const serviceWithData = {...service, creation_date, schedule_date}
    
            const sql = 'INSERT INTO services SET ?'
    
            conn.query(sql, serviceWithData, (error, results) => {
                if (error) {
                    res.status(400).json(error)
                } else {
                    res.status(201).json(results)
                }
            })
        }
    }
}

module.exports = new Service