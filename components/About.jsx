'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaBook, FaGraduationCap, FaSchool, FaGlobe, FaLightbulb, FaUsers, FaTrophy, FaHeart, FaAward } from 'react-icons/fa';

export default function About() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.7,
                ease: "easeOut",
            },
        }),
    };

    const features = [
        {
            icon: <FaChalkboardTeacher className="text-2xl" />,
            title: "Expert Educators",
            description: "Highly qualified teachers with a passion for learning.",
        },
        {
            icon: <FaBook className="text-2xl" />,
            title: "Holistic Development",
            description: "We nurture both academic excellence and personal growth.",
        },
        {
            icon: <FaGraduationCap className="text-2xl" />,
            title: "Scholarships & Support",
            description: "Financial aid available for outstanding students.",
        },
        {
            icon: <FaSchool className="text-2xl" />,
            title: "Modern Facilities",
            description: "State-of-the-art classrooms, labs, and boarding facilities.",
        },
        {
            icon: <FaGlobe className="text-2xl" />,
            title: "Global Perspective",
            description: "A curriculum that prepares students for international success.",
        },
        {
            icon: <FaLightbulb className="text-2xl" />,
            title: "Leadership Focus",
            description: "Strong emphasis on discipline and empowerment.",
        },
    ];

    const stats = [
        { value: "10th", label: "Nationally Ranked", icon: <FaTrophy className="text-2xl" /> },
        { value: "#1", label: "Best Girls School in Juba", icon: <FaAward className="text-2xl" /> },
        { value: "98%", label: "University Acceptance", icon: <FaGraduationCap className="text-2xl" /> },
        { value: "100+", label: "Scholarships Awarded", icon: <FaHeart className="text-2xl" /> }
    ];

    const galleryImages = [
        {
            src: "/gallery/image (21).jpg",
            alt: "Academic Excellence at Amonto Girls Academy",
            caption: "Academic Excellence",
        },
        {
            src: "/gallery/image (22).jpg",
            alt: "Empowered Students at Amonto Girls Academy",
            caption: "Empowered Students",
        },
        {
            src: "/gallery/image (8).jpg",
            alt: "Modern Facilities at Amonto Girls Academy",
            caption: "State-of-the-art Facilities",
        },
        {
            src: "/gallery/image (26).jpg",
            alt: "Leadership Training at Amonto Girls Academy",
            caption: "Leadership Training",
        },
        {
            src: "/gallery/image (27).jpg",
            alt: "Science Labs at Amonto Girls Academy",
            caption: "Advanced Science Labs",
        },
        {
            src: "/gallery/image (29).jpg",
            alt: "Cultural Events at Amonto Girls Academy",
            caption: "Cultural Events",
        },
    ];

    return (
        <section id="about" className="min-h-screen">
            {/* Hero Section */}
            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/gallery/image (31).jpg')" }}>
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
                                About Us
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
                            Empowering young women through quality education in South Sudan
                        </motion.p>

                        {/* Quick Stats */}
                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={2}
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30">
                                    <div className="text-4xl font-bold text-yellow-300 mb-2">{stat.value}</div>
                                    <div className="text-white/80 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Who We Are & Mission */}
            <div className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Who We Are */}
                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={0}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">Who We Are</h2>
                            <p className="text-white/80 text-lg leading-relaxed">
                                Amonto Girls Academy is a prestigious single-girls boarding school located on Jebel Amianin, South Sudan. We offer a modern
                                South Sudan curriculum dedicated to empowering young women through quality education, leadership development, and personal growth.
                            </p>
                        </motion.div>

                        {/* Our Mission */}
                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={1}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                            <p className="text-white/80 text-lg leading-relaxed">
                                Our mission is to provide high-quality education that nurtures academic excellence, discipline, and leadership skills. We aim to
                                inspire confidence and independence, shaping young women into future leaders of society.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-4xl font-bold text-center text-white mb-16"
                    >
                        🌟 Why Choose Amonto Girls Academy?
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={index + 1}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-yellow-500/30 transition-all duration-300"
                            >
                                <div className="text-yellow-400 mb-4 flex justify-center">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-white/80">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-4xl font-bold text-center text-white mb-16"
                    >
                        📸 Campus Life
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={index + 1}
                                className="relative overflow-hidden rounded-2xl shadow-xl group"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                    <h3 className="text-white text-lg font-semibold">{image.caption}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Impact */}
            <div className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-4xl font-bold text-center text-white mb-16"
                    >
                        💫 Our Impact
                    </motion.h2>

                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={1}
                        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Transforming Lives</h3>
                                <p className="text-white/80 mb-6">
                                    In a country where fewer than 500 girls completed high school just ten years ago,
                                    Amonto is transforming lives and breaking barriers. We're proud to be part of the
                                    educational revolution in South Sudan.
                                </p>
                                <div className="bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-xl p-4">
                                    <h4 className="text-white font-semibold mb-2">Breaking Educational Barriers</h4>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-blue-300 mb-1">Under 10%</div>
                                            <p className="text-white/80 text-sm">National secondary enrollment</p>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-purple-300 mb-1">98%</div>
                                            <p className="text-white/80 text-sm">Our university acceptance rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Building Future Leaders</h3>
                                <p className="text-white/80 mb-6">
                                    Our graduates go on to become leaders in various fields, from medicine and engineering
                                    to business and public service. We're building a network of empowered women who are
                                    shaping the future of South Sudan.
                                </p>
                                <div className="bg-gradient-to-r from-green-800/30 to-teal-800/30 rounded-xl p-4">
                                    <h4 className="text-white font-semibold mb-2">Alumni Success</h4>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-green-300 mb-1">85%</div>
                                            <p className="text-white/80 text-sm">University graduation rate</p>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-teal-300 mb-1">60%</div>
                                            <p className="text-white/80 text-sm">Pursuing STEM fields</p>
                                        </div>
                                    </div>
                                </div>
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
                        Join Our Community of Excellence
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={1}
                        className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
                    >
                        Discover the opportunities waiting for you at Amonto Girls Academy.
                        Our admissions team is ready to guide you through the enrollment process.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={2}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Get an admission
                        </button>
                        <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Schedule Visit
                        </button>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={3}
                        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    >
                        <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-300">10th</div>
                            <div className="text-white/80">Nationally Ranked</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-300">#1</div>
                            <div className="text-white/80">Best Girls School</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-300">98%</div>
                            <div className="text-white/80">University Acceptance</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-pink-300">100+</div>
                            <div className="text-white/80">Scholarships Awarded</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}