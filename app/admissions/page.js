export default function Admissions() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/gallery/image (15).jpg')" }}
    >
      {/* Overlay with reduced blur */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 py-24 relative z-10 text-center">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-10 text-white drop-shadow-2xl tracking-wide animate-fade-in">
          Admissions
        </h1>

        {/* Admission Process */}
        <div className="bg-white/10 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto backdrop-blur-lg border border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/20">
          <h2 className="text-4xl text-white sm:text-5xl font-bold text-accent mb-6">Join Our Academy</h2>
          <p className="text-lg leading-relaxed font-light mb-6 tracking-wide">
            At Amonto Girls Academy, we welcome bright and ambitious students eager to embrace excellence. Follow our simple steps to apply:
          </p>
          <ul className="list-none space-y-4 text-left text-lg leading-relaxed ml-8">
            {[
              "Complete the online application form.",
              "Submit previous academic records.",
              "Attend an entrance interview.",
              "Receive your admission confirmation.",
            ].map((step, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-4 h-4 bg-accent rounded-full flex-shrink-0 animate-pulse"></span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Showcase */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-slide-up">
          {[10, 11, 12].map((num) => (
            <div
              key={num}
              className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              <img
                src={`/gallery/image (${num}).jpg`}
                alt="Amonto Girls Academy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xl font-semibold animate-bounce">Empowering Girls</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-white/10 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto backdrop-blur-lg border border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/20">
          <h2 className="text-4xl text-white sm:text-5xl font-bold text-accent mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🏫",
                title: "Elite Learning",
                description: "A premier institution fostering academic excellence.",
              },
              {
                icon: "👩‍🏫",
                title: "Expert Educators",
                description: "Highly experienced teachers passionate about education.",
              },
              {
                icon: "🌍",
                title: "Global Perspective",
                description: "A curriculum that prepares students for international success.",
              },
              {
                icon: "🎓",
                title: "Scholarship Opportunities",
                description: "Financial aid available for outstanding students.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-white">{feature.title}</span>
                </h3>
                <p className="mt-2 text-sm text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 bg-white/10 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto backdrop-blur-lg border border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/20">
          <h2 className="text-4xl text-white sm:text-5xl font-bold text-accent mb-6">What Our Students Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                name: "Sarah Johnson",
                quote: "Amonto Girls Academy has transformed my life. The teachers are incredibly supportive, and the environment is inspiring.",
              },
              {
                name: "Emily Davis",
                quote: "The global perspective I gained here has prepared me for success in international universities.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                <p className="text-lg italic text-gray-200">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-accent">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-accent to-accent-dark text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-transform duration-300 transform hover:scale-105"
            aria-label="Apply Now"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}