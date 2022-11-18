import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import simple from './routes/simple.js'

const MongoURI = 'mongodb+srv://sumit:test@inotebook.la6ft.mongodb.net/live?retryWrites=true&w=majority'
// console.log(MongoURI);
const port = 5000
const app = express();
app.use(cors());
app.use(express.json());

app.use('/review/rating', simple)

app.use('/', (req, res) => {
    res.json("server is running")
})



mongoose.connect(MongoURI, () => {
    console.log("Connected to database sucessfully")
})


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})

