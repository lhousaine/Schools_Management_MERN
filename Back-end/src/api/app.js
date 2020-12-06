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

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log('school app listening at port : ', port);
});

export default app;
