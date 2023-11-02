import express from 'express'
import { Request, Response } from "express";
import { general_module_router } from './routes/general_module_router'
import cors from 'cors'
import { session_router } from './routes/session_router';


// import multer, {Multer} from 'multer';
// import { fileUploader } from './middleware/file_reader';

const app = express()

// const storage = multer.memoryStorage()
// const upload: Multer = multer({storage})
 

app.use(express.json())
app.use(cors<Request>())
// app.post('/file', upload.any() , fileUploader)
app.use(general_module_router)
app.use(session_router)


export default app