const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 8090

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static("public"));
app.use('/', require('./src/routes/routes'))
app.use(morgan('dev'))

app.use((req, res, next) => {
    res.status(404).render('error/404');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})