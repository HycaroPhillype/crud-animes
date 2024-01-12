const express = require('express');

const server = express();

server.use(express.json());

const animes = ['Naruto', 'Hunter x Hunter', 'Fullmetal Alchimist', 'Dragon Ball Z', 'Ataque de Titans', 'Demon Slayer'];

server.get('/animes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(animes[index]);
});

server.get('/animes', (req, res) => {

    return res.json(animes);
});

server.post('/animes', (req, res) => {
    const { name } = req.body;
    animes.push(name);

    return res.json(animes);

});

server.put('/animes/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    animes[index] = name;

    return res.json(animes);
});

server.delete('/animes/:index', (req, res) => {
    const
})








server.listen(5000);
