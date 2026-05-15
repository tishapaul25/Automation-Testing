import { BasePage } from "./basePage";

export class CheckoutPage extends BasePage {

    constructor(page) {

        super(page);

        this.firstName = '#first-name';

        this.lastName = '#last-name';

        this.postalCode = '#postal-code';

        this.continueButton = '#continue';

        this.finishButton = '#finish';

        this.totalPrice = '.summary_total_label';

        this.successMessage = '.complete-header';
    }

    async fillCheckoutInfo(fname, lname, zip) {

        await this.page.fill(this.firstName, fname);

        await this.page.fill(this.lastName, lname);

        await this.page.fill(this.postalCode, zip);
    }

    async continueCheckout() {

        await this.page.click(this.continueButton);
    }

    async finishOrder() {

        await this.page.click(this.finishButton);
    }

    async getSuccessMessage() {

        return await this.page.locator(this.successMessage)
            .textContent();
    }
}