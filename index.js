const express = require('express') 
const app = express() 
app.use(express.json()) 
const uploadRoute = require('./routes/upload')

const port = process.env.PORT || 3000

app.use(uploadRoute)

app.listen(port, () => {
    console.log('Server is running on port ' + port);
})