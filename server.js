const express = require('express');
const app = express();
const path = require('path');


// Get Request
app.get('/', (req, res) => {
    //res.sendFile(path.join(_dirname, 'index.html'));
    res.sendFile(path.join(__dirname, 'index.html'));
});

//create public folder
app.use("/public", express.static(path.join(__dirname, 'public')));


//server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    //console.log('Server berjalan di port ' + port);
    console.log(`Server berjalan-jalan di port ${port} `);
});
