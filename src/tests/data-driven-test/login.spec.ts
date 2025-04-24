import { test } from '../../fixtures/fixtures';
import loginDataArray from '../../testData/loginData.json';

loginDataArray.forEach((data) => {
  test(`Should login successfully with username: "${data.userName}"`, async ({
    homePage,
  }) => {
    await homePage.goTo();
    await homePage.standardlogin(data.userName, data.password);
  });
});
