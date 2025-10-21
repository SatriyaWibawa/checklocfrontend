import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function VillaLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/assets/villa.jpg',
      title: 'VILLA'
    },
    {
      image: '/assets/hotel.jpg',
      title: 'HOTEL'
    },
    {
      image: 'assets/tanah.jpg',
      title: 'TANAH'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-lg px-6 py-3 flex items-center gap-4">
            <div className="text-2xl">🏠</div>
            <input
              type="text"
              placeholder="Search properties..."
              className="flex-1 bg-transparent outline-none text-gray-700"
            />
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              {slides[currentSlide].title}
            </h1>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-xl">
              <p className="text-white/90 text-lg leading-relaxed">
                Selamatkan kehidupan Anda dengan gaya hidup mewah yang tak terlupakan. Villa modern dengan pemandangan spektakuler dan fasilitas kelas dunia.
              </p>
              <button className="mt-6 bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                Explore More
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-white'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 -mt-32 px-8 md:px-16 lg:px-24 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🏊', label: 'Infinity Pool', desc: 'Private pool' },
              { icon: '🌴', label: 'Garden View', desc: 'Tropical garden' },
              { icon: '🏡', label: 'Modern Design', desc: 'Contemporary' },
              { icon: '⭐', label: 'Luxury', desc: 'Premium quality' }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-white text-lg mb-1">{feature.label}</h3>
                <p className="text-white/80 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}