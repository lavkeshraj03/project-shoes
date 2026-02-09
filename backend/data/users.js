const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: 'password123', // Will be hashed in the script or model? No, model pre-save hook handles hashing if we use create/save, but insertMany might bypass middleware. 
        // Wait, insertMany DOES NOT trigger pre('save') hooks. I should hash it here or loop and save.
        // For simplicity in seeding, I will hash it manually here.
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        isAdmin: false,
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: 'password123',
        isAdmin: false,
    },
]

// Actually, let's fix the seeder to loop and save so hooks run, OR hash here.
// I'll hash it here for `insertMany` speed, but `bcrypt` is async. 
// Easier to just use `User` model loop in seeder or just hardcode a hash if I knew it.
// I'll update seeder.js to loop through users and create them using `User.create` so hooks fire? 
// Or just hardcode a hash for 'password123': $2a$10$3Y1. / ... (example)
// Let's just update `seeder.js` to use `User.create` or `save` in a loop? No, `User.insertMany` is cleaner.
// I'll just change `seeder.js` to map and hash?
// Let's just provide the plain text password in `data/users.js` and update `seeder.js` to hash it or use `create`.

module.exports = users;
