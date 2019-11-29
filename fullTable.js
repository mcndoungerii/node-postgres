const {Client} = require('pg');

const client = new Client({
    user: "postgres",
    password: "0754684494",
    host: "localhost",
    port: 5432,
    database:"node_express"
});

client.connect()
.then(() => console.log('Connection Successfully'))
.then(() => client.query('insert into employee values ($1,$2)',[5,'Luis']))
.then(() => client.query('select * from employee'))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end());