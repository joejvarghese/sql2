const expressAsyncHandler = require("express-async-handler");
const { pool } = require("../Database/Connection");
const sql = require('mssql');

const md5 = require('md5');
const { request } = require("http");

const runStoredProcedureWithParameters = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const request = pool.request(); // Use the pool for creating a request

    // Replace 'yourStoredProcedure' with the name of your stored procedure
    request.input('email', sql.VarChar, email);
    request.input('password', sql.VarChar, password);


    const result = await request.execute('LOGIN_SPR');

    // Output the result
    console.log('Stored procedure result:', result);

    // You can access the data returned by the stored procedure from 'result.recordset'
    console.log('Data returned:', result.recordset);

  } catch (err) {
    console.error('Error running stored procedure:', err);
  }
});

module.exports = {
  runStoredProcedureWithParameters
};
