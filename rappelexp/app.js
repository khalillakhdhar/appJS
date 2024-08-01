const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const PORT = 4000;
app.use(bodyParser.json())
function calculatePGCD(a,b)
{
    if(!b)
        return a;
    return calculatePGCD(b,a%b)
}
app.get("/",(req,res)=>{
    res.json("hello app")
})
app.post("/pgcd",(req,res)=>
{
    const {a,b}=req.body;
    const pgcd=calculatePGCD(a,b);
    res.json({pgcd})
})
app.listen(PORT, () => { console.log(`Serveur démarré sur http://localhost:${PORT}`); });