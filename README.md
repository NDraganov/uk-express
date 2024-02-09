# UkExpress

UkExpress is a British e-commerce web app that was founded in London. UK, 2004. UkExpress deliver to Spain, France and Germany as well.

Build on front-end development with Vite. The products are fetched and cached with Redux Toolkit Query from an API. Authentication is implemented via Supabase API.

#### Links to GitHub and Demo

- [GitHub](https://github.com/NDraganov/uk-express)
- [Demo](https://uk-express.vercel.app)

## Built with technologies

- Vite(React) + TypeScript - Front-end web app.
- React Router - Routes and navigation.
- Redux Toolkit - Global state managment.
- React useState Hook - Local state managment.
- Redux Toolkit Query - Fetching and caching the products.
- Supabase - Authentication for users.
- React Hook Form - Validation of the forms.
- Tailwind CSS - Styling the components.
- React Toastify - Push notifications.

## Features

### Header

- Brand logo
- Main navigation - navigate to the main pages.
- Search icon - opens the search modal.
- Dark mode button - toggles the light and dark modes and renders relative icons.
- Sign-in button - navigates to the sign-in page.
- Cart icon - opens the cart modal.

### Footer

- Newsletter - email input for sign-up for news.
- Footer navigation
  - Shop menu - navigates to all products.
  - Learn menu - links to about and contact pages.
  - Follow menu - links to social media.
- Back to top button
- Policies links

### Home page

- Newsletter modal - it renders after a delay of a few seconds.
- Video background - overlay with slogan and a button for all products.
- Carousel with Images
- Sales - Sales description with a button for products on sale.
- Top categories
- New collection - new product items.

### Products page

- Categories navigation - renders tabs for all 20 categories of products.
- Outlet - renders the relative pages for the selected category tab. The page contains
  a product list of product items(card).
- Product item(card)
  - An image of the product
  - Title of the product
  - Rating of the product
  - Price of the product
  - Buttons - one for reviewing the selected product page and one for adding to the cart.
- Pagination - for all products page.

### Single product page

- Product gallery on the left - created from scratch.
- Product details on the right
  - Product title
  - Product brand
  - Rating and link for the reviews
  - Product price - some of the products are on sale(every product under 500 and over 1000). The data from the API contains the discount percentage and the price on sale for every product. I calculate the original price.
  - In stock availability
  - Tag - I created it by using the product category.
  - Product description
  - Add to cart section - buttons to select a quantity and a button to add it to the cart.
- Product reviews - render the comment from the dummy JSON API.
  - User - I added a dummy time the review was made.
  - Text(comment)
  - Likes - I create a small section with like and dislike buttons.
  - Reviews pagination.

### About page

- Our story - Short company story and an image of a team work.
- Our mission - Short info about the company mission and purpose.

### Contact page

- Contact details on the left
  - Phone number, email and address.
- Contact form on the right
  - Map image - background of the contact form.
  - Contact form - inputs for name, email, phone and a message.

### Sign-in page

- Sign-in form on the left - inputs for email and password.
  - Sign-in(submit) button
  - Demo button - set the inputs with an existing account credentials.
- Sign-up link on the right - a button for the sign-up page.

### Sign-up page

- Sign-in link on the left - a button for the sign-in page.
- Sign-up form on the right - inputs for first and last names, email, address,
  country code and phone number, password, confirm password.
- Terms and conditions link
- Sign-up(submit) button

### User account page

- Greeting with the user name
- Sidebar navigation on the left
- Outlet on the right - rendering the page for the selected sidebar link.
  - Account information
    - Form - inputs for the user name, email, phone and address.
    - Edit/Cancel - button to allow the user to change the info or to cancel(to disable the inputs).
    - Update(submit) button
  - My cart
    - Cart items list - render a list of the user shopping items(products) if available.
      If items are not available, render a text for an empty cart.
    - Checkout button - if items are available, render a button to proceed to the checkout page.
  - Change password
    - Form - inputs for the new password and the confirmed new password.
    - Update(submit) button
- Sign-out(button) link - navigates to the sign-in page.
