
const express = require('express'); 

const app = express(); 

const dbConfig = require('./db'); 

const busRoute = require('./routes/busRoutes');
const customerRoute = require('./routes/customerRoutes');

app.use('/api/buses', busRoute);
app.use('/api/customers', customerRoute);

const port = process.env.PORT || 8000; 

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// // create a GET route
// app.get('/express_backend', (req, res) => { //Line 9
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// });
