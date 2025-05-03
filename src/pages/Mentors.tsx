import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { Github, Linkedin, Twitter } from "lucide-react";

const Mentors = () => {
  const mentors = [
    {
      name: "Muhammad Annas",
      role: "GMU MASE Hackathon Winner",
      company: "Duke of Edinburgh Silver Award",
      image: "/lovable-uploads/Muhammad Annas.jpg",
      bio: "GMU MASE Hackathon Winner with the Duke of Edinburgh Silver Award.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Firdavs Navro'zov",
      role: "Founder",
      company: "The Knowledge Academy International School",
      image: "/lovable-uploads/Firdavs Navro'zov.png",
      bio: "Founder of The Knowledge Academy international school and Bookhara cafe owner.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Zarnigor Bozorova",
      role: "Founder",
      company: "The Knowledge Academy International School",
      image: "/lovable-uploads/Zarnigor Bozorova.png",
      bio: "Founder of The Knowledge Academy international school and Bookhara cafe owner.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Abdurahmon Abdumominov",
      role: "Main Manager",
      company: "DOTS",
      image: "/lovable-uploads/Abdurahmon Abdumominov.JPG",
      bio: "Main manager at DOTS.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Firdavs G'faurjonov",
      role: "Regional Manager",
      company: "Start-up Garage",
      image: "/lovable-uploads/Firdavs G'faurjonov.png",
      bio: "Regional Manager at Start-up Garage.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Sanjar Nasilloyev",
      role: "Regional Manager",
      company: "Start-up Garage",
      image: "/lovable-uploads/Sanjar Nasilloyev.png",
      bio: "Regional Manager at Start-up Garage.",
      socials: { twitter: "#", linkedin: "#", github: "#" }
    }
  ];

  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-24 pb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient">
          Meet Our Mentors
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <motion.div 
            className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-white/80">
              Our mentors are industry experts who are passionate about sharing their knowledge and helping 
              hackathon participants succeed. They'll be available throughout the event to provide guidance, 
              answer questions, and help teams overcome challenges.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden h-[300px]">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                <div className="flex items-center text-hackathon-purple mb-2">
                  <span>{mentor.role}</span>
                  <span className="mx-2">•</span>
                  <span>{mentor.company}</span>
                </div>
                <p className="text-white/70 text-sm mb-4">{mentor.bio}</p>
                <div className="flex space-x-3">
                  <a href={mentor.socials.twitter} className="text-white/60 hover:text-hackathon-cyan transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href={mentor.socials.linkedin} className="text-white/60 hover:text-hackathon-cyan transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href={mentor.socials.github} className="text-white/60 hover:text-hackathon-cyan transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto mt-12 bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">Become a Mentor</h2>
          <p className="text-white/80 mb-6">
            Are you an industry expert who wants to give back to the community? Join our mentorship program 
            for the next hackathon season!
          </p>
          <button className="bg-hackathon-purple hover:bg-hackathon-cyan text-white px-6 py-2 rounded-md transition-colors">
            Apply to Mentor
          </button>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Mentors;
