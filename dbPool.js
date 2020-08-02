const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "mf72342e4pnttjgi",
    password: "p4h8e798ckil5f1f",
    database: "gtrd6sxb06uq8uv6"
});

module.exports = pool;