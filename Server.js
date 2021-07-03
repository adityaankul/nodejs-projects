/*console.log('Hello')
function Sample(){
    console.log(`running sample funcitn`)
}
Sample()

function display(){
    console.log('Display function as running')
}
display()

function sayHello(){
    console.log('welcome to nodejs ')
}
sayHello()*/
const express=require("express")
const app=express()

app.get("/",(req,res) =>{
    res.json({message: 'Hello'})
})
const PORT =3000

app.listen(PORT,()=>{
    console.log(`Server listenting on port ${PORT}`)
})