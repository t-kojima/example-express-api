const express = require('express');
const app = express();
const log4js = require('log4js');

log4js.configure('./log4js.json');
const logger = log4js.getLogger();

app.use(log4js.connectLogger(log4js.getLogger('express')));

app.get('/', (req, res) => res.send('hello world!'));

app.get('/:name', (req, res) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send({ message: `hello ${req.params.name}` });
  logger.info(`hello ${req.params.name}`);
});

app.listen(3000, () => console.log('http://localhost:3000'));
