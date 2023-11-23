import express from 'express'

const router = express.Router();

router.get('/api', (req,res)=>{
    res.json({message: "Hello World from Server"})
})

export default router;