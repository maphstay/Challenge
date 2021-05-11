import express from "express"

const crud = express.Router()

/** GENERAL SETTINGS */
crud.use(express.urlencoded({extended: true}))

/** INTEGRATION ROUTES */
/** HOME PAGE */
crud.get('/index', (req, res) => {
    return res.render('index.ejs')
})

/** REDIRECT TO HOME PAGE */
crud.get('/', (req, res) => {
    return res.redirect('/index')
})

export { crud }