const express = require('express');
const axios = require('axios');
const myFunction = require('./my-function');

const app = express();
const port = 3000;

app.get('/say', async(req, res) => {
    try{
        const keyword = req.query.keyword;
        const response = await axios.get('https://045qp4x4gg.execute-api.us-east-2.amazonaws.com/QA',{
            params: {
                keyword: Hello
            }
        });
        res.send(response.data);
    } catch (error) {
        // Handle error here
        console.error(error);
        res.status(500).send('Lambda function Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
