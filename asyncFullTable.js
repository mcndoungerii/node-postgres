const {Client} = require('pg');

const client = new Client({
    user: "postgres",
    password: "0754684494",
    host: "localhost",
    port: 5432,
    database: "node_express"
});

execute()
async function execute() {
    try {
        await client.connect();
        console.log('Connection Successfully');
        // await client.query('insert into employee values ($1,$2)',[6,'Roberto'])
        const {rows} = await client.query('select * from employee');
        console.table(rows);
    }
    catch(e) {
        console.log(`Something Wrong happened ${e}`)
    }
    finally {
        await client.end();
        console.log('Connection disconnected');
    }
    
    

}