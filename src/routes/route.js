const express = require('express');
const logger = require('./logger')
const logger1=require('../longger/logger1');
const currentDate=require('../util/helper');
const currentMonth=require('../util/helper');
const getBatchInfo=require('../util/helper');
const getString=require('../util/helper');
const toLowerCase=require('../util/helper');
const toUpperCase=require('../util/helper');
var chunk = require('lodash.chunk');
var tail = require('lodash.tail');
const uniq = require('lodash.uniq');
const lodash=require('lodash');

const router = express.Router();
router.get('/test-me', function (req, res) {
    console.log('I am inside the first route handler')
     logger1.welcome();
     currentDate.currentDate();
     currentMonth.currentMonth();
     getBatchInfo.getBatchInfo();
     getString.getString();
     toLowerCase.toLowerCase();
     toUpperCase.toUpperCase();     

    //console.log('The endpoint value is', logger.endpoint)
    //console.log('Calling log function')
    //logger.logging()
    res.send('My first ever api!')
});
router.get('/hello',function(req,res){
var a=chunk(["Januray","February","March","April","May","june","july","August","september",'octomber',"november","december"], 4)
const array=[1,3,5,7];
var a=tail(array);
console.log(a);
const array1=[1,2,2,3,4,4];
var c=uniq(array1);
let arrayOfKeyValueParis=[["horroe","Shutter Is Land"],["darm","Ashish"]];
console.log(lodash.fromPairs(arrayOfKeyValueParis));
console.log(c);
console.log(a);
});

router.get('/test-me2', function (req, res) {
    //console.log('I am inside the second route handler')
    res.send('My second ever api!')
});


router.get('/test-me5', function (req, res) {
    //res.send('My final ever api!')
});

router.get('/test-me3', function (req, res) {
    //res.send('My first ever api!')
});

router.get('/test-me4', function (req, res) {
    //res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason




