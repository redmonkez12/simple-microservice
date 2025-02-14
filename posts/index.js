const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const posts = {
    
};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/post', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    
    posts[id] = {
        id,
        title,
    };
    
    await axios.post('http://localhost:4005/posts', {
        type: 'PostCreated',
        data: {
            id,
            title,
        },
    });
    
    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    res.send({});
});

app.listen(4000, () => {
    console.log("App listening on port 4000");
});