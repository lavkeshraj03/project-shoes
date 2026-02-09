import { motion } from 'framer-motion';
import Button from './Button';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative bg-gray-50 h-[90vh] flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm font-semibold text-gray-500 tracking-wider">NEW COLLECTION</span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black my-6 leading-[0.9]">
                            RUN <br />
                            FASTER.
                        </h1>
                        <p className="text-gray-600 text-lg mb-8 max-w-md">
                            Experience the future of comfort and performance with our latest engineered series.
                        </p>
                        <div className="flex space-x-4">
                            <Link to="/shop">
                                <Button variant="primary">Shop Now</Button>
                            </Link>
                            <Link to="/about">
                                <Button variant="secondary">Learn More</Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10"
                    >
                        {/* Circle Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-200 rounded-full blur-3xl -z-10"></div>

                        <img
                            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=2012&ixlib=rb-4.0.3"
                            alt="Hero Shoe"
                            className="w-full drop-shadow-2xl -rotate-[25deg] hover:-rotate-12 transition-transform duration-500 cursor-pointer"
                        />
                    </motion.div>

                </div>
            </div>

            {/* Background Text */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden pointer-events-none opacity-5">
                <span className="text-[20rem] font-black whitespace-nowrap">NIKE AIR</span>
            </div>
        </div>
    );
};

export default Hero;
