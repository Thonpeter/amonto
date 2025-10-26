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
            description: "Highly qualified teachers with a passion for teaching.",
        },
        {
            icon: <FaBook className="text-2xl" />,
            title: "Holistic Development",
            description: "We nurture both academic excellence,talent and personal growth.",
        },
        {
            icon: <FaGraduationCap className="text-2xl" />,
            title: "Scholarships & Support",
            description: "Financial aid available for outstanding students.",
        },
        {
            icon: <FaSchool className="text-2xl" />,
            title: "Modern Facilities",
            description: "State-of-the-art classrooms, labs,library, clinic, sport facilities, recreational areas and boarding facilities.",
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
            title: "Integrity & atitude",
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
            role: " The School Director and the Founder",
            image: "/facilities/director.jpg",
            description: "Nobel Arem Riak is the visionary founder of Amonto Girls Academy.Noble is a PhD candidate, he holds Master's Degree in International Relations [Univeristy of Juba], he holds Master's Deggree in Business Administration- Banking and Finance [Kampala University], and also holds Bachelor's Degree in Community Psychology [Makerere University- Kampala Uganda]. With a passion for education and girl's empowerment, he established the school to provide quality education for girls in South Sudan. His dedication to transforming lives through education has made Amonto Girls Academy a reality."
        },
        {
            name: "Madam Lydia Adongo",
            role: "Head Teacher",
            image: "/facilities/headteacher.jpg",
            description: "Madam Lydia Adongo brings extensive experience in education leadership to her role as Head Teacher. With a background in curriculum development and student mentorship, she leads the academic vision of Amonto Girls Academy. Her commitment to excellence and student success creates a nurturing environment where young girls can thrive academically and personally."
        },
        {
            name: "Madam Ajah Tabitha Jool",
            role: "Deputy Head Teacher for Administration",
            image: "/facilities/ajah2.jpg",
            description: "Madam Ajah serves as the Deputy Head Teacher, supporting the daily operations and academic programs of the school. With her expertise in administration and student affairs, she ensures the smooth functioning of the academy. Her dedication to creating a supportive learning environment complements the school's mission of empowering young women through education."
        },
        {
            name: " Mr.Baiga Ronald",
            role: "Director of studies (DOS)",
            image: "/facilities/baiga.jpg",
            description: "As the Director of Studies, Mr. Baiga draws upon his specialised Bachelor's degree in Vocational studies in Agriculture with Educaton from Kyabobog University [Uganda] to champion students  success, proactively identifying areas for academic enhancement and implementing targeted strategies while providing dedicated mentorship and support to faculty members."
        },
        {
            name: "Mr. Ainemugisha Gerald",
            role: "Deputy Head Teacher for Academics",
            image: "/facilities/aine2.jpg",
            description: "Mr. Ainemugisha brings a strong academic foundation to his role, holding a Bachelor of Science in Education [Bishop Stuart University]. His educational background provides him with the perfect blend of scientific rigor and pedagogical expertise to drive academic excellence across all departments. As Deputy Head Teacher for Academics, he oversees curriculum development, instructional quality, and student academic performance, ensuring every student receives the highest standard of education."
        },
        {
            name: "Mr. Peter Aduot Del",
            role: "Examination Bureau",
            image: "/facilities/aduot.jpg",
            description: "With many years of dedicated service in the field of education, Mr. Aduot brings a wealth of experience and institutional knowledge to his position as Head of the Examination Bureau. His extensive teaching background gives him unique insight into student assessment and academic standards. He ensures the integrity and smooth administration of all examinations while maintaining the highest standards of academic evaluation that the academy is known for."
        },
        {
            name: "Mr.Chol Tuor Abuol",
            role: "Bursar",
            image: "/facilities/chol.jpg",
            description: "Mr. Chol manages the school's financial well-being, overseeing budgeting, tuition, accounts, payroll, and financial reporting.Acting as the strategic advisor on all financial matters, Mr. Chol ensures the school's resources are managed prudently to supports the educational goals  and secure the long-term sustainabilty of our darling AGASS."
        },

        {
            name: "Madam Deborah Alek Ajak",
            role: "Senior Woman",
            image: "/facilities/aleh.jpg",
            description: "Mrs. Alek is the cornerstone of the girls' boarding experience, providing unwavering leadership, pastoral care, and strategic oversight. She is dedicated to creating a safe, supportive, and nurturing 'home away from home' where every student thrives academically, socially, and emotionally. Her role encompasses the holistic well-being of our students, from managing daily routines and ensuring discpipline to offering vital mentorship and guidance.She serves as the focal point of contact for parents regarding their daughters' welfare and development within the boarding house."
        },

        {
            name: "Mr. Jacob Mayen Kuot",
            role: "Secretary",
            image: "/facilities/mayen.jpg",
            description: "Mr. Mayen works hand-in-hand with the examination bureau by delivering timely preparation of the school examination documents, including the typing of exam papers, the accurate computation and processing of results and the meticulous preparation of official academic and administration documents "
        }

    ];

    return (
        <div className="pt-24 min-h-screen">
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
                <div className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute top-10 right-10 opacity-10">
                        <img src="./asset/cranes.jpg" alt="Cranes background" className="w-32 h-32 object-contain" />
                    </div>

                    <div className="container mx-auto px-6">
                        {/* Header with Logo and Flag */}
                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={0}
                            className="text-center mb-16"
                        >
                            <div className="flex items-center justify-center space-x-8 mb-8">
                                <div className="relative group">
                                    <img
                                        src="./asset/flag.jpg"
                                        alt="School Flag"
                                        className="w-24 h-16 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="relative group">
                                    <img
                                        src="./asset/logo.jpg"
                                        alt="School Logo"
                                        className="w-32 h-32 object-contain rounded-full bg-white p-2 shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="relative group">
                                    <img
                                        src="./asset/cranes.jpg"
                                        alt="School Cranes"
                                        className="w-24 h-16 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>

                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Who We Are */}
                            <motion.div
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={1}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative"
                            >
                                <div className="absolute -top-4 -left-4 bg-purple-500 rounded-full p-2 shadow-lg">
                                    <img
                                        src="./asset/logo.jpg"
                                        alt="School Logo"
                                        className="w-12 h-12 object-contain rounded-full"
                                    />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-6 pt-4">Who We Are</h2>
                                <p className="text-white/80 text-lg leading-relaxed mb-6">
                                    Amonto Girls Academy is a prestigious single-girls boarding school located on Jebel Amianin, South Sudan.
                                    We offer a modern South Sudan curriculum dedicated to empowering young women through quality education,
                                    leadership development, and personal growth.
                                </p>
                                <div className="relative h-64 rounded-xl overflow-hidden mt-6 group">
                                    <img
                                        src="/gallery/504024717_122292467870008987_5574490080200567755_n.jpg"
                                        alt="School leadership team"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                                        <img
                                            src="./asset/cranes.jpg"
                                            alt="Cranes"
                                            className="w-8 h-8 object-cover rounded-full border-2 border-white"
                                        />
                                        <span className="text-white font-semibold">Our Heritage</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Our Mission */}
                            <motion.div
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                variants={fadeIn}
                                custom={2}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 relative"
                            >
                                <div className="absolute -top-4 -right-4 bg-indigo-500 rounded-full p-2 shadow-lg">
                                    <img
                                        src="./asset/cranes.jpg"
                                        alt="School Cranes"
                                        className="w-12 h-12 object-cover rounded-full"
                                    />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-6 pt-4">Our Mission</h2>
                                <p className="text-white/80 text-lg leading-relaxed">
                                    Our mission is to provide high-quality education that nurtures academic excellence, discipline, leadership and lifetime skills.
                                </p>

                                <div className="my-8 p-4 bg-white/5 rounded-lg border border-white/10">
                                    <div className="flex items-center space-x-4 mb-3">
                                        <img
                                            src="./asset/flag.jpg"
                                            alt="School Flag"
                                            className="w-10 h-8 object-cover rounded"
                                        />
                                        <h3 className="text-xl font-bold text-white">Our Vision</h3>
                                    </div>
                                    <p className="text-white/80">
                                        To be the preferred academic centre that nurtures and prepares citizens in leadership and lifetime skills in the country and beyond
                                    </p>
                                </div>

                                {/* Values Section */}
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                        <img
                                            src="./asset/logo.jpg"
                                            alt="Logo"
                                            className="w-6 h-6 object-contain mr-2"
                                        />
                                        Our Values
                                    </h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="text-white/70 bg-white/5 px-3 py-2 rounded-lg text-sm">Excellence</span>
                                        <span className="text-white/70 bg-white/5 px-3 py-2 rounded-lg text-sm">Leadership</span>
                                        <span className="text-white/70 bg-white/5 px-3 py-2 rounded-lg text-sm">Discipline</span>
                                        <span className="text-white/70 bg-white/5 px-3 py-2 rounded-lg text-sm">Empowerment</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom decorative cranes */}
                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={3}
                            className="text-center mt-12"
                        >
                            <img
                                src="./asset/cranes.jpg"
                                alt="Cranes Symbol"
                                className="w-20 h-20 object-cover rounded-full mx-auto border-4 border-white/20 shadow-lg"
                            />
                            <p className="text-white/60 mt-2 text-sm">Cranes - Symbolizing Our Soaring Ambitions</p>
                        </motion.div>
                    </div>
                </div>
                {/* Student Testimonials Video */}
                <div className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={0}
                            className="max-w-4xl mx-auto text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold text-white mb-6">🎬 Hear From Our Students</h2>
                            <p className="text-xl text-white/80">
                                Listen to our students share their experiences at Amonto Girls Academy
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={1}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto"
                        >
                            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                                <video
                                    controls
                                    className="w-full h-full object-cover"
                                    poster="/facilities/modern.jpg" // Optional: add a poster frame
                                    preload="metadata"
                                >
                                    <source src="./vid/senior1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <p className="text-white/80 text-center mt-4 italic">
                                Our students share their journey and experiences at Amonto Girls Academy
                            </p>
                        </motion.div>
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
                            👥 THE SCHOOL ADMINISTRATION
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

                        {/* Director's Video Section */}
                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={4}
                            className="mt-12 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/30 max-w-4xl mx-auto"
                        >
                            <h3 className="text-2xl font-bold text-white text-center mb-6">Message from Our Director</h3>
                            <div className="aspect-video rounded-xl overflow-hidden">
                                <video
                                    controls

                                >
                                    <source src="./vid/noble.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <p className="text-white/80 text-center mt-4">
                                Hear directly from Noble Arem Riak about his vision for Amonto Girls Academy
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={5}
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
                <div className="relative py-24 overflow-hidden">
                    {/* Background with safe.jpg and overlay */}
                    <div
                        className="absolute inset-0 z-0 bg-blue-900/90"
                        style={{
                            backgroundImage: "url('./facilities/safe.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundAttachment: "fixed"
                        }}
                    ></div>

                    <div className="container relative z-10 mx-auto px-6">
                        <motion.h2
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={0}
                            className="text-5xl font-bold text-center text-white mb-6"
                        >
                            Why Choose Amonto Girls Academy?
                        </motion.h2>

                        <motion.p
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={0.5}
                            className="text-xl text-center text-white/90 mb-16 max-w-3xl mx-auto"
                        >
                            Discover the exceptional qualities that make our academy the premier choice for girls' education
                        </motion.p>

                        {/* Features Grid with Images */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {features.map((feature, index) => {
                                // Assign appropriate images based on feature content
                                let imagePath = "";
                                switch (index) {
                                    case 0: // Safe Environment
                                        imagePath = "./facilities/safe2.jpg";
                                        break;
                                    case 1: // Modern Facilities
                                        imagePath = "./facilities/modern.jpg";
                                        break;
                                    case 2: // Diverse Programs
                                        imagePath = "./facilities/program1.jpg";
                                        break;
                                    case 3: // Extracurricular
                                        imagePath = "./facilities/dance.jpg";
                                        break;
                                    case 4: // Orientation
                                        imagePath = "./facilities/orient.jpg";
                                        break;
                                    case 5: // Additional Programs
                                        imagePath = "./facilities/program3.jpg";
                                        break;
                                    default:
                                        imagePath = "./facilities/modern.jpg";
                                }

                                return (
                                    <motion.div
                                        key={index}
                                        initial="hidden"
                                        animate={isLoaded ? "visible" : "hidden"}
                                        variants={fadeIn}
                                        custom={index + 1}
                                        className="group bg-transparent rounded-2xl overflow-hidden border border-white/20 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-2xl"
                                    >
                                        {/* Image Container */}
                                        <div className="h-48 overflow-hidden relative">
                                            <div
                                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url(${imagePath})` }}
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                                            </div>

                                            {/* Icon overlay */}
                                            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-white text-lg shadow-lg">
                                                {feature.icon}
                                            </div>
                                        </div>

                                        {/* Content with friendly dark blue background */}
                                        <div className="p-6 bg-blue-800/95 border-t border-blue-700">
                                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                            <p className="text-blue-100 mb-4 leading-relaxed">{feature.description}</p>


                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Stats section */}
                        <motion.div
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            variants={fadeIn}
                            custom={features.length + 1}
                            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
                        >
                            <div className="p-6 bg-blue-800/90 rounded-xl border border-blue-700 hover:bg-blue-800 transition-all duration-300">
                                <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
                                <div className="text-blue-100">Academic Success</div>
                            </div>
                            <div className="p-6 bg-blue-800/90 rounded-xl border border-blue-700 hover:bg-blue-800 transition-all duration-300">
                                <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                                <div className="text-blue-100">Safe Environment</div>
                            </div>
                            <div className="p-6 bg-blue-800/90 rounded-xl border border-blue-700 hover:bg-blue-800 transition-all duration-300">
                                <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
                                <div className="text-blue-100">Programs</div>
                            </div>
                            <div className="p-6 bg-blue-800/90 rounded-xl border border-blue-700 hover:bg-blue-800 transition-all duration-300">
                                <div className="text-4xl font-bold text-yellow-400 mb-2">15:1</div>
                                <div className="text-blue-100">Student-Teacher Ratio</div>
                            </div>
                        </motion.div>
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
                                        Established with a vision to transform girl-child's education in South Sudan,
                                        Amonto Girls Academy has grown from humble beginnings to become a nationally
                                        recognized institution of excellence.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="bg-purple-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                                                <span className="text-white text-sm">1</span>
                                            </div>
                                            <p className="text-white/80">Founded with a mission to empower young girls through education</p>
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
                            {/*
                        <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Get Admission
                        </button>
                        <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Schedule Visit
                        </button>*/}
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

                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}