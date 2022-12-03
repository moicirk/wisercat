const express = require('express');
const app = express();
const bodyParser = require('body-parser');
port = 4000;

app.set('views', './src');

const filters = [
  { id: 1, name: 'My first filter', selection: 1, criteria: [
      { type: 'amount', value: 4 },
      { type: 'title', value: 'Meow' },
      { type: 'date', value: '2021-10-25' }
    ] }
];

app.use(express.static('src'));
app.use(bodyParser.json());

app.get('/api/filter', (req, res) => {
  res.json(filters);
});

app.put('/api/filter', (req, res) => {
  res.json([]);
});

app.post('/api/filter', (req, res) => {
  res.json([]);
});

app.get('/', (req,res) => {
  res.send('Heelooo my friend');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
