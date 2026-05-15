import { BasePage } from "./basePage";

export class InventoryPage extends BasePage {

    constructor(page) {
        super(page);

        this.menuButton = '#react-burger-menu-btn';

        this.resetButton = '#reset_sidebar_link';

        this.logoutButton = '#logout_sidebar_link';

        this.closeMenuButton = '#react-burger-cross-btn';

        this.addToCartButtons =
            'button:has-text("Add to cart")';

        this.cartButton = '.shopping_cart_link';

        this.sortDropdown = '.product_sort_container';
    }

    async resetAppState() {

    await this.page.click(this.menuButton);

    await this.page.locator(this.resetButton).waitFor({ state: 'visible' });

    await this.page.click(this.resetButton);

    await this.page.click(this.closeMenuButton);
}

    async addFirstThreeProducts() {

        await this.page.locator(this.addToCartButtons)
            .nth(0).click();

        await this.page.locator(this.addToCartButtons)
            .nth(1).click();

        await this.page.locator(this.addToCartButtons)
            .nth(2).click();
    }

    async addFirstProduct() {

        await this.page.locator(this.addToCartButtons)
            .first().click();
    }

    async openCart() {
        await this.page.click(this.cartButton);
    }

    async sortZtoA() {
        await this.page.selectOption(this.sortDropdown, 'za');
    }

    async logout() {

        await this.page.click(this.menuButton);

        await this.page.click(this.logoutButton);
    }
}