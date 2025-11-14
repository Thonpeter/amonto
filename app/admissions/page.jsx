// components/Admissions.js
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getRandomGalleryImage } from '../../utils/galleryImages';

export default function Admissions() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [heroBackground, setHeroBackground] = useState(null);

    useEffect(() => {
        setIsLoaded(true);
        // Set random background image on mount
        setHeroBackground(getRandomGalleryImage());
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

    const facilities = [
        {
            title: "Swimming Pool",
            description: "Olympic-sized pool for recreation and training",
            image: "/facilities/pool2.jpg",
            icon: "🏊‍♀️",
            underConstruction: false
        },
        {
            title: "Air-Conditioned Classrooms",
            description: "Modern rooms with digital boards and comfortable learning environment",
            image: "/facilities/classroom.jpg",
            icon: "🏫",
            underConstruction: false
        },
        {
            title: "Sports Complex",
            description: "Basketball, volleyball, and tennis courts for athletic excellence",
            image: "/facilities/sport2.jpg",
            icon: "⚽",
            underConstruction: false
        },
        {
            title: "Science Laboratories",
            description: "Fully equipped physics, chemistry, and biology labs - Coming Soon!",
            image: null,
            icon: "🔬",
            underConstruction: true
        },
        {
            title: "Computer Science Lab",
            description: "State-of-the-art technology lab for digital learning - Coming Soon!",
            image: null,
            icon: "💻",
            underConstruction: true
        },
        {
            title: "Recreational Areas",
            description: "Beautiful outdoor spaces for relaxation and social activities",
            image: "/facilities/safe.jpg",
            icon: "🌳",
            underConstruction: false
        },
        {
            title: "Boarding Facilities",
            description: "Comfortable and secure residential accommodations",
            image: "/facilities/boarding.jpg",
            icon: "🏠",
            underConstruction: false
        },
        {
            title: "Dining Hall",
            description: "Spacious dining area serving nutritious meals daily",
            image: "/facilities/diet.jpg",
            icon: "🍽️",
            underConstruction: false
        }
    ];

    const admissionSteps = [
        {
            title: "Campus Tour & Inquiry",
            description: "Schedule a personalized campus visit to pick the admission form from our staff i.e the school bursar and the head of academics.",
            image: "/facilities/tour.jpg",
            icon: "🚶‍♀️"
        },
        {
            title: "Application Submission",
            description: "Complete the admission application and submit all required documents for review.For the S.1, apply with your temporary testimonial, the senior 2, 3 and 4 are required to come with their report cards and Primary 8 cerificates",
            image: "/facilities/winner.jpg",
            icon: "📝"
        },
        {
            title: "Student Assessment",
            description: "Participate in academic evaluation and family interview with our admissions team.",
            image: "/facilities/asses.jpg",
            icon: "📊"
        },
        {
            title: "Enrollment & Orientation",
            description: "Complete the enrollment process and attend new student orientation program.",
            image: "/facilities/orient.jpg",
            icon: "🎓"
        }
    ];

    const programs = [
        {
            title: "Forms 1-2 Foundation Program",
            description: "Core subject mastery, study skills development, and technology integration for younger students.",
            image: "/facilities/program1.jpg",
            features: ["Core subject mastery", "Study skills development", "Technology integration"],
            icon: "📘"
        },
        {
            title: "Forms 3-4 Excellence Program",
            description: "Intensive CSE preparation, university counseling, and career guidance for senior students.",
            image: "/facilities/program3.jpg",
            features: ["Intensive CSE preparation", "University counseling", "Career guidance"],
            icon: "📗"
        },
        {
            title: "Full Boarding Program",
            description: "Complete residential experience with all meals, accommodation, and comprehensive student support.",
            image: "/facilities/boarding.jpg",
            features: ["Complete residential experience", "All meals and accommodation", "Comprehensive student support"],
            icon: "🏠"
        }
    ];

    const boardingLife = [
        {
            title: "Secure Campus Environment",
            description: "15-acre campus with 24/7 security and supervision",
            image: "/facilities/safe.jpg",
            icon: "🔒"
        },
        {
            title: "Nutritious Meal Programs",
            description: "Balanced and nutritious meals prepared daily",
            image: "/facilities/diet.jpg",
            icon: "🍎"
        },
        {
            title: "Weekend Activities",
            description: "Recreational and educational weekend programs",
            image: "/facilities/dance.jpg",
            icon: "🎭"
        },
        {
            title: "Study Support",
            description: "Evening tutorials and study halls with supervision",
            image: "/facilities/journalists.jpg",
            icon: "📖"
        }
    ];

    return (
        <>
            <div className="pt-24 min-h-screen">
                <section id="admissions" className="min-h-screen">
                    {/* Hero Section */}
                    <div className="relative w-full bg-cover bg-center min-h-screen" style={{ backgroundImage: heroBackground ? `url('${heroBackground}')` : "url('/gallery/image (1).jpg')" }}>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
                        <div className="relative z-10 px-4 sm:px-6">
                            <div className="text-center mb-16 pt-24">
                                <motion.h1
                                    initial="hidden"
                                    animate={isLoaded ? "visible" : "hidden"}
                                    variants={fadeIn}
                                    custom={0}
                                    className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-xl tracking-wide"
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">Your Journey to</span> Excellence
                                </motion.h1>
                                <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 mb-8"></div>
                                <motion.p
                                    initial="hidden"
                                    animate={isLoaded ? "visible" : "hidden"}
                                    variants={fadeIn}
                                    custom={1}
                                    className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                                >
                                    Join South Sudan's Premier Girls' Academy and become part of our community of excellence.
                                </motion.p>
                            </div>

                            {/* Quick Facts */}
                            <motion.div
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={2}
                                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
                            >
                                <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30 text-center">
                                    <div className="text-3xl font-bold text-yellow-300 mb-2">Year-Round</div>
                                    <div className="text-white/80 text-sm">Admissions Open</div>
                                </div>
                                <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30 text-center">
                                    <div className="text-3xl font-bold text-yellow-300 mb-2">Forms 1-4</div>
                                    <div className="text-white/80 text-sm">Accepting Students</div>
                                </div>
                                <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30 text-center">
                                    <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
                                    <div className="text-white/80 text-sm">Campus Support</div>
                                </div>
                                <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30 text-center">
                                    <div className="text-3xl font-bold text-yellow-300 mb-2">Merit</div>
                                    <div className="text-white/80 text-sm">Scholarships Available</div>
                                </div>
                            </motion.div>


                        </div>
                    </div>

                    {/* World-Class Facilities */}
                    <div className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
                        <div className="container mx-auto px-6">
                            <motion.h2
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={0}
                                className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center"
                            >
                                🏫 Our Facilities
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {facilities.map((facility, index) => (
                                    <motion.div
                                        key={index}
                                        initial="hidden"
                                        animate={isLoaded ? "visible" : "hidden"}
                                        variants={fadeIn}
                                        custom={index + 1}
                                        className={`bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-2xl overflow-hidden shadow-xl ${facility.underConstruction ? 'ring-2 ring-yellow-500/50' : ''}`}
                                    >
                                        <div className="relative h-48">
                                            {facility.image ? (
                                                <img
                                                    src={facility.image}
                                                    alt={facility.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-900/80 flex items-center justify-center">
                                                    <div className="text-center">
                                                        <div className="text-6xl mb-4 animate-pulse">{facility.icon}</div>
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <div className="bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2 border-2 border-yellow-400/50">
                                                                <span className="text-yellow-300 text-sm font-bold flex items-center gap-2">
                                                                    <span className="animate-spin">🚧</span>
                                                                    Under Construction
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                                <h3 className="text-white text-xl font-semibold flex items-center">
                                                    <span className="mr-2">{facility.icon}</span>
                                                    {facility.title}
                                                </h3>
                                            </div>
                                            {facility.underConstruction && (
                                                <div className="absolute top-2 right-2 bg-yellow-500/90 backdrop-blur-sm rounded-full px-3 py-1 border-2 border-yellow-300/50 shadow-lg">
                                                    <span className="text-yellow-100 text-xs font-bold flex items-center gap-1">
                                                        <span className="animate-pulse">🚧</span>
                                                        Coming Soon
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <p className="text-white/90">{facility.description}</p>
                                            {facility.underConstruction && (
                                                <div className="mt-4 pt-4 border-t border-yellow-500/30">
                                                    <p className="text-yellow-300/80 text-sm italic">
                                                        This facility is currently under construction and will be available soon.
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Boarding Life */}
                    <div className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 relative overflow-hidden">
                        {/* Background decorative elements */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
                        </div>

                        <div className="container mx-auto px-6 relative z-10">
                            <motion.h2
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={0}
                                className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                                    🏠 Boarding Life Experience
                                </span>
                            </motion.h2>
                            <motion.p
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={0.5}
                                className="text-center text-white/80 text-lg mb-16 max-w-2xl mx-auto"
                            >
                                A home away from home where every student thrives
                            </motion.p>

                            {/* Hero Image Section */}
                            <motion.div
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={1}
                                className="relative mb-16 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <div className="relative h-[500px]">
                                    <img
                                        src="/gallery/image (1).jpg"
                                        alt="Boarding Life at Amonto Girls Academy"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent"></div>
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                                        <motion.h3
                                            initial="hidden"
                                            animate={isLoaded ? "visible" : "hidden"}
                                            variants={fadeIn}
                                            custom={2}
                                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                                        >
                                            Complete Residential Experience
                                        </motion.h3>
                                        <motion.p
                                            initial="hidden"
                                            animate={isLoaded ? "visible" : "hidden"}
                                            variants={fadeIn}
                                            custom={2.5}
                                            className="text-white/90 text-lg max-w-2xl leading-relaxed"
                                        >
                                            Our boarding program offers a secure 15-acre campus environment with 24/7 supervision and support.
                                            Students enjoy nutritious meal programs, weekend recreational activities, and dedicated study halls
                                            with evening tutorials to support academic success.
                                        </motion.p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Features Grid with Gallery Images */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                                {boardingLife.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial="hidden"
                                        animate={isLoaded ? "visible" : "hidden"}
                                        variants={fadeIn}
                                        custom={index + 3}
                                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    >
                                        {/* Background Image */}
                                        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="relative p-6 h-full flex flex-col">
                                            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                                            <p className="text-white/80 text-sm flex-grow">{item.description}</p>
                                            
                                            {/* Hover effect overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/10 group-hover:to-transparent transition-all duration-300 rounded-2xl"></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Gallery Showcase */}
                            <motion.div
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={7}
                                className="max-w-6xl mx-auto"
                            >
                                <h3 className="text-2xl font-bold text-white text-center mb-8">Life at Amonto</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        "/gallery/image (8).jpg",
                                        "/gallery/image (10).jpg",
                                        "/gallery/image (15).jpg",
                                        "/gallery/image (20).jpg"
                                    ].map((img, index) => (
                                        <motion.div
                                            key={index}
                                            initial="hidden"
                                            animate={isLoaded ? "visible" : "hidden"}
                                            variants={fadeIn}
                                            custom={8 + index}
                                            className="relative group overflow-hidden rounded-xl aspect-square"
                                        >
                                            <img
                                                src={img}
                                                alt={`Boarding life ${index + 1}`}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Admission Process */}
                    <div className="py-20 bg-gradient-to-r from-gray-900 to-black">
                        <div className="container mx-auto px-6">
                            <motion.h2
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={0}
                                className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center"
                            >
                                📋 Admission Process
                            </motion.h2>

                            <div className="max-w-5xl mx-auto">
                                {/* Step Navigation */}
                                <div className="flex justify-center mb-12">
                                    <div className="bg-white/10 backdrop-blur-lg rounded-full p-2 flex">
                                        {admissionSteps.map((step, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveStep(index)}
                                                className={`px-6 py-3 rounded-full transition-all duration-300 ${index === activeStep
                                                    ? 'bg-yellow-500 text-black font-semibold'
                                                    : 'text-white/70 hover:text-white'
                                                    }`}
                                            >
                                                Step {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Step Content */}
                                <motion.div
                                    key={activeStep}
                                    initial="hidden"
                                    animate={isLoaded ? "visible" : "hidden"}
                                    variants={fadeIn}
                                    custom={0}
                                    className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl overflow-hidden shadow-xl"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        <div className="p-8">
                                            <div className="text-4xl mb-4">{admissionSteps[activeStep].icon}</div>
                                            <h3 className="text-2xl font-bold text-white mb-4">{admissionSteps[activeStep].title}</h3>
                                            <p className="text-white/90 mb-6">{admissionSteps[activeStep].description}</p>

                                            <div className="flex space-x-4">
                                                <button
                                                    onClick={() => setActiveStep((activeStep - 1 + admissionSteps.length) % admissionSteps.length)}
                                                    className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                                                >
                                                    Previous
                                                </button>
                                                <button
                                                    onClick={() => setActiveStep((activeStep + 1) % admissionSteps.length)}
                                                    className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-colors"
                                                >
                                                    Next Step
                                                </button>
                                            </div>
                                        </div>

                                        <div className="relative h-64 md:h-auto">
                                            <img
                                                src={admissionSteps[activeStep].image}
                                                alt={admissionSteps[activeStep].title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent md:hidden"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Academic Programs */}
                    <div className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900">
                        <div className="container mx-auto px-6">
                            <motion.h2
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={0}
                                className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center"
                            >
                                🎓 Academic Programs
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {programs.map((program, index) => (
                                    <motion.div
                                        key={index}
                                        initial="hidden"
                                        animate={isLoaded ? "visible" : "hidden"}
                                        variants={fadeIn}
                                        custom={index + 1}
                                        className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-2xl overflow-hidden shadow-xl"
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
                                            <p className="text-white/90 mb-4">{program.description}</p>
                                            <h4 className="text-blue-300 mb-3">Program Features:</h4>
                                            <ul className="space-y-2">
                                                {program.features.map((feature, i) => (
                                                    <li key={i} className="text-white/90 flex items-center">
                                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
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
                                Start Your Journey With Us
                            </motion.h2>

                            <motion.p
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={1}
                                className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
                            >
                                Our admissions team is ready to guide you through the enrollment process and answer any questions you may have.
                            </motion.p>

                            <motion.div
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={2}
                                className="flex flex-col sm:flex-row gap-6 justify-center"
                            >{/*
                        <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Get Admission Now
                        </button>
                        <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Schedule Campus Tour
                        </button> */}
                            </motion.div>

                            <motion.p
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={3}
                                className="mt-12 text-white/80"
                            >
                                Year-round admission availability for Forms 1-4
                            </motion.p>
                            <motion.div
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={4}
                                className="mt-12 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/30 max-w-4xl mx-auto"
                            >
                                <h3 className="text-2xl font-bold text-white text-center mb-6">We are deeply rooted to our diversed cultures</h3>
                                <div className="aspect-video rounded-xl overflow-hidden">
                                    <video
                                        controls

                                    >
                                        <source src="./vid/cel.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <p className="text-white/80 text-center mt-4">
                                    Not only in academic, we also take lead in our cultural heritage
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}