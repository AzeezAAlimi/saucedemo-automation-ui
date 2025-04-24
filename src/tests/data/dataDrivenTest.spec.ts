import { test } from '../../fixtures/fixtures';
import JsonDataArray from '../../testData/loginData.json';

JsonDataArray.forEach((data) => {
  test(
    'Parameterize login test with different sets of data' + data.userName,
    async ({ homePage }) => {
      await homePage.goTo();
      await homePage.standardlogin(data.userName, data.password);
    },
  );
});
