// components/CoCurricular.js
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Co() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [visibleCount, setVisibleCount] = useState(12); // Show first 12 images initially

    const coCurricularImages = [
        // Sports Images (16)
        {
            image: "/co-curricular/basketball-game.jpg",
            caption: "Basketball team celebrating victory",
            description: "Our champions showing teamwork and spirit"
        },
        {
            image: "/co-curricular/swimming-competition.jpg",
            caption: "Students excelling in swimming competition",
            description: "Demonstrating speed and technique in the pool"
        },
        {
            image: "/facilities/sport2.jpg",
            caption: "Netball team in action",
            description: "Fast-paced gameplay and coordination"
        },
        {
            image: "/co-curricular/athletics-day.jpg",
            caption: "Annual sports day celebrations",
            description: "Students enjoying track and field events"
        },
        {
            image: "/co-curricular/sports-5.jpg",
            caption: "Football match intensity",
            description: "Competitive spirit on the field"
        },
        {
            image: "/co-curricular/sports-6.jpg",
            caption: "Volleyball team coordination",
            description: "Perfect teamwork in action"
        },
        {
            image: "/co-curricular/sports-7.jpg",
            caption: "Table tennis competition",
            description: "Focus and precision"
        },
        {
            image: "/co-curricular/sports-8.jpg",
            caption: "Athletics training session",
            description: "Building endurance and skill"
        },
        {
            image: "/co-curricular/sports-9.jpg",
            caption: "Basketball practice",
            description: "Developing techniques"
        },
        {
            image: "/co-curricular/sports-10.jpg",
            caption: "Swimming lessons",
            description: "Learning water safety"
        },
        {
            image: "/co-curricular/sports-11.jpg",
            caption: "Team celebrations",
            description: "Joy of achievement"
        },
        {
            image: "/co-curricular/sports-12.jpg",
            caption: "Sports award ceremony",
            description: "Recognizing excellence"
        },
        {
            image: "/co-curricular/sports-13.jpg",
            caption: "Warm-up exercises",
            description: "Preparing for action"
        },
        {
            image: "/co-curricular/sports-14.jpg",
            caption: "Coach guidance",
            description: "Expert mentorship"
        },
        {
            image: "/co-curricular/sports-15.jpg",
            caption: "Team strategy session",
            description: "Planning for victory"
        },
        {
            image: "/co-curricular/sports-16.jpg",
            caption: "Sports equipment management",
            description: "Organization and care"
        },

        // Cultural Images (16)
        {
            image: "/co-curricular/traditional-dance.jpg",
            caption: "Traditional dance performance",
            description: "Celebrating South Sudanese heritage"
        },
        {
            image: "/co-curricular/modern-dance.jpg",
            caption: "Modern dance group performance",
            description: "Contemporary moves and creativity"
        },
        {
            image: "/co-curricular/debate-team.jpg",
            caption: "Debate team in session",
            description: "Developing critical thinking skills"
        },
        {
            image: "/co-curricular/music-performance.jpg",
            caption: "School band performing",
            description: "Musical talent on display"
        },
        {
            image: "/co-curricular/cultural-5.jpg",
            caption: "Drama club performance",
            description: "Expressive acting skills"
        },
        {
            image: "/co-curricular/cultural-6.jpg",
            caption: "Art exhibition setup",
            description: "Showcasing creativity"
        },
        {
            image: "/co-curricular/cultural-7.jpg",
            caption: "Cultural festival",
            description: "Traditional attire showcase"
        },
        {
            image: "/co-curricular/cultural-8.jpg",
            caption: "Music rehearsal",
            description: "Perfecting harmonies"
        },
        {
            image: "/co-curricular/cultural-9.jpg",
            caption: "Poetry recitation",
            description: "Literary expression"
        },
        {
            image: "/co-curricular/cultural-10.jpg",
            caption: "Dance practice",
            description: "Choreography sessions"
        },
        {
            image: "/co-curricular/cultural-11.jpg",
            caption: "Cultural food fair",
            description: "Culinary traditions"
        },
        {
            image: "/co-curricular/cultural-12.jpg",
            caption: "Traditional storytelling",
            description: "Preserving heritage"
        },
        {
            image: "/co-curricular/cultural-13.jpg",
            caption: "Art workshop",
            description: "Creative learning"
        },
        {
            image: "/co-curricular/cultural-14.jpg",
            caption: "Music composition",
            description: "Original creations"
        },
        {
            image: "/co-curricular/cultural-15.jpg",
            caption: "Drama rehearsal",
            description: "Character development"
        },
        {
            image: "/co-curricular/cultural-16.jpg",
            caption: "Cultural parade",
            description: "Community celebration"
        },

        // Activities Images (18)
        {
            image: "/co-curricular/students-laughing.jpg",
            caption: "Students enjoying break time",
            description: "Friendship and fun moments"
        },
        {
            image: "/co-curricular/art-class.jpg",
            caption: "Art club creativity",
            description: "Expressing through colors and forms"
        },
        {
            image: "/co-curricular/science-fair.jpg",
            caption: "Science fair excitement",
            description: "Innovation and discovery"
        },
        {
            image: "/co-curricular/community-service.jpg",
            caption: "Community service project",
            description: "Giving back with smiles"
        },
        {
            image: "/co-curricular/activities-5.jpg",
            caption: "Leadership camp",
            description: "Developing future leaders"
        },
        {
            image: "/co-curricular/activities-6.jpg",
            caption: "Science experiment",
            description: "Hands-on learning"
        },
        {
            image: "/co-curricular/activities-7.jpg",
            caption: "Gardening club",
            description: "Green thumb activities"
        },
        {
            image: "/co-curricular/activities-8.jpg",
            caption: "Library reading session",
            description: "Literary exploration"
        },
        {
            image: "/co-curricular/activities-9.jpg",
            caption: "Math olympiad",
            description: "Problem solving challenges"
        },
        {
            image: "/co-curricular/activities-10.jpg",
            caption: "Robotics workshop",
            description: "Technology innovation"
        },
        {
            image: "/co-curricular/activities-11.jpg",
            caption: "Environmental club",
            description: "Eco-friendly initiatives"
        },
        {
            image: "/co-curricular/activities-12.jpg",
            caption: "Cooking class",
            description: "Culinary skills development"
        },
        {
            image: "/co-curricular/activities-13.jpg",
            caption: "Photography club",
            description: "Capturing moments"
        },
        {
            image: "/co-curricular/activities-14.jpg",
            caption: "Chess tournament",
            description: "Strategic thinking"
        },
        {
            image: "/co-curricular/activities-15.jpg",
            caption: "Field trip adventure",
            description: "Educational excursions"
        },
        {
            image: "/co-curricular/activities-16.jpg",
            caption: "Peer tutoring",
            description: "Collaborative learning"
        },
        {
            image: "/co-curricular/activities-17.jpg",
            caption: "Creative writing",
            description: "Literary expression"
        },
        {
            image: "/co-curricular/activities-18.jpg",
            caption: "School newspaper",
            description: "Journalistic endeavors"
        }
    ];

    const loadMoreImages = () => {
        setVisibleCount(prevCount => Math.min(prevCount + 12, coCurricularImages.length));
        setIsExpanded(true);
    };

    const showLessImages = () => {
        setVisibleCount(12);
        setIsExpanded(false);
    };

    const visibleImages = coCurricularImages.slice(0, visibleCount);

    return (
        <section id="co" className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/co-curricular/hero-students.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
                            Co-curricular Gallery
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Capturing vibrant moments from sports, cultural activities, and student life
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Student Life in Pictures
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Explore our comprehensive collection of co-curricular activities that showcase
                            the energy, creativity, and achievements of our students across various domains.
                        </p>
                    </motion.div>

                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {visibleImages.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.caption}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl text-gray-800 mb-3">
                                        {item.caption}
                                    </h3>
                                    <p className="text-gray-600">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Load More/Less Button */}
                    <div className="text-center mt-12">
                        {visibleCount < coCurricularImages.length ? (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={loadMoreImages}
                                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                            >
                                Load More Images ({coCurricularImages.length - visibleCount} remaining)
                            </motion.button>
                        ) : isExpanded ? (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={showLessImages}
                                className="bg-gray-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg"
                            >
                                Show Less
                            </motion.button>
                        ) : null}
                    </div>

                    {/* Image Count Indicator */}
                    <div className="text-center mt-6">
                        <p className="text-gray-500">
                            Showing {visibleCount} of {coCurricularImages.length} images
                        </p>
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
                    >
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Moments of Joy & Achievement
                            </h2>
                            <p className="text-lg text-gray-600">
                                Our co-curricular activities are designed to bring out the best in every student,
                                creating memories that last a lifetime and building skills that shape futures.
                            </p>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600">50+</div>
                                    <div className="text-sm text-gray-600">Activities</div>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600">100%</div>
                                    <div className="text-sm text-gray-600">Student Participation</div>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <div className="text-2xl font-bold text-purple-600">Yearly</div>
                                    <div className="text-sm text-gray-600">Events & Competitions</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/co-curricular/feature-moment.jpg"
                                alt="Students celebrating together"
                                className="rounded-3xl shadow-2xl w-full"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl shadow-lg">
                                <p className="font-bold text-lg">Creating Lasting Memories</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}