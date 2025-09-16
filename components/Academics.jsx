"use client";

import React, { useState, useEffect } from "react";

export default function Academics() {
    // State for testimonial carousel
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        {
            name: "Diing Deborah Majok Akuol",
            achievement: "5th Position Nationally in 2024 CSE with 90% - National Arts Contest 2nd Place",
            image: "/facilities/diing.jpg",
            quote: "The academy's holistic approach helped me excel in both sciences and arts, preparing me for national competitions."
        },
        {
            name: "Agok Agol Malaak Kwai",
            achievement: "Overall Best Student in National Mathematics Olympiad 2024",
            image: "/gallery/image (21).jpg",
            quote: "The rigorous mathematics program and dedicated teachers enabled me to achieve excellence at the national level."
        },
        {
            name: "Abut Abuoch Ayuel",
            achievement: "Top 3 Girls in Strathmore University Maths Contest 2025",
            image: "/facilities/abut.jpg",
            quote: "The strong foundation in mathematics from Amonto prepared me to compete internationally."
        }
    ];

    // Enhanced stats based on achievements
    const stats = [
        { label: "National Top 5 Ranking", value: "5th", target: 5 },
        { label: "CSE Pass Rate", value: "90%", target: 90 },
        { label: "National Awards Won", value: "12+", target: 12 },
        { label: "Country Ranking 2025", value: "10th", target: 10 }
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section id="academics" className="min-h-screen py-16">
            <div
                className="relative w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/gallery/image (30).jpg')" }}
            >
                {/* Dark overlay for better readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 px-4 sm:px-6">
                    {/* Main Title with animation */}
                    <div className="text-center mb-16 pt-24">
                        <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-xl tracking-wide animate-fade-in">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Academic</span> Excellence
                        </h1>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 mb-8"></div>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Leading South Sudan in academic excellence with nationally recognized achievements and top-performing students.
                        </p>
                    </div>

                    {/* Achievement Highlights Banner */}
                    <div className="mb-16 bg-gradient-to-r from-green-900/90 to-blue-900/90 rounded-3xl p-8 shadow-2xl border border-green-500/30 max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-white mb-8">🏆 Recent Outstanding Achievements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white/10 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">🥇</div>
                                <h3 className="font-bold text-lg text-yellow-300 mb-2">National Top 5</h3>
                                <p className="text-white text-sm">5th Position Nationally in 2024 CSE through Diing Deborah Majok (90%)</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">📊</div>
                                <h3 className="font-bold text-lg text-blue-300 mb-2">Country Ranking</h3>
                                <p className="text-white text-sm">10th Best School Nationally as of September 2025</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6 text-center">
                                <div className="text-4xl mb-3">🏅</div>
                                <h3 className="font-bold text-lg text-purple-300 mb-2">Best Girls School</h3>
                                <p className="text-white text-sm">Recognized as the Best Girls Boarding School in Juba</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Counter Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300">
                                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm sm:text-base text-blue-200 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* 2025 Academic Achievements */}
                    <div className="mt-16 bg-gradient-to-r from-blue-900/95 to-indigo-900/95 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-6xl mx-auto border border-blue-500/30">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-200 mb-8 text-center">🌟 2025 Academic Achievements</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                                        <span className="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center mr-3 text-sm">🏆</span>
                                        National Excellence
                                    </h3>
                                    <ul className="space-y-2 text-white/90">
                                        <li>• <strong>10th Position Nationally</strong> - 2024 CSE Results (August 2025)</li>
                                        <li>• <strong>Diing Deborah Majok Akuol</strong> - 3rd Best Student in South Sudan (90%)</li>
                                        <li>• Hosted National Debate Championship for 14 schools from 6 states</li>
                                    </ul>
                                </div>

                                <div className="bg-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                                        <span className="w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center mr-3 text-sm">🎨</span>
                                        Arts & Science Excellence
                                    </h3>
                                    <ul className="space-y-2 text-white/90">
                                        <li>• <strong>3rd Place</strong> - Central Equatoria State Arts Contest</li>
                                        <li>• <strong>Qualified for National Level</strong> - Arts Competition</li>
                                        <li>• <strong>Best Female Candidate</strong> - Diing Deborah Majok (CES Arts & Science)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                                        <span className="w-8 h-8 bg-yellow-500/30 rounded-full flex items-center justify-center mr-3 text-sm">🧮</span>
                                        Mathematics Excellence
                                    </h3>
                                    <ul className="space-y-2 text-white/90">
                                        <li>• <strong>Top 3 Performance</strong> - Abut Abuoch Ayuel (Strathmore University Contest)</li>
                                        <li>• Recognized among top mathematics students nationally</li>
                                        <li>• International mathematics competition participation</li>
                                    </ul>
                                </div>

                                <div className="bg-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                                        <span className="w-8 h-8 bg-red-500/30 rounded-full flex items-center justify-center mr-3 text-sm">🎤</span>
                                        Leadership & Debate
                                    </h3>
                                    <ul className="space-y-2 text-white/90">
                                        <li>• <strong>National Debate Championship</strong> - Team participation (September 2025)</li>
                                        <li>• Leadership in hosting national-level competitions</li>
                                        <li>• Outstanding performance in public speaking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2024 Academic Achievements */}
                    <div className="mt-16 bg-gradient-to-r from-purple-900/95 to-pink-900/95 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-6xl mx-auto border border-purple-500/30">
                        <h2 className="text-3xl sm:text-4xl font-bold text-purple-200 mb-8 text-center">🎯 2024 Academic Achievements</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="bg-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                                        <span className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center mr-3 text-sm">🥇</span>
                                        Mathematics Olympiad
                                    </h3>
                                    <ul className="space-y-2 text-white/90">
                                        <li>• <strong>Overall Best Student</strong> - Agok Agol Malaak Kwai</li>
                                        <li>• National Mathematics Olympiad Champion</li>
                                        <li>• Featured in HEM-2024 magazine top 10 female academicians</li>
                                    </ul>
                                </div>

                                <div className="bg-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                                        <span className="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center mr-3 text-sm">🎨</span>
                                        National Arts Contest
                                    </h3>
                                    <ul className="space-y-2 text-white/90">
                                        <li>• <strong>4th Place School</strong> - National Arts Contest</li>
                                        <li>• <strong>2nd Best Performer</strong> - Diing Deborah Majok Akuol (National)</li>
                                        <li>• <strong>Best Female Participant</strong> - Central Equatoria State</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                                        <span className="w-8 h-8 bg-orange-500/30 rounded-full flex items-center justify-center mr-3 text-sm">👑</span>
                                        Student Recognition
                                    </h3>
                                    <ul className="space-y-2 text-white/90">
                                        <li>• <strong>Top 10 Female Academicians</strong> - Both Agok Agol and Diing Deborah</li>
                                        <li>• Featured in HEM-2024 magazine</li>
                                        <li>• National recognition for outstanding performance</li>
                                    </ul>
                                </div>

                                <div className="bg-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                                        <span className="w-8 h-8 bg-teal-500/30 rounded-full flex items-center justify-center mr-3 text-sm">🎓</span>
                                        Scholarship Program
                                    </h3>
                                    <ul className="space-y-2 text-white/90">
                                        <li>• <strong>4-Year Scholarships</strong> offered to top female Primary 8 students</li>
                                        <li>• Based on Juba Joint Mock exam performance</li>
                                        <li>• Commitment to expanding educational access</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Curriculum Section */}
                    <div className="mt-16 bg-gradient-to-r from-indigo-900/90 to-blue-900/90 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-6xl mx-auto border border-indigo-500/30">
                        <h2 className="text-3xl sm:text-4xl font-bold text-blue-200 mb-8 text-center">📚 Our Comprehensive Curriculum</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white/10 rounded-xl p-6">
                                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                                    Core Subjects
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        "Mathematics",
                                        "CRE",
                                        "English Language",
                                        "Citizenship"
                                    ].map((subject, index) => (
                                        <div key={index} className="flex items-center bg-white/5 rounded-lg p-3">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                            <span className="text-sm">{subject}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-xl p-6">
                                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                                    Science Subjects
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        "Physics",
                                        "Biology",
                                        "Chemistry",
                                        "Computer Science",
                                        "Additional Mathematics",
                                        "Agriculture"
                                    ].map((subject, index) => (
                                        <div key={index} className="flex items-center bg-white/5 rounded-lg p-3">
                                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                            <span className="text-sm">{subject}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-xl p-6">
                                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                                    <span className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                                    Art Subjects
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        "Geography",
                                        "History",
                                        "Accounting",
                                        "Commerce",
                                        "Literature"
                                    ].map((subject, index) => (
                                        <div key={index} className="flex items-center bg-white/5 rounded-lg p-3">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                            <span className="text-sm">{subject}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-white/10 rounded-xl">
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <span className="text-2xl mr-2">🌍</span>
                                National & Global Standards
                            </h3>
                            <p className="leading-relaxed">
                                Our curriculum is fully aligned with the South Sudan National Curriculum, ensuring students meet all local educational standards while being prepared for global opportunities.
                                We emphasize critical thinking, problem-solving, and leadership skills, evidenced by our students' exceptional performance in national competitions and examinations.
                                Our holistic approach combines academic rigor with practical skills, preparing students to excel in both South Sudan Certificate of Secondary Education and international academic environments.
                            </p>
                        </div>
                    </div>

                    {/* Success Stories - Enhanced Testimonial Carousel */}
                    <div className="mt-16 max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">⭐ Our Champion Students</h2>

                        <div className="relative bg-gradient-to-r from-emerald-900/90 to-teal-900/90 rounded-3xl p-8 sm:p-12 shadow-2xl border border-emerald-500/30 overflow-hidden">
                            {/* Background decorative elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full -mr-16 -mt-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/20 rounded-full -ml-12 -mb-12"></div>

                            {/* Testimonial content */}
                            <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
                                <div className="w-full lg:w-1/3 flex-shrink-0">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-500 rounded-2xl transform rotate-6"></div>
                                        <img
                                            src={testimonials[currentTestimonial].image}
                                            alt={testimonials[currentTestimonial].name}
                                            className="w-full h-64 lg:h-80 object-cover rounded-2xl relative z-10 shadow-xl"
                                        />
                                    </div>
                                </div>

                                <div className="w-full lg:w-2/3">
                                    <div className="text-6xl text-teal-200 mb-6 text-center lg:text-left">"</div>
                                    <p className="text-xl italic text-white/90 mb-6 text-center lg:text-left">
                                        {testimonials[currentTestimonial].quote}
                                    </p>
                                    <div className="mb-6 text-center lg:text-right">
                                        <div className="text-2xl font-bold text-white">{testimonials[currentTestimonial].name}</div>
                                        <div className="text-teal-200 font-medium">{testimonials[currentTestimonial].achievement}</div>
                                    </div>

                                    {/* Navigation dots */}
                                    <div className="flex justify-center lg:justify-end gap-3 mt-8">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentTestimonial(index)}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                                    ? 'bg-teal-400 w-8'
                                                    : 'bg-white/30 hover:bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Achievement highlight banner */}
                            <div className="mt-8 pt-8 border-t border-white/20">
                                <div className="text-center">
                                    <p className="text-teal-100 text-sm font-medium">
                                        🏆 Nationally Recognized Excellence • 🥇 Top 5 Student Performance • 🌟 Best Girls School in Juba
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom padding for mobile */}
                    <div className="pb-16"></div>
                </div>
            </div>
        </section>
    );
}