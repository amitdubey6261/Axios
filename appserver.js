const express = require('express');
const app = express();
app.use(express.json());
app.listen(5000 , ()=>{
    console.log("App is listening in port 5000")
});

app.get('/' , (req,res) =>{
    res.send("hello .. !");
})


app.post('/' , (req  , res )=>{
    console.log(req.body);
    console.log("The post function is exec()");
    res.send("Data Recived Succesfully ...!")
} )
