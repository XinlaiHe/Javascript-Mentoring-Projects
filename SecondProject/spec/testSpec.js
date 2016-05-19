describe("Test Image Loader Class", function() {

  it("Can Create Loader Class", function() {
    var loader = new ImageLoader([]);
    //demonstrates use of custom matcher
    expect(loader).not.toBe(null);
    expect(loader instanceof ImageLoader).toBeTruthy();
  });
  it("Can Create Add Images To Constructor", function() {
    var arr = ["1", "2", "3"];
    var loader = new ImageLoader(arr);
    //demonstrates use of custom matcher
    expect(loader._imageArr).toEqual(arr);
  });
});
