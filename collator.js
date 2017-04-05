/**
 * Created by Alex Cruz on 4/4/2017.
 */
var fs = require("fs");
var jsonMin = require("jsonminify")

//Function to recursively load all files from a directory
function readFiles(dirname, onFileContent, onError) {
    fs.readdir(dirname, function(err, filenames) {
        if (err) {
            onError(err);
            return;
        }
        filenames.forEach(function(filename) {
            fs.readFile(dirname + filename, 'utf-8', function(err, content) {
                if (err) {
                    onError(err);
                    return;
                }
                onFileContent(filename, content);
            });
        });
    });
}

var masterList = [];

//Actually load our txt files directory
readFiles('./txt/', function(filename, content) {
    var nameList = content.split("\n");
    //holds our names
    var names = [];
    for (name in nameList) {
        var nameObject = {};
        //replace ensures we aren't left with ugly \r characters
        nameObject.name = nameList[name].replace(/\r/g, "");
        nameObject.gender = filename[7];
        nameObject.culture = filename.substr(0, 2);
        //add name object to array
        names.push(nameObject);
        masterList.push(nameObject);
    }

    //This writes the array to a JSON file
    fs.writeFile("./json/" + filename.replace(".txt", ".json"), JSON.stringify(names), "UTF8");
    var masterListJSON = JSON.stringify(masterList)
    fs.writeFile("./json/master.json", masterListJSON, "UTF8");

}, function(err) {
    throw err;
});