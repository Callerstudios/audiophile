# :headphones: Audiophile E-Commerce Website

A **pixel-perfect e-commerce website** built with **React/Next.js** and **Convex backend** for Stage 3a of the Frontend Wizards program.  
This project brings the **Audiophile Figma design** to life and implements a full checkout flow with order storage and confirmation emails.

---

## :sparkles: Features

- **Responsive Design:** Works perfectly on **mobile, tablet, and desktop**  
- **Product Pages:** Display products with details, images, and prices  
- **Shopping Cart:** Add/remove items, update quantities  
- **Checkout Form:** Collects user information and validates all inputs  
- **Order Storage:** Orders saved securely in **Convex backend**  
- **Confirmation Email:** Sends transactional HTML emails on successful checkout  
- **Order Confirmation Page:** Displays order summary including items, totals, and shipping details  

---

## :hammer_and_wrench: Tech Stack

- **Frontend:** React, Next.js  
- **Backend:** Convex  
- **Email Service:** Resend API or Nodemailer  
- **Styling:** CSS/SCSS or styled-components  
- **Deployment:** Vercel or Netlify  

---

## :rocket: Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/audiophile-ecommerce.git
cd audiophile-ecommerce
```
### 2. Install Dependencies
``` bash
Copy code
npm install 
```
# or
``` bash
yarn install
```
3. Set Up Environment Variables
Create a .env.local file in the root directory with the following variables:

ini
Copy code
NEXT_PUBLIC_CONVEX_URL=your_convex_project_url
RESEND_API_KEY=your_resend_api_key
4. Run the Development Server
``` bash
Copy code
npm run dev
# or
yarn dev
```
Open http://localhost:3000 to view the app in your browser.

:page_facing_up: Project Structure
bash
Copy code
/components     # Reusable UI components
/pages          # Next.js pages (Home, Product, Checkout, Order Confirmation)
/styles         # CSS or styled-components files
/convex         # Backend functions and queries
:white_check_mark: How It Works
Users browse products and add them to the cart

On checkout:

User fills in their details

Form validates input and handles edge cases

Order is saved in Convex backend

Confirmation email is sent to the user

User is redirected to Order Confirmation Page showing the full order summary

:link: Live Demo
View Live App

:email: Example Confirmation Email
html
Copy code
<h1>Thank you for your order, John!</h1>
<p>Order #12345</p>
<ul>
  <li>Headphones - $299</li>
  <li>Speaker - $199</li>
</ul>
<p>Shipping to: 123 Main Street, City, Country</p>
<a href="https://your-app.vercel.app/orders/12345">View your order</a>
:memo: Notes
Make sure all environment variables are configured correctly

Checkout and email sending require a live backend (Convex + Resend)

The site should match the Figma design pixel-perfect across all screen sizes

:sparkles: Author
Frontend Wizards Stage 3a Student Project