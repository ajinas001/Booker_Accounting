import React, { useState } from 'react';
import { Shield, Calculator, FileText, Briefcase, Building2, BarChart3, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Shield,
      title: "Audit & Assurance",
      shortDesc: "Strategic audits and IFRS advisory",
      description: "Strategic audits, assurance, and IFRS advisory services to unlock value, strengthen governance, and build stakeholder confidence.",
      subServices: ["External Audit", "Internal Audit", "Real Estate Audit", "Inventory Audit", "Forensic Audit", "Due Diligence Support"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop",
      color: "from-cyan-500 to-secondary"
    },
    {
      icon: Calculator,
      title: "Taxation",
      shortDesc: "Corporate tax and VAT compliance",
      description: "Expert corporate tax, VAT compliance, and transfer pricing advisory to minimize risk and support sustainable business growth in the UAE.",
      subServices: ["Corporate Tax Compliance", "Value Added Tax (VAT) Services", "Transfer Pricing Advisory", "Indirect Tax Strategy"],
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=800&fit=crop",
      color: "from-cyan-500 to-secondary"
    },
    {
      icon: FileText,
      title: "Accounting & Bookkeeping",
      shortDesc: "Cloud-based accounting solutions",
      description: "Full-scope, cloud-based accounting services to bring clarity, control, and confidence to your financial operations.",
      subServices: ["Professional Bookkeeping", "Financial Reporting (IFRS)", "Cloud Accounting Solutions (Zoho/Xero)", "Audit Preparation Support"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      color: "from-cyan-500 to-secondary"
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      shortDesc: "Strategic growth guidance",
      description: "Strategic guidance on growth, valuation, M&A, and efficiency, enhancing internal capabilities with executive-level insight.",
      subServices: ["Outsourced CFO Services (Virtual CFO)", "Business Valuation", "Mergers & Acquisitions (M&A) Advisory", "Feasibility Studies in UAE"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
      color: "from-cyan-500 to-secondary"
    },
    {
      icon: Building2,
      title: "Business Support",
      shortDesc: "Formation and compliance",
      description: "Company formation, liquidation, ICV consultancy, and PRO services to support your business setup and operations in the UAE.",
      subServices: ["Company Formation", "Freezone Setup", "Liquidation", "ICV Consultancy"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
      color: "from-cyan-500 to-secondary"
    },
    {
      icon: BarChart3,
      title: "AML Compliance",
      shortDesc: "Anti-money laundering services",
      description: "Anti-money laundering services including risk assessment and compliance program design to ensure regulatory adherence.",
      subServices: ["AML Risk Assessment", "Compliance Program", "Transaction Monitoring", "KYC Services"],
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&h=800&fit=crop",
      color: "from-cyan-500 to-secondary"
    }
  ];

  const activeData = services[activeService];
  const Icon = activeData.icon;

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-700/50 backdrop-blur-sm rounded-full border border-emerald-500/30 mb-6">
            <span className="text-sm font-semibold text-white uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            End-to-end financial solutions tailored to your business needs
          </p>
        </div>

        {/* Service Navigation Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`
                  group relative p-6 rounded-xl transition-all duration-300
                  ${activeService === index 
                    ? 'bg-gradient-to-br ' + service.color + '  scale-105' 
                    : 'bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700'
                  }
                `}
              >
                <div className={`
                  w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center transition-all
                  ${activeService === index 
                    ? 'bg-white/20' 
                    : 'bg-slate-700 group-hover:bg-slate-600'
                  }
                `}>
                  <ServiceIcon className={`w-6 h-6 ${activeService === index ? 'text-white' : 'text-slate-300'}`} />
                </div>
                <h3 className={`text-sm font-semibold text-center ${activeService === index ? 'text-white' : 'text-slate-300'}`}>
                  {service.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image Section - Stacked Cards Layout */}
          <div className="relative">
            {/* Background decorative card */}
            <div className={`absolute top-4 left-4 right-4 h-96 bg-gradient-to-br ${activeData.color} rounded-2xl opacity-20 blur-xl`}></div>
            
            {/* Main Card Stack */}
            <div className="relative space-y-4">
              {/* Primary Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={activeData.image}
                  alt={activeData.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent"></div>
                
                {/* Floating Badge */}
                <div className={`absolute top-4 right-4 px-4 py-2 bg-gradient-to-br ${activeData.color} rounded-full backdrop-blur-sm`}>
                  <span className="text-white text-sm font-semibold">Featured Service</span>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1">{activeData.title}</h4>
                      <p className="text-white/80 text-sm">{activeData.shortDesc}</p>
                    </div>
                    <div className={`w-14 h-14 bg-gradient-to-br ${activeData.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Info Cards */}
              <div className="grid grid-cols-3 gap-4">
                {/* Stat Card 1 */}
                <div className="relative rounded-xl bg-slate-800/80 backdrop-blur-sm p-4 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                  <div className="text-2xl font-bold text-white mb-1">150+</div>
                  <div className="text-xs text-slate-400">Clients</div>
                </div>

                {/* Stat Card 2 */}
                <div className={`relative rounded-xl bg-gradient-to-br ${activeData.color} p-4 shadow-lg`}>
                  <div className="text-2xl font-bold text-white mb-1">15+</div>
                  <div className="text-xs text-white/90">Years</div>
                </div>

                {/* Stat Card 3 */}
                <div className="relative rounded-xl bg-slate-800/80 backdrop-blur-sm p-4 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                  <div className="text-2xl font-bold text-white mb-1">98%</div>
                  <div className="text-xs text-slate-400">Success</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <div className="inline-block px-3 py-1 bg-slate-700/50 rounded-full text-sm text-emerald-400 mb-4">
                {activeData.shortDesc}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {activeData.title}
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                {activeData.description}
              </p>
            </div>

            {/* Sub Services List */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h4 className="text-sm font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Key Service Areas
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {activeData.subServices.map((sub, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 text-slate-300 group hover:text-white transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${activeData.color}`}></div>
                    <span className="text-sm">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className={`
                group inline-flex items-center gap-3 px-8 py-4 
                bg-gradient-to-r ${activeData.color} text-white font-semibold rounded-lg 
                shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105
              `}>
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-16 pt-12 border-t border-slate-700">
          <div className="text-center">
            <p className="text-slate-400 text-lg">
              Trusted by over <span className="text-emerald-400 font-bold">150+ businesses</span> across Dubai and the UAE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;