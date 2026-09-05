// server.js - Backend server for STORE E-commerce

const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================
// MIDDLEWARE
// ============================================================

// Security headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://www.gstatic.com", "https://*.firebaseio.com"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:", "http:"],
            connectSrc: ["'self'", "https://*.firebaseio.com", "https://*.googleapis.com", "wss://*.firebaseio.com"],
            fontSrc: ["'self'", "https:", "data:"],
            mediaSrc: ["'self'", "https:", "http:", "https://files.catbox.moe"],
        },
    },
}));

// Compression
app.use(compression());

// CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// JSON and URL encoded
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// ============================================================
// STATIC FILES - Serve public directory
// ============================================================
app.use(express.static(path.join(__dirname, 'public')));

// ============================================================
// ROUTES - HTML PAGES
// ============================================================

// ===== LANDING PAGE (PAGE YA KWANZA) =====
// Hii ndio page inayoonyeshwa mtu akifungua website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

// Landing page pia inapatikana kwenye /landing.html
app.get('/landing', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.get('/landing.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

// ===== MAIN WEBSITE (INDEX) =====
// Hii ndio main website, inapatikana kwenye /index.html
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===== SHOP =====
app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'shop.html'));
});

app.get('/shop.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'shop.html'));
});

// ===== PRODUCT DETAILS =====
app.get('/product', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product.html'));
});

app.get('/product.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product.html'));
});

// ===== CATEGORIES =====
app.get('/categories', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'categories.html'));
});

app.get('/categories.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'categories.html'));
});

// ===== SEARCH =====
app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'search.html'));
});

app.get('/search.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'search.html'));
});

// ===== TREND / DEALS =====
app.get('/trend', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'trend.html'));
});

app.get('/trend.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'trend.html'));
});

// ===== CART =====
app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cart.html'));
});

app.get('/cart.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cart.html'));
});

// ===== CHECKOUT =====
app.get('/checkout', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'checkout.html'));
});

app.get('/checkout.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'checkout.html'));
});

// ===== ORDERS =====
app.get('/orders', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'orders.html'));
});

app.get('/orders.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'orders.html'));
});

// ===== ORDER DETAIL =====
app.get('/order-detail', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'order-detail.html'));
});

app.get('/order-detail.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'order-detail.html'));
});

// ===== PROFILE =====
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

app.get('/profile.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

// ===== WISHLIST =====
app.get('/wishlist', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'wishlist.html'));
});

app.get('/wishlist.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'wishlist.html'));
});

// ===== AUTHENTICATION =====
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'forgot-password.html'));
});

app.get('/forgot-password.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'forgot-password.html'));
});

// ===== ABOUT =====
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// ===== CONTACT =====
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// ===== FAQ =====
app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});

app.get('/faq.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'faq.html'));
});

// ===== REFUND =====
app.get('/refund', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'refund.html'));
});

app.get('/refund.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'refund.html'));
});

// ===== TERMS =====
app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'terms.html'));
});

app.get('/terms.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'terms.html'));
});

// ===== PRIVACY =====
app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

app.get('/privacy.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

// ===== ADMIN =====
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// ===== ADMIN PRODUCT EDIT =====
app.get('/admin-product', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin-product.html'));
});

app.get('/admin-product.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin-product.html'));
});

// ============================================================
// API ROUTES
// ============================================================

// ----- Health Check -----
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        version: process.version
    });
});

// ----- Server Info -----
app.get('/api/info', (req, res) => {
    res.json({
        name: 'STORE E-commerce API',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development',
        port: PORT,
        nodeVersion: process.version
    });
});

// ----- Order Status Update -----
app.post('/api/orders/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!status) {
        return res.status(400).json({
            success: false,
            message: 'Status is required'
        });
    }

    const validStatuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid status. Must be one of: ' + validStatuses.join(', ')
        });
    }

    res.json({
        success: true,
        message: 'Order status updated successfully',
        orderId: id,
        status: status,
        updatedAt: new Date().toISOString()
    });
});

// ----- Contact Message -----
app.post('/api/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    
    if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }

    if (!email.includes('@')) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email address'
        });
    }

    res.json({
        success: true,
        message: 'Message sent successfully',
        data: {
            name,
            email,
            phone,
            subject,
            message,
            receivedAt: new Date().toISOString()
        }
    });
});

// ----- Subscribe to Newsletter -----
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
        return res.status(400).json({
            success: false,
            message: 'Valid email is required'
        });
    }

    res.json({
        success: true,
        message: 'Subscribed successfully',
        email: email,
        subscribedAt: new Date().toISOString()
    });
});

// ----- Track Order -----
app.get('/api/orders/:id/track', (req, res) => {
    const { id } = req.params;
    
    const trackingData = {
        orderId: id,
        status: 'shipped',
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
        trackingNumber: 'TRK-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
        history: [
            { date: new Date().toISOString(), location: 'Dar es Salaam', status: 'Order processed' },
            { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), location: 'Dar es Salaam', status: 'Picked up by courier' },
            { date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), location: 'Dar es Salaam', status: 'Order confirmed' }
        ]
    };

    res.json({
        success: true,
        data: trackingData
    });
});

