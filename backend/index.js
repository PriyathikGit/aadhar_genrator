const express = require('express');
const router = require('./routes/MyUid');
const app = express();
const cors = require('cors');
import path from "path"

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

const bodyParser = require('body-parser');
router.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({ users: ['users', 'users2'] });
});

app.use('/api', router);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

app.listen(3000, () => {
  console.log('server started on port 3000');
});
