# ElectronoX Setup Instructions

## 1️⃣ Prerequisites
Ensure you have installed:
- **Node.js** (v14+) - Download from nodejs.org
- **MongoDB** - Download from mongodb.com or use MongoDB Atlas (cloud)

## 2️⃣ Installation Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start MongoDB
```bash
# If MongoDB is installed locally:
mongod

# Or use MongoDB Atlas connection string in .env
```

### Step 3: Configure Environment
The `.env` file is already created. Update if needed:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/electronox
NODE_ENV=development
```

### Step 4: Seed Database (Optional)
Populate with sample products:
```bash
npm run seed
```

### Step 5: Start Server
```bash
# Production:
npm start

# Development (with auto-reload):
npm run dev
```

## 3️⃣ Access the Application
Open your browser and visit:
```
http://localhost:3000
```

## 4️⃣ What You'll See

### Homepage Features:
✅ **Sticky Navigation** - Browse menu and cart
✅ **Hero Section** - Eye-catching introduction
✅ **Featured Categories** - 7 categories to explore
✅ **Featured Products** - 6 handpicked products
✅ **Deals of the Day** - Flash sale with countdown timer
✅ **Newsletter Signup** - Email subscription
✅ **Footer** - Links and social media

### Available Routes:
- `/` - Homepage
- `/products` - All products
- `/products?category=Smartphones` - Filter by category

## 5️⃣ Database Structure

**Product Schema:**
```javascript
{
  name: String,
  price: Number,
  originalPrice: Number,
  category: String,
  description: String,
  image: String (URL),
  rating: Number (0-5),
  reviews: Number,
  inStock: Boolean,
  isFeatured: Boolean,
  isDeals: Boolean,
  discount: Number (percentage),
  createdAt: Date
}
```

## 6️⃣ Technologies Stack

| Layer | Technology |
|-------|------------|
| Backend | Express.js |
| Database | MongoDB + Mongoose |
| Frontend | EJS Templates |
| Styling | Tailwind CSS (CDN) |
| Icons | Font Awesome |
| Fonts | Google Fonts (Poppins) |

## 7️⃣ File Structure Overview

```
models/          → Database schemas (Product model)
routes/          → API endpoints (home, products)
views/
  ├── pages/    → Full page templates
  └── partials/ → Reusable components
app.js           → Express server configuration
seed.js          → Sample data loader
```

## 8️⃣ Troubleshooting

**MongoDB Connection Error?**
- Ensure MongoDB is running: `mongod`
- Or update `MONGODB_URI` in `.env` for Atlas

**Port 3000 Already in Use?**
- Change `PORT` in `.env` file

**Styles Not Loading?**
- Tailwind CDN is used - ensure internet connection
- Check browser console for errors

**No Products Showing?**
- Run `npm run seed` to add sample products
- Check MongoDB is connected

## 9️⃣ Next Steps

After successful setup:
1. Explore the homepage design
2. Check different product categories
3. Review the code structure
4. Customize colors in `header.ejs`
5. Add your own products via MongoDB

## 🎉 You're All Set!

Your ElectronoX e-commerce platform is ready to use!
