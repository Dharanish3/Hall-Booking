import  express  from "express";
import Router from './Source/Routes/web.js'

const app = express()
const port = process.env.PORT || 8000


app.use(express.json())
app.use('/',Router)



app.listen(port,() => console.log(`App listening in ${port}`))

