const app = require('./app.js');
require('dotenv').config();
const PORT = process.env.PORT || 8800;
app.listen(PORT, _ => {
  console.log('App listening at port ', PORT);
});
