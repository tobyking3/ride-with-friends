import express from 'express'
import path from 'path'
import open from 'open'

const app = express()
const port = 8080

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')))
// Start Express server
app.listen(port, (err) => {
    if(err){
        console.log(err)
    } else{
        console.log('Server running on port ${port}')
        open('http://localhost:' + port)
    }
    
})
