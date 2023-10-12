const express = require("express");
const app = express();
const port = 3001;
const bodyParser = require('body-parser')
const cors = require("cors")
const client =  require('./models/db_connect');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

try {
    client.connect();
    console.log("db connected")
} catch (error) {
    console.log(error)
}

const userRouter = require('./routes/user')
const signalRouter = require('./routes/signal')

app.use("/users", userRouter);
app.use("/signal", signalRouter);


app.get("/", (req,res) => {
    res.send("hello");
})

app.listen(port,()=> {
    console.log(`server started on port ${port}`);
})

