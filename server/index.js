const express = require('express');
const dataRouter = require('./routes/data.routes');
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', dataRouter);

const start = async () => {
    try {
        app.get('/', (req, res) => {
            res.send('Hello');
        })
        app.listen(PORT, () => console.log(`Server started at ${PORT}`))
    }
    catch(e) {
        console.log(e);
    }
}

start();