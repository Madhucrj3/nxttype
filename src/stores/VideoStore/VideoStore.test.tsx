import videoStore from ".";
test("testing for feching Home Data", async () => {
  const homeData = await videoStore.fetchHomeData();
});
