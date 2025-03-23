export default function Admissions() {
  return (
    <div className="relative min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/gallery/image (15).jpg')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-12 text-center animate-fade-in">Admissions</h1>

        {/* Admission Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg">
            <h2 className="text-4xl font-bold text-accent">Join Amonto Girls Academy</h2>
            <p className="leading-relaxed">
              We welcome students from Form 1 to Form 4 throughout the year. Admission is open to all primary school graduates and transfer students. 
              Enrollment is conducted at the school premises through a simple process.
            </p>
            <div className="space-y-4">
              {[
                "Visit our school and meet the admissions office.",
                "Submit previous academic records for evaluation.",
                "Attend an orientation session with our staff.",
                "Receive your admission confirmation and start your journey!"
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="w-4 h-4 bg-accent rounded-full animate-pulse"></span>
                  <p className="tracking-wide">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Admission Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img src="/gallery/image (27).jpg" alt="Admission at Amonto Girls Academy" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Why Enroll Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl order-2 md:order-1">
            <img src="/gallery/image (30).jpg" alt="Students Learning" className="w-full h-full object-cover" />
          </div>

          {/* Text */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl font-bold text-accent">Why Choose Amonto Girls Academy?</h2>
            <p className="leading-relaxed">
              We provide a nurturing environment where girls thrive academically and personally. Our well-structured curriculum ensures that students gain knowledge and skills needed for a successful future.
            </p>
            <ul className="space-y-4">
              {[
                { icon: "📚", title: "Quality Education", desc: "A modern curriculum designed to equip students with real-world knowledge." },
                { icon: "🏫", title: "Advanced Facilities", desc: "State-of-the-art classrooms, labs, and libraries." },
                { icon: "🎓", title: "Scholarship Opportunities", desc: "Support for outstanding and deserving students." },
                { icon: "👩‍🏫", title: "Dedicated Educators", desc: "A team of highly qualified and passionate teachers." }
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-200">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Admissions Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-xl mb-6">Ready to start your journey with us? Visit our school for admissions!</p>
          <a href="/contact" className="px-10 py-4 bg-gradient-to-r from-accent to-accent-dark text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-transform duration-300 transform hover:scale-105">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
