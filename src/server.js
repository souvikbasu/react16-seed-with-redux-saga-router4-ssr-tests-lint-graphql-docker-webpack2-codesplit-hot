import Express from 'express'

const app = Express()
const port = 3000

app.use('/static', Express.static('static'))

app.use(handleRender)

function handleRender(req, res) { 
    res.sendFile(__dirname + '/index.html');
 }

console.log(`\nStarting Node server at port ${port}...`);
app.listen(port)