import React, { useEffect, useState } from 'react';
import { ChefHat, Sparkles, Calendar, Clock, Shield, Heart, Star, Users, Smartphone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_cf5884b0-6cc6-42b4-b863-35f98b8ffb31/artifacts/rn9a0bc7_WhatsApp%20Image%202026-02-11%20at%2017.09.43.jpeg" 
              alt="Tiffsy Logo" 
              className="h-12 w-12 object-contain rounded-lg"
            />
            <span className="text-2xl font-bold text-orange-600">Tiffsy</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors duration-300">Home</a>
            <a href="#transparency" className="text-gray-700 hover:text-orange-600 transition-colors duration-300">Our Kitchen</a>
            <a href="#vouchers" className="text-gray-700 hover:text-orange-600 transition-colors duration-300">Vouchers</a>
            <a href="#why-us" className="text-gray-700 hover:text-orange-600 transition-colors duration-300">Why Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-600 transition-colors duration-300">Reviews</a>
          </nav>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6">
            Download App
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                Homely Meals, Delivered Fresh
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hygienic, Homely Food
                <span className="block text-orange-600">Delivered to Your Door</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the taste of home-cooked meals with complete kitchen transparency, 
                flexible ordering, and unmatched hygiene standards.
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <div className="text-3xl">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                      <path d="M17.523 15.341c-.46.828-1.006 1.506-1.64 2.033-.634.526-1.335.79-2.102.79-.634 0-1.417-.211-2.35-.634-.933-.422-1.716-.634-2.35-.634-.634 0-1.43.225-2.39.674-.96.45-1.704.674-2.233.674-.767 0-1.506-.285-2.218-.855C1.63 17.72 1.06 16.99.604 16.12.148 15.25-.1 14.327-.1 13.352c0-1.097.268-2.073.804-2.928.535-.855 1.257-1.283 2.165-1.283.634 0 1.47.232 2.508.697 1.037.464 1.743.697 2.117.697.316 0 1.022-.26 2.117-.777 1.095-.518 2.01-.777 2.742-.777.952 0 1.787.287 2.505.86.718.574 1.204 1.336 1.458 2.285-.895.542-1.59 1.204-2.087 1.985-.496.781-.744 1.638-.744 2.57 0 1.038.29 1.965.87 2.78zM14.457 1.19c0 .739-.232 1.478-.697 2.218-.464.739-1.12 1.336-1.966 1.742-.08-.26-.12-.542-.12-.846 0-.739.26-1.478.777-2.218C12.97 1.346 13.64.764 14.485.37c.08.26.12.542.12.82z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </button>
                
                <button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <div className="text-3xl">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-orange-600">10k+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">50k+</div>
                  <div className="text-sm text-gray-600">Meals Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">4.8</div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Star className="w-4 h-4 fill-orange-500 text-orange-500 mr-1" />
                    Rating
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-orange-200 rounded-3xl blur-3xl opacity-30 animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1742281258189-3b933879867a" 
                alt="Delicious Thali" 
                className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <ChefHat className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Hygienic</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Transparency Section */}
      <section id="transparency" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Complete Transparency
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              See Your Food Being Prepared
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in complete transparency. Watch our kitchen in action through our in-app feed, 
              where we share daily photos and videos of our hygienic food preparation process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in-left">
              <img 
                src="https://images.unsplash.com/photo-1589109807644-924edf14ee09" 
                alt="Transparent Kitchen" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Live Updates</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-right">
              <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <Sparkles className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Daily Kitchen Feed</h3>
                      <p className="text-gray-600">
                        Get daily updates with photos and videos of our kitchen operations. 
                        See the cleanliness, ingredient quality, and cooking process in real-time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <Shield className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Hygiene First</h3>
                      <p className="text-gray-600">
                        Our kitchen maintains the highest hygiene standards with regular sanitization, 
                        quality checks, and trained staff following strict protocols.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Engage with Us</h3>
                      <p className="text-gray-600">
                        Connect directly with our kitchen managers and founders. 
                        Ask questions, give feedback, and be part of our food journey.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Voucher Packs Section */}
      <section id="vouchers" className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Save More, Eat Better
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Flexible Voucher Packs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our variety of voucher packs and enjoy discounted meal prices 
              with complete flexibility to pause, skip, or schedule your meals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-100 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 transform">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Daily Meal Plans</h3>
                <p className="text-gray-600 mb-6">
                  Get lunch, dinner, or both delivered daily. Perfect for those who want hassle-free daily meals with discounted pricing.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Lunch only or Dinner only
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Both meals option
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Daily variety menu
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-300 hover:border-orange-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 transform bg-orange-50">
              <CardContent className="p-8">
                <div className="bg-orange-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-orange-700" />
                </div>
                <div className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Weekday/Weekend Packs</h3>
                <p className="text-gray-600 mb-6">
                  Choose weekday meals for working professionals or weekend packs for family time. Ultimate flexibility for your lifestyle.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    Monday to Friday packs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    Saturday & Sunday specials
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                    Mix and match options
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl hover:scale-105 transform">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Flexibility</h3>
                <p className="text-gray-600 mb-6">
                  Pause, skip, or schedule meals as per your convenience. Enable auto-order for seamless daily delivery.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Pause anytime
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Skip specific days
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Auto-order switch
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block border-2 border-orange-200 bg-white">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  <span className="font-bold text-orange-600">No voucher?</span> No problem! 
                  Order individual meals anytime at regular prices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Tiffsy Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              The Tiffsy Difference
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Tiffsy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another food delivery service. We're bringing the warmth of 
              home-cooked meals with professional quality and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Homely Taste</h3>
                <p className="text-gray-600 text-lg">
                  Experience authentic home-style cooking with daily variety in vegetables and dishes. 
                  Every meal tastes like it's made by your own family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Superior Hygiene</h3>
                <p className="text-gray-600 text-lg">
                  Strict hygiene protocols, quality ingredients, and transparent kitchen operations. 
                  Your health and safety are our top priority.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Better Quality</h3>
                <p className="text-gray-600 text-lg">
                  Premium ingredients, perfect spicing, and careful preparation. 
                  We don't compromise on taste or quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Reliable Delivery</h3>
                <p className="text-gray-600 text-lg">
                  On-time delivery, every time. Hot, fresh meals delivered right to your doorstep 
                  when you need them.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              <div className="relative animate-fade-in-left">
                <img 
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe" 
                  alt="Variety of Food" 
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="text-left space-y-6 animate-fade-in-right">
                <h3 className="text-3xl font-bold text-gray-900">
                  Less Hassle, More Delight
                </h3>
                <p className="text-lg text-gray-600">
                  Forget the daily stress of ordering food. With our auto-order feature and flexible 
                  scheduling, your meals arrive automatically. Focus on what matters while we take 
                  care of your daily nutrition.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-orange-200 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-orange-300 border-2 border-white"></div>
                    <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white"></div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Join <span className="font-bold text-orange-600">10,000+</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Customer Love
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our happy customers have to say about Tiffsy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The food quality is exceptional! It truly feels like home-cooked meals. 
                  The transparency feature where I can see the kitchen is amazing. Highly recommended!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-orange-200"></div>
                  <div>
                    <div className="font-bold text-gray-900">Priya Sharma</div>
                    <div className="text-sm text-gray-600">Working Professional</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The voucher system is so convenient! I love the flexibility to pause or skip meals. 
                  The auto-order feature saves me so much time every day."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-orange-200"></div>
                  <div>
                    <div className="font-bold text-gray-900">Rahul Verma</div>
                    <div className="text-sm text-gray-600">Software Engineer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Best food delivery service I've used! The hygiene standards are impressive, 
                  and the variety keeps me excited for every meal. Worth every rupee!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-orange-200"></div>
                  <div>
                    <div className="font-bold text-gray-900">Anjali Patel</div>
                    <div className="text-sm text-gray-600">Student</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <img 
              src="https://images.unsplash.com/photo-1588123190131-1c3fac394f4b" 
              alt="Happy Customer" 
              className="w-64 h-64 object-cover rounded-full mx-auto shadow-2xl border-8 border-orange-100"
            />
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Tiffsy?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Download our app now and get your first meal at a special discount. 
            Join thousands of happy customers enjoying homely, hygienic meals every day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-6 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="text-3xl">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M17.523 15.341c-.46.828-1.006 1.506-1.64 2.033-.634.526-1.335.79-2.102.79-.634 0-1.417-.211-2.35-.634-.933-.422-1.716-.634-2.35-.634-.634 0-1.43.225-2.39.674-.96.45-1.704.674-2.233.674-.767 0-1.506-.285-2.218-.855C1.63 17.72 1.06 16.99.604 16.12.148 15.25-.1 14.327-.1 13.352c0-1.097.268-2.073.804-2.928.535-.855 1.257-1.283 2.165-1.283.634 0 1.47.232 2.508.697 1.037.464 1.743.697 2.117.697.316 0 1.022-.26 2.117-.777 1.095-.518 2.01-.777 2.742-.777.952 0 1.787.287 2.505.86.718.574 1.204 1.336 1.458 2.285-.895.542-1.59 1.204-2.087 1.985-.496.781-.744 1.638-.744 2.57 0 1.038.29 1.965.87 2.78zM14.457 1.19c0 .739-.232 1.478-.697 2.218-.464.739-1.12 1.336-1.966 1.742-.08-.26-.12-.542-.12-.846 0-.739.26-1.478.777-2.218C12.97 1.346 13.64.764 14.485.37c.08.26.12.542.12.82z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </button>
            
            <button className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-6 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <div className="text-3xl">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_cf5884b0-6cc6-42b4-b863-35f98b8ffb31/artifacts/rn9a0bc7_WhatsApp%20Image%202026-02-11%20at%2017.09.43.jpeg" 
                  alt="Tiffsy Logo" 
                  className="h-10 w-10 object-contain rounded-lg"
                />
                <span className="text-2xl font-bold text-orange-500">Tiffsy</span>
              </div>
              <p className="text-gray-400 text-sm">
                Bringing the warmth of home-cooked meals to your doorstep with transparency, 
                quality, and care.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
                <li><a href="#transparency" className="text-gray-400 hover:text-orange-500 transition-colors">Our Kitchen</a></li>
                <li><a href="#vouchers" className="text-gray-400 hover:text-orange-500 transition-colors">Vouchers</a></li>
                <li><a href="#why-us" className="text-gray-400 hover:text-orange-500 transition-colors">Why Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">
                  Email us at:
                </p>
                <a href="mailto:support@tiffsy.com" className="text-orange-500 hover:text-orange-400 transition-colors font-semibold">
                  support@tiffsy.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Tiffsy. All rights reserved. Made with <span className="text-red-500">❤</span> for food lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
