
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import TrackCard from "../components/TrackCard";
import { Code, Cpu, Globe, HeartPulse } from "lucide-react";

const Season2 = () => {
  const tracks = [
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      description: "Build innovative web applications using modern frameworks and technologies.",
      detailedDescription: "Use React, Angular, Vue, or any other modern framework to build a web application that solves a real-world problem.",
      requirements: ["Frontend and backend implementation", "Responsive design", "API integration", "User authentication"]
    },
    {
      title: "Artificial Intelligence",
      icon: <Cpu className="w-6 h-6" />,
      description: "Create AI solutions that address challenges in various domains.",
      detailedDescription: "Leverage machine learning, deep learning, or other AI techniques to build a solution that demonstrates innovation and practical application.",
      requirements: ["Model training and validation", "Data preprocessing", "Evaluation metrics", "Interactive demo"]
    },
    {
      title: "Health Tech",
      icon: <HeartPulse className="w-6 h-6" />,
      description: "Develop applications that improve healthcare delivery and accessibility.",
      detailedDescription: "Create solutions that address challenges in healthcare accessibility, patient monitoring, health education, or medical resource allocation.",
      requirements: ["Privacy compliance", "User-friendly interface", "Data visualization", "Impact assessment"]
    },
    {
      title: "Open Innovation",
      icon: <Code className="w-6 h-6" />,
      description: "A track for projects that don't fit into other categories but showcase creativity.",
      detailedDescription: "This track is for innovative projects that don't fit neatly into other categories. The sky's the limit - wow us with your creativity!",
      requirements: ["Clear problem statement", "Innovation factor", "Technical implementation", "Presentation quality"]
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
          Season 2 Overview
        </h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div 
            className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">About Season 2</h2>
            <p className="text-white/80 mb-4">
              Building on the success of our first season, Season 2 is set to be even more exciting and challenging. 
              We're bringing together talented developers, designers, and entrepreneurs from around the world to collaborate, 
              innovate, and build solutions for tomorrow's challenges.
            </p>
            <p className="text-white/80">
              With expanded prize pools, new tracks, and more mentorship opportunities, Season 2 offers 
              participants a platform to showcase their skills, learn from industry experts, and potentially 
              launch their ideas into the real world.
            </p>
          </motion.div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-center text-hackathon-cyan">Competition Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
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
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto mt-12 bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">Important Dates</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-hackathon-purple/20 text-hackathon-purple rounded-md px-3 py-1 font-bold mr-4 w-32 text-center">April 15, 2025</div>
              <div>
                <span className="font-medium text-white">Registration Opens</span>
                <p className="text-white/70 text-sm">Early bird registration begins with special benefits.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-hackathon-purple/20 text-hackathon-purple rounded-md px-3 py-1 font-bold mr-4 w-32 text-center">May 1, 2025</div>
              <div>
                <span className="font-medium text-white">Team Formation</span>
                <p className="text-white/70 text-sm">Find teammates and start collaborating.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-hackathon-purple/20 text-hackathon-purple rounded-md px-3 py-1 font-bold mr-4 w-32 text-center">May 20, 2025</div>
              <div>
                <span className="font-medium text-white">Hackathon Begins</span>
                <p className="text-white/70 text-sm">The 48-hour coding marathon kicks off.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-hackathon-purple/20 text-hackathon-purple rounded-md px-3 py-1 font-bold mr-4 w-32 text-center">May 22, 2025</div>
              <div>
                <span className="font-medium text-white">Project Submission</span>
                <p className="text-white/70 text-sm">Submit your projects by 11:59 PM.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-hackathon-purple/20 text-hackathon-purple rounded-md px-3 py-1 font-bold mr-4 w-32 text-center">May 30, 2025</div>
              <div>
                <span className="font-medium text-white">Winners Announced</span>
                <p className="text-white/70 text-sm">Final results and awards ceremony.</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Season2;
