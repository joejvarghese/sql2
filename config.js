require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4000,
  DB_CONFIG: {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DB_NAME,
    options: {
      trustServerCertificate:true,
      trustedConnection:false,
      enableArithAbrot:true,
      instancename:"SQLEXPRESS"
      },
      port:1433
      
  },
};
