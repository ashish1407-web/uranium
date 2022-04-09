const { response } = require('express');
const express = require('express');
const logger = require('./logger')
const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
console.log(req)
res.send('dummy response')
})
const array=['A','B','C','D','E'];
router.get('/movie',function(req,res){    
console.log("___________________-_________________________________________");
console.log(req);    
res.send(array);
});   
const movies= ["rand de basnasti", "the shining", "lord of the rings", "bartman begins"];
router.get('/movies',function(req,res) {
response.send(movies[req.query.indexnumber]);    
});
router.get('/moviess',function(req,res){
if(req.query.indexnumber>movies.length)
{
res.send("Invalid Input");    
}
else
{
res.send(moive[index]);    
}   
});
router.post('/test-me', function (req, res) {
    const data=req.body;
    console.log(data);
// console.log('------------------')
//console.log(req)
console.log('------------------')
console.log('These are the request query parameters: ', req.query)
res.send({msg :'My first ever api    i the best!'});
});
router.post('/test-test', function (req, res) {
let ele=req.body.Age;
console.log(ele);  
const arr=[1,2,3,4];
arr.push(ele);
res.send({msg:"post req 3",data:arr});
});

    
const array4=[ {
    id: 1,
    name: "The Shining"
   }, {
    id: 2,
    name: "Incendies"
   }, {
    id: 3,
    name: "Rang de Basanti"
   }, {
    id: 4,
    name: "Finding Nemo"
   }];
router.get("/films",function(req,res){   
console.log(req.query);
res.send(array4);
});   
router.get("/film/:filmId",function(req,res){
const a=req.params.filmId;       
if(a>array.length)
{
res.send("Please enter valid number");    
}
else
{
for(i=0;i<array4.length;i++)
{
if(array4[i].id==a)
{
res.send(array4[i]);
}    
}
}
})
const candidate=["Ashish","B","Mohit","vijay","vikas","mohal"]; 
router.get('/candidate/:abcd',function(req,res){  
const a=req.params.abcd;
var array=[];
for(i=0;i<candidate.length;i++)
{
var b=candidate[i]; 
console.log(b);   
if(a==b)    
{
array.push(candidate[b]);
}
}
res.send(array);
});                                                                                             

/*router.get('/candidates', function (req, res) {
    let arr1 = []
    let number = req.query['count']
    for ( let i=0; i<number ; i++){
    arr1.push(arr[i])
    }
    res.send(arr1)*/

    let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]
router.post('/players',function(req,res){
const  a=req.body;
console.log(a);
const b=req.body.name;
console.log(b);
let x=players.find(x=>x.name==b)
if(x==undefined)
{
players.push(a);    
}
res.send({ data: players , status: true })    
}); 


























































module.exports = router;


























