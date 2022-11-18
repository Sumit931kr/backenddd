import express from 'express'
// import review from './modal/reviewschema.js';
import review from '../modal/reviewschema.js';
const router = express.Router();


// Creating the Worksjop
router.post('/', async (req, res) => {
    try {
        const { star, comment } = req.body;

        const newreview = await review.create({
            star,
            comment,
            date: new Date().toISOString(),
        })
        res.status(201).json(newreview)

    } catch (error) {
        console.log("error", error)
    }
})

router.get('/all', async (req, res) => {
    try {

        const allreview = await review.find({})
        res.status(201).json(allreview)

    } catch (error) {
        console.log("error", error)
    }
})



export default router;
