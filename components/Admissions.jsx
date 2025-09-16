"use client";

import React, { useState, useEffect } from "react";

export default function Admissions() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        currentGrade: '',
        interestedProgram: ''
    });

    const facilities = [
        {
            name: "Modern Library",
            description: "Fully stocked library with digital resources and quiet study areas",
            image: "/facilities/library.webp",
            icon: "📚"
        },
        {
            name: "Swimming Pool",
            description: "Olympic-sized pool for recreation and competitive training",
            image: "/facilities/pool2.jpg",
            icon: "🏊‍♀️"
        },
        {
            name: "Air-Conditioned Classes",
            description: "Modern classrooms equipped with cooling systems and digital boards",
            image: "/facilities/classroom.jpg",
            icon: "🏫"
        },
        {
            name: "Medical Clinic",
            description: "24/7 medical care with qualified nurses and doctor visits",
            image: "/facilities/clinic.jpg",
            icon: "🏥"
        },
        {
            name: "Sports Complex",
            description: "Basketball, volleyball, and tennis courts for athletic development",
            image: "/facilities/sport2.jpg",
            icon: "🏀"
        },
        {
            name: "Science Laboratories",
            description: "Fully equipped labs for physics, chemistry, and biology",
            image: "/facilities/lab.webp",
            icon: "🔬"
        }
    ];

    const successStories = [
        {
            name: "Diing Deborah Majok",
            achievement: "5th Nationally in CSE (90%)",
            image: "/facilities/diing.jpg",
            quote: "Amonto transformed me from a little girl to a national champion"
        },
        {
            name: "Agok Agol Malaak",
            achievement: "National Mathematics Olympiad Winner",
            image: "/gallery/image (21).jpg",
            quote: "The quality education here opened doors I never imagined possible"
        },
        {
            name: "Abut Abuoch Ayuel",
            achievement: "International Mathematics Contest Top 3",
            image: "/facilities/abut.jpg",
            quote: "From Amonto to international recognition - dreams do come true"
        }
    ];

    const admissionSteps = [
        {
            number: "01",
            title: "Initial Inquiry & Tour",
            description: "Contact us to schedule a personalized campus tour to experience our facilities firsthand",
            icon: "🏫",
            image: "facilities/initial.jpg"
        },
        {
            number: "02",
            title: "Application Submission",
            description: "Complete our application form and submit required documents",
            icon: "📋",
            image: "facilities/form.jpg"
        },
        {
            number: "03",
            title: "Assessment & Interview",
            description: "Student assessment and family interview with our admissions team",
            icon: "✍",
            image: "facilities/asses.jpg"
        },
        {
            number: "04",
            title: "Enrollment & Orientation",
            description: "Complete enrollment and attend new student orientation",
            icon: "🎉",
            image: "facilities/welcome.jpg"
        }
    ];

    const programs = [
        {
            title: "Form 1-2 Foundation Program",
            description: "Building strong academic foundations with personalized attention",
            features: ["Core subject mastery", "Study skills development", "Technology integration", "Leadership foundation"],
            benefits: "Experience learning in our state-of-the-art classrooms and labs",
            image: "facilities/program1.jpg"
        },
        {
            title: "Form 3-4 Excellence Program",
            description: "Advanced preparation for national examinations and university",
            features: ["Intensive CSE preparation", "University counseling", "Research projects", "Career guidance"],
            benefits: "Utilize our advanced facilities for optimal exam preparation",
            image: "facilities/program3.jpg"
        },
        {
            title: "Boarding Program",
            description: "Complete residential experience with comprehensive support",
            features: ["24/7 supervision", "Nutritious meals", "Evening tutorials", "Weekend activities"],
            benefits: "Live and learn in our secure, modern campus environment",
            image: "facilities/boarding.jpg"
        }
    ];

    const whyChooseUs = [
        {
            icon: "🏆",
            title: "Nationally Recognized Excellence",
            description: "Ranked 10th nationally and 5th in 2024 CSE results",
            highlight: "Top 10 School",
            image: "/facilities/diing2.jpg"
        },
        {
            icon: "👑",
            title: "Best Girls' Boarding School",
            description: "Officially recognized as the best girls' boarding school in Juba",
            highlight: "#1 in Juba",
            image: "/facilities/safe.jpg"
        },
        {
            icon: "🌟",
            title: "Championship Students",
            description: "Home to national champions in mathematics, arts, and sciences",
            highlight: "National Winners",
            image: "/facilities/winner.jpg"
        },
        {
            icon: "🎓",
            title: "University Preparation",
            description: "98% university acceptance rate with scholarship opportunities",
            highlight: "98% Success Rate",
            image: "/facilities/univerity.jpg"
        },
        {
            icon: "🏡",
            title: "Safe Learning Environment",
            description: "Secure, nurturing boarding facilities with 24/7 supervision",
            highlight: "100% Safe",
            image: "/facilities/safe2.jpg"
        },
        {
            icon: "💡",
            title: "Modern Facilities",
            description: "State-of-the-art labs, library, and technology centers",
            highlight: "World-Class",
            image: "/facilities/modern.jpg"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % successStories.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [successStories.length]);

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert("Thank you for your interest! We will contact you soon.");
    };

    return (
        <section id="admissions" className="min-h-screen">
            {/* Hero Section */}
            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/gallery/image (15).jpg')" }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

                <div className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
                    <div className="text-center mb-16">
                        <h1 className="text-6xl sm:text-8xl font-extrabold text-white mb-8 animate-fade-in">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-200 to-orange-300">
                                Your Journey Starts Here
                            </span>
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
                        <p className="text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                            Join South Sudan's premier girls' academy with state-of-the-art facilities and year-round admissions
                        </p>

                        {/* Quick Facts */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30">
                                <div className="text-4xl font-bold text-yellow-300">Year-Round</div>
                                <div className="text-white/80 text-sm">Admissions Open</div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
                                <div className="text-4xl font-bold text-blue-300">S1-S4</div>
                                <div className="text-white/80 text-sm">Grades Accepting</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
                                <div className="text-4xl font-bold text-green-300">24/7</div>
                                <div className="text-white/80 text-sm">Campus Facilities</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Application CTA */}
                    <div className="text-center">
                        <p className="text-xl text-white/90 mb-8">
                            Experience our world-class facilities and transformative education
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                Get Admitted Now - We have vast facilities to accomodate
                            </button>
                            <button className="px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                                Schedule Campus Tour
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* State-of-the-Art Facilities */}
            <div className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        🏫 Our World-Class Facilities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map((facility, index) => (
                            <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                                {/* Facility Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={facility.image}
                                        alt={facility.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-2xl p-2 rounded-lg">
                                        {facility.icon}
                                    </div>
                                </div>

                                {/* Facility Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{facility.name}</h3>
                                    <p className="text-white/80">{facility.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gradient-to-r from-blue-800/30 to-purple-800/30 rounded-3xl p-8 border border-blue-500/30">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Campus Life at Amonto</h3>
                            <p className="text-white/90 mb-6 max-w-3xl mx-auto">
                                Our 15-acre campus is designed to provide a holistic education experience.
                                From modern academic buildings to recreational facilities, we've created
                                an environment where students can thrive academically, physically, and socially.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-300">15</div>
                                    <div className="text-white/80 text-sm">Acres Campus</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-300">24/7</div>
                                    <div className="text-white/80 text-sm">Security</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-300">100%</div>
                                    <div className="text-white/80 text-sm">Internet Access</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-300">5</div>
                                    <div className="text-white/80 text-sm">Science Labs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Stories Carousel with Images */}
            <div className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        🌟 Our Champions' Success Stories
                    </h2>

                    <div className="relative max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-1/3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl transform rotate-6"></div>
                                    <img
                                        src={successStories[currentSlide].image}
                                        alt={successStories[currentSlide].name}
                                        className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-xl"
                                    />
                                </div>
                            </div>

                            <div className="lg:w-2/3 text-white">
                                <div className="text-6xl text-purple-200 mb-4">"</div>
                                <p className="text-xl italic mb-6">{successStories[currentSlide].quote}</p>
                                <div className="mb-6">
                                    <div className="text-2xl font-bold">{successStories[currentSlide].name}</div>
                                    <div className="text-purple-200 text-lg">{successStories[currentSlide].achievement}</div>
                                </div>

                                <div className="flex gap-2">
                                    {successStories.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-purple-400 w-8' : 'bg-white/30'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Amonto - Competitive Advantages with Images */}
            <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-white mb-6">
                            Why Amonto Girls Academy?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            In a country where fewer than 500 girls completed high school just ten years ago,
                            Amonto is transforming lives and breaking barriers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                                {/* Why Choose Us Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-yellow-600 text-white text-2xl p-2 rounded-lg">
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="p-6 text-center">
                                    <div className="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-2">
                                        {item.highlight}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Context about South Sudan Education */}
                    <div className="mt-16 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-3xl p-8 border border-orange-500/30">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Breaking Educational Barriers</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-red-400 mb-2">
                                        Under 10%
                                    </div>
                                    <p className="text-white/80">National secondary enrollment</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                                    <p className="text-white/80">Amonto university acceptance</p>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-green-400 mb-2">10th</div>
                                    <p className="text-white/80">Our national ranking</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Academic Programs with Images */}
            <div className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        🎓 Academic Programs & Investment
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300">
                                {/* Program Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                                    <p className="text-white/80 mb-6">{program.description}</p>

                                    <div className="space-y-3 mb-6">
                                        {program.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                                <span className="text-white/90">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-white/20 pt-4">
                                        <div className="text-blue-200 font-semibold">{program.benefits}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center bg-gradient-to-r from-green-800/30 to-blue-800/30 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">💰 Scholarship Opportunities Available</h3>
                        <p className="text-white/90 mb-6">
                            We believe every deserving girl should access quality education.
                            Merit-based scholarships and payment plans available for qualified students.
                        </p>
                        <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                            Learn About Financial Aid
                        </button>
                    </div>
                </div>
            </div>

            {/* Admission Process with Images */}
            <div className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-white mb-16">
                        📝 Simple Admission Process
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {admissionSteps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-gradient-to-br from-purple-800 to-blue-800 rounded-2xl overflow-hidden border border-purple-500/30 group-hover:border-purple-400 transition-all duration-300 h-full">
                                    {/* Admission Step Image */}
                                    <div className="relative h-40 overflow-hidden">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                                        <div className="absolute top-4 right-4 bg-purple-600 text-white text-xl p-2 rounded-lg">
                                            {step.icon}
                                        </div>
                                    </div>

                                    <div className="p-6 text-center">
                                        <div className="text-purple-200 text-sm font-bold mb-2">STEP {step.number}</div>
                                        <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                        <p className="text-white/80 text-sm">{step.description}</p>
                                    </div>
                                </div>

                                {index < admissionSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-400 transform -translate-y-1/2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Final CTA */}
            <div className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Experience Excellence Firsthand
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                        Schedule a personalized campus tour to see our facilities, meet our staff, and discover why Amonto is South Sudan's premier girls' academy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Get an Admission Now!!!
                        </button>
                        <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Schedule Campus Tour
                        </button>
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-300">Year-Round</div>
                            <div className="text-white/80">Admissions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-blue-300">S1-S4</div>
                            <div className="text-white/80">Grades Accepting</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-green-300">24/7</div>
                            <div className="text-white/80">Campus Facilities</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-pink-300">98%</div>
                            <div className="text-white/80">University Acceptance</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}