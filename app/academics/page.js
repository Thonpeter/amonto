"use client";

import React, { useState, useEffect } from "react";

export default function Academics() {
  // State for testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    { name: "Mary Akech", achievement: "Won 1st place in the National Science Fair 2024.", image: "/gallery/image (20).jpg", quote: "The academy gave me the confidence to pursue my passion for science." },
    { name: "Sarah Lual", achievement: "Led the debate team to victory in the Regional Championships.", image: "/gallery/image (21).jpg", quote: "Learning to articulate my ideas has transformed my academic journey." },
    { name: "Grace Auma", achievement: "Accepted to join one of the top Universities with a full scholarship.", image: "/gallery/image (22).jpg", quote: "The rigorous academic program prepared me for success at university level." }
  ];

  // Stats counter animation
  const stats = [
    { label: "National Awards", value: 5, target: 5 }, // Hardcoded value
    { label: "Academic Excellence", value: 85, target: 85 }, // Hardcoded value
    { label: "Scholarships Received", value: 100, target: 100 }, // Hardcoded value
    { label: "University Acceptance Rate", value: 98, target: 98 } // Hardcoded value
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div 
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/gallery/image (30).jpg')" }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main Title with animation */}
        <div className="text-center mb-16 pt-24">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-xl tracking-wide animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Academic</span> Excellence
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 mb-8"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Nurturing young minds through innovative teaching and a comprehensive curriculum that prepares students for global challenges.
          </p>
        </div>

        {/* Stats Counter Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 px-6 sm:px-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}{stat.label === "Academic Excellence" || stat.label === "University Acceptance Rate" ? "%" : ""}
              </div>
              <div className="text-sm sm:text-base text-blue-200 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Introduction Section */}
        <div className="mt-12 bg-indigo-900/90 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto backdrop-blur-lg border border-indigo-500/30 transition-all duration-500 hover:bg-indigo-800/90">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-200 mb-6">Our Academic Approach</h2>
          <p className="text-lg leading-relaxed">
            At Amonto Girls Academy, we nurture academic excellence through our innovative curriculum and dedicated teaching methods. 
            Our holistic approach to education ensures that students develop critical thinking skills alongside subject mastery.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-500/30 rounded-full mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
              <p className="text-center text-sm">Balancing humanities, sciences, and arts for well-rounded education</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-500/30 rounded-full mb-4">
                <span className="text-2xl">👩‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-center text-sm">Experienced teachers committed to student success</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl">
              <div className="w-16 h-16 flex items-center justify-center bg-pink-500/30 rounded-full mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-center text-sm">Tailored approaches to meet individual student needs</p>
            </div>
          </div>
        </div>

        {/* Academic Achievements Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 sm:px-12">
          {[
            { icon: "🏆", title: "Top Rankings", description: "Recognized as the best girls' boarding school nationally for five consecutive years.", color: "bg-blue-800/90" },
            { icon: "📈", title: "High Pass Rates", description: "98% of our students achieve distinction in national examinations.", color: "bg-purple-800/90" },
            { icon: "🧪", title: "Science Champions", description: "Winners of national and international science competitions and Olympiads.", color: "bg-pink-800/90" },
            { icon: "💻", title: "Tech Innovators", description: "Leading in computer science education with award-winning student projects.", color: "bg-indigo-800/90" },
          ].map((achievement, index) => (
            <div
              key={index}
              className={`p-6 ${achievement.color} rounded-xl shadow-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{achievement.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{achievement.title}</h3>
              <p className="text-white/80">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Curriculum Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/90 to-indigo-900/90 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto border border-blue-500/30">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-200 mb-8">Our Curriculum</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center mr-3">1</span>
                Core Subjects
              </h3>
              <ul className="space-y-3 pl-11">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Mathematics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Physics, Chemistry & Biology
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  English
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Citizenship
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center mr-3">2</span>
                Electives & Specializations
              </h3>
              <ul className="space-y-3 pl-11">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Computer Science
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Literature
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Additional Maths
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Agriculture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Accounting
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/10 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">National and Global Curriculum</h3>
            <p>Our curriculum is fully aligned with the South Sudan National Curriculum,
             ensuring that students meet all local educational standards while also being prepared for global opportunities. 
             We emphasize critical thinking, problem-solving, and leadership skills, equipping our students to excel in both national examinations and international academic environments. 
             By combining the best of South Sudan's educational framework with globally relevant skills, 
             we prepare our students to contribute meaningfully to their communities and the world.</p>
          </div>
        </div>

        {/* Competitions and Activities Section */}
        <div className="mt-16 bg-purple-900/90 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto border border-purple-500/30 transition-all duration-500 hover:bg-purple-800/90">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-200 mb-6">Academic Competitions & Activities</h2>
          <p className="text-lg font-light mb-8">
            We encourage our students to participate in various competitions to showcase their talents and gain real-world experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Science & Technology", 
                events: [
                  "South Sudan National Science Fair",
                  "East African Science and Innovation Competitions",
                  "STEM Workshops and Hackathons"
                ],
                icon: "🔬"
              },
              {
                category: "Mathematics", 
                events: [
                  "South Sudan Mathematics Olympiad",
                  "East African Mathematics Challenge",
                  "National Mathematics Quiz Competitions"
                ],
                icon: "🧮"
              },
              {
                category: "Language & Humanities", 
                events: [
                  "South Sudan National Debate Championships",
                  "East African Model United Nations",
                  "Creative Writing and Essay Competitions"
                ],
                icon: "🎭"
              },
              {
                category: "Innovation", 
                events: [
                  "South Sudan Innovation and Technology Expo",
                  "Youth Entrepreneurship Challenges",
                  "Community Problem-Solving Competitions"
                ],
                icon: "💡"
              }
          
            ].map((category, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 flex items-center justify-center bg-purple-500/40 rounded-full text-xl">
                    {category.icon}
                  </span>
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.events.map((event, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-3 h-3 bg-purple-400 rounded-full flex-shrink-0 animate-pulse"></span>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories - Testimonial Carousel */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Student Success Stories</h2>
          
          <div className="relative bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-3xl p-8 sm:p-12 shadow-2xl border border-indigo-500/30 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-full -ml-12 -mb-12"></div>
            
            {/* Testimonial content */}
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl transform rotate-6"></div>
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name} 
                    className="w-full h-64 md:h-80 object-cover rounded-2xl relative z-10 shadow-xl"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="text-3xl text-purple-200 mb-6">"</div>
                <p className="text-xl italic text-white/90 mb-6">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="mb-6 text-right">
                  <div className="text-2xl font-bold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-purple-200">{testimonials[currentTestimonial].achievement}</div>
                </div>
                
                {/* Navigation dots */}
                <div className="flex justify-center gap-3 mt-8">
                  {testimonials.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-blue-500 w-8' : 'bg-white/50'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Resources Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 sm:px-12">
        
        {/* Modern Library Project */}
        <div className="bg-blue-900/90 rounded-2xl p-8 shadow-xl border border-blue-500/30 transform transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mb-6 text-2xl">📚</div>
          <h3 className="text-2xl font-bold text-white mb-4">Modern Library Project</h3>
          <p className="text-white/80 mb-6">
            We are currently building a state-of-the-art library that will provide access to over 20,000 books, digital resources, and academic journals. This project is underway and will soon offer students a world-class space for research and learning.
          </p>
          <a href="/library" className="inline-block py-2 px-4 bg-blue-600/70 hover:bg-blue-500/70 rounded-lg text-white font-medium transition-colors duration-300">Track Progress</a>
        </div>
        
        {/* Science Labs Upgrade */}
        <div className="bg-purple-900/90 rounded-2xl p-8 shadow-xl border border-purple-500/30 transform transition-all duration-300 hover:scale-105">
          <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mb-6 text-2xl">🧪</div>
          <h3 className="text-2xl font-bold text-white mb-4">Science Labs Upgrade</h3>
          <p className="text-white/80 mb-6">
            Our science labs are undergoing a major upgrade to include state-of-the-art equipment for physics, chemistry, and biology. This project is being implemented and will soon provide students with cutting-edge facilities for hands-on learning.
          </p>
          <a href="/facilities" className="inline-block py-2 px-4 bg-purple-600/70 hover:bg-purple-500/70 rounded-lg text-white font-medium transition-colors duration-300">View Updates</a>
        </div>
  
  {/* Technology Center Development */}
  <div className="bg-indigo-900/90 rounded-2xl p-8 shadow-xl border border-indigo-500/30 transform transition-all duration-300 hover:scale-105">
    <div className="w-16 h-16 bg-indigo-500/30 rounded-full flex items-center justify-center mb-6 text-2xl">💻</div>
    <h3 className="text-2xl font-bold text-white mb-4">Technology Center Development</h3>
    <p className="text-white/80 mb-6">
      A new technology center is under construction, featuring computer labs with the latest software and hardware. This project is progressing rapidly and will soon support coding, digital design, and multimedia production for our students.
    </p>
    <a href="/tech-center" className="inline-block py-2 px-4 bg-indigo-600/70 hover:bg-indigo-500/70 rounded-lg text-white font-medium transition-colors duration-300">Learn More</a>
  </div>
</div>

        {/* Call to Action */}
        <div className="mt-20 text-center pb-24">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Academic Community?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how Amonto Girls Academy can help your daughter achieve academic excellence and prepare for a bright future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              aria-label="Apply Now"
            >
              <span>Apply Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="/virtual-tour"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-white/20 transition-all duration-300"
              aria-label="Schedule a Visit"
            >
           
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}