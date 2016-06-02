var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var report = require('./spec/report/CustomReport');

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.onComplete(function(passed){
    if (passed) {
        console.log('all specs have passed');
    } else {
        console.log('at least one spec has failed');
    }
});

jasmine.addReporter(report);
jasmine.execute();