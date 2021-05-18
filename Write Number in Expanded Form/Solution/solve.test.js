describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(expandedForm(12), "10 + 2");
    Test.assertEquals(expandedForm(42), "40 + 2");
    Test.assertEquals(expandedForm(70304), "70000 + 300 + 4");
  });
});
