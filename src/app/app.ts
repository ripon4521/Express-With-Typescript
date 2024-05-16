import express, { NextFunction, Request, Response } from 'express';
const app = express()
app.use(express.json());


const userRouter = express.Router();
app.use("/api/v1/users",userRouter);

userRouter.post('/create-user', ( req:Request, res:Response ) => {
  const user = req.body;
  console.log(user)
  res.send({
    success: true,
    message: 'User Created',
    user: user
  })

 
})







app.get('/', ( req:Request, res:Response , next : NextFunction) => {
  res.send("Hello!");
  next();
})

app.post('/', ( req:Request, res:Response ) => {
  console.log(req.body)
  res.send('Get Developer ')
})

app.all('*', ( req:Request, res:Response) => {

  res.status(404).send({
    success: false,
    message: "Route is not Found"
  })
})


app.use((error:any, req:Request, res:Response, next: NextFunction) =>{
    if (error) {
      res.status(500).send({
        success: false,
        message: "Somethings error"
      })
      
      
    }

})

export default app; 