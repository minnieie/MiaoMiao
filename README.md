# MiaoMiao 
GitHub Link: https://github.com/minnieie/MiaoMiao

Welcome to MiaoMiao, an immersive **e-commerce** platform designed for figurine collectors and enthusiasts! Our platform offers a seamless shopping experience, combining modern web technologies with an engaging user interface. Whether you're browsing on desktop or mobile, MiaoMiao's responsive design ensures smooth navigation and an intuitive purchasing process.

Beyond just a store, MiaoMiao gamifies the shopping experience, rewarding users for their engagement. With high-fidelity UI/UX, interactive 3D figurine previews, and a streamlined checkout process, we aim to bring collectors closer to their favorite collectibles in a way never seen before. Join us in redefining how figurine lovers shop online!

## Design Process
The design process for MiaoMiao was centered around understanding the needs of figurine collectors, from casual buyers to serious enthusiasts. Our goal was to create an intuitive and engaging platform where users can explore, interact with, and purchase figurines effortlessly. With a user-first approach, we developed a responsive interface that caters to both desktop and mobile users while incorporating gamification elements to enhance engagement.

### User Stories
- As a figurine collector, I want to browse a variety of figurines with interactive 3D previews, so that I can make informed purchasing decisions. 
* As a first-time buyer, I want a simple and intuitive checkout process, so that I can complete my purchase without confusion.
+ As a competitive collector, I want to earn rewards and exclusive offers through gamified interactions, so that I can enhance my collection at better value. 
- As a mobile user, I want an optimized and responsive interface, so that I can browse and shop seamlessly on my phone. 

### Wireframes and Design Documentations 
To visualize the platform's layout and user flow, we created wireframes and mockups. These resources help illustrate the structure of MiaoMiao’s interface and ensure a smooth user experience. You can access them via the [Figma URL](https://www.figma.com/design/xn041QR41hO5SJIaR55zHu/Mobile-view?node-id=6-2&m=dev&t=SEK8VbthqaO3QLAk-1). 

## Features
### Existing Features
+ Homepage: Showcases featured figurines, new arrivals, and special offers to keep users engaged.
- Catalog Page: Displays all available figurines, allowing users to browse by category, brand, or popularity.
* Product Pages: Provides detailed descriptions, pricing, and 3D previews of figurines for an immersive shopping experience.
+ Account Page: Allows users to manage their wishlist and shopping bag, keeping track of their saved and intended purchases.
- Login/Signup Page: Enables users to create an account and log in securely to access their profile, wishlist, and order history.
* Newsletter Subscription Page: Lets users subscribe to updates and exclusive deals, ensuring they stay informed about new releases and promotions.
+ Gamification System: Rewards users with points and exclusive discounts based on their engagement and purchases.
- Secure Checkout: Ensures a seamless and secure purchasing process with multiple payment options.
* Responsive Design: Optimized for both desktop and mobile users, ensuring a smooth browsing experience.
+ Customer Review Page: Provides a space for users to leave feedback and ratings on figurines, helping others make informed purchasing decisions. 

### Features Left to Implement
+ Community Section: A space for collectors to share photos, reviews, and discussions.
- Augmented Reality (AR) Preview: Enables users to see how a figurine would look in their space before purchasing.
* AI-Powered Recommendations: Provides personalized figurine suggestions based on user preferences, browsing history, and purchase patterns. 
+ Advanced Search & Filtering: Helps users find specific figurines based on categories, brands, or special features.

