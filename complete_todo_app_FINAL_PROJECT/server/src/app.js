const express = require('express')
//const api = require('./api');
const app = express();
const PORT = 3001;
const cors = require('cors');
const todoRoute = require('./routes/todoRoute');
const bodyParser = require('body-parser')

require('./db');

app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());

app.get('/api/health', (req, res) => {
    res.json({
        message: 'im ready'
    })
})

app.use('/api/todo', todoRoute);

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`);
})



