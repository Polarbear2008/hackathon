
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Cpu, Globe, HeartPulse, Trophy, Users, Lightbulb, CheckCircle2 } from "lucide-react";
import TrackCard from "../components/TrackCard";

const Tracks = () => {
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
          Competition Tracks
        </h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div 
            className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">Track Overview</h2>
            <p className="text-white/80 mb-4">
              Our hackathon features multiple tracks designed to channel innovation in different domains. 
              Each track has specific goals, requirements, and judging criteria. Choose the one that best 
              aligns with your team's skills and interests, or challenge yourselves in a new area!
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="tracks" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-hackathon-navy/30 border border-white/10 rounded-xl">
            <TabsTrigger value="tracks" className="data-[state=active]:bg-hackathon-purple/20 data-[state=active]:text-hackathon-cyan">Track Details</TabsTrigger>
            <TabsTrigger value="judging" className="data-[state=active]:bg-hackathon-purple/20 data-[state=active]:text-hackathon-cyan">Judging Criteria</TabsTrigger>
            <TabsTrigger value="prizes" className="data-[state=active]:bg-hackathon-purple/20 data-[state=active]:text-hackathon-cyan">Prizes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tracks">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {tracks.map((track, index) => (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
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
          </TabsContent>
          
          <TabsContent value="judging">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6 mt-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-hackathon-purple">Judging Criteria</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-hackathon-navy/50 p-5 rounded-xl flex items-start gap-4">
                  <div className="bg-hackathon-purple/20 p-2 rounded-full">
                    <Lightbulb className="w-6 h-6 text-hackathon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Innovation & Creativity</h3>
                    <p className="text-white/70">How original and creative is the project? Does it solve a problem in a new or unique way?</p>
                  </div>
                </div>
                
                <div className="bg-hackathon-navy/50 p-5 rounded-xl flex items-start gap-4">
                  <div className="bg-hackathon-purple/20 p-2 rounded-full">
                    <Code className="w-6 h-6 text-hackathon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Technical Complexity</h3>
                    <p className="text-white/70">How technically sophisticated is the implementation? Was the team ambitious with their technical goals?</p>
                  </div>
                </div>
                
                <div className="bg-hackathon-navy/50 p-5 rounded-xl flex items-start gap-4">
                  <div className="bg-hackathon-purple/20 p-2 rounded-full">
                    <Users className="w-6 h-6 text-hackathon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">User Experience</h3>
                    <p className="text-white/70">Is the project intuitive and easy to use? Does it provide a positive experience for the end user?</p>
                  </div>
                </div>
                
                <div className="bg-hackathon-navy/50 p-5 rounded-xl flex items-start gap-4">
                  <div className="bg-hackathon-purple/20 p-2 rounded-full">
                    <CheckCircle2 className="w-6 h-6 text-hackathon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">Completeness</h3>
                    <p className="text-white/70">How finished is the project? Does it work as intended? Are there significant bugs or missing features?</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-hackathon-cyan">Scoring System</h3>
                <p className="text-white/80 mb-4">
                  Each criterion is scored on a scale of 1-10, with 10 being the highest. The scores from all judges 
                  are averaged to determine the final score in each category. The total score determines the winners 
                  within each track, with additional consideration given to track-specific requirements.
                </p>
              </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="prizes">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6 mt-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-hackathon-purple">Prizes & Awards</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-yellow-400/20 to-yellow-600/20 border border-yellow-500/30 p-5 rounded-xl text-center">
                  <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">1st Place</h3>
                  <div className="bg-hackathon-navy/50 rounded-lg p-3">
                    <p className="text-yellow-400 font-bold text-2xl mb-1">$10,000</p>
                    <p className="text-white/70 text-sm">+ Industry mentorship</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-b from-gray-400/20 to-gray-600/20 border border-gray-400/30 p-5 rounded-xl text-center">
                  <Trophy className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">2nd Place</h3>
                  <div className="bg-hackathon-navy/50 rounded-lg p-3">
                    <p className="text-gray-300 font-bold text-2xl mb-1">$5,000</p>
                    <p className="text-white/70 text-sm">+ Cloud credits</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-b from-amber-700/20 to-amber-900/20 border border-amber-700/30 p-5 rounded-xl text-center">
                  <Trophy className="w-8 h-8 text-amber-700 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">3rd Place</h3>
                  <div className="bg-hackathon-navy/50 rounded-lg p-3">
                    <p className="text-amber-700 font-bold text-2xl mb-1">$2,500</p>
                    <p className="text-white/70 text-sm">+ Product licenses</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-hackathon-cyan">Special Awards</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-hackathon-navy/50 p-4 rounded-lg flex items-center gap-3">
                    <div className="bg-hackathon-purple/20 p-2 rounded-full flex-shrink-0">
                      <Lightbulb className="w-5 h-5 text-hackathon-cyan" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Most Innovative Solution</h4>
                      <p className="text-white/70 text-sm">$1,500 + Innovation Award</p>
                    </div>
                  </div>
                  
                  <div className="bg-hackathon-navy/50 p-4 rounded-lg flex items-center gap-3">
                    <div className="bg-hackathon-purple/20 p-2 rounded-full flex-shrink-0">
                      <Users className="w-5 h-5 text-hackathon-cyan" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Best User Experience</h4>
                      <p className="text-white/70 text-sm">$1,000 + UX Design Consultation</p>
                    </div>
                  </div>
                  
                  <div className="bg-hackathon-navy/50 p-4 rounded-lg flex items-center gap-3">
                    <div className="bg-hackathon-purple/20 p-2 rounded-full flex-shrink-0">
                      <Code className="w-5 h-5 text-hackathon-cyan" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Technical Excellence</h4>
                      <p className="text-white/70 text-sm">$1,000 + Advanced Tech Licenses</p>
                    </div>
                  </div>
                  
                  <div className="bg-hackathon-navy/50 p-4 rounded-lg flex items-center gap-3">
                    <div className="bg-hackathon-purple/20 p-2 rounded-full flex-shrink-0">
                      <Globe className="w-5 h-5 text-hackathon-cyan" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Social Impact Award</h4>
                      <p className="text-white/70 text-sm">$1,000 + Nonprofit Partnership</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </Layout>
  );
};

export default Tracks;
