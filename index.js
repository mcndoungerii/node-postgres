const {Client} = require('pg');

const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database:"duka_server"
});

client.connect()
.then(() => console.log('Connection Successfully'))
.then(() => client.query('select * from shop where name = $1', ['Kariakoo']))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end());