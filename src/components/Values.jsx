import React from 'react'
import { TrendingUp, Shield, Users, Target, Eye, Rocket, Star, Award } from 'lucide-react';

function Values() {
  const values = [
    { 
      title: "Brilliance", 
      desc: "Delivering excellence through insightful, proactive accounting and advisory services.", 
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-500",
      textColor: "text-blue-600"
    },
    { 
      title: "Balance", 
      desc: "Ensuring compliance and financial stability so you can scale with confidence.", 
      icon: <Shield className="w-8 h-8" />,
      color: "from-emerald-600 to-teal-500",
      textColor: "text-emerald-600"
    },
    { 
      title: "Build", 
      desc: "Empowering businesses to grow stronger with dependable bookkeeping and expert guidance.", 
      icon: <Users className="w-8 h-8" />,
      color: "from-violet-600 to-purple-500",
      textColor: "text-violet-600"
    }
  ];

  const stats = [
    { number: "99%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "500+", label: "Businesses Served", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-50 to-purple-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200 mb-6">
            <Target className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Our Foundation
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Core <span className="bg-gradient-to-r from-cyan-600 to-secondary bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The guiding principles that shape our approach and drive our commitment to your success
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group relative bg-[#ebe5d5] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200"
            >
              {/* Hover Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className={`relative mb-6 inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {value.icon}
              </div>
              
              {/* Content */}
              <h3 className={`text-2xl font-bold ${value.textColor} mb-4 group-hover:translate-x-2 transition-transform duration-300`}>
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {value.desc}
              </p>
              
              {/* Decorative Element */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${value.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex w-12 h-12 bg-white rounded-xl items-center justify-center text-secondary mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="relative">
          {/* Main Vision Card */}
          <div className="bg-gradient-to-r from-secondary to-teal-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
            </div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              {/* Vision Icon */}
              <div className="inline-flex w-16 h-16 bg-white/10 rounded-2xl items-center justify-center text-white mb-6 backdrop-blur-sm border border-white/20">
                <Eye className="w-8 h-8" />
              </div>
              
              <h3 className="text-4xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">Vision</span>
              </h3>
              
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                To become the most trusted and forward-thinking financial partner empowering businesses 
                of all sizes through expert accounting, strategic advisory, and AI-driven innovation.
              </p>
              
              {/* CTA Button */}
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                <span>Join Our Vision</span>
                <Rocket className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-secondary rounded-full opacity-30 animate-pulse delay-1000"></div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-20 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        .shadow-custom {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05), 0 5px 15px rgba(0, 0, 0, 0.03);
        }
        
        .hover-lift {
          transition: all 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  )
}

export default Values