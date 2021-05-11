import express from 'express'


const baseURL = ``
const app = express()

/** ENGINE DEFINITIONS */
app.set('view engine', 'ejs')
app.set('views', './views')
app.use('/static', express.static('static'))

/** ROUTES */
import { crud } from './routes/crud.js'

/** BASEROUTER */
app.use(`${baseURL}/`, crud)


export { app }