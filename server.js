var express = require('express');

//create my app

var app = express();
app.use(express.static('public'));

app.listen(3000, function(){
    console.log('server on port 3000')
})