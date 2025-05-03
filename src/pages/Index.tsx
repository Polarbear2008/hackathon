import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import NotificationForm from '@/components/NotificationForm';
import StatCounter from '@/components/StatCounter';
import TrackCard from '@/components/TrackCard';
import ParticlesBackground from '@/components/ParticlesBackground';
import { 
  Calendar, 
  Brain, 
  GraduationCap, 
  Building, 
  DollarSign, 
  Users, 
  Award, 
  Star, 
  Rocket, 
  Bell,
  ArrowDown
} from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const registrationOpenDate = new Date('2025-05-10T00:00:00');
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const tracks = [
    {
      title: 'AI & ML',
      icon: <Brain size={24} />,
      description: 'Build advanced AI solutions for real-world problems.',
      detailedDescription: 'Develop cutting-edge AI applications that can address pressing challenges in healthcare, education, or business.',
      requirements: ['Knowledge of machine learning basics', 'Experience with Python', 'Understanding of data structures']
    },
    {
      title: 'EdTech',
      icon: <GraduationCap size={24} />,
      description: 'Revolutionize education with innovative technologies.',
      detailedDescription: 'Create solutions that make learning more accessible, engaging and effective for students of all ages.',
      requirements: ['Passion for education', 'UI/UX knowledge', 'User research skills']
    },
    {
      title: 'FinTech',
      icon: <DollarSign size={24} />,
      description: 'Create solutions for the future of finance.',
      detailedDescription: 'Build financial tools that improve access to banking, simplify payments, or help users manage their finances better.',
      requirements: ['Understanding of financial systems', 'Security knowledge', 'API experience']
    },
    {
      title: 'Tourism',
      icon: <Building size={24} />,
      description: 'Enhance travel experiences with technology.',
      detailedDescription: 'Develop applications that help tourists discover local attractions, connect with locals, or navigate unfamiliar places.',
      requirements: ['Geolocation experience', 'Interest in tourism', 'Mobile app development']
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const hero = document.querySelector('.hero-section');
      const overlay = document.querySelector('.hero-overlay');
      
      if (hero && overlay) {
        hero.setAttribute('style', `transform: translateY(${scrollValue * 0.3}px)`);
        overlay.setAttribute('style', `opacity: ${0.6 + scrollValue * 0.0003}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Delayed loading animation for smoother initial experience
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById('content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-hackathon-navy/95 to-black text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/public/hackathon-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      
      <ParticlesBackground />
      
      <Navbar />
      
      <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 hero-section">
          <div className="absolute inset-0 bg-hackathon-purple/20 mix-blend-color"></div>
        </div>
        <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/80 via-hackathon-navy/80 to-black/90 z-10"></div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <motion.div 
              initial="hidden" 
              animate={isLoaded ? "visible" : "hidden"}
              custom={1} 
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <motion.span 
                  className="gradient-text inline-block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >BPS Hackathon Season 2</motion.span> is Coming!
              </h1>
            </motion.div>
            
            <motion.div 
              initial="hidden" 
              animate={isLoaded ? "visible" : "hidden"}
              custom={2} 
              variants={fadeIn}
            >
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                Uzbekistan's biggest startup challenge returns this June. Get ready to innovate!
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden" 
              animate={isLoaded ? "visible" : "hidden"}
              custom={3} 
              variants={fadeIn}
            >
              <p className="text-md md:text-lg text-white/70 mb-8">
                June 15–17, 2025 | Registration Opens: May 10, 2025
              </p>
            </motion.div>
            
            <motion.div 
              className="mb-8"
              initial="hidden" 
              animate={isLoaded ? "visible" : "hidden"}
              custom={4} 
              variants={fadeIn}
            >
              <h3 className="text-white/70 mb-3">Registration Opens In:</h3>
              <CountdownTimer targetDate={registrationOpenDate} className="justify-center" />
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial="hidden" 
              animate={isLoaded ? "visible" : "hidden"}
              custom={5} 
              variants={fadeIn}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button className="btn-gradient text-white px-6 py-6 text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-hackathon-purple/20">
                  Join Us
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10 px-6 py-6 text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-hackathon-purple/10">
                  View Season 1 Recap
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={scrollToContent}
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <ArrowDown className="text-white/70" />
              <p className="text-white/70 text-sm mt-2">Scroll Down</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <section id="content" className="py-20 bg-black/40 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-hackathon-purple to-transparent"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-hackathon-cyan">🚀</span> Season 1 at a Glance
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-hackathon-purple to-hackathon-cyan mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <StatCounter end={100} label="Participants" suffix="+" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <StatCounter end={8} label="Funded Teams" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <StatCounter end={6} label="Mentors" suffix="+" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <StatCounter end={6} label="Awards" suffix="M So'm" />
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-transform duration-300 shadow-lg shadow-hackathon-purple/10">
                <Link to="/season1">See Full Recap</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hackathon-navy/30 to-black/80 z-0"></div>
        <motion.div 
          className="absolute -top-10 -left-10 w-64 h-64 bg-hackathon-purple/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-10 -right-10 w-80 h-80 bg-hackathon-cyan/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <motion.span 
                className="gradient-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >Season 2 Tracks</motion.span>
            </h2>
            <motion.p 
              className="text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Choose your track and develop innovative solutions to real-world challenges.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <TrackCard 
                  title={track.title}
                  icon={track.icon}
                  description={track.description}
                  detailedDescription={track.detailedDescription}
                  requirements={track.requirements}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="card-gradient p-8 rounded-xl mt-12 max-w-3xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            animate="animate"
            variants={pulseAnimation}
          >
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-hackathon-purple/30 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            ></motion.div>
            <div className="text-center mb-6 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Special Wildcard Track</h3>
              <p className="text-white/70">
                Build solutions to tackle Uzbekistan's biggest challenge: Unemployment
              </p>
            </div>
            <div className="flex justify-center relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="btn-gradient text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-hackathon-purple/20">Learn More</Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-hackathon-navy/30 backdrop-blur-sm relative overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-0 w-64 h-64 bg-hackathon-magenta/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-0 w-72 h-72 bg-hackathon-cyan/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.span 
                  className="gradient-text"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >Why Join Hackathon</motion.span> Season 2?
              </motion.h2>
              
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="mr-4 p-2 bg-hackathon-purple/20 rounded-lg text-hackathon-purple"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(155, 89, 182, 0.3)"  
                    }}
                  >
                    <Users size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-hackathon-purple transition-colors duration-300">Community & Mentorship</h3>
                    <p className="text-white/70">Connect with like-minded innovators and learn from industry experts who will guide your development.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="mr-4 p-2 bg-hackathon-purple/20 rounded-lg text-hackathon-purple"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(155, 89, 182, 0.3)"  
                    }}
                  >
                    <Star size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-hackathon-purple transition-colors duration-300">Real-world Challenges</h3>
                    <p className="text-white/70">Work on solutions for actual problems faced by businesses and communities across Uzbekistan.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="mr-4 p-2 bg-hackathon-purple/20 rounded-lg text-hackathon-purple"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(155, 89, 182, 0.3)"  
                    }}
                  >
                    <Award size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-hackathon-purple transition-colors duration-300">Amazing Prizes</h3>
                    <p className="text-white/70">Compete for substantial funding, mentorship opportunities, and a chance to showcase your work to investors.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="mr-4 p-2 bg-hackathon-purple/20 rounded-lg text-hackathon-purple"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(155, 89, 182, 0.3)"  
                    }}
                  >
                    <Rocket size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-hackathon-purple transition-colors duration-300">Launch Your Career</h3>
                    <p className="text-white/70">Get noticed by top companies with our new Hack-to-Hire program and dedicated job fair for participants.</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button asChild className="btn-gradient text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-hackathon-purple/20">
                  <Link to="/season2">Learn More About Season 2</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative aspect-video w-full rounded-xl overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/public/video/video.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Season 1 Wrap Up</h3>
                  <p className="text-white/80 mb-4">
                    Relive the highlights of Hackathon Season 1, featuring innovative projects, 
                    expert mentorship, and the journey of our talented participants.
                  </p>
                  <Button asChild variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-transform duration-300 shadow-lg shadow-hackathon-purple/10">
                    <Link to="/season1">View Season 1</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
