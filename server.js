const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const api = require('./routes/api');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname+'/dist/auth/'))
app.use(cors());

app.use('/api', api);

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/auth/index.html'));
})

// Start node server
app.listen(PORT, function() {
    console.log('current directory is : "'+__dirname+'" and server is running on port ' + PORT)
});

