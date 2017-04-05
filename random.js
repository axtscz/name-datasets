/**
 * Created by Alex Cruz on 4/5/2017.
 */
var randomseed = require("random-seed").create("ALEX");
var fs = require("fs");
var _ = require("lodash");

fs.readFile("./json/master.json", "utf-8", function(err, data){
   if (err){
       console.log(err);
   }
   var names = JSON.parse(data)
   var italianFemale = _.filter(names, {"culture": "IT", "gender": "F"});
   for (var i = 0; i < 10; i++){
       console.log(italianFemale[randomseed(italianFemale.length)])
   }
});