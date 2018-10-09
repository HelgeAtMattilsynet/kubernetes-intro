const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Helge Langseth", "location": "Earth"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2011", "yearTo": "2018", "place": "Mattilsynet", "comment": "Am doing stuff"}, {"yearFrom": "2004", "yearTo": "2011", "place": "Diakonhjemmet Sykehus", "comment": "Was doing stuff"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "1996", "yearTo": "1999", "place": "Gjøvik College", "comment": "Studied"}, {"yearFrom": "1999", "yearTo": "2002", "place": "Oslo University", "comment": "Studied some more"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
