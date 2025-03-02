export default function Academics() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/gallery/image (1).jpg')" }}
    >
      {/* Overlay with blur */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md"></div>

      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 text-center drop-shadow-2xl animate-fade-in">
          Academics
        </h1>

        {/* Introduction Section */}
        <div className="bg-white/20 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto backdrop-blur-xl border border-white/30 transition-all duration-500 hover:scale-105 hover:bg-white/30">
          <h2 className="text-3xl text-white sm:text-4xl font-bold text-accent mb-6">
            Excellence in Academics
          </h2>
          <p className="text-lg leading-relaxed font-light mb-6">
            At Amonto Girls Academy, we pride ourselves on being a leader in academic excellence. Our students consistently
            outperform national averages, and our school has been recognized as the <span className="font-semibold">best girls' boarding school in the country</span>.
          </p>
          <p className="text-lg leading-relaxed font-light mb-6">
            Our rigorous curriculum, dedicated faculty, and state-of-the-art facilities ensure that every student reaches
            her full potential.
          </p>
        </div>

        {/* Academic Achievements Section */}
        <div className="mt-12 bg-white/20 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto backdrop-blur-xl border border-white/30 transition-all duration-500 hover:scale-105 hover:bg-white/30">
          <h2 className="text-3xl text-white sm:text-4xl font-bold text-accent mb-6">
            Academic Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🏆",
                title: "National Recognition",
                description: "Ranked as the best girls' boarding school in the country for five consecutive years.",
              },
              {
                icon: "📈",
                title: "Top Exam Results",
                description: "Consistently achieving the highest pass rates in national exams.",
              },
              {
                icon: "🧪",
                title: "Science Contests",
                description: "Winners of national and regional science competitions for three years running.",
              },
              {
                icon: "💻",
                title: "Tech Girls",
                description: "Our students excel in computer science and technology competitions.",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span>{achievement.icon}</span>
                  {achievement.title}
                </h3>
                <p className="mt-2 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Competitions and Debates Section */}
        <div className="mt-12 bg-white/20 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto backdrop-blur-xl border border-white/30 transition-all duration-500 hover:scale-105 hover:bg-white/30">
          <h2 className="text-3xl text-white sm:text-4xl font-bold text-accent mb-6">
            Competitions and Debates
          </h2>
          <p className="text-lg leading-relaxed font-light mb-6">
            Our students actively participate in and excel at national and regional competitions, including:
          </p>
          <ul className="list-none space-y-4 text-left text-lg leading-relaxed ml-8">
            {[
              "National Science and Technology Fairs",
              "Regional Debate Championships",
              "Mathematics Olympiads",
              "Computer Programming Contests",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-4 h-4 bg-accent rounded-full flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Success Stories Section */}
        <div className="mt-12 bg-white/20 text-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto backdrop-blur-xl border border-white/30 transition-all duration-500 hover:scale-105 hover:bg-white/30">
          <h2 className="text-3xl text-white sm:text-4xl font-bold text-accent mb-6">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                name: "Mary Akech",
                achievement: "Won 1st place in the National Science Fair 2023.",
                image: "/gallery/image (20).jpg",
              },
              {
                name: "Sarah Lual",
                achievement: "Led the debate team to victory in the Regional Championships.",
                image: "/gallery/image (21).jpg",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold">{story.name}</h3>
                <p className="mt-2 text-sm">{story.achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="/admissions"
            className="inline-block px-10 py-4 bg-gradient-to-r from-accent to-accent-dark text-white text-lg font-semibold rounded-full shadow-lg hover:opacity-90 transition-transform duration-300 transform hover:scale-105"
            aria-label="Join Us"
          >
            Join Us and Excel
          </a>
        </div>
      </div>
    </div>
  );
}