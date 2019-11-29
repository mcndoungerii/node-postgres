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
.catch(e => console.log(e))
.finally(() => client.end());