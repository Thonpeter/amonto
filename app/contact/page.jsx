'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { getRandomGalleryImage } from '../../utils/galleryImages';

export default function Contact() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [heroBackground, setHeroBackground] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        setIsLoaded(true);
        // Set random background image on mount
        setHeroBackground(getRandomGalleryImage());
    }, []);

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert("Thank you for your message! We will contact you soon.");
    };

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease: "easeOut",
            },
        }),
    };

    return (
        <>
            <section id="contact" className="min-h-screen">
                {/* Hero Section */}
                <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: heroBackground ? `url('${heroBackground}')` : "url('/gallery/image (1).jpg')" }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

                    <div className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
                        <div className="text-center mb-16">
                            <motion.h1
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={0}
                                className="text-6xl sm:text-8xl font-extrabold text-white mb-8"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-orange-300">
                                    Get In Touch
                                </span>
                            </motion.h1>
                            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
                            <motion.p
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={1}
                                className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
                            >
                                Reach out to us for inquiries, campus tours, or to learn more about Amonto Girls Academy
                            </motion.p>

                            {/* Quick Contact Highlights */}
                            <motion.div
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={2}
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
                            >
                                <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30">
                                    <div className="text-4xl font-bold text-yellow-300"><FaPhone className="inline mr-2" /></div>
                                    <div className="text-white/80 text-sm mt-2">+211 (0) 923 666 022</div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                                    <div className="text-4xl font-bold text-blue-300"><FaEnvelope className="inline mr-2" /></div>
                                    <div className="text-white/80 text-sm mt-2">info@amontogirls.com</div>
                                </div>
                                <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
                                    <div className="text-4xl font-bold text-green-300"><FaMapMarkerAlt className="inline mr-2" /></div>
                                    <div className="text-white/80 text-sm mt-2">Jebel Amianin, Juba South Sudan</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>



                {/* Map Section */}
                <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
                    <div className="container mx-auto px-6">
                        <motion.h2
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={0}
                            className="text-4xl font-bold text-center text-white mb-16"
                        >
                            📍 Our Location
                        </motion.h2>

                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={1}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto"
                        >
                            <p className="text-white/90 text-center mb-6">
                                We are located in Jebel Amianin, Juba South Sudan. Feel free to visit us or contact us for more information.
                            </p>

                            <div className="rounded-2xl overflow-hidden shadow-xl">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.597187237208!2d31.55821531533032!3d4.851857096500052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x171782b3b3b3b3b3%3A0x171782b3b3b3b3b3b3!2sJebel%20Amianin%2C%20Juba%2C%20South%20Sudan!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="rounded-2xl"
                                ></iframe>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
                                <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-4 border border-yellow-500/30">
                                    <div className="text-2xl font-bold text-yellow-300 mb-2">Mon - Fri</div>
                                    <div className="text-white/80">8:00 AM - 5:00 PM</div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-4 border border-blue-500/30">
                                    <div className="text-2xl font-bold text-blue-300 mb-2">Saturday</div>
                                    <div className="text-white/80">9:00 AM - 1:00 PM</div>
                                </div>
                                <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-lg rounded-2xl p-4 border border-green-500/30">
                                    <div className="text-2xl font-bold text-green-300 mb-2">Sunday</div>
                                    <div className="text-white/80">Closed</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
                    <div className="container mx-auto px-6 text-center">
                        <motion.h2
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={0}
                            className="text-4xl font-bold text-white mb-6"
                        >
                            Ready to Visit Our Campus?
                        </motion.h2>
                        <motion.p
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={1}
                            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
                        >
                            Schedule a personalized campus tour to see our facilities and experience the Amonto difference
                        </motion.p>

                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={2}
                            className="flex flex-col sm:flex-row gap-6 justify-center"
                        >
                            <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                Schedule Campus Tour
                            </button>

                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}