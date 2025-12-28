import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Menu, 
  X, 
  CheckCircle, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Users,
  FileText,
  Calculator,
  Briefcase,
  Moon,
  Sun
} from 'lucide-react';

// --- Helper Functions ---

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleWhatsAppClick = (msg: string) => {
  const phone = "5491122540279";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
};

// --- Components ---

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Sobre mí', id: 'about' },
    { name: 'Logros', id: 'achievements' },
    { name: 'Servicios', id: 'services' },
    { name: 'Reseñas', id: 'reviews' },
    { name: 'Contacto', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => scrollToSection('home')} className="text-2xl font-light tracking-tight text-slate-900 dark:text-white">
          Cdor. <span className="font-semibold">Gómez</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-slate-800 dark:text-slate-200"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-slate-800 dark:text-slate-200" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg py-4 px-6 flex flex-col space-y-4 border-t dark:border-slate-800">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.id)}
              className="text-left text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium mb-2">
            Contador Público Nacional
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            Claridad financiera para <br/>
            <span className="text-slate-500 dark:text-slate-400">tu crecimiento.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Soluciones contables integrales diseñadas para emprendedores y empresas que buscan optimizar sus recursos y cumplir con tranquilidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => handleWhatsAppClick("Hola, quiero agendar una consulta.")}
              className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-200 dark:shadow-none"
            >
              Agendar Consulta
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="px-8 py-3 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Ver Servicios
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border-8 border-white dark:border-slate-900 shadow-xl transition-colors duration-300">
             <img 
               src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Contador Profesional" 
               className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Sobre Mí</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
          Soy un Contador Público con más de 10 años de experiencia ayudando a pequeñas y medianas empresas a navegar el complejo sistema tributario argentino. Mi enfoque no es solo liquidar impuestos, sino ser un socio estratégico que te ayude a entender tus números para tomar mejores decisiones. Creo en la transparencia, la proactividad y en brindar un servicio personalizado y humano.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Linkedin size={28} /></a>
          <a href="#" className="text-slate-400 hover:text-pink-600 transition-colors"><Instagram size={28} /></a>
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  const stats = [
    { number: "+10", label: "Años de Experiencia", icon: <Briefcase size={24} /> },
    { number: "+200", label: "Clientes Satisfechos", icon: <Users size={24} /> },
    { number: "100%", label: "Compromiso", icon: <ShieldCheck size={24} /> },
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center hover:-translate-y-1 transition-all duration-300">
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-800 dark:text-slate-200 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{stat.number}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Asesoría Impositiva",
      description: "Liquidación de IVA, Ganancias, Ingresos Brutos y Monotributo. Planificación fiscal inteligente.",
      icon: <Calculator size={32} />,
      whatsappMsg: "Hola, me interesa saber más sobre la Asesoría Impositiva."
    },
    {
      title: "Liquidación de Sueldos",
      description: "Gestión integral de nómina, cargas sociales, altas y bajas de empleados (F931).",
      icon: <Users size={32} />,
      whatsappMsg: "Hola, necesito información sobre Liquidación de Sueldos."
    },
    {
      title: "Constitución de Sociedades",
      description: "Asesoramiento y gestión para la creación de SAS, SRL y SA. Trámites en IGJ.",
      icon: <FileText size={32} />,
      whatsappMsg: "Hola, quiero asesoramiento para constituir una sociedad."
    },
    {
      title: "Consultoría Financiera",
      description: "Análisis de rentabilidad, cash flow y proyecciones para tu negocio.",
      icon: <TrendingUp size={32} />,
      whatsappMsg: "Hola, me gustaría una Consultoría Financiera para mi negocio."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Mis Servicios</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Soluciones adaptadas a cada etapa de tu negocio, con el respaldo profesional que necesitás.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none border border-slate-100 dark:border-slate-700 transition-all duration-300">
              <div className="mb-6 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{service.description}</p>
              <button 
                onClick={() => handleWhatsAppClick(service.whatsappMsg)}
                className="inline-flex items-center text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Consultar por WhatsApp <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const testimonials = [
    {
      name: "Mariana Costa",
      role: "Dueña de Pyme",
      text: "Excelente profesional. Desde que trabaja con nosotros, ordenó todos nuestros números y nos dio mucha tranquilidad fiscal."
    },
    {
      name: "Pablo Ruiz",
      role: "Emprendedor",
      text: "Muy atento y siempre dispuesto a explicar. Lo recomiendo totalmente para quienes recién empiezan."
    },
    {
      name: "Estudio Arquitectura A+B",
      role: "Cliente Corporativo",
      text: "Un servicio impecable. La liquidación de sueldos siempre en tiempo y forma. Un gran aliado estratégico."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Lo que dicen mis clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 rounded-full bg-yellow-400"></div>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 italic mb-6">"{review.text}"</p>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">{review.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SubscriptionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus('submitting');
    
    // Simulating an API call
    setTimeout(() => {
      console.log('Suscripción guardada:', { name, email });
      setStatus('success');
      setName('');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 bg-slate-900 dark:bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-slate-800 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Mantente informado</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Suscribite a mi newsletter para recibir novedades impositivas, recordatorios de vencimientos y consejos para tu economía.
              </p>
              <div className="flex items-center text-sm text-slate-400">
                <ShieldCheck size={16} className="mr-2 text-green-400" />
                <span>No enviamos spam. Tus datos están seguros.</span>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              {status === 'success' ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 text-green-400 rounded-full mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">¡Suscripción exitosa!</h4>
                  <p className="text-slate-300">Gracias por unirte a nuestra comunidad.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-slate-400 hover:text-white underline"
                  >
                    Suscribir otro correo
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 px-6 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-200 focus:ring-4 focus:ring-slate-500/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Procesando...
                      </span>
                    ) : (
                      'Suscribirse'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Contacto</h2>
            <p className="text-slate-500 dark:text-slate-400">¿Tenés dudas? Escribime y coordinamos una reunión.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-800 dark:text-slate-200 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400">consultas@estudiogomez.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-800 dark:text-slate-200 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Teléfono</h4>
                  <p className="text-slate-600 dark:text-slate-400">+54 9 11 2254-0279</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-800 dark:text-slate-200 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Oficina</h4>
                  <p className="text-slate-600 dark:text-slate-400">Av. Corrientes 1234, CABA</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Atención con cita previa</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600 placeholder-slate-400 dark:placeholder-slate-500" />
                <input type="text" placeholder="Apellido" className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600 placeholder-slate-400 dark:placeholder-slate-500" />
              </div>
              <input type="email" placeholder="Email" className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600 placeholder-slate-400 dark:placeholder-slate-500" />
              <textarea rows={4} placeholder="Mensaje" className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-600 placeholder-slate-400 dark:placeholder-slate-500"></textarea>
              <button className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-semibold text-white">Cdor. Gómez</span>
            <p className="text-sm mt-2">Soluciones contables para el mundo real.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Estudio Contable Gómez. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  const phone = "5491122540279";
  const message = "Hola, me gustaría hacer una consulta.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <svg 
        viewBox="0 0 24 24" 
        width="32" 
        height="32" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="fill-current"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </a>
  );
};

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar isDark={theme === 'dark'} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Achievements />
      <Services />
      <Reviews />
      <SubscriptionForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}