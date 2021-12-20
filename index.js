if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port  = process.env.PORT || 2000

app.use("/dev-info",require("./controller/device"))

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Welcome to Sms Saver"
    })
})


app.listen(port, async () => {
  console.log("Prot is running at : " + port || port);
});
