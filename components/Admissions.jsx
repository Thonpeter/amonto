// components/Admissions.js
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEOHead from './SEOHead';

export default function Admissions() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

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

    const facilities = [
        {
            title: "Modern Library",
            description: "Digital resources and quiet study areas",
            image: "/facilities/library.webp",
            icon: "📚"
        },
        {
            title: "Swimming Pool",
            description: "Olympic-sized pool for recreation and training",
            image: "/facilities/pool2.jpg",
            icon: "🏊‍♀️"
        },
        {
            title: "Air-Conditioned Classrooms",
            description: "Modern rooms with digital boards",
            image: "/facilities/classroom.jpg",
            icon: "🏫"
        },
        {
            title: "Medical Clinic",
            description: "24/7 medical care with qualified staff",
            image: "/facilities/clinic.jpg",
            icon: "🏥"
        },
        {
            title: "Sports Complex",
            description: "Basketball, volleyball, and tennis courts",
            image: "/facilities/sport2.jpg",
            icon: "⚽"
        },
        {
            title: "Science Laboratories",
            description: "Fully equipped physics, chemistry, biology labs",
            image: "/facilities/lab.webp",
            icon: "🔬"
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
            <SEOHead
                title="Admissions - Join Amonto Girls Academy in South Sudan"
                description="Apply to Amonto Girls Academy. Learn about our admission process, requirements, facilities, and boarding life for Forms 1-4 students."
                keywords="admissions Amonto Girls, apply now, school enrollment, boarding school South Sudan, admission process"
                canonicalUrl="https://www.amontogirls.com/admissions"
                ogImage="/admissions/campus-entrance.jpg"
            />
            <section id="admissions" className="min-h-screen">
                {/* Hero Section */}
                <div className="relative w-full bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/admissions/campus-entrance.jpg')" }}>
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
                                    className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-2xl overflow-hidden shadow-xl"
                                >
                                    <div className="relative h-48">
                                        <img
                                            src={facility.image}
                                            alt={facility.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                            <h3 className="text-white text-xl font-semibold flex items-center">
                                                <span className="mr-2">{facility.icon}</span>
                                                {facility.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-white/90">{facility.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Boarding Life */}
                <div className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
                    <div className="container mx-auto px-6">
                        <motion.h2
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={0}
                            className="text-3xl sm:text-4xl font-bold text-white mb-16 text-center"
                        >
                            🏠 Boarding Life Experience
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div>
                                <motion.h3
                                    initial="hidden"
                                    animate={isLoaded ? "visible" : "hidden"}
                                    variants={fadeIn}
                                    custom={1}
                                    className="text-2xl font-bold text-white mb-6"
                                >
                                    Complete Residential Experience
                                </motion.h3>
                                <motion.p
                                    initial="hidden"
                                    animate={isLoaded ? "visible" : "hidden"}
                                    variants={fadeIn}
                                    custom={2}
                                    className="text-white/90 mb-8"
                                >
                                    Our boarding program offers a secure 15-acre campus environment with 24/7 supervision and support.
                                    Students enjoy nutritious meal programs, weekend recreational activities, and dedicated study halls
                                    with evening tutorials to support academic success.
                                </motion.p>

                                <div className="grid grid-cols-2 gap-6">
                                    {boardingLife.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial="hidden"
                                            animate={isLoaded ? "visible" : "hidden"}
                                            variants={fadeIn}
                                            custom={index + 3}
                                            className="bg-white/10 rounded-xl p-4"
                                        >
                                            <div className="text-2xl mb-2">{item.icon}</div>
                                            <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                            <p className="text-white/80 text-sm">{item.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={5}
                                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="/facilities/dorm2.webp"
                                    alt="Boarding facilities"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                                    <h3 className="text-white text-xl font-semibold">Modern Boarding Facilities</h3>
                                </div>
                            </motion.div>
                        </div>
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
        </>
    );
}