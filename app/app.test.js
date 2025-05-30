const request = require('supertest');
const express = require('express');
const path = require('path');

const app = express();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

describe('Testando rota GET /', () => {
  test('Retorna index.html com status 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('<h1>App 1.0</h1>');
  });
});
