
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { Award, Code, Globe, Users, Briefcase, User, Projector, Megaphone } from "lucide-react";

const About = () => {
  const values = [{
    icon: <Code className="w-6 h-6" />,
    title: "Innovation",
    description: "We believe in the power of fresh ideas and novel approaches to solve complex problems."
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Collaboration",
    description: "Great things happen when diverse minds work together toward common goals."
  }, {
    icon: <Globe className="w-6 h-6" />,
    title: "Inclusivity",
    description: "Our hackathon welcomes participants of all backgrounds, skill levels, and experiences."
  }, {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    description: "We strive for high quality in organization, projects, and participant experience."
  }];
  return <Layout>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gradient">
          About Us
        </h1>
        
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }}>
            <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">Our Story</h2>
            <p className="text-white/80 mb-4">Founded in 2025, BPS Hackathon was born from a simple idea: to create a space where innovation, creativity, and technology come together to solve real-world problems.
What started as a local initiative at the Presidential School in Bukhara has quickly grown into a vibrant platform for young talents across Uzbekistan.</p>
            <p className="text-white/80">Our mission is to spark innovation by connecting diverse talents, equipping them with mentorship and resources, and challenging them to build solutions that matter.
We believe in the power of ideas — and in the next generation of changemakers.</p>
          </motion.div>
        </div>
        
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.4
      }} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-hackathon-cyan">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <motion.div key={value.title} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5 + index * 0.1
          }} className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
                <div className="bg-hackathon-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-hackathon-purple">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>)}
          </div>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8
      }} className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-hackathon-cyan">Meet the Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[{
            name: "Rajaboyev Doston",
            role: "Founder",
            image: "/team/Rajaboyev Doston.jpg",
            icon: <User className="w-6 h-6" />
          }, {
            name: "Ochilova Dilnura",
            role: "Co-Founder",
            image: "/team/OchilovaDilnura.jpg",
            icon: <User className="w-6 h-6" />
          }, {
            name: "Hakimov Baxromshox",
            role: "Marketing Manager",
            image: "/team/Hakimov Baxromshox.jpg",
            icon: <Briefcase className="w-6 h-6" />
          }, {
            name: "Urakov Ashur",
            role: "HR Management",
            image: "/team/Urakov Ashur.jpg",
            icon: <Users className="w-6 h-6" />
          }, {
            name: "To'xtayev Miroqil",
            role: "Project Manager",
            image: "/team/To'xtayev Miroqil.jpg",
            icon: <Projector className="w-6 h-6" />
          }, {
            name: "Toliboyev Shohjahon",
            role: "PR",
            image: "/team/Toliboyev Shohjahon.jpg",
            icon: <Megaphone className="w-6 h-6" />
          }, {
            name: "Numonov Samandar",
            role: "Web Developer",
            image: "/team/Numonov Samandar.jpg",
            icon: <Code className="w-6 h-6" />
          }].map((member, index) => <motion.div key={member.name} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.9 + index * 0.1
          }} className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden text-center">
                <img src={member.image} alt={member.name} className="w-full h-[250px] object-cover rounded-xl" />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-hackathon-purple text-lg">{member.role}</p>
                  <div className="mt-3">
                    <div className="bg-hackathon-purple/20 p-2 rounded-full w-10 h-10 flex items-center justify-center mx-auto">
                      {member.icon}
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </motion.div>
    </Layout>;
};
export default About;
