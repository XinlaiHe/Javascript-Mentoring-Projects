
var myReport = {
  startTime : undefined,
  endTime : undefined,
  content : '',
  jasmineStarted: function(suiteInfo) {
    this.startTime = Date.now();
    this.content += 'Running suite with ' + suiteInfo.totalSpecsDefined + "\n";
  },

  suiteStarted: function(result) {

    this.content += 'Suite started: ' + result.description + ' whose full description is: ' + result.fullName + "\n";
  },

  specStarted: function(result) {
    this.content += 'Spec started: ' + result.description + ' whose full description is: ' + result.fullName + "\n";
  },

  specDone: function(result) {
    this.content += 'Spec: ' + result.description + ' was ' + result.status + "\n";
    for(var i = 0; i < result.failedExpectations.length; i++) {
      this.content += 'F ailure: ' + result.failedExpectations[i].message + "\n";
      this.content += result.failedExpectations[i].stack + "\n";
    }
    //this.content += result.passedExpectations.length + "\n";
  },

  suiteDone: function(result) {
    this.content += 'Suite: ' + result.description + ' was ' + result.status + "\n";
    for(var i = 0; i < result.failedExpectations.length; i++) {

      this.content += 'AfterAll ' + result.failedExpectations[i].message + "\n";
      this.content += result.failedExpectations[i].stack + "\n";
    }
  },

  jasmineDone: function() {
    this.endTime = Date.now();
    this.content += 'Finished suite, it consumes ' + (this.endTime - this.startTime)/1000 + " s" + "\n";
    console.log(this.content);

  }
};

module.exports = myReport;