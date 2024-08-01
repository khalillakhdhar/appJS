const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const PORT = 4000;
app.use(bodyParser.json())
let ages=[12,32,14,18]
app.post('add',(req,res)=>{
    const {age}=req.body;
    if(typeof age!=='number' || age<=0)
    {
        return res.status(400).json({error:"veuillez saisir un age valide"})
    }
    
    ages.push("age")
    res.json({message:"Age  ajouté avec succés"})

})
app.get('/stats',(req,res)=>{
    if(ages.length===0)
    {return res.status(400).json({error:"Aucun age ajouté"})}
const sum=ages.reduce((somme,parcours)=>somme+parcours,0)
/*
a=0;
for(let i=0;i<ages.length;i++)
{
    b=ages[i]
    a=a+b;
}
    */
/*
ages[1,23,12]
parcours 1:
a=0; premier pas
b=1=> ages[0]
a=a+b (operation)
parcours 2
a=1;
b=23
a=1+23;
...
reduce retourne toujours la premiére variable =>a
*/
const average=sum/ages.length;
const max =Math.max(...ages)
const min =Math.min(...ages)
res.json({message:`le tableau est ${ages}  la somme est ${sum} la moyenne est ${average} le maximum est ${max} et minimum ${min}`})
})
app.listen(PORT, () => { console.log(`Serveur démarré sur http://localhost:${PORT}`); });