const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");  
const bodyParser = require("body-parser");
const mongoose = require("mongoose");   
const router = require("./Routes/orderRoute");
const contactRoute = require("./Routes/contactRoute");
const productRouter = require("./Routes/productRoute");

const app = express();

const PORT = process.env.PORT || 3001;
dotenv.config();    

app.use(cors());
app.use(express.json());    
app.use(bodyParser.json()); 

app.use("/api", router);
app.use("/api", contactRoute);
app.use("/", productRouter);

mongoose.connect(process.env.MONGODBDATABASE).then(() => {
    console.log("Successfully connected to the database");   
    app.listen(PORT, () => {
        console.log(`Server is Listening at the the port ${PORT}`);
    }); 
}).catch(() => {   
    console.log("Failed to connect to the database");   
});


