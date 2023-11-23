import dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
const PORT = process.env.PORT || 3002

import  express  from "express"
const app = express();

import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(express.json())


import router from "./routes/main.js"
app.use('/', router)

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})