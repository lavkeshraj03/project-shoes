import { createContext, useState } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        brand: [],
        size: [],
        priceRange: [0, 1000],
    });

    const updateFilters = (newFilters) => {
        setFilters((prev) => ({ ...prev, ...newFilters }));
    };

    return (
        <ShopContext.Provider value={{ filters, updateFilters }}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContext;
