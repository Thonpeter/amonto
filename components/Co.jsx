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
            image: "/sport/tactic.jpg",
            caption: "Netball team discussing tactics",
            description: "Our champions showing teamwork and spirit"
        },
        {
            image: "/facilities/sport2.jpg",
            caption: "Netball team in action",
            description: "Fast-paced gameplay and coordination"
        },
        {
            image: "/sport/group2.jpg",
            caption: "Picture before the match",
            description: "Team close up picture before a big match"
        },
        {
            image: "/sport/group3.jpg",
            caption: "One more",
            description: "One is never enough for the team",
        },
        {
            image: "/facilities/sport.jpg",
            caption: "Volley team ",
            description: ""
        },
        {
            image: "/culture/culture1.jpg",
            caption: "Good vibes only",
            description: "All hands on deck for the dance floor! A powerful display of energy and synchrony."
        },
        {
            image: "/culture/yirol.jpg",
            caption: "Rhythms of Our Roots",
            description: "More than just a dance-It's a living expression of heritage."
        },
        {
            image: "/activity/aisle.jpg",
            caption: "A ceremomial Welcome",
            description: "A scene of pure pageantry. As the Director proceeds down the red carpet, a guard of honor from the Scout troops offers a salute."
        },
        {
            image: "/activity/chill2.jpg",
            caption: "",
            description: "Capturing every moment in AGASS in one geniune smile"
        },
        {
            image: "/activity/closeup2.jpg",
            caption: "",
            description: "Smiles at AGASS are simply contagious"
        },
        {
            image: "/activity/daniella.jpg",
            caption: "A Foundation of Faith",
            description: "Student leader Daniella raises the Bible high, symbolsing a commitement to lead with wisdom , integrity, and spiritual conviction."
        },
        {
            image: "/activity/director.jpg",
            caption: "",
            description: "The Director prepares to share his vision. A moment of quiet anticipation before his voice guides and inspires the students and staff."
        },
        {
            image: "/activity/handshake.jpg",
            caption: "A great Honour",
            description: "The Director shares a historic handshake with Honourable Kuol Manyang Juuk at Amonto Girls Academy, revered liberation leader, the former Minister of Defense and the former Governor of Jonglei State."
        },
        {
            image: "/activity/journalism1.jpg",
            caption: "The Next Generation of Leadership",
            description: "This is what modern leadrship looks like in AGASS: Informed, articulated, and confident. AGASS equips students with leadership, prepared to speak up and make a difference."
        },

        // Newly Added Images
        {
            image: "/activity/leader.jpg",
            caption: "A Guiding Light",
            description: "The head girl stands poised, holding the Bible in one hand and the microphone in the other, ready to lead with faith and conviction."
        },
        {
            image: "/activity/scouts.jpg",
            caption: "Scouts in Ceremony",
            description: "A disciplined team of scouts marches in perfect formation, gracing the ceremony with their presence and adding dignity to the occasion."
        },
        {
            image: "/activity/sisters.jpg",
            caption: "The Director's Daughters",
            description: "Amonto and Sandra, the two daughters of the school Director, share a joyful moment as they pose together for a photograph."
        },
        {
            image: "/activity/smile1.jpg",
            caption: "Radiant Joy",
            description: "One of our students flashes a beautiful, genuine smile that captures the happy spirit of life at Amonto Girls Academy."
        },
        {
            image: "/activity/students.jpg",
            caption: "Confident Leadership",
            description: "Students step forward with confidence, some proudly holding the school flag while student leader Daniella addresses the gathering with the microphone."
        },
        {
            image: "/activity/students2.jpg",
            caption: "Prepared for Action",
            description: "Student leaders stand in formation, holding their notebooks as they await their introduction, ready to take on their responsibilities."
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