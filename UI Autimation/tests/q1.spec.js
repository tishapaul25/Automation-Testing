import { test, expect } from "@playwright/test";

import { LoginPage } from "../pageObjects/loginPage";

test.describe('Q1 Tests', () => {

    let loginPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();
    });

    test('Validate locked out user error message',
        async () => {

        await loginPage.login(
            'locked_out_user',
            'secret_sauce'
        );

        const errorMessage =
            await loginPage.getErrorMessage();

        expect(errorMessage)
            .toContain(
                'Sorry, this user has been locked out'
            );
    });
});