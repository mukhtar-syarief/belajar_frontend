const express = require('express');
const { dirname } = require('path');
const path = require('path');


const app = express();

app.use("/src", express.static(path.resolve(__dirname, "", 'src')));


app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '', 'index.html'))
});


app.listen(process.env.PORT || 5000, () => {
    console.log('Server Running')
});