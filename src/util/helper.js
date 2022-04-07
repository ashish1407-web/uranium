let currentDate=function() {
let data_ob=new Date();
let date=data_ob.getDate();
console.log(date);
}
let currentMonth=function() {
let data_ob=new Date();
let date=data_ob.getMonth()+1;
console.log(date);
}
let getBatchInfo=function()
{
console.log("Thorium,3, 15, the topic being taught today is ….. For example - ‘Thorium, W3D1, the topic for today ");
}
const string='functionUp   ';
function  getString() {
const d=string.trim();
console.log(d);    
}
function toUpperCase() {
var a=string.toUpperCase();
console.log(a);    
}
function toLowerCase()
{
var b=string.toLowerCase();
console.log(b);
}
module.exports.currentDate=currentDate;
module.exports.currentMonth=currentMonth;
module.exports.getBatchInfo=getBatchInfo;
module.exports.getString=getString;
module.exports.toLowerCase=toLowerCase;
module.exports.toUpperCase=toUpperCase;

