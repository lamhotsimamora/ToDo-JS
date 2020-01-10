const path = require('path');
const express = require('express')
const app  = express()
const port = 8080

app.use(express.static('public'))

const home_file = path.join(__dirname+'/public/index.html');
const about_file = path.join(__dirname+'/public/about.html');

app.get('/', (req, res) => 
   res.sendFile(home_file)
)

app.get('/home', (req, res) => 
   res.sendFile(home_file)
)

app.get('/about', (req, res) => 
   res.sendFile(about_file)
)

app.listen(port, () => 
	console.log(`listening on port ${port}!`)
)