# Web Store Project

## Overview
This project is a simple **e-commerce website** built using **HTML, CSS, and JavaScript**.  
It allows users to browse products, view product details, and simulate adding items to the cart or favorites.

The website also includes **login and signup forms** with dynamic switching between them using JavaScript.

---

## Features

- Home page displaying products
- Product details page
- Login and Sign Up forms
- Add to Cart button
- Add to Favorites button
- Dynamic product data using URL parameters
- Responsive and clean user interface

---

## Pages

The project contains several pages:

- **home.html** – main page showing products
- **about.html** – information about the website
- **product.html** – list of products
- **details.html** – product details page
- **login.html** – login and signup interface
- **contact.html** – contact page

---

## Technologies Used

- HTML
- CSS
- JavaScript

---

## Project Structure

```
web-project
│
├── home.html
├── about.html
├── product.html
├── details.html
├── login.html
├── contact.html
│
├── css files
│   ├── home.css
│   ├── about.css
│   ├── product.css
│
└── photo
    ├── product images
```

---

## How It Works

The **product details page** receives information from the URL parameters such as:

- product title
- description
- image
- price

JavaScript reads these parameters and displays them dynamically on the page.

Example:

```
details.html?title=Product&desc=Description&image=photo/product1.jpg&price=$20
```

---

## Future Improvements

Possible improvements for the project:

- Real shopping cart functionality
- Database integration
- User authentication
- Payment system

---

## Author

Menna Abukhadra
