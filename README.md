# Cypress E2E Testing Portfolio

This repository contains my practice End-to-End tests written in Cypress.

The goal of this project is to demonstrate my skills in:

• Cypress test automation  
• JavaScript basics  
• UI testing  
• Assertions  
• Handling dropdowns and lists  
• Hover menus  
• Alerts and popups  
• Form testing  

## Tools used
- Cypress  
- JavaScript  
- Node.js  

## Test scenarios

1. **Homepage loading** – Verify main banner is visible  
2. **Navigation test** – Navigate to the Products page and check URL  
3. **Product search** – Search for a product and verify results  
4. **Product details** – Open first product and verify detail page  
5. **Dropdown selection** – Select values from signup form dropdowns  
6. **Form input test** – Fill name and email fields and verify input  
7. **Checkbox test** – Check a checkbox and verify it is selected  
8. **Scroll test** – Scroll to subscription section and verify visibility  
9. **Hover simulation** – Hover over a product and verify "Add to cart" appears  
10. **Add to cart** – Add a product to cart and verify confirmation modal  
11. **Cart page** – Verify at least one product is in the cart  
12. **Content validation** – Verify homepage contains specific text  
13. **URL validation** – Verify Contact page URL  
14. **Multiple assertions** – Verify logo, navigation menu, and at least one product exist  
15. **Simple user flow** – Simulate a complete user journey from homepage to cart verification  

## Bonus / advanced exercises

- Use `beforeEach()` to open homepage before every test  
- Use `.as()` alias for selected elements  
- Use `.invoke('text')` to validate text length  
- Use `.each()` to iterate through product list  
- Verify that at least 3 products are visible on the page  

## How to run tests

1. Install dependencies:

```bash
npm install cypress
