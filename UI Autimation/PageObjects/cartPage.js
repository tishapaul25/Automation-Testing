import { BasePage } from "./basePage";

export class CartPage extends BasePage {

    constructor(page) {
        super(page);

        this.productNames = '.inventory_item_name';

        this.checkoutButton = '#checkout';
    }

    async getAllProductNames() {

        return await this.page.locator(this.productNames)
            .allTextContents();
    }

    async checkout() {

        await this.page.click(this.checkoutButton);
    }
}