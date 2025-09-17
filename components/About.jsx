// components/About.js
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaBook, FaGraduationCap, FaSchool, FaGlobe, FaLightbulb, FaTrophy, FaAward, FaHeart, FaUsers } from 'react-icons/fa';

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
        { value: "15", label: "Acre Campus", icon: <FaSchool className="text-2xl" /> }
    ];

    const values = [
        {
            title: "Excellence",
            description: "Striving for the highest standards in all endeavors",
            icon: "⭐"
        },
        {
            title: "Integrity",
            description: "Developing strong character and ethical values",
            icon: "🤝"
        },
        {
            title: "Leadership",
            description: "Empowering students to become future leaders",
            icon: "👑"
        },
        {
            title: "Heritage",
            description: "Celebrating cultural pride with global awareness",
            icon: "🌍"
        },
        {
            title: "Empowerment",
            description: "Transforming lives through quality education",
            icon: "💪"
        }
    ];

    const galleryImages = [
        {
            src: "/facilities/asses.jpg",
            alt: "Amonto Girls Academy Campus Overview",
            caption: "Our 15-Acre Campus",
        },
        {
            src: "/gallery/502893574_122291969198008987_2888360851485276824_n.jpg",
            alt: "School Leadership Team",
            caption: "Dedicated Leadership",
        },
        {
            src: "/facilities/welcome.jpg",
            alt: "Graduation Ceremony at Amonto",
            caption: "Graduation Success",
        },
        {
            src: "/facilities/sport.jpg",
            alt: "Students in Various Activities",
            caption: "Holistic Development",
        },
        {
            src: "/facilities/univerity.jpg",
            alt: "School Historical Development",
            caption: "Our Journey",
        },
        {
            src: "/facilities/safe.jpg",
            alt: "School Values in Action",
            caption: "Living Our Values",
        },
    ];

    const leadershipTeam = [
        {
            name: "Noble Arem Riak",
            role: " The school director and the Founder",
            image: "/facilities/director.jpg",
            description: "Nobel Arem Riak is the visionary founder of Amonto Girls Academy. With a passion for education and women's empowerment, he established the school to provide quality education for girls in South Sudan. His dedication to transforming lives through education has made Amonto Girls Academy a reality, with the school completing construction in 2024 and welcoming its first batch of 36 students."
        },
        {
            name: "Madam Lydia Adongo",
            role: "Head Teacher",
            image: "/facilities/headteacher.jpg",
            description: "Madam Lydia Adongo brings extensive experience in education leadership to her role as Head Teacher. With a background in curriculum development and student mentorship, she leads the academic vision of Amonto Girls Academy. Her commitment to excellence and student success creates a nurturing environment where young women can thrive academically and personally."
        },
        {
            name: "Madam Tabitha Ajah",
            role: "Deputy Head Teacher for Administration",
            image: "/facilities/ajah.jpg",
            description: "Madam Ajah serves as the Deputy Head Teacher, supporting the daily operations and academic programs of the school. With her expertise in administration and student affairs, she ensures the smooth functioning of the academy. Her dedication to creating a supportive learning environment complements the school's mission of empowering young women through education."
        }
    ];

    return (
        <section id="about" className="min-h-screen">
            {/* Hero Section */}
            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/gallery/campus-overview.jpg')" }}>
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
                                Empowering Tomorrow's Leaders
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
                            Amonto Girls Academy - Transforming Lives Through Excellence in South Sudan
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
                            <p className="text-white/80 text-lg leading-relaxed mb-6">
                                Amonto Girls Academy is a prestigious single-girls boarding school located on Jebel Amianin, South Sudan.
                                We offer a modern South Sudan curriculum dedicated to empowering young women through quality education,
                                leadership development, and personal growth.
                            </p>
                            <div className="relative h-64 rounded-xl overflow-hidden mt-6">
                                <img
                                    src="/gallery/504024717_122292467870008987_5574490080200567755_n.jpg"
                                    alt="School leadership team"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
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
                                Our mission is to provide high-quality education that nurtures academic excellence, discipline, and leadership skills.
                                We aim to inspire confidence and independence, shaping young women into future leaders of society.
                            </p>
                            <h3 className="text-xl font-bold text-white mt-8 mb-4">Our Vision</h3>
                            <p className="text-white/80">
                                Shaping future leaders of South Sudan and beyond through excellence in education and character development.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Founder & Leadership Team Section */}
            <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-4xl font-bold text-center text-white mb-16"
                    >
                        👥 Our Leadership
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {leadershipTeam.map((member, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={index + 1}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
                            >
                                <div className="relative h-56 w-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-500/30">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-yellow-400 mb-4">{member.role}</p>
                                <p className="text-white/80 text-sm">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={4}
                        className="mt-12 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/30 max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-white text-center mb-6">Our Beginning</h3>
                        <p className="text-white/80 text-center">
                            Amonto Girls Academy completed construction in 2024 and welcomed its first batch of 36 students,
                            marking the beginning of our journey to transform girls' education in South Sudan. Under the guidance
                            of our dedicated leadership team, we are committed to providing exceptional education and opportunities
                            for young women to excel.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Our Impact Section */}
            <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
                                <div className="relative h-64 rounded-xl overflow-hidden">
                                    <img
                                        src="/gallery/image (1).jpg"
                                        alt="Graduation ceremony at Amonto"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
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

            {/* Our Values Section */}
            <div className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-4xl font-bold text-center text-white mb-16"
                    >
                        📜 Our Values
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={index + 1}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
                            >
                                <div className="text-3xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-white/80 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* School History & Milestones */}
            <div className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-4xl font-bold text-center text-white mb-16"
                    >
                        🏛️ Our History & Milestones
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
                                <h3 className="text-2xl font-bold text-white mb-4">Our Journey</h3>
                                <p className="text-white/80 mb-6">
                                    Established with a vision to transform girls' education in South Sudan,
                                    Amonto Girls Academy has grown from humble beginnings to become a nationally
                                    recognized institution of excellence.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                                            <span className="text-white text-sm">1</span>
                                        </div>
                                        <p className="text-white/80">Founded with a mission to empower young women through education</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                                            <span className="text-white text-sm">2</span>
                                        </div>
                                        <p className="text-white/80">Grew to become the #1 girls' school in Juba</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                                            <span className="text-white text-sm">3</span>
                                        </div>
                                        <p className="text-white/80">Achieved national ranking of 10th among all secondary schools</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="relative h-64 rounded-xl overflow-hidden">
                                    <img
                                        src="/facilities/students.jpg"
                                        alt="School historical development"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
                            Get Admission
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
                            <div className="text-2xl font-bold text-pink-300">15</div>
                            <div className="text-white/80">Acre Campus</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}