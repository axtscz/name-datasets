/**
 * Created by Alex Cruz on 4/5/2017.
 */
"use strict"
var mocha = require("mocha");
var randomPeople = require("./random.js");
var Promise = require("bluebird");
var assert = require("assert")



describe('Person', function() {
    describe('#srandom', function() {
        it('should return a person', function() {
            return randomPeople.randomName("IT", "F").then(function(person){
                assert(person = {name: "Annalaura", gender: "F", culture: "IT"});
            })
        });
    });
});