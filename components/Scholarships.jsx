'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaHome, FaUserFriends, FaTrophy, FaChartLine, FaUniversity, FaHandshake } from 'react-icons/fa';

export default function Scholarships() {
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

    const benefits = [
        {
            icon: <FaGraduationCap className="text-2xl" />,
            title: "Full Tuition Coverage",
            description: "Covers all tuition fees for four years of secondary education.",
        },
        {
            icon: <FaBook className="text-2xl" />,
            title: "Learning Materials",
            description: "Access to textbooks, stationery, and other educational resources.",
        },
        {
            icon: <FaHome className="text-2xl" />,
            title: "Boarding Facilities",
            description: "Comfortable and secure boarding facilities for all scholars.",
        },
        {
            icon: <FaUserFriends className="text-2xl" />,
            title: "Mentorship Programs",
            description: "Guidance from experienced educators and mentors.",
        },
    ];

    const scholarshipCategories = [
        {
            title: "Top Performers in Joint Mock Examinations",
            description: "Top three girls in the Primary 8 (P.8) joint mock examinations organized by the Jonglei State Union of Private Schools.",
            coverage: "Fully funded 4-year boarding scholarships (Senior 1 to Senior 4)",
            eligibility: "Parents are only responsible for purchasing uniforms",
            icon: <FaTrophy className="text-2xl" />
        },
        {
            title: "Academic Excellence Scholarships",
            description: "Multiple categories for top performers in various examinations including Juba Joint Mock, Maths Olympiad, and international exams.",
            coverage: "Fully funded 4-year boarding scholarships for 28 girls across all categories",
            eligibility: "Various academic criteria based on examination results",
            icon: <FaChartLine className="text-2xl" />
        }
    ];

    const stats = [
        { value: "100+", label: "Scholarships Awarded", icon: "🏆" },
        { value: "98%", label: "Graduation Rate", icon: "📈" },
        { value: "85%", label: "Proceed to University", icon: "🎓" },
        { value: "12", label: "Partner Schools", icon: "🤝" }
    ];

    return (
        <section id="scholarships" className="min-h-screen">
            {/* Hero Section */}
            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/gallery/image (8).jpg')" }}>
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
                                Scholarships
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
                            Empowering South Sudanese girls through quality education and fully-funded opportunities
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
                                    <div className="text-4xl font-bold text-yellow-300">{stat.value}</div>
                                    <div className="text-white/80 text-sm mt-2">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Quick Application CTA */}
                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={3}
                        className="text-center"
                    >
                        <p className="text-xl text-white/90 mb-8">
                            Transform your future with our fully-funded scholarship opportunities
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                Apply Now
                            </button>
                            <button className="px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                                Download Application
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-4xl font-bold text-center text-white mb-16"
                    >
                        🎯 Eligibility Criteria
                    </motion.h2>

                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={1}
                        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Who Can Apply?</h3>
                        <p className="text-white/80 text-lg mb-6">
                            Any South Sudanese girl who has scored aggregate <span className="font-bold text-yellow-300">4, 5, or 6</span> in the recent PLE results for P7 Uganda is eligible
                            for a four-year secondary scholarship at Amonto Girls Academy Secondary School.
                        </p>
                        <p className="text-white/80 text-lg font-semibold">
                            Inform her and spread this message widely!
                        </p>

                        <div className="mt-8 bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-xl p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Additional Eligibility Pathways</h4>
                            <ul className="text-white/80 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-yellow-300 mr-2">•</span>
                                    Top performers in Joint Mock Examinations
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-300 mr-2">•</span>
                                    High achievers in Mathematics Olympiads
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-300 mr-2">•</span>
                                    Exceptional results in Kenya Certificate of Primary Education (KCPE)
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scholarship Categories */}
            <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-4xl font-bold text-center text-white mb-16"
                    >
                        📋 Scholarship Categories
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {scholarshipCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={index + 1}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-yellow-500/30 transition-all duration-300"
                            >
                                <div className="text-yellow-400 mb-4">{category.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                                <p className="text-white/80 mb-4">{category.description}</p>
                                <div className="bg-blue-900/30 rounded-lg p-4 mb-4">
                                    <h4 className="text-white font-semibold mb-2">Coverage:</h4>
                                    <p className="text-white/80 text-sm">{category.coverage}</p>
                                </div>
                                <div className="bg-purple-900/30 rounded-lg p-4">
                                    <h4 className="text-white font-semibold mb-2">Eligibility:</h4>
                                    <p className="text-white/80 text-sm">{category.eligibility}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scholarship Benefits */}
            <div className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-4xl font-bold text-center text-white mb-16"
                    >
                        💫 Scholarship Benefits
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={index + 1}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-blue-400/30 transition-all duration-300"
                            >
                                <div className="text-blue-400 mb-4 flex justify-center">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                                <p className="text-white/80">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={5}
                        className="mt-12 bg-gradient-to-r from-green-800/30 to-blue-800/30 rounded-2xl p-8 border border-green-500/30 max-w-3xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">Financial Coverage</h3>
                        <p className="text-white/90 text-center mb-6">
                            Our scholarships cover all essential costs to ensure students can focus entirely on their education
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-green-300 mb-2">100%</div>
                                <p className="text-white/80">Tuition Fees</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-300 mb-2">100%</div>
                                <p className="text-white/80">Boarding Costs</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-purple-300 mb-2">Materials</div>
                                <p className="text-white/80">Books & Resources</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Success Story */}
            <div className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-4xl font-bold text-center text-white mb-16"
                    >
                        🌟 Success Stories
                    </motion.h2>

                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={1}
                        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/3">
                                <div className="relative rounded-2xl overflow-hidden">
                                    <img
                                        src="/gallery/image (18).jpg"
                                        alt="Malang Atem Deng, scholarship recipient"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="text-2xl font-bold text-white mb-4">Malang Atem Deng</h3>
                                <p className="text-white/80 mb-4">
                                    Malang had a great visit and tour of the school with her mother after topping the performances of the Scholarship Test.
                                </p>
                                <p className="text-white/80 mb-6">
                                    We congratulate her because hard work surely pays! <span className="font-semibold text-yellow-300">We Build For The Future.</span>
                                </p>
                                <div className="bg-yellow-900/30 rounded-lg p-4 border border-yellow-500/30">
                                    <p className="text-white italic">"The scholarship has changed my life completely. I'm now confident about my future and excited to inspire other girls in my community."</p>
                                    <p className="text-yellow-200 mt-2">- Malang Atem Deng, Scholarship Recipient</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Aluel's Dream Section */}
            <div className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-4xl font-bold text-center text-white mb-16"
                    >
                        🌟 Dreams of Amonto
                    </motion.h2>

                    {/* Aluel Moch Nhom Video Testimonial */}
                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={1}
                        className="bg-gradient-to-br from-yellow-900/20 to-orange-800/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/30 max-w-4xl mx-auto mb-16"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2">A Dream to Join Amonto</h3>
                            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-4"></div>
                            <p className="text-white/80">Primary school girl with big dreams</p>
                        </div>

                        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 group">
                            {/* Video container with proper aspect ratio handling */}
                            <div className="relative aspect-video bg-black">
                                <video
                                    src="./vid/aluel.mp4"
                                    controls
                                    autoPlay
                                    muted
                                    playsInline
                                    loop

                                    onError={(e) => {
                                        // Fallback if video fails to load
                                        e.target.style.display = 'none';
                                        const fallback = document.getElementById('video-fallback');
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                    onPlay={(e) => {
                                        // Hide play button when video plays
                                        const playButton = document.getElementById('play-button-overlay');
                                        if (playButton) playButton.style.display = 'none';
                                    }}
                                    onPause={(e) => {
                                        // Show play button when video pauses
                                        const playButton = document.getElementById('play-button-overlay');
                                        if (playButton) playButton.style.display = 'flex';
                                    }}
                                >
                                    Your browser does not support the video tag.
                                </video>

                                {/* Fallback content if video fails to load */}
                                <div id="video-fallback" className="absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-4">
                                    <FaUniversity className="text-5xl text-yellow-400 mb-4" />
                                    <p className="text-white text-lg font-semibold text-center mb-2">Aluel's Testimonial</p>
                                    <p className="text-yellow-200 text-sm text-center">"I called this place my home, because Noble has shown me a love for a father"</p>
                                    <button className="mt-4 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-semibold">
                                        Watch Video
                                    </button>
                                </div>

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>

                                {/* Dream element overlay */}
                                <div className="absolute top-4 right-4">
                                    <div className="bg-yellow-500/90 text-gray-900 font-bold px-3 py-1 rounded-full text-sm flex items-center">
                                        <FaUniversity className="mr-1" /> Dreaming of Amonto
                                    </div>
                                </div>

                                {/* Play button overlay */}
                                <div id="play-button-overlay" className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-yellow-500/80 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center px-4">
                            <div className="bg-black/30 rounded-xl p-5 border border-yellow-500/20">
                                <p className="text-white/90 text-lg italic mb-3">
                                    "I called this place my home, because Noble [The School Director] has shown me a love for a father"
                                </p>
                                <p className="text-yellow-300 font-semibold">- Aluel Moch-nhom Awuor, The girl with a dream</p>
                            </div>

                            <div className="mt-6 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-4">
                                <p className="text-white/80 text-sm">
                                    Aluel dreams of joining Amonto Girls Academy and is working hard to achieve the academic excellence needed for our scholarship program.
                                </p>
                            </div>

                            {/* Eleanor Roosevelt Quote Section */}
                            <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-xl p-5 border border-purple-500/20">
                                <div className="text-white/80 italic text-lg text-center">
                                    "The future belongs to those who believe in the beauty of their dreams."
                                </div>
                                <div className="text-purple-300 font-semibold text-center mt-3">
                                    - Eleanor Roosevelt
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Application Process */}
            <div className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
                <div className="container mx-auto px-6">
                    <motion.h2
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={0}
                        className="text-4xl font-bold text-center text-white mb-16"
                    >
                        📝 Application Process
                    </motion.h2>

                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={1}
                        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">How to Apply</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Check Eligibility</h4>
                                    <p className="text-white/80">Review the eligibility criteria to ensure you qualify for our scholarship programs.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Prepare Documents</h4>
                                    <p className="text-white/80">Gather your academic records, recommendation letters, and other required documents.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-green-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Submit Application</h4>
                                    <p className="text-white/80">Complete the application form and submit it before the deadline.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-white font-bold">4</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Interview Process</h4>
                                    <p className="text-white/80">Selected candidates will be invited for an interview with our scholarship committee.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-xl p-6">
                            <h4 className="text-white font-semibold mb-2">Important Notes:</h4>
                            <ul className="text-white/80 space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="text-yellow-300 mr-2">•</span>
                                    Scholarships are exclusively for girls, aligning with our vision to promote girl child education
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-300 mr-2">•</span>
                                    Selections are based on academic merit in specific examinations
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-300 mr-2">•</span>
                                    Scholarships for the 2026 academic year are based on 2025 examination results
                                </li>
                            </ul>
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
                        Transform Your Future Today
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={1}
                        className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
                    >
                        Join the exceptional young women who have transformed their lives through Amonto's scholarship program
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        variants={fadeIn}
                        custom={2}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Apply for Scholarship
                        </button>
                        <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Contact Admissions
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
                            <div className="text-2xl font-bold text-yellow-300">100%</div>
                            <div className="text-white/80">Tuition Covered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-300">4 Years</div>
                            <div className="text-white/80">Full Scholarship</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-300">28</div>
                            <div className="text-white/80">Scholarships Available</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-pink-300">2026</div>
                            <div className="text-white/80">Intake Year</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}