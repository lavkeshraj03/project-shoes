const bcrypt = require('bcryptjs');

const hash = '$2b$10$kj/3f7t6atZCXY7IdDvHaeBCmXUtc0SaedFb0zmx74ZgujcDYC3Dm';
const password = 'password123';

const checkPassword = async () => {
    const isMatch = await bcrypt.compare(password, hash);
    console.log(`Password match: ${isMatch}`);
};

checkPassword();
