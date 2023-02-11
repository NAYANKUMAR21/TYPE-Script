const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send({ message: 'data fetched by typscript' });
});
app.listen(8080, () => {
    console.log('listening on http://localhost:8080');
});