// ----- Get Store Statistics -----
app.get('/api/stats', (req, res) => {
    res.json({
        success: true,
        data: {
            totalProducts: 156,
            totalCategories: 12,
            totalOrders: 342,
            totalCustomers: 1289,
            totalRevenue: 12345678,
            averageRating: 4.8,
            topProducts: [
                { name: 'Premium Cotton T-Shirt', sales: 342 },
                { name: 'Classic Formal Shirt', sales: 287 },
                { name: 'Elegant Summer Dress', sales: 215 }
            ]
        }
    });
});

// ============================================================
// 404 ERROR HANDLER
// ============================================================
app.use((req, res) => {
    const filePath = path.join(__dirname, 'public', req.path);
    
    try {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            return res.sendFile(filePath);
        }
    } catch (err) {
        // File doesn't exist or error reading
    }
    
    const notFoundPath = path.join(__dirname, 'public', '404.html');
    if (fs.existsSync(notFoundPath)) {
        res.status(404).sendFile(notFoundPath);
    } else {
        res.status(404).send(`
            <!DOCTYPE html>
            <html>
            <head><title>404 - Page Not Found</title></head>
            <body style="font-family: Arial; text-align: center; padding: 50px; background: #0a0a0a; color: #fff;">
                <h1 style="font-size: 72px; margin-bottom: 0; background: linear-gradient(135deg, #667eea, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">404</h1>
                <h2>Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <a href="/" style="color: #667eea; text-decoration: none; font-weight: 600;">← Back to Home</a>
            </body>
            </html>
        `);
    }
});

// ============================================================
// GLOBAL ERROR HANDLER
// ============================================================
app.use((err, req, res, next) => {
    console.error('❌ Error:', err.stack);
    
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

// ============================================================
// START SERVER
// ============================================================
app.listen(PORT, () => {
    console.log('=' .repeat(60));
    console.log('🚀 STORE E-commerce Server');
    console.log('=' .repeat(60));
    console.log(`📡 Server running on: http://localhost:${PORT}`);
    console.log(`📂 Serving static files: ${path.join(__dirname, 'public')}`);
    console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🖥️  Node Version: ${process.version}`);
    console.log('=' .repeat(60));
    console.log('📄 Main Routes:');
    console.log(`   GET  /                    - Landing Page (PAGE YA KWANZA)`);
    console.log(`   GET  /landing.html        - Landing Page`);
    console.log(`   GET  /index.html          - Main Website (Baada ya Get Started)`);
    console.log(`   GET  /shop                - Shop page`);
    console.log(`   GET  /product             - Product details`);
    console.log(`   GET  /categories          - Categories page`);
    console.log(`   GET  /search              - Search results`);
    console.log(`   GET  /trend               - Trending products`);
    console.log(`   GET  /cart                - Shopping cart`);
    console.log(`   GET  /checkout            - Checkout page`);
    console.log(`   GET  /orders              - Orders page`);
    console.log(`   GET  /profile             - User profile`);
    console.log(`   GET  /wishlist            - Wishlist page`);
    console.log(`   GET  /login               - Login page`);
    console.log(`   GET  /signup              - Signup page`);
    console.log(`   GET  /forgot-password     - Forgot password`);
    console.log(`   GET  /about               - About page`);
    console.log(`   GET  /contact             - Contact page`);
    console.log(`   GET  /faq                 - FAQ page`);
    console.log(`   GET  /refund              - Refund policy`);
    console.log(`   GET  /terms               - Terms & conditions`);
    console.log(`   GET  /privacy             - Privacy policy`);
    console.log(`   GET  /admin               - Admin dashboard`);
    console.log('=' .repeat(60));
    console.log('📡 API Routes:');
    console.log(`   GET  /api/health          - Health check`);
    console.log(`   GET  /api/info            - Server info`);
    console.log(`   POST /api/orders/:id/status - Update order status`);
    console.log(`   POST /api/contact         - Send contact message`);
    console.log(`   POST /api/subscribe       - Subscribe to newsletter`);
    console.log(`   GET  /api/orders/:id/track - Track order`);
    console.log(`   GET  /api/stats           - Store statistics`);
    console.log('=' .repeat(60));
    console.log('✅ Server is ready!');
    console.log('📌 FLOW: landing.html → GET STARTED → index.html');
    console.log('=' .repeat(60));
});

// ============================================================
// GRACEFUL SHUTDOWN
// ============================================================
process.on('SIGTERM', () => {
    console.log('🛑 SIGTERM received, shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 SIGINT received, shutting down gracefully...');
    process.exit(0);
});

process.on('uncaughtException', (err) => {
    console.error('💥 Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
});

module.exports = app;
