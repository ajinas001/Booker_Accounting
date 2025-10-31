 'use client'
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail, MapPin, CheckCircle, TrendingUp, Shield, Users, Briefcase, FileText, Calculator, BarChart3, Building2, ShoppingCart, Laptop, Truck, Heart, GraduationCap, Factory } from 'lucide-react';
import { useEffect, useState } from 'react';

const BookerAccountingWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Audit & Assurance",
      description: "Comprehensive audit services including external, internal, real estate, inventory, and forensic audits.",
      subServices: ["External Audit", "Internal Audit", "Real Estate Audit", "Inventory Audit", "Forensic Audit", "Due Diligence Support"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Taxation",
      description: "Expert corporate tax advisory, VAT services, and comprehensive tax compliance solutions.",
      subServices: ["Corporate Tax", "VAT Services", "Tax Agent Service", "Transfer Pricing Advisory"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Accounting & Bookkeeping",
      description: "Professional bookkeeping, cloud accounting, and financial reporting services.",
      subServices: ["Bookkeeping Services", "Cloud Accounting", "Financial Reporting", "Audit Preparation"]
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Advisory",
      description: "Strategic guidance including CFO services, business valuation, and M&A advisory.",
      subServices: ["CFO Service", "Business Valuation", "M&A Advisory", "Feasibility Studies"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Business Support",
      description: "Company formation, liquidation, ICV consultancy, and PRO services.",
      subServices: ["Company Formation", "Freezone Setup", "Liquidation", "ICV Consultancy"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AML Compliance",
      description: "Anti-money laundering services including risk assessment and compliance program design.",
      subServices: ["AML Risk Assessment", "Compliance Program", "Transaction Monitoring", "KYC Services"]
    }
  ];

  const industries = [
    { icon: <Factory className="w-6 h-6" />, name: "Oil & Gas", desc: "Regulatory compliance and tax planning for energy sector" },
    { icon: <Building2 className="w-6 h-6" />, name: "Construction & Real Estate", desc: "Project accounting to VAT compliance" },
    { icon: <ShoppingCart className="w-6 h-6" />, name: "Retail & E-commerce", desc: "Inventory control and sales tax solutions" },
    { icon: <Laptop className="w-6 h-6" />, name: "IT & Technology", desc: "Support for fast-growing tech companies" },
    { icon: <Briefcase className="w-6 h-6" />, name: "Professional Services", desc: "Advisory for consultants and agencies" },
    { icon: <Truck className="w-6 h-6" />, name: "Trading & Distribution", desc: "Customs and VAT support" },
    { icon: <Heart className="w-6 h-6" />, name: "Healthcare & Wellness", desc: "Financial planning for clinics" },
    { icon: <GraduationCap className="w-6 h-6" />, name: "Education & Training", desc: "Accounting for training institutes" }
  ];

  const values = [
    { title: "Brilliance", desc: "Delivering excellence through insightful, proactive accounting and advisory services.", icon: <TrendingUp /> },
    { title: "Balance", desc: "Ensuring compliance and financial stability so you can scale with confidence.", icon: <Shield /> },
    { title: "Build", desc: "Empowering businesses to grow stronger with dependable bookkeeping and expert guidance.", icon: <Users /> }
  ];

  const faqs = [
    {
      q: "Why choose an accounting partner instead of hiring in-house?",
      a: "You get an entire team of qualified professionals including tax experts, auditors, bookkeepers, and compliance advisors for less than the cost of one in-house hire."
    },
    {
      q: "Can you help businesses behind on accounting or tax filings?",
      a: "Absolutely. We regularly assist businesses with backlogs, reviewing your position and working swiftly to bring everything up to date."
    },
    {
      q: "Do you assist with corporate tax registration?",
      a: "Yes. We help you register for UAE Corporate Tax, assess obligations, and develop tax-efficient structures to reduce liability."
    },
    {
      q: "Who must register for Corporate Tax in the UAE?",
      a: "All businesses operating in UAE Mainland and Free Zone must register with the FTA, regardless of income."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900 shadow-lg' : 'bg-slate-900/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BA</span>
              </div>
              <div>
                <div className="text-white font-bold text-xl">Booker Accounting</div>
                <div className="text-cyan-400 text-xs">Company</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-cyan-400 transition">Home</a>
              <a href="#services" className="text-white hover:text-cyan-400 transition">Services</a>
              <a href="#industries" className="text-white hover:text-cyan-400 transition">Industries</a>
              <a href="#about" className="text-white hover:text-cyan-400 transition">About</a>
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">Contact Us</a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" className="block text-white hover:text-cyan-400 transition py-2">Home</a>
              <a href="#services" className="block text-white hover:text-cyan-400 transition py-2">Services</a>
              <a href="#industries" className="block text-white hover:text-cyan-400 transition py-2">Industries</a>
              <a href="#about" className="block text-white hover:text-cyan-400 transition py-2">About</a>
              <a href="#contact" className="block bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-6 py-3 rounded-lg text-center">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm mb-6">
                Trusted Financial Partner in UAE
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Expert Accounting & Tax Solutions for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400"> Dubai Businesses</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive accounting, tax, and advisory services tailored for startups, SMEs, and established enterprises in the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#services" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition flex items-center justify-center">
                  Our Services
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Years Experience", value: "15+" },
                    { label: "Happy Clients", value: "500+" },
                    { label: "Industries Served", value: "8+" },
                    { label: "Success Rate", value: "99%" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Booker Accounting?</h2>
            <p className="text-xl text-gray-600">Three compelling reasons to partner with us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Owner-Managed Business Focus</h3>
              <p className="text-gray-600">
                Purpose-built to serve privately owned companies and entrepreneurs in Dubai and the UAE, providing hands-on support to increase profitability and protect wealth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Proven Local Expertise</h3>
              <p className="text-gray-600">
                Deep local knowledge of UAE business regulations and compliance, treating every client's business as our own with dependable, result-driven services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Customized Solutions</h3>
              <p className="text-gray-600">
                Direct partner-level attention with tailored accounting, bookkeeping, and tax strategies designed specifically for your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600">End-to-end financial solutions for your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-gray-200 hover:border-cyan-500 hover:shadow-xl transition cursor-pointer"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="text-cyan-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {activeService === index && (
                  <ul className="space-y-2">
                    {service.subServices.map((sub, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300">Specialized expertise across diverse sectors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition">
                <div className="text-cyan-400 mb-3">{industry.icon}</div>
                <h3 className="text-lg font-bold mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-400">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="inline-flex w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-full items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-cyan-500 to-teal-600 p-12 rounded-2xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-xl max-w-3xl mx-auto">
              To become the most trusted and forward-thinking financial partner empowering businesses of all sizes through expert accounting, strategic advisory, and AI-driven innovation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to transform your business finances? Contact us today for a consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <div className="text-gray-300">R364 Al Wasl Building, Unique World Business Center, Office 12 (3rd floor), Opp. Civil Defence, Al Karama, Dubai</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+971567678156" className="text-gray-300 hover:text-cyan-400 transition">+971 56 767 8156</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@bookeraccounting.com" className="text-gray-300 hover:text-cyan-400 transition">info@bookeraccounting.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition" placeholder="Your name" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition" placeholder="your@email.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-cyan-400 transition">
                    <option value="" className="bg-slate-800">Select a service</option>
                    <option value="audit" className="bg-slate-800">Audit & Assurance</option>
                    <option value="tax" className="bg-slate-800">Taxation</option>
                    <option value="accounting" className="bg-slate-800">Accounting & Bookkeeping</option>
                    <option value="advisory" className="bg-slate-800">Business Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition" placeholder="Tell us about your needs..."></textarea>
                </div>

                <button onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you for your message! We will contact you soon.');
                }} className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">BA</span>
                </div>
                <div>
                  <div className="text-white font-bold">Booker Accounting</div>
                  <div className="text-cyan-400 text-xs">Company</div>
                </div>
              </div>
              <p className="text-sm">Your trusted financial partner in the UAE, delivering excellence through expert accounting, tax, and advisory services.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-cyan-400 transition">Audit & Assurance</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Taxation</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Bookkeeping</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition">Business Advisory</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-cyan-400 transition">About Us</a></li>
                <li><a href="#industries" className="hover:text-cyan-400 transition">Industries</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>+971 56 767 8156</li>
                <li>info@bookeraccounting.com</li>
                <li className="text-xs">Al Karama, Dubai, UAE</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Booker Accounting Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookerAccountingWebsite;