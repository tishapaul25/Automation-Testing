import { test, expect } from "@playwright/test";

import { LoginPage } from "../pageObjects/loginPage";

import { InventoryPage } from "../pageObjects/inventoryPage";

import { CartPage } from "../pageObjects/cartPage";

import { CheckoutPage } from "../pageObjects/checkoutPage";

test.describe('Q2 Tests', () => {

    let loginPage;
    let inventoryPage;
    let cartPage;
    let checkoutPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);

        inventoryPage = new InventoryPage(page);

        cartPage = new CartPage(page);

        checkoutPage = new CheckoutPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );
    });

    test('Validate complete purchase flow',
        async ({ page }) => {

        await inventoryPage.resetAppState();

        await inventoryPage.addFirstThreeProducts();

        await inventoryPage.openCart();

        const products =
            await cartPage.getAllProductNames();

        console.log(products);

        expect(products.length).toBe(3);

        await cartPage.checkout();

        await checkoutPage.fillCheckoutInfo(
            'Tisha',
            'Paul',
            '1207'
        );

        await checkoutPage.continueCheckout();

        await expect(
            page.locator('.summary_total_label')
        ).toBeVisible();

        await checkoutPage.finishOrder();

        const successMessage =
            await checkoutPage.getSuccessMessage();

        expect(successMessage)
            .toContain(
                'Thank you for your order'
            );

        await inventoryPage.resetAppState();

        await inventoryPage.logout();
    });
});