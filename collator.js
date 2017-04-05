/**
 * Created by Alex Cruz on 4/4/2017.
 */
var fs = require("fs");

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

readFiles('./txt/', function(filename, content) {
    var nameList = content.split("\n");
    var names = [];
    for (name in nameList) {
        var nameObject = {};
        nameObject.name = nameList[name].replace(/\r/g, "");
        nameObject.gender = filename[7];
        nameObject.culture = filename.substr(0, 2);
        names.push(nameObject)
    }
    fs.writeFile("./json/" + filename.replace(".txt", ".json"), JSON.stringify(names), "UTF8")
}, function(err) {
    throw err;
});