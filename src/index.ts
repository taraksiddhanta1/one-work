import express, {Request, Response} from "express"

const app=express()

app.listen(8080, ()=>console.log("Server Running......."))

app.get('/', (req: Request, res: Response)=>{
    res.json({success: true})
})