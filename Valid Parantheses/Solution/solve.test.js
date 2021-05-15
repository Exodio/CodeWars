describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(validParentheses("()"), true);
    Test.assertEquals(validParentheses("())"), false);
  });
});