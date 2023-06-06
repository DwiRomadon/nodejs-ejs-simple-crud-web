const express = require('express')
const app = express()
const port = 8090

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use('/', require('./routes/routes'))

app.use((req, res, next) => {
    res.status(404).render('error/404');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})