// connect nodejs to mysql
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Thanh25102",
    database: "Printer"
});


module.exports = {connection};
