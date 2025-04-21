import React from 'react';
import { Link } from 'react-router-dom';
import { Plane as Plant, Droplets, Leaf, BarChart3, MessageSquare } from 'lucide-react';
import Chatbot from '../components/Chatbot.jsx';
import { SignInButton } from '@clerk/clerk-react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-400 py-20">
  <div className="absolute inset-0 bg-[url('https://thumbs.dreamstime.com/b/field-background-sunset-5799461.jpg')] bg-cover opacity-20"></div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="max-w-3xl relative">
      {/* Flex container to align heading and translate dropdown properly */}
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-5xl font-bold text-white">
          Optimize Your Crop Yield with Precision Fertilization
        </h1>

        {/* Google Translate Component properly aligned */}
        <div className="ml-auto flex items-center">
          <div id="google_translate_element" className="bg-white p-1 rounded-md shadow-md"></div>
        </div>
      </div>

      <p className="text-xl text-white mt-4">
        Get personalized fertilizer recommendations based on soil composition and crop requirements to maximize productivity and sustainability.
      </p>

      <SignInButton forceRedirectUrl="/dashboard">
        <button className="mt-6 bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center transition-colors duration-300">
          Get Started
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </SignInButton>
    </div>
  </div>
</section>




      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Our Fertilizer Recommendation System?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Plant className="text-green-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Crop-Specific Analysis</h3>
              <p className="text-gray-600">Tailored recommendations based on the specific needs of your crop variety.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Droplets className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Soil Nutrient Optimization</h3>
              <p className="text-gray-600">Precise N-P-K recommendations to balance your soil's nutrient profile.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Leaf className="text-yellow-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Sustainable Farming</h3>
              <p className="text-gray-600">Reduce environmental impact with optimized fertilizer application.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="text-purple-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Yield Improvement</h3>
              <p className="text-gray-600">Increase productivity and profitability with data-driven recommendations.</p>
            </div>
          </div>
        </div>
        
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-100 rounded">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Input Soil Data</h3>
              <p className="text-gray-600">Enter your soil's N, P, K values and select your target crop.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Get Recommendations</h3>
              <p className="text-gray-600">Our system analyzes your data and provides optimal fertilizer recommendations.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Apply & Thrive</h3>
              <p className="text-gray-600">Implement the recommendations and watch your crops flourish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet FertiliBot - Your Farming Assistant</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get instant answers to your farming questions with our AI-powered chatbot. FertiliBot provides expert advice on:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </span>
                    <span className="text-gray-700">Crop-specific fertilizer requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </span>
                    <span className="text-gray-700">Soil health and nutrient management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </span>
                    <span className="text-gray-700">Sustainable farming practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <Leaf className="h-4 w-4 text-green-600" />
                    </span>
                    <span className="text-gray-700">Troubleshooting common crop issues</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-6">
                  Click the chat icon in the bottom right corner to start a conversation with FertiliBot!
                </p>
              </div>
              <div className="bg-gray-200 rounded-xl p-6 shadow-lg">
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                  <div className="flex items-start mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="bg-gray-200 rounded-lg p-3 text-gray-700">
                      Hello! I'm FertiliBot. How can I help with your farming needs today?
                    </div>
                  </div>
                  <div className="flex justify-end mb-4">
                    <div className="bg-green-600 rounded-lg p-3 text-white max-w-[80%]">
                      What fertilizer is best for rice crops?
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-gray-700">
                      Rice typically requires 100-120 kg/ha of nitrogen, 20-30 kg/ha of phosphorus, and 30-60 kg/ha of potassium. For best results, apply nitrogen in 3 split doses: at planting, tillering, and panicle initiation stages.
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Chat with FertiliBot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Fertilizer Usage?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of farmers who have improved their crop yield and reduced costs with our recommendation system.</p>
          <Link to="/dashboard" className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center transition-colors duration-300">
            Go to Dashboard
          </Link>
        </div>
      </section>

      {/* Chatbot Component */}
      <Chatbot />
      <Footer/>
    </div>
  );
};

export default HomePage;