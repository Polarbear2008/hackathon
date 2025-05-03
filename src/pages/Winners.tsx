
import { motion } from "framer-motion";
import { Layout } from "../components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";

const Winners = () => {
  const winnersList = [{
    place: "1st Place",
    team: "The Code Father",
    project: "Smart TV Project",
    description: "Innovative Smart TV solution with advanced features",
    prize: "Smart TV + 5 Smartwatches",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />
  }, {
    place: "2nd Place",
    team: "ReGreen",
    project: "Tablet Project",
    description: "Sustainable technology solution with environmental impact",
    prize: "Tablet + 5 Headphones",
    icon: <Medal className="w-8 h-8 text-gray-400" />
  }, {
    place: "3rd Place",
    team: "Blazion",
    project: "Coffee Machine Project",
    description: "Innovative coffee machine with smart features",
    prize: "Coffee Machine + 5 Power Banks",
    icon: <Medal className="w-8 h-8 text-amber-700" />
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
          Season 1 Winners
        </h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6 mb-8" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }}>
            <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">Celebrating Excellence</h2>
            <p className="text-white/80 mb-4">After 2 days of intense coding, innovative thinking, and remarkable collaboration, we are proud to present the winners of our Season 1 Hackathon. These teams stood out with their creativity, technical prowess, and impactful solutions.</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {winnersList.map((winner, index) => <motion.div key={winner.place} initial={{
          opacity: 0,
          x: index % 2 === 0 ? -20 : 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.3 + index * 0.1
        }}>
              <Card className="bg-hackathon-navy/30 backdrop-blur-md border border-white/10 overflow-hidden hover:shadow-lg hover:shadow-hackathon-purple/20 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {winner.icon}
                  <div>
                    <CardTitle className="text-hackathon-cyan text-xl">{winner.place}</CardTitle>
                    <p className="text-white font-bold">{winner.team}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-hackathon-purple font-medium mb-2">{winner.project}</h3>
                  <p className="text-white/80 mb-4">{winner.description}</p>
                  <div className="bg-hackathon-purple/20 text-hackathon-purple rounded-md px-3 py-2 font-bold text-center">
                    Prize: {winner.prize}
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>

        <motion.div className="max-w-4xl mx-auto mt-12 bg-hackathon-navy/30 backdrop-blur-md border border-white/10 rounded-xl p-6" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.7
      }}>
          <h2 className="text-2xl font-bold mb-4 text-hackathon-purple">Honorable Mentions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-hackathon-navy/50 p-4 rounded-lg">
              <h3 className="text-hackathon-cyan font-medium">Best MVP</h3>
              <p className="text-white/70 text-sm">An outstanding prototype with significant potential</p>
            </div>
            <div className="bg-hackathon-navy/50 p-4 rounded-lg">
              <h3 className="text-hackathon-cyan font-medium">Best Presentation</h3>
              <p className="text-white/70 text-sm">Exceptional communication of project vision and impact</p>
            </div>
            <div className="bg-hackathon-navy/50 p-4 rounded-lg">
              <h3 className="text-hackathon-cyan font-medium">Free Startup Course</h3>
              <p className="text-white/70 text-sm">Access to professional startup development program</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>;
};
export default Winners;

