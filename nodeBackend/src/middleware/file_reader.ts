import multer, {Multer} from "multer";
import { Request, Response } from 'express'

export const fileUploader = (req:Request, res:Response) => {
    // console.log(req.files)

    if (req.files?.length !== 0) {
        const data: any = req.files

        const newData: any[] = data

        newData.map(f => console.log(f.fieldname))
 
    }

    const ejemploByes = Buffer.from([1,3,6,9,6,91])

    console.log(ejemploByes)

    res.json('asd')
    
}
