'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaHome, FaUserFriends, FaTrophy, FaChartLine, FaUniversity, FaHandshake } from 'react-icons/fa';

export default function Scholarships() {
    const [isLoaded, setIsLoaded] = useState(false);

    // Video state and refs
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);

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

    // Video control functions
    const formatTime = (time) => {
        if (!time || isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
                setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
            }
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        setProgress(0);
    };

    const handleProgressClick = (e) => {
        if (videoRef.current && videoRef.current.duration) {
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            videoRef.current.currentTime = percent * videoRef.current.duration;
        }
    };

    // Scroll detection to pause video
    useEffect(() => {
        const handleScroll = () => {
            if (isPlaying && videoRef.current) {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isPlaying]);

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
                            Any South Sudanese girl who has scored aggregate <span className="font-bold text-yellow-300">4 & 5</span> in the recent PLE results for P7 Uganda is eligible
                            for a four-year secondary scholarship at Amonto Girls Academy Secondary School.
                        </p>

                        <div className="mt-8 bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-xl p-6">
                            <h4 className="text-xl font-bold text-white mb-4">Additional Eligibility Pathways</h4>
                            <ul className="text-white/80 space-y-2">
                                <li className="flex items-start">
                                    <span className="text-yellow-300 mr-2">•</span>
                                    Top performers in Primary school Joint Mock Examinations
                                </li>
                                <li className="flex items-start">
                                    <span className="text-yellow-300 mr-2">•</span>
                                    Top Jonglei performers
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
                    </motion.h2>

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
                                    <h3 className="text-3xl font-bold text-white mb-2">Aluel's Dream to Join Amonto</h3>
                                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-4"></div>
                                    <p className="text-white/80">Primary school girl with big dreams</p>
                                </div>

                                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 group">
                                    {/* Video container with fixed height */}
                                    <div className="relative bg-black" style={{ height: '400px' }}>
                                        <video
                                            ref={videoRef}
                                            src="./vid/aluel.mp4"
                                            muted
                                            playsInline
                                            loop
                                            className="w-full h-full object-cover"
                                            onTimeUpdate={handleTimeUpdate}
                                            onLoadedMetadata={handleLoadedMetadata}
                                            onEnded={handleVideoEnd}
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

                                        {/* Custom Play/Pause button overlay */}
                                        <div
                                            id="play-button-overlay"
                                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                            onClick={togglePlay}
                                        >
                                            <div className={`w-16 h-16 bg-yellow-500/80 rounded-full flex items-center justify-center transition-all duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-80 group-hover:opacity-100'}`}>
                                                {isPlaying ? (
                                                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>

                                        {/* Custom Video Controls */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                            <div className="flex items-center space-x-3">
                                                {/* Play/Pause Button */}
                                                <button
                                                    onClick={togglePlay}
                                                    className="text-white hover:text-yellow-400 transition-colors"
                                                >
                                                    {isPlaying ? (
                                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    )}
                                                </button>

                                                {/* Progress Bar */}
                                                <div className="flex-1 relative">
                                                    <div
                                                        className="h-1 bg-gray-600 rounded-full cursor-pointer"
                                                        onClick={handleProgressClick}
                                                    >
                                                        <div
                                                            className="h-full bg-yellow-500 rounded-full"
                                                            style={{ width: `${progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>

                                                {/* Time Display */}
                                                <div className="text-white text-sm min-w-[100px] text-right">
                                                    {formatTime(currentTime)} / {formatTime(duration)}
                                                </div>

                                                {/* Mute/Unmute Button */}
                                                <button
                                                    onClick={toggleMute}
                                                    className="text-white hover:text-yellow-400 transition-colors"
                                                >
                                                    {isMuted ? (
                                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                                        </svg>
                                                    ) : (
                                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                                        </svg>
                                                    )}
                                                </button>
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
                </div>
            </div>
        </section>
    );
}