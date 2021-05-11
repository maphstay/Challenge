import { Router } from 'express'

const baseRouter = Router()

baseRouter.get('/', (req, res) => {
    res.status(200).json({
        descricao: 'Desafio ProBrain',
        versao: 1.0,
    })
})

export { baseRouter }