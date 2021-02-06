const express = require('express');
const app = express();
const api = require('./routes');

const PORT = process.env.PORT ?? 8081;

app.use('/api', api);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
