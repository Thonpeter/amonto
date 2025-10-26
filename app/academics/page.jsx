// components/Academics.js
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Academics() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
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

    const testimonials = [
        {
            name: "Diing Deborah Majok Akuol",
            achievement: "5th Position Nationally in 2024 CSE with 90% - National Arts Contest 2nd Place",
            image: "/facilities/diing2.jpg",
            quote: "The academy's holistic approach helped me excel in both sciences and arts, preparing me for national competitions."
        },
        {
            name: "Agok Agol Malaak Kwai",
            achievement: "Overall Best Student in National Mathematics Olympiad 2024",
            image: "/facilities/agok-agol.jpg",
            quote: "The rigorous mathematics program and dedicated teachers enabled me to achieve excellence at the national level."
        },
        {
            name: "Abut Abuoch Ayuel",
            achievement: "Top 3 Girls in Strathmore University Maths Contest 2025",
            image: "/facilities/abut.jpg",
            quote: "The strong foundation in mathematics from Amonto prepared me to compete internationally."
        }
    ];

    const stats = [
        { label: "National Top 3 Ranking", value: "3rd", target: 3 },
        { label: "CSE Pass Rate", value: "90%", target: 90 },
        { label: "National Awards Won", value: "12+", target: 12 },
        { label: "Country Ranking 2025", value: "10th", target: 10 }
    ];

    const programs = [
        {
            title: "Science Track",
            subjects: ["Physics", "Biology", "Chemistry", "Computer Science", "Additional Mathematics", "Agriculture"],
            image: "gallery/502550900_122291977172008987_5048547983340027753_n.jpg",
            icon: "🔬"
        },
        {
            title: "Arts Track",
            subjects: ["Geography", "History", "Literature", "Accounting", "Commerce"],
            image: "gallery/508692558_122294437178008987_428057514277936842_n.jpg",
            icon: "🎨"
        },
        {
            title: "Core Foundation",
            subjects: ["Mathematics", "English Language", "CRE", "Citizenship"],
            image: "/gallery/504376576_122304649508008987_912336966561225463_n.jpg",
            icon: "📚"
        }
    ];

    const achievements2025 = [
        {
            category: "National Excellence",
            icon: "🏆",
            items: [
                "10th Position Nationally - 2024 CSE Results (August 2025)",
                "Diing Deborah Majok Akuol - 5th Best Student in South Sudan (90%)",
                "Hosted National Debate Championship for 14 schools from 6 states"
            ]
        },
        {
            category: "Arts & Science Excellence",
            icon: "🎨",
            items: [
                "3rd Place - Central Equatoria State Arts Contest",
                "Qualified for National Level - Arts Competition",
                "Best Female Candidate - Diing Deborah Majok (CES Arts & Science)"
            ]
        },
        {
            category: "Mathematics Excellence",
            icon: "🧮",
            items: [
                "Top 3 Performance - Abut Abuoch Ayuel (Strathmore University Contest)",
                "Recognized among top mathematics students nationally",
                "International mathematics competition participation"
            ]
        },
        {
            category: "Leadership & Debate",
            icon: "🎤",
            items: [
                " TBA Best debate speaker- Adau Aquila Hakim",
                "National Debate Championship - Team participation (September 2025)",
                "Leadership in hosting national-level competitions",
                "Outstanding performance in public speaking"
            ]
        }
    ];

    const achievements2024 = [
        {
            category: "Mathematics Olympiad",
            icon: "🥇",
            items: [
                "Overall Best Student - Agok Agol Malaak Kwai",
                "National Mathematics Olympiad Champion (1st Position)",
                "Featured in HEM-2024 magazine top 10 female academicians"
            ]
        },
        {
            category: "National Arts Contest",
            icon: "🎨",
            items: [
                "4th Place School - National Arts Contest",
                "2nd Best Performer - Diing Deborah Majok Akuol (National)",
                "Best Female Participant - Central Equatoria State"
            ]
        },
        {
            category: "Student Recognition",
            icon: "👑",
            items: [
                "Top 10 Female Academicians - Both Agok Agol and Diing Deborah",
                "Featured in HEM-2024 magazine",
                "National recognition for outstanding performance"
            ]
        },
        {
            category: "Sesso",
            icon: "👑",
            items: [
                "Emerged as the best school in Sesso"

            ]
        },
        {
            category: "Scholarship Program",
            icon: "🎓",
            items: [
                "4-Year Scholarships offered to top female Primary 8 students",
                "Based on Juba Joint Mock exam performance",
                "Commitment to expanding educational access"
            ]
        }
    ];

    const supportServices = [
        {
            title: "Evening Tutorials",
            description: "Additional learning sessions and consultations from the teachers after regular classes",
            image: "/academics/evening-tutorials.jpg",
            icon: "📖"
        },
        {
            title: "Individual Mentoring",
            description: "Personalized guidance from experienced educators",
            image: "/academics/mentoring.jpg",
            icon: "👥"
        },
        {
            title: "University Preparation",
            description: "Comprehensive counseling for higher education",
            image: "/academics/university-prep.jpg",
            icon: "🎓"
        },
        {
            title: "Research Projects",
            description: "Opportunities for advanced academic exploration",
            image: "/academics/research-projects.jpg",
            icon: "🔍"
        }
    ];

    return (
        <section id="academics" className="min-h-screen py-16">
            {/* Hero Section */}
            <div className="relative w-full bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/academics/classroom-hero.jpg')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 px-4 sm:px-6">
                    <div className="text-center mb-16 pt-24">
                        <motion.h1
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={0}
                            className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-xl tracking-wide"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Academic</span> Excellence
                        </motion.h1>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 mb-8"></div>
                        <motion.p
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={1}
                            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                        >
                            Leading South Sudan in academic excellence with nationally recognized achievements and top-performing students.
                        </motion.p>
                    </div>

                    {/* Achievement Highlights Banner */}
                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={2}
                        className="mb-16 bg-gradient-to-r from-green-900/90 to-blue-900/90 rounded-3xl p-8 shadow-2xl border border-green-500/30 max-w-6xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-center text-white mb-8">🏆 Recent Outstanding Achievements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white/10 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">🥇</div>
                                <h3 className="font-bold text-lg text-yellow-300 mb-2">National Top 3</h3>
                                <p className="text-white text-sm">3rd Position Nationally student from Amonto Girls in 2024 CSE-Diing Deborah Majok (90%)</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">📊</div>
                                <h3 className="font-bold text-lg text-blue-300 mb-2">Country Ranking</h3>
                                <p className="text-white text-sm">10th Best School Nationally 2024 CSE</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">🏅</div>
                                <h3 className="font-bold text-lg text-purple-300 mb-2">Best Girls School</h3>
                                <p className="text-white text-sm">Recognized as the Best Girls Boarding School in South Sudan</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Winning Celebration Video */}
                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={3}
                        className="mb-16 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/50"
                    >
                        <div className="relative aspect-video">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                                poster="/gallery/trophy-celebration.jpg" // Use a relevant poster image
                            >
                                <source src="./vid/win.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                                <div className="text-center w-full">
                                    <h3 className="text-2xl font-bold text-yellow-300 mb-2">Celebrating Success Together</h3>
                                    <p className="text-white/90">Our students celebrating their achievements and trophies</p>
                                </div>
                            </div>

                            {/* Play icon overlay for mobile devices */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-black/40 rounded-full p-3">
                                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Counter Section */}
                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={4}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300">
                                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm sm:text-base text-blue-200 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* 2025 Academic Achievements */}
            <div className="py-20 bg-gradient-to-r from-blue-900/95 to-indigo-900/95">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-3xl sm:text-4xl font-bold text-blue-200 mb-8 text-center"
                    >
                        🌟 2025 Academic Achievements
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {achievements2025.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={index + 1}
                                className="bg-white/10 rounded-xl p-6"
                            >
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                    <span className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center mr-3 text-sm">{achievement.icon}</span>
                                    {achievement.category}
                                </h3>
                                <ul className="space-y-2 text-white/90">
                                    {achievement.items.map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={5}
                        className="mt-12 bg-white/10 rounded-xl p-6 max-w-4xl mx-auto"
                    >
                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <img
                                src="/gallery/image (8).jpg"
                                alt="2025 Award Ceremony"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <h3 className="text-white text-xl font-semibold">2025 Awards</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 2024 Academic Achievements */}
            <div className="py-20 bg-gradient-to-r from-purple-900/95 to-pink-900/95">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-3xl sm:text-4xl font-bold text-purple-200 mb-8 text-center"
                    >
                        🎯 2024 Academic Achievements
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {achievements2024.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={index + 1}
                                className="bg-white/10 rounded-xl p-6"
                            >
                                <h3 className="text-xl font-semibold mb-3 flex items-center">
                                    <span className="w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center mr-3 text-sm">{achievement.icon}</span>
                                    {achievement.category}
                                </h3>
                                <ul className="space-y-2 text-white/90">
                                    {achievement.items.map((item, i) => (
                                        <li key={i}>• {item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={5}
                        className="mt-12 bg-white/10 rounded-xl p-6 max-w-4xl mx-auto"
                    >
                        <div className="relative h-64 rounded-lg overflow-hidden">
                            <img
                                src="/gallery/image (7).jpg"
                                alt="2024 Mathematics Olympiad"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <h3 className="text-white text-xl font-semibold">2024 awards</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Academic Programs */}
            <div className="py-20 bg-gradient-to-r from-gray-900 to-black">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center"
                    >
                        📚 Academic Programs
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={index + 1}
                                className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl overflow-hidden shadow-xl"
                            >
                                <div className="relative h-48">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                        <h3 className="text-white text-xl font-semibold flex items-center">
                                            <span className="mr-2">{program.icon}</span>
                                            {program.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-blue-300 mb-3">Subjects Offered:</h4>
                                    <ul className="space-y-2">
                                        {program.subjects.map((subject, i) => (
                                            <li key={i} className="text-white/90 flex items-center">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                                {subject}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Student Success Stories */}
            <div className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center"
                    >
                        🌟 Student Success Stories
                    </motion.h2>

                    <div className="max-w-4xl mx-auto">
                        {/* Video Testimonial Section */}
                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={1}
                            className="mb-12 bg-gradient-to-br from-purple-800/30 to-blue-800/30 rounded-2xl p-8 border border-white/20"
                        >
                            <h3 className="text-2xl font-bold text-white text-center mb-6">Hear From Our Students</h3>
                            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                                <video
                                    controls

                                >
                                    <source src="./vid/adau.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="text-center mt-4">
                                <p className="text-yellow-300 font-semibold">Adau Aquila Hakim</p>
                                <p className="text-white/80">Senior Three Science Student</p>
                                <p className="text-white/70 italic mt-2">"Academics is what helps us to be prosperous in life, in Amonto, we uphold Academics"</p>
                            </div>
                        </motion.div>

                        {/* Existing Testimonial Carousel */}
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={testimonials[currentTestimonial].image}
                                alt={testimonials[currentTestimonial].name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{testimonials[currentTestimonial].name}</h3>
                                <p className="text-yellow-300 mb-4">{testimonials[currentTestimonial].achievement}</p>
                                <p className="text-white/90 italic">"{testimonials[currentTestimonial].quote}"</p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-6 space-x-4">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-yellow-400' : 'bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Academic Support Services */}
            <div className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center"
                    >
                        📖 Academic Support Services
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {supportServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={index + 1}
                                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6 text-center shadow-xl border border-white/10"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                                <p className="text-white/80">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
                <div className="container mx-auto px-6 text-center">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-3xl sm:text-4xl font-bold text-white mb-6"
                    >
                        Join Our Academic Excellence Journey
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={1}
                        className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
                    >
                        Discover how our academic programs can help you achieve your full potential and prepare for university success.
                    </motion.p>


                </div>
            </div>
        </section>
    );
}