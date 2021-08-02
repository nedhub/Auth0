const express = require('express');
const app = express();
require('dotenv').config();


app.use(


    auth({
        authRequired: false,
        auth0Logout: true,
        issuerBaseURL: '',
        baseURL: '',
        clientID: '',
        secret: ''
    })

);


app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});



const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`listening on port ${port}`)
});