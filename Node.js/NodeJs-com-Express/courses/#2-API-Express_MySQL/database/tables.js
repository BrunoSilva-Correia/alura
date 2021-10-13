class Tables {
    init(conn){
        // console.log("Table created");
        this.conn = conn
        this.createServices()
    }

    createServices() {
        const id = 'id int NOT NULL AUTO_INCREMENT'
        const client = 'client varchar(50) NOT NULL'
        const pet = 'pet varchar(20)'
        const service = 'service varchar(20)'
        const status = 'status varchar(20) NOT NULL'
        const obs = 'observations text'
        const scheduleDate = 'schedule_date DATETIME NOT NULL'
        const creationDate = 'creation_date DATETIME NOT NULL'
        const pk = 'PRIMARY KEY(id)'
        const sql = `CREATE TABLE IF NOT EXISTS Services (${id}, ${client}, ${pet}, ${service}, ${status}, ${obs}, ${scheduleDate}, ${creationDate}, ${pk})`

        this.conn.query(sql, (error) => {
            if(error){
                console.log(error);
            } else {
                console.log('Services Table created/exists');
            }
        })
    }

}

module.exports = new Tables