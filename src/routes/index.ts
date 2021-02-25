import { Router } from 'express'
import { producto } from '../index'
const router = Router()


router.get('/productos', (req, res) => {
  try {
    res.status(200).json(producto.getAll())
  } catch (err) { return res.status(500).json( { error: err.message })}
})

router.get('/productos/:id', (req, res) => {
  try {
    res.status(200).json(producto.getOne(+req.params.id))
  } catch (err) { return res.status(500).json( { error: err.message })}
})

router.post('/productos', (req, res) => {
  try {    
    console.log(req.body)
    if(!req.body.title && req.body.title == '') {
      throw Error('Falta el titulo del producto')
    }

    res.status(200).json(producto.add(req.body))
  } catch (err) { return res.status(500).json({ error: err.message || 'Error'})}
})

router.put('/productos/:id', (req, res) => {
  try {
    res.status(200).json(producto.update(req.body))
  } catch (err) { return res.status(500).json({ error: err.message || 'Error'})}
})

router.delete('/productos/:id', (req, res) => {
  try {
    res.status(200).json(producto.delete(+req.params.id))
  } catch (err) { return res.status(500).json({ error: err.message || 'Error'})}
})


export default router