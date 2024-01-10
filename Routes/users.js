const express = require('express');
const userController = require('../Controller/users.controller');
const router = express.Router();

const userRoutes = () =>{
    
    router
        .route('/login')
        .post(userController.runStoredProcedureWithParameters);

    return router
}



module.exports = userRoutes;