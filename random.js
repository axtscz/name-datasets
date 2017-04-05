/**
 * Created by Alex Cruz on 4/5/2017.
 */
var randomseed = require("random-seed").create("ALEX");
var fs = require("fs");
var _ = require("lodash");
var Promise = require("bluebird");

module.exports = {
    randomName: function(culture, gender) {
        return new Promise(function(resolve, reject)
        {
            fs.readFile("./json/master.json", "utf-8", function (err, data) {
                if (err) {
                    reject(err);
                }
                var names = JSON.parse(data)
                var namesFiltered = _.filter(names, {"culture": culture, "gender": gender});
                var name = namesFiltered[randomseed(namesFiltered.length)];
                resolve(name);
            });
        });
    }
};
