const express = require('express');
const app = express();
const bodyParser = require('body-parser');
port = 4000;

app.set('views', './../dist/wisercat');
app.set('view engine', 'html');

app.use(express.static('./../dist/wisercat'));
app.use(bodyParser.json());

/**
 * Instaed of database
 * @type array
 */
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

app.post('/api/filter', (req, res) => {
  const id = filters[filters.length - 1].id + 1;

  const filter = req.body;
  filter.id = id;
  filters.push(filter);

  res.json(filters[filters.length - 1]);
});

app.put('/api/filter/:id', (req, res) => {
  const id = req.param.id;
  const filterIndex = filters.findIndex(filter => filter.id === id);
  if (filterIndex === undefined) {
    throw new Error('Filter not found');
  }

  filters[filterIndex] = req.body;

  res.json(filters[filterIndex]);
});

app.delete('/api/filter/:id', (req, res) => {
  const id = req.param.id;
  const filterIndex = filters.findIndex(filter => filter.id === id);
  if (filterIndex === undefined) {
    throw new Error('Filter not found');
  }

  filters.splice(filterIndex, 1);

  res.json([]);
});

app.get('/', (req,res) => {
  res.render('index.html');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
