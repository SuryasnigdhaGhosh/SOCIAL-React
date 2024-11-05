import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"xxxxxx",
    password:"xxxxxxxxx",
    database:"xxxxxx"
})
