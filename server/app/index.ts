import express from 'express';

// Create a new express application instance
const app: express.Application = express();

const port = 3000;

const routes = require('./routes/index')

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', routes);

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});

