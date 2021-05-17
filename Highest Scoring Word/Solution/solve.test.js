describe("Example tests", () => {
  Test.assertEquals(high("man i need a taxi up to ubud"), "taxi");
  Test.assertEquals(
    high("what time are we climbing up the volcano"),
    "volcano"
  );
  Test.assertEquals(high("take me to semynak"), "semynak");
  Test.assertEquals(high("aa b"), "aa");
  Test.assertEquals(high("b aa"), "b");
  Test.assertEquals(high("bb d"), "bb");
  Test.assertEquals(high("d bb"), "d");
  Test.assertEquals(high("aaa b"), "aaa");
});
