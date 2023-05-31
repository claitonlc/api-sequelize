const express = require('express');

const router = express.Router();

const app = express();

router.get('/', (request, response) => {
    return response.send('Bem vindo');

});

module.exports = router;