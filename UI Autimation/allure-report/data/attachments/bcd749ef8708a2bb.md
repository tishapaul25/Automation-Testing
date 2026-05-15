# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: q3.spec.js >> Q3 Tests >> Validate performance glitch user flow
- Location: tests\q3.spec.js:36:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#reset_sidebar_link') to be visible
    44 × locator resolved to hidden <a href="#" id="reset_sidebar_link" class="bm-item menu-item" data-test="reset-sidebar-link">Reset App State</a>

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [active] [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link "Sauce Labs Backpack" [ref=e26] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - link "Sauce Labs Backpack" [ref=e30] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e31]: Sauce Labs Backpack
            - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e33]:
            - generic [ref=e34]: $29.99
            - button "Add to cart" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link "Sauce Labs Bike Light" [ref=e38] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - link "Sauce Labs Bike Light" [ref=e42] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e43]: Sauce Labs Bike Light
            - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e45]:
            - generic [ref=e46]: $9.99
            - button "Add to cart" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e50] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e54] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e55]: Sauce Labs Bolt T-Shirt
            - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e57]:
            - generic [ref=e58]: $15.99
            - button "Add to cart" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - link "Sauce Labs Fleece Jacket" [ref=e62] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - link "Sauce Labs Fleece Jacket" [ref=e66] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e67]: Sauce Labs Fleece Jacket
            - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e69]:
            - generic [ref=e70]: $49.99
            - button "Add to cart" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - link "Sauce Labs Onesie" [ref=e74] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - link "Sauce Labs Onesie" [ref=e78] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e79]: Sauce Labs Onesie
            - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e81]:
            - generic [ref=e82]: $7.99
            - button "Add to cart" [ref=e83] [cursor=pointer]
      - generic [ref=e84]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e86] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e90] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e91]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e93]:
            - generic [ref=e94]: $15.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "Twitter" [ref=e99] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
> 28 |     await this.page.locator(this.resetButton).waitFor({ state: 'visible' });
     |                                               ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
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
  65 |         await this.page.click(this.logoutButton);
  66 |     }
  67 | }
```