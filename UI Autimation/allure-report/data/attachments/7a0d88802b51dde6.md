# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: q2.spec.js >> Q2 Tests >> Validate complete purchase flow
- Location: tests\q2.spec.js:36:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#logout_sidebar_link')
    - locator resolved to <a href="#" id="logout_sidebar_link" class="bm-item menu-item" data-test="logout-sidebar-link">Logout</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    30 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e15]: "Checkout: Complete!"
    - generic [ref=e16]:
      - img "Pony Express" [ref=e17]
      - heading "Thank you for your order!" [level=2] [ref=e18]
      - generic [ref=e19]: Your order has been dispatched, and will arrive just as fast as the pony can get there!
      - button "Back Home" [ref=e20] [cursor=pointer]
  - contentinfo [ref=e21]:
    - list [ref=e22]:
      - listitem [ref=e23]:
        - link "Twitter" [ref=e24]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e25]:
        - link "Facebook" [ref=e26]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e27]:
        - link "LinkedIn" [ref=e28]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e29]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { BasePage } from "./basePage";
  2  | 
  3  | export class InventoryPage extends BasePage {
  4  | 
  5  |     constructor(page) {
  6  |         super(page);
  7  | 
  8  |         this.menuButton = '#react-burger-menu-btn';
  9  | 
  10 |         this.resetButton = '#reset_sidebar_link';
  11 | 
  12 |         this.logoutButton = '#logout_sidebar_link';
  13 | 
  14 |         this.closeMenuButton = '#react-burger-cross-btn';
  15 | 
  16 |         this.addToCartButtons =
  17 |             'button:has-text("Add to cart")';
  18 | 
  19 |         this.cartButton = '.shopping_cart_link';
  20 | 
  21 |         this.sortDropdown = '.product_sort_container';
  22 |     }
  23 | 
  24 |     async resetAppState() {
  25 | 
  26 |     await this.page.click(this.menuButton);
  27 | 
  28 |     await this.page.locator(this.resetButton).waitFor({ state: 'visible' });
  29 | 
  30 |     await this.page.click(this.resetButton);
  31 | 
  32 |     await this.page.click(this.closeMenuButton);
  33 | }
  34 | 
  35 |     async addFirstThreeProducts() {
  36 | 
  37 |         await this.page.locator(this.addToCartButtons)
  38 |             .nth(0).click();
  39 | 
  40 |         await this.page.locator(this.addToCartButtons)
  41 |             .nth(1).click();
  42 | 
  43 |         await this.page.locator(this.addToCartButtons)
  44 |             .nth(2).click();
  45 |     }
  46 | 
  47 |     async addFirstProduct() {
  48 | 
  49 |         await this.page.locator(this.addToCartButtons)
  50 |             .first().click();
  51 |     }
  52 | 
  53 |     async openCart() {
  54 |         await this.page.click(this.cartButton);
  55 |     }
  56 | 
  57 |     async sortZtoA() {
  58 |         await this.page.selectOption(this.sortDropdown, 'za');
  59 |     }
  60 | 
  61 |     async logout() {
  62 | 
  63 |         await this.page.click(this.menuButton);
  64 | 
> 65 |         await this.page.click(this.logoutButton);
     |                         ^ Error: page.click: Test timeout of 30000ms exceeded.
  66 |     }
  67 | }
```