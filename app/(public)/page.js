export default function Home() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">
          Welcome to Amonto Girls Academy
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          We build for the future
        </p>
        <img
          src="/images/banner.jpg"
          alt="School Banner"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    );
  }