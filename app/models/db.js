import mysql from 'mysql';
import dbConfig from"../config/db.config.js";

const sql = mysql.createConnection({
    host: dbConfig.host,
    port: 33306,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

sql.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database");
})

export default sql;
