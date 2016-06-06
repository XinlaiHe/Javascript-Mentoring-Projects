var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var report = require('./spec/report/CustomReport');
var mailer = require("./spec/helpers/mailer.js");

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.onComplete(function(passed){
    if (passed) {
        console.log('all specs have passed');

        //send email
        mailer.setUp('xinlai.he.13@ucl.ac.uk', 'xinlai_he@epam.com', 'Test Report', report.content + "all specs have passed");
        mailer.sendMail();
    } else {
        console.log('at least one spec has failed');
    }
});

jasmine.addReporter(report);
jasmine.execute();