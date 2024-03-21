const express = require('express');
const app = express();

app.get('/zalo-user', (req, res) => {
    const url = req.headers['url'];
    const token = req.headers['token'];

    if (!url || !token) {
        res.status(404).send('');
        return;
    }

    const options = {        
        headers: {'access_token': token}
    };
      
    fetch(url, options).then(
        (res) => res.json()).then(data => {            
            res.send(data);
        }          
    );    
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});