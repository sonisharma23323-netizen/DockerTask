const express =  require("express");
const app  = express();
const PORT = 8080;
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/health',(req,res)=>{
    res.json({
        status:"ok"
    })

})
app.listen(PORT,()=>{
    console.log(`Backend is running locally on http://localhost:${PORT}`);
})