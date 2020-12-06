import mongoose from 'mongoose';
import config from './config/config';
import ApiRouter from './routes/index';

const express = require('express');
const bodyParser = require('body-parser');

const port = config.PORT;
const mongodbUrl = config.MONGODB_URL;
const app = express();
const apiRouter = ApiRouter();

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to Database');
}).catch((error) => { return console.log(error.reason); });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    req.header(
        'Access-Control-Allow-Headers,Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Mthods', 'POST, PUT, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    return next();
});

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log('school app listening at port : ', port);
});

export default app;
