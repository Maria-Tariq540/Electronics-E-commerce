# ElectronoX - Premium Electronics E-Commerce Website

A modern, fully responsive e-commerce platform built with **Express.js**, **EJS**, **MongoDB**, and **Tailwind CSS**. Features a futuristic design with electric blue and deep purple neon gradients.

## 🎨 Features

- **Modern Homepage** with hero section, featured categories, products grid, and deals of the day
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Product Catalog** - Browse products by category
- **Flash Sale Section** - Live countdown timer for deals
- **Beautiful UI** - Gradient effects, smooth animations, hover effects
- **MongoDB Integration** - Full database setup with Mongoose
- **EJS Templating** - Reusable components and partials
- **Professional Architecture** - Well-organized routes, models, and views

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start MongoDB** (if not already running):
```bash
mongod
```

3. **Seed the database with sample products:**
```bash
npm run seed
```

4. **Run the application:**
```bash
npm start
```

The application will start on `http://localhost:3000`

For development with auto-reload:
```bash
npm run dev
```

## 📁 Project Structure

```
ElectronoX/
├── app.js                    # Express server setup
├── package.json              # Dependencies and scripts
├── .env                      # Environment variables
├── seed.js                   # Database seeding script
├── models/
│   └── Product.js           # Product schema
├── routes/
│   ├── home.js              # Homepage route
│   └── products.js          # Products routes
├── views/
│   ├── pages/
│   │   ├── home.ejs         # Homepage
│   │   ├── products.ejs     # Products listing
│   │   ├── product-detail.ejs
│   │   └── error.ejs
│   └── partials/
│       ├── header.ejs       # Navigation bar
│       ├── footer.ejs       # Footer
│       └── productCard.ejs  # Product card component
├── public/
│   ├── css/
│   └── images/
└── README.md
```

## 🎯 Key Components

### Sticky Navigation Bar
- ElectronoX branding with lightning bolt icon
- Menu links: Home, Shop, Categories, Deals, Contact
- Mobile hamburger menu
- Search and cart icons

### Hero Section
- Eye-catching gradient background
- Call-to-action buttons (Shop Now, Explore Deals)
- Futuristic typography and spacing

### Featured Categories
- 7 product categories with icons
- Hover animations
- Direct category filtering

### Featured Products Grid
- Responsive 3-column grid
- Product cards with images, ratings, and prices
- Add to cart functionality
- Discount badges and stock status

### Flash Sale Section
- Live countdown timer
- Special deals showcase
- Gradient background design

### Newsletter Section
- Email subscription form
- Call-to-action messaging

### Footer
- Quick links and customer service
- Social media icons
- Copyright information

## 🎨 Design Highlights

- **Color Scheme**: Dark slate background with electric blue and purple gradients
- **Typography**: Poppins font family for modern appearance
- **Animations**: Smooth transitions, hover effects, scale transforms
- **Responsive**: Tailwind breakpoints for all screen sizes
- **Accessibility**: Semantic HTML and proper contrast ratios

## 📦 Technologies Used

- **Backend**: Express.js
- **Database**: MongoDB + Mongoose
- **Frontend**: EJS Templates
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/electronox
NODE_ENV=development
```

## 📦 Sample Products

The database comes pre-seeded with 13 sample products across all categories:
- Smartphones (iPhone 15 Pro, Samsung Galaxy S24)
- Laptops (MacBook Pro, Dell XPS)
- Smart TVs (LG OLED)
- Audio (Sony Headphones, Apple AirPods)
- Gaming (PlayStation 5, Xbox Series X)
- Smart Home (Echo Show, Smart Hub)
- Accessories (USB-C Charger, Phone Stand)

## 🌐 Routes

- `GET /` - Homepage
- `GET /products` - All products (supports ?category query param)
- `GET /products/:id` - Individual product details

## 🎓 Learning Resources

This project demonstrates:
- Express.js server setup and routing
- MongoDB/Mongoose integration
- EJS template rendering and partials
- Tailwind CSS for responsive design
- Full-stack JavaScript development
- Component-based architecture

## 🔮 Future Enhancements

- Shopping cart functionality
- User authentication and profiles
- Product search and filters
- Payment integration
- Order management system
- Product reviews and ratings
- Admin dashboard

## 📝 License

ISC License

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

---

**Built with ❤️ using Express.js, MongoDB, and Tailwind CSS**
