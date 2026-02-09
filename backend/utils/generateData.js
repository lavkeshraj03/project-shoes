const fs = require('fs');
const path = require('path');

const brands = ['Nike', 'Adidas', 'Puma', 'New Balance', 'Reebok', 'Vans', 'Converse', 'Under Armour', 'Asics', 'Jordan'];
const categories = ['Men', 'Women', 'Kids', 'Running', 'Lifestyle', 'Basketball', 'Training'];
const adjectives = ['Air', 'Lite', 'Pro', 'Max', 'Ultra', 'Zoom', 'Boost', 'Classic', 'Retro', 'Prime', 'Elite', 'Court', 'Force', 'React', 'Tech'];
const nouns = ['Runner', 'Walker', 'Dasher', 'Sprinter', 'Glider', 'Strider', 'Racer', 'Trainer', 'Hoops', 'Dunk', 'Force', 'Jordan', 'Smith', 'Star', 'Gazelle'];

// Images grouped by Brand to ensure consistency
const brandImages = {
    'Nike': [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000', // Red Nike
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000', // Gray Nike
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000', // Green Nike
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000', // Blue Nike
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1000', // Orange Nike
        'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=1000', // White Nike
        'https://images.unsplash.com/photo-1514989940723-e8875ea6ab7d?auto=format&fit=crop&q=80&w=1000', // Silver Nike
        'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&q=80&w=1000', // Pink Nike
    ],
    'Jordan': [
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000', // Reuse blue nike as Jordan-esque
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000', // Reuse gray
    ],
    'Puma': [
        'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000', // Puma
    ],
    'Vans': [
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000', // Vans
    ],
    'Converse': [
        'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000', // Converse
    ],
    'Generic': [
        'https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000', // White Sneakers
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000', // Orange/Black
        'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000', // White/Black
        'https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000'  // Red/White
    ]
};

// Fallback for brands not explicitly listed (Adidas, etc.)
brandImages['Adidas'] = brandImages['Generic'];
brandImages['New Balance'] = brandImages['Generic'];
brandImages['Reebok'] = brandImages['Generic'];
brandImages['Under Armour'] = brandImages['Generic'];
brandImages['Asics'] = brandImages['Generic'];

const generateProducts = () => {
    const products = [];
    for (let i = 0; i < 50; i++) {
        const brand = brands[Math.floor(Math.random() * brands.length)];
        const category = categories[Math.floor(Math.random() * categories.length)];
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];

        let name = `${brand} ${adj} ${noun}`;
        if (Math.random() > 0.7) name += ` ${Math.floor(Math.random() * 10) + 1}`;

        const price = Math.floor(Math.random() * (300 - 50 + 1) + 50);
        const rating = (Math.random() * (5 - 3) + 3).toFixed(1);
        const numReviews = Math.floor(Math.random() * 50);
        const countInStock = Math.floor(Math.random() * 20);

        // Product Images Logic
        // 1. Get pool of images for this brand
        let imagePool = brandImages[brand] || brandImages['Generic'];

        // 2. Select a main image
        const mainImage = imagePool[Math.floor(Math.random() * imagePool.length)];

        // 3. Create the gallery (images array)
        // To satisfy "Same Product", we should ideally use the *same* image 
        // or other images from the SAME pool. 
        // If the pool has only 1 image (e.g. Puma), we repeat it.
        const productImages = [];
        productImages.push(mainImage); // Ensure main image is first

        // Add 3 more images
        for (let j = 0; j < 3; j++) {
            // Pick random from the SAME pool to keep brand consistency
            // If pool has 1 item, it will just duplicate, which is CORRECT for "Same Product" if we lack data
            productImages.push(imagePool[Math.floor(Math.random() * imagePool.length)]);
        }

        products.push({
            name,
            image: mainImage,
            images: productImages,
            description: `Experience ultimate comfort and style with the ${name}. Designed for the modern ${category.toLowerCase()} enthusiast, featuring premium materials and advanced cushioning technology.`,
            brand,
            category,
            price,
            countInStock,
            rating: Number(rating),
            numReviews,
            sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12]
        });
    }

    const fileContent = `const products = ${JSON.stringify(products, null, 4)};\n\nmodule.exports = products;`;

    fs.writeFileSync(path.join(__dirname, '../data/products.js'), fileContent);
    console.log('Successfully generated 50 products using Brand-consistent images!');
};

generateProducts();
