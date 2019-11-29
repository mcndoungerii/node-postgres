const {Client} = require('pg');

const client = new Client({
    user: 'postgres',
    password: '0754684494',
    host: 'localhost',
    port: 5432,
    database: 'node_express'
});

execute();
async function execute() {
    try {
        await client.connect();
        await client.query('BEGIN');
        // console.log('Connection Successfully');
        await client.query('update employee set name = $1',["Moreno"]);
        console.log('Updated Successfully');
        // const {rows} = await client.query('select * from employee')
        // console.table(rows);
        await client.query('insert into employee values ($1,$2)',[14,'Hamis']);
        console.log('inserted a row successfully');
        const {rows} = await client.query('select * from employee')
        console.table(rows);

        await client.query('COMMIT');
    }
    catch(e) {
        console.log(`Something went wrong ${e}`);
        await client.query('ROLLBACK');
    }
    finally {
        await client.end();
        console.log('Connection Disclosed');
    }
       
}