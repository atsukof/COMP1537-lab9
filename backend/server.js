
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors()); // am enableing teh CORS

const fetch = require('node-fetch')

app.listen(3000, ()=> {
    console.log('server is running on port 3000.')
})


app.use(express.urlencoded({extended: true}))
app.get('/getCityWeather', async (req, res) => {
    resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.cname}&appid=ff6a117c38c76ceaf03d9c5bac038e52&units=metric`)
    jsonResp = await resp.json();
    res.send(jsonResp)
});


// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.get('/getCityWeather', async (req, res) => {
    resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.cname}&appid=b660f3402c54cb9a9c48f89c35249e5c&units=metric`)
    jsonResp = await resp.json()
    res.send(jsonResp);
});

