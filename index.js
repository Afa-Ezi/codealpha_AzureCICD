const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from CodeAlpha Azure CI/CD Pipeline!</h1><p>Deployed by Confidence Nwaokike</p>');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});