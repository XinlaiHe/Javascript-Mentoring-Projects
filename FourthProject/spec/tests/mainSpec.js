//TDD test driven development
//BDD behaviour driven development

describe("Test", function() {

  it("Contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("Use spy", function(){

    var fake = {
      test : function(){
        console.log("Hello");
      }
    };

    spyOn(fake, "test");
    fake.test();
    expect(fake.test).toHaveBeenCalled();

  });

  it("Async function", function(done){
    var word = "success"
    var promise = new Promise(function(resolve, reject){

        setTimeout(function(){
          resolve(word);
          done();
        }, 2000);
    });
    promise.then(function(val){
      expect(val).toEqual(word);
    });
  })

});


