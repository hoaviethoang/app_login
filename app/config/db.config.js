import {} from 'dotenv/config';
import sql from 'mysql'
const dbConfig ={
  host: process.env.DB_HOST,
  port: 33306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}
export default dbConfig;