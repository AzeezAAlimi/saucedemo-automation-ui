import { test } from '../../fixtures/fixtures';
import { userData } from '../../config/testData';

test('E2E: The standard user can log in and complete a product purchase successfully', async ({
  homePage,
  inventoryPage,
  cartPage,
  checkoutStepOnePage,
  checkoutSteptwoPage,
  checkoutCompletePage,
  page,
}) => {
  const { username, password, firstName, lastName, zipCode } =
    userData.standardUser;
  await homePage.goTo();
  await homePage.standardlogin(username, password);
  await inventoryPage.inventoryPageLoaded();
  await inventoryPage.productSorting.sortBy('lohi');
  await inventoryPage.products.addProductToCartByIndex(5);
  await inventoryPage.productSorting.sortBy('az');
  await inventoryPage.products.addProductToCartByIndex(1);
  await inventoryPage.header.cart.clickOnCart();
  await cartPage.cartPageLoaded();
  const productIntCart = await cartPage.productInCart();
  await cartPage.clickonCheckoutBtn();
  await checkoutStepOnePage.checkoutStepOnePageLoaded();
  await checkoutStepOnePage.fillYourInfo(firstName, lastName, zipCode);
  await checkoutStepOnePage.clickonContinueBtn();
  await checkoutSteptwoPage.checkoutStepTwoPageLoaded();
  await checkoutSteptwoPage.verifyProductNamesMatch(productIntCart);
  await checkoutSteptwoPage.PriceTotal();
  await checkoutSteptwoPage.clickonFinishBtn();
  await checkoutCompletePage.checkoutCompletePageLoaded();
  await checkoutCompletePage.clickonBackHomeBtn();
});
