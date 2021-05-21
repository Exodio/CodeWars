describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(findUniq([0, 1, 0]), 1);
    Test.assertEquals(findUniq([1, 1, 1, 2, 1, 1]), 2);
    Test.assertEquals(findUniq([3, 10, 3, 3, 3]), 10);
  });
});