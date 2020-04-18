var express = require('express');
var app = express();

var messages = [{text: 'some text', owner: 'Tim'}, {text: 'another text', owner: 'Jane'}];

app.get('/messages', (req, res) => {
    res.json(messages);
})

app.listen(1234);