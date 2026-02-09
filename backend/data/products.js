const products = [
    {
        "name": "Nike Pro Dasher 7",
        "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1514989940723-e8875ea6ab7d?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Nike Pro Dasher 7. Designed for the modern basketball enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Nike",
        "category": "Basketball",
        "price": 181,
        "countInStock": 12,
        "rating": 4,
        "numReviews": 6,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Vans Elite Walker",
        "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Vans Elite Walker. Designed for the modern men enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Vans",
        "category": "Men",
        "price": 163,
        "countInStock": 1,
        "rating": 4.9,
        "numReviews": 12,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Asics Max Hoops",
        "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Asics Max Hoops. Designed for the modern lifestyle enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Asics",
        "category": "Lifestyle",
        "price": 53,
        "countInStock": 4,
        "rating": 4.7,
        "numReviews": 14,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Vans React Glider",
        "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Vans React Glider. Designed for the modern lifestyle enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Vans",
        "category": "Lifestyle",
        "price": 297,
        "countInStock": 15,
        "rating": 3.6,
        "numReviews": 48,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Jordan Elite Glider",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Jordan Elite Glider. Designed for the modern lifestyle enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Jordan",
        "category": "Lifestyle",
        "price": 162,
        "countInStock": 7,
        "rating": 3.8,
        "numReviews": 44,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Converse Force Runner 8",
        "image": "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Converse Force Runner 8. Designed for the modern men enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Converse",
        "category": "Men",
        "price": 246,
        "countInStock": 1,
        "rating": 4.9,
        "numReviews": 42,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Converse Air Sprinter",
        "image": "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Converse Air Sprinter. Designed for the modern women enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Converse",
        "category": "Women",
        "price": 133,
        "countInStock": 3,
        "rating": 4.8,
        "numReviews": 27,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Jordan Tech Trainer",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Jordan Tech Trainer. Designed for the modern kids enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Jordan",
        "category": "Kids",
        "price": 263,
        "countInStock": 7,
        "rating": 3.1,
        "numReviews": 12,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Adidas Max Dunk 6",
        "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Adidas Max Dunk 6. Designed for the modern kids enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Adidas",
        "category": "Kids",
        "price": 80,
        "countInStock": 11,
        "rating": 4,
        "numReviews": 24,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Jordan Air Hoops",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Jordan Air Hoops. Designed for the modern men enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Jordan",
        "category": "Men",
        "price": 129,
        "countInStock": 5,
        "rating": 4.5,
        "numReviews": 6,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "New Balance Retro Dasher",
        "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the New Balance Retro Dasher. Designed for the modern kids enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "New Balance",
        "category": "Kids",
        "price": 258,
        "countInStock": 19,
        "rating": 3.7,
        "numReviews": 26,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Adidas Pro Dasher",
        "image": "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Adidas Pro Dasher. Designed for the modern training enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Adidas",
        "category": "Training",
        "price": 97,
        "countInStock": 7,
        "rating": 4.7,
        "numReviews": 39,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Vans Tech Trainer 3",
        "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Vans Tech Trainer 3. Designed for the modern running enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Vans",
        "category": "Running",
        "price": 171,
        "countInStock": 18,
        "rating": 3.2,
        "numReviews": 37,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Converse Prime Dunk 8",
        "image": "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Converse Prime Dunk 8. Designed for the modern running enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Converse",
        "category": "Running",
        "price": 180,
        "countInStock": 0,
        "rating": 3.8,
        "numReviews": 22,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Reebok Tech Gazelle 5",
        "image": "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Reebok Tech Gazelle 5. Designed for the modern men enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Reebok",
        "category": "Men",
        "price": 279,
        "countInStock": 14,
        "rating": 3.2,
        "numReviews": 48,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Jordan Retro Jordan",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Jordan Retro Jordan. Designed for the modern women enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Jordan",
        "category": "Women",
        "price": 170,
        "countInStock": 5,
        "rating": 3,
        "numReviews": 47,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Vans Air Star",
        "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Vans Air Star. Designed for the modern running enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Vans",
        "category": "Running",
        "price": 156,
        "countInStock": 10,
        "rating": 3,
        "numReviews": 38,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Asics Prime Smith 9",
        "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Asics Prime Smith 9. Designed for the modern basketball enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Asics",
        "category": "Basketball",
        "price": 240,
        "countInStock": 17,
        "rating": 3.6,
        "numReviews": 47,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Puma Retro Dasher",
        "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Puma Retro Dasher. Designed for the modern lifestyle enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Puma",
        "category": "Lifestyle",
        "price": 260,
        "countInStock": 3,
        "rating": 4.8,
        "numReviews": 23,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Converse Zoom Star 2",
        "image": "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Converse Zoom Star 2. Designed for the modern training enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Converse",
        "category": "Training",
        "price": 75,
        "countInStock": 10,
        "rating": 3.1,
        "numReviews": 22,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Vans React Trainer 6",
        "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Vans React Trainer 6. Designed for the modern men enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Vans",
        "category": "Men",
        "price": 234,
        "countInStock": 18,
        "rating": 5,
        "numReviews": 21,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "New Balance Retro Dasher",
        "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the New Balance Retro Dasher. Designed for the modern running enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "New Balance",
        "category": "Running",
        "price": 195,
        "countInStock": 10,
        "rating": 4.5,
        "numReviews": 12,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Asics Pro Dasher 2",
        "image": "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Asics Pro Dasher 2. Designed for the modern women enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Asics",
        "category": "Women",
        "price": 177,
        "countInStock": 19,
        "rating": 3.5,
        "numReviews": 17,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Adidas Elite Racer 1",
        "image": "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Adidas Elite Racer 1. Designed for the modern training enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Adidas",
        "category": "Training",
        "price": 280,
        "countInStock": 7,
        "rating": 3.8,
        "numReviews": 15,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Asics Ultra Jordan",
        "image": "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Asics Ultra Jordan. Designed for the modern women enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Asics",
        "category": "Women",
        "price": 225,
        "countInStock": 9,
        "rating": 4.1,
        "numReviews": 44,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Asics Zoom Star",
        "image": "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Asics Zoom Star. Designed for the modern training enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Asics",
        "category": "Training",
        "price": 234,
        "countInStock": 7,
        "rating": 4.8,
        "numReviews": 29,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Puma Air Strider",
        "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Puma Air Strider. Designed for the modern men enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Puma",
        "category": "Men",
        "price": 233,
        "countInStock": 14,
        "rating": 4.7,
        "numReviews": 11,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Under Armour Prime Hoops",
        "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Under Armour Prime Hoops. Designed for the modern lifestyle enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Under Armour",
        "category": "Lifestyle",
        "price": 152,
        "countInStock": 17,
        "rating": 4.2,
        "numReviews": 24,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Puma Force Gazelle",
        "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Puma Force Gazelle. Designed for the modern running enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Puma",
        "category": "Running",
        "price": 166,
        "countInStock": 4,
        "rating": 3.3,
        "numReviews": 17,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Nike Zoom Sprinter",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Nike Zoom Sprinter. Designed for the modern kids enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Nike",
        "category": "Kids",
        "price": 146,
        "countInStock": 9,
        "rating": 4.7,
        "numReviews": 17,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Asics Air Racer",
        "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Asics Air Racer. Designed for the modern training enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Asics",
        "category": "Training",
        "price": 105,
        "countInStock": 11,
        "rating": 4.4,
        "numReviews": 23,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Asics Pro Force",
        "image": "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Asics Pro Force. Designed for the modern training enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Asics",
        "category": "Training",
        "price": 140,
        "countInStock": 16,
        "rating": 3.5,
        "numReviews": 49,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "New Balance Ultra Force 7",
        "image": "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the New Balance Ultra Force 7. Designed for the modern kids enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "New Balance",
        "category": "Kids",
        "price": 186,
        "countInStock": 0,
        "rating": 3.5,
        "numReviews": 31,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Jordan Boost Dunk",
        "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Jordan Boost Dunk. Designed for the modern women enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Jordan",
        "category": "Women",
        "price": 82,
        "countInStock": 7,
        "rating": 4,
        "numReviews": 42,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Converse Retro Racer",
        "image": "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Converse Retro Racer. Designed for the modern running enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Converse",
        "category": "Running",
        "price": 165,
        "countInStock": 18,
        "rating": 3.3,
        "numReviews": 12,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Reebok Zoom Hoops",
        "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Reebok Zoom Hoops. Designed for the modern basketball enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Reebok",
        "category": "Basketball",
        "price": 154,
        "countInStock": 16,
        "rating": 3,
        "numReviews": 41,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Puma Pro Jordan",
        "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Puma Pro Jordan. Designed for the modern men enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Puma",
        "category": "Men",
        "price": 162,
        "countInStock": 15,
        "rating": 4.2,
        "numReviews": 28,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Asics Court Strider",
        "image": "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Asics Court Strider. Designed for the modern men enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Asics",
        "category": "Men",
        "price": 194,
        "countInStock": 11,
        "rating": 4.6,
        "numReviews": 2,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Converse Pro Star",
        "image": "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Converse Pro Star. Designed for the modern men enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Converse",
        "category": "Men",
        "price": 293,
        "countInStock": 12,
        "rating": 3.2,
        "numReviews": 25,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Reebok React Star",
        "image": "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Reebok React Star. Designed for the modern women enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Reebok",
        "category": "Women",
        "price": 257,
        "countInStock": 14,
        "rating": 3.5,
        "numReviews": 10,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Asics Prime Jordan",
        "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Asics Prime Jordan. Designed for the modern basketball enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Asics",
        "category": "Basketball",
        "price": 297,
        "countInStock": 15,
        "rating": 3.9,
        "numReviews": 15,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Asics Classic Racer",
        "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Asics Classic Racer. Designed for the modern basketball enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Asics",
        "category": "Basketball",
        "price": 271,
        "countInStock": 10,
        "rating": 4.8,
        "numReviews": 17,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Puma React Force 7",
        "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Puma React Force 7. Designed for the modern women enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Puma",
        "category": "Women",
        "price": 125,
        "countInStock": 12,
        "rating": 3.6,
        "numReviews": 19,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Nike Classic Jordan",
        "image": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1514989940723-e8875ea6ab7d?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Nike Classic Jordan. Designed for the modern running enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Nike",
        "category": "Running",
        "price": 198,
        "countInStock": 1,
        "rating": 4.8,
        "numReviews": 38,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "New Balance Force Trainer",
        "image": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the New Balance Force Trainer. Designed for the modern men enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "New Balance",
        "category": "Men",
        "price": 191,
        "countInStock": 14,
        "rating": 3.9,
        "numReviews": 5,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Reebok Force Star",
        "image": "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Reebok Force Star. Designed for the modern women enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Reebok",
        "category": "Women",
        "price": 264,
        "countInStock": 19,
        "rating": 4.9,
        "numReviews": 27,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Puma Classic Dunk",
        "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Puma Classic Dunk. Designed for the modern men enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Puma",
        "category": "Men",
        "price": 181,
        "countInStock": 1,
        "rating": 3.3,
        "numReviews": 20,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Puma Ultra Sprinter 9",
        "image": "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Puma Ultra Sprinter 9. Designed for the modern training enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Puma",
        "category": "Training",
        "price": 84,
        "countInStock": 8,
        "rating": 3.1,
        "numReviews": 47,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "Vans Pro Hoops",
        "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the Vans Pro Hoops. Designed for the modern men enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "Vans",
        "category": "Men",
        "price": 221,
        "countInStock": 5,
        "rating": 3.2,
        "numReviews": 23,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    },
    {
        "name": "New Balance Ultra Glider",
        "image": "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
        "images": [
            "https://images.unsplash.com/photo-1579338559194-a162d8417876?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000",
            "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&q=80&w=1000"
        ],
        "description": "Experience ultimate comfort and style with the New Balance Ultra Glider. Designed for the modern kids enthusiast, featuring premium materials and advanced cushioning technology.",
        "brand": "New Balance",
        "category": "Kids",
        "price": 127,
        "countInStock": 15,
        "rating": 3.8,
        "numReviews": 1,
        "sizes": [
            7,
            7.5,
            8,
            8.5,
            9,
            9.5,
            10,
            10.5,
            11,
            12
        ]
    }
];

module.exports = products;