## Technologies Used
+ [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
    - Used to structure the content and layout of the website. 
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - Used for styling the website, including layouts, colors, and responsive design. 
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - This project uses JavaScript to add interactivity. 
+ [GitHub](https://github.com/)
    - Used as a repository to store the project and facilitate collaboration. 
- [Figma](https://www.figma.com/)
    - Used for collaborative design work and prototyping during the initial stages. 
* [VS Code](https://code.visualstudio.com/)
    - The primary code editor used for writing, debugging, and managing the project. 
+ [Firebase](https://firebase.google.com/?hl=zh-cn)
    - Used for user authentication, database management, and hosting, providing a seamless backend experience. 
- [JSON](https://www.json.org/json-en.html)
    - Used for data storage and exchange between the frontend and backend, ensuring efficient handling of user and product data. 

## Testing
### Homepage Testing 
- Scenario: Check homepage content
    1. Navigate to the homepage.
    2. Verify that featured figurines, new arrivals, and special offers are displayed correctly.
    3. Confirm that clicking on a product leads to the correct product page. 
### Catalog Page Testing
* Scenario: Filter and search products
    1. Navigate to the catalog page.
    2. Apply different filters (e.g., by brand, category, price) and verify correct results.
    3. Search for a specific figurine and ensure it appears in the results.

### Account Page Testing
+ Scenario: Wishlist and shopping bag functionality
    1. Add items to the wishlist and confirm they appear correctly.
    2. Add items to the shopping bag and proceed to checkout.

### Login/Signup Page Testing
- Scenario: User authentication validation
    1. Attempt login with incorrect credentials and confirm error messages appear.
    2. Create a new account and ensure user details are stored correctly.

### Customer Review Page Testing
* Scenario: Submitting and viewing reviews
    1. Submit a review for a figurine and verify it appears correctly.
    2. Confirm that reviews are displayed in the correct order and format.

### General Testing
+ Responsive Design: Tested on desktop, tablet, and mobile to ensure proper layout adaptation.
- Browser Compatibility: Verified functionality on Chrome, Edge, and Firefox for consistency.
* Accessibility: Confirmed keyboard navigation works and content is screen-reader friendly.

### Bugs and Issues
+ Issue: Navigation bar overlapping content on smaller screens
    - Fix: Adjusted margins to prevent overlap.
* Issue: Wishlist items not persisting after logout
    + Fix: Implemented database storage for persistent wishlist functionality.

### Future Testing Enhancements
- Implement automated tests for login, checkout, and filtering using Selenium.
* Conduct usability testing with users to gather feedback on the overall shopping experience.

## Credits
### Content 
+ The text for the product details was copied from the [POP MART's official website](https://www.popmart.com/sg?gad_source=1&gclid=CjwKCAiAnpy9BhAkEiwA-P8N4muPOtNmhLMDD6RGegnhCkZInb9oGIqI1VZS0gDRN9yrVu89KJcIdhoCjlUQAvD_BwE). 

### Media 
+ The photos used in this site were obtained from the [POP MART's official website](https://www.popmart.com/sg?gad_source=1&gclid=CjwKCAiAnpy9BhAkEiwA-P8N4muPOtNmhLMDD6RGegnhCkZInb9oGIqI1VZS0gDRN9yrVu89KJcIdhoCjlUQAvD_BwE) and [Google](https://www.google.com/).

### Acknowledgements 
+ I received inspiration for this project from [POP MART's official website](https://eu.jellycat.com/)

## Individual Contributions to The Website
### Toh Rui Min - Web Designer & Frontend Developer
- learn how to use API firebase and successfully do create acc/login
- did home page initially for functionality
- full wishlist page with js,html, css implementation
- full bag page with js,html,css implementation
- ensure all product htmls are linked to 1 product detail html, using js to show all details for specific products
- ensure adding to bag and adding to wishlist function works in product details html, being shown in wishlist.html and bag.html
- ensure that there must be at least 1 product shown in bag before proceeding to checkout, prompt user if they do not have at least 1 product
- checkout js, ensure can use promotional code MIAOMIAO and code is usable to decrease price
- ensure validation of all inputs, prompt user to fill in "xx" if they have not.
- ensure user need to pay using at least 1 payment method
- added a "back to catalog" button in all the product html page
- added a thank you for purchasing and link to home page in same checkout.html
- checking if everything works for both mobile and laptop (Quality Assurance)

### Geng Bai Hui - Web Designer & Frontend Developer
- Designed the overall website layout, ensuring a clean and visually appealing UI/UX. 
* Developed the catalog page (including New Arrivals, Best Sellers and Sanrio Pages), product details page, customer review page and the navigation abr, focusing on consistent design and smooth navigation. 
+ Ensured mobile responsiveness, making sure all pages adapt properly to different screen sizes.
- Styled all pages using CSS, ensuring proper spacing, typography, and visual hierarchy. 
* Implemented product card layouts for catalog, ensuring a clean and user-friendly browsing experience. 
+ Assisted in linking the product detail page dynamically using JavaScript to ensure all product pages follow a structured layout.
- Created UI elements for buttons and interactive components, maintaining a cohesive visual style.
* Conducted user experience testing, refining UI/UX based on responsiveness, usability, and visual feedback.
+ Wrote the whole Readme file for this project
