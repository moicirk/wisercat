const express = require('express');
const app = express();
const bodyParser = require('body-parser');
port = 4000;

app.set('views', './../src');
app.set('view engine', 'html');

app.use(express.static('./../src'));
app.use(bodyParser.json());

const filters = [
  { id: 1, name: 'My first filter', selection: 1, criteria: [
      { type: 'amount', operator: 'equals', value: 4 },
      { type: 'title', operator: 'start', value: 'Meow' },
      { type: 'date', operator: 'from', value: '2021-10-25' }
    ] }
];

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
  res.render('index.html');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
