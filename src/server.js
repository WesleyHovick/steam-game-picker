import express from 'express';

var app = express();

app.get('/', (httpRequest, httpResponse) => httpResponse.send('Hi!'));